const mongoose = require('mongoose');
const { Schema } = mongoose;
const likeSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    tweet: { type: Schema.Types.ObjectId, ref: 'Tweet', required: true },
    createdAt: { type: Date, default: Date.now }
  });
  
  const Like = mongoose.model('Like', likeSchema);
  module.exports = Like;
  