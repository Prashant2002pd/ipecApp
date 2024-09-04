const mongoose = require('mongoose');
const { Schema } = mongoose;
const commentSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    tweet: { type: Schema.Types.ObjectId, ref: 'Tweet', required: true },
    content: { type: String, required: true, maxlength: 280 },
    createdAt: { type: Date, default: Date.now }
  });
  
  const Comment = mongoose.model('Comment', commentSchema);
  module.exports = Comment;
  