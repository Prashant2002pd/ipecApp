const Tweet = require('../models/tweetSchema');

const NewTweet=(req,res)=>{
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
const Feed=(req,res)=>{
    Tweet.find({}).then((data)=>{
        if(data){
            res.status(200).json(data);
        }else{
            res.status(404).json({message:"No data found"})
        }
    })
    
}

module.exports={
    NewTweet,
    Feed
}