const Tweet = require('../models/tweetSchema');

exports.NewTweet=(req,res)=>{
    const {user, content} = req.body;
    const newTweet = new Tweet({
        user,
        content
    });
    newTweet.save()
    .then((tweet)=>{
        res.status(201).json(tweet);
        })
}