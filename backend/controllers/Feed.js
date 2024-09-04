const Tweet = require('../models/tweetSchema');
exports.Feed=(req,res)=>{
    Tweet.find({}).then((data)=>{
        if(data){
            res.status(200).json(data);
        }else{
            res.status(404).json({message:"No data found"})
        }
    })
    
}