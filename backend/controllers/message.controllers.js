const mongoose=require("mongoose")
const express=require("express")
const asyncHandler=require("../utils/asyncHandler")
const ApiResponse = require("../utils/ApiResponse")
const ApiError = require("../utils/ApiError")
const Conversation = require("../models/conversationSchema")
const Message = require("../models/messageSchema")
const { getReceiverSocketID, io } = require("../socket/socket")

const sendMessage=asyncHandler(async(req,res)=>{
    try {
        const {message}=req.body
        const {id:receiverId}=req.paramas
        const senderId=req.user?._id

        let conversation=await Conversation.find({
            participants:{
                $all:[senderId,receiverId]
            }
        })

        if (!conversation) {
            conversation=await Conversation.create({
                participants:[senderId,receiverId],
            })
        }

        const newMessage=new Message({
            senderId,
            receiverId,
            message
        })
        if (newMessage){
            conversation.message.push(newMessage._id)
        }
        // these both will run in parallel
        await Promise.all([conversation.save(),newMessage.save()])

        // SOCKET IO
        const receiverSocketId=getReceiverSocketID(receiverId)
        if (receiverSocketId){
            // io.to(<socket_id>).emit() is used to send events to specific client
            io.to(receiverSocketId).emit('message',newMessage)
        }

        res.status(201)
        .json(new ApiResponse(201,newMessage,"Message Sent"))
    } catch (error) {
        res.status(400)
        .json(new ApiError(400,'Error Occured while sending message',error))
    }
})

const getMessage=asyncHandler(async(req,res)=>{
    try {
        const {id:userToChatId}=req.params;
        const senderId=req.user?._id
        
        const conversation=await Conversation.findOne({
            participants:{$all:[senderId,userToChatId]},
        }).populate("messages");// NOT REFERENCE BUT ACTUAL MESSAGES

        if (!conversation) throw new ApiError(400,"Conversation not found")

        res.status(201)
        .json(new ApiResponse(201,conversation.message,"Messages Fetched between Participants"))
    } catch (error) {
        res.status(400)
        .json(new ApiError(400,'Error Occured while fetching message',error))
    }
})

module.exports={
    sendMessage,
    getMessage
}