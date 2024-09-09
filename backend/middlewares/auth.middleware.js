
const { JsonWebTokenError } = require("jsonwebtoken");
const ApiError = require("../utils/ApiError");
const asyncHandler = require("../utils/asyncHandler");
const User = require("../models/userSchema");


const verifyJWT=asyncHandler(async(req,res,next)=>{
    try {
        const token=req.cookies?.accessToken||req.body?.token || req.header("Authorization")?.replace("Bearer ","")

        if(!token) throw new ApiError(401, "Unauthorized Request");
        
        const decodedToken=JsonWebTokenError.verify(token,process.env.ACCESS_TOKEN_SECRET);

        const user=await User.findById(decodedToken?._id).select("-password -refreshToken")
    
        if(!user) throw new ApiError(401,"Invalid Access Token");
    
        req.user=user;
        next()

    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid Access Tokens")   
    }
})

module.exports=verifyJWT