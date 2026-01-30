const jwt = require('jsonwebtoken')

const authMiddleware = (req,res,next)=>{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]
    if(!token){
        return res.status(401).json({
            success:false,
            message: 'access denied. No token'
        })
    }

    //decode token
    try{
        const decodeTokenInfo = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.userInfo = decodeTokenInfo;
        next()
    }catch(e){
        return res.status(401).json({
            success:false,
            message: 'access denied. No token'
        })
    }
}

module.exports = authMiddleware