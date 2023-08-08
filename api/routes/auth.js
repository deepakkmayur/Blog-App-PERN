import express from 'express'
import {register,login,logout} from "../controllers/auth.js"
import {validate} from "express-validation"
import {registerValidation,loginValidation} from '../validation/auth.js'

const router=express.Router()

router.post('/register',validate(registerValidation),register)
router.post('/login',validate(loginValidation),login)
router.post('/logout',logout)

export default router