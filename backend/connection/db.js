const mongoose = require("mongoose")
require('dotenv').config()

const Connect = ()=>{
    try {
        mongoose.connect(process.env.DB).then(()=>{
            console.log("Connected to DB")
        })
    } catch (error) {
        console.log(error);
        console.log("error in db connection")
    }
}

Connect();