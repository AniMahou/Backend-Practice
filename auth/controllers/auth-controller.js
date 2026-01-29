import User from "../models/User"
const bcrypt = require('bcryptjs')
const registerUser = async(req,res)=>{
    try{
        const {username, email, password,role} =req.body
        const checkExistingUser = await User.findOne({$or : [{username}, {email}]})

        if(checkExistingUser){
            res.status(400).json({
                success: false,
                message: 'User exists with same username/mail'
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt)

        const newUser = new User ({
            username,
            email,
            password: hashedPass,
            role: role || 'user'

        })
        await newUser.save()

        if(newUser){
            res.status(201).json({
                success:true,
                message: 'User created'
            })
        }
        else{
            res.status(400).json({
                success: false,
                message: 'User created'
            })
        }
    }catch(e){
        res.status(500).json({
            success: false,
            message: 'Some error occured!'
        })
    }
}


const loginUser = async() => {
    try{

    }catch(e){
        res.status(500).json({
            success: false,
            message: 'Some error occured!'
        })
    }
}

module.exports = {
    registerUser,
    loginUser
};