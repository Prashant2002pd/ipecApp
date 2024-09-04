const mongoose = require('mongoose');
const { Schema } = mongoose;
const tweetSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true, maxlength: 280 },
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    retweets: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    createdAt: { type: Date, default: Date.now }
  });
  
  const Tweet = mongoose.model('Tweet', tweetSchema);
  module.exports = Tweet;
  