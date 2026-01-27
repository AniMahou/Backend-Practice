const registerUser = async(req,res)=>{
    try{

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