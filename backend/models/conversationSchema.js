const mongoose = require('mongoose');
const { Schema } = mongoose;
const convoSchema = new Schema({
    participants:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    message:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Message",
            default:[]
        }
    ]
    
  },{timestamps:true});
  
const Conversation = mongoose.model('Conversation', convoSchema);
module.exports = Conversation;
  