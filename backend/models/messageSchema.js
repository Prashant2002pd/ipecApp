const mongoose = require('mongoose');
const { Schema } = mongoose;
const messageSchema = new Schema({
    message:{
        type:String,
        required:[true,"Message is required!"]
    },
    replyTo:{
        type:String
    }
  },{timestamps:true});
  
  const Message = mongoose.model('Message', messageSchema);
  module.exports = Message;
  