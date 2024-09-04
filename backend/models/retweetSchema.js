const mongoose = require('mongoose');
const { Schema } = mongoose;
const retweetSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    tweet: { type: Schema.Types.ObjectId, ref: 'Tweet', required: true },
    createdAt: { type: Date, default: Date.now }
  });
  
  const Retweet = mongoose.model('Retweet', retweetSchema);
  module.exports = Retweet;
  