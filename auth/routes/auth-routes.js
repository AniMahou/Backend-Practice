const express = require ('express')
const router = express().router()
import { registerUser,loginUser } from '../controllers/auth-controller'

router.post('/register', registerUser)
router.post('/login', loginUser)

module.exports = router
