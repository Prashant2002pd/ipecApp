const mongoose = require('mongoose');
const { Schema } = mongoose;
const messageSchema = new Schema({
    senderID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    receiverID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    message:{
        type:String,
        required:[true,"Message is required!"]
    },
    
  },{timestamps:true});
  
  const Message = mongoose.model('Message', messageSchema);
  module.exports = Message;
  