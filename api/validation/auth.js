import {Joi} from "express-validation"


export const registerValidation={
   body:Joi.object({
      email:Joi.string().email().required(),
      username:Joi.string().min(5).required(),
      password:Joi.string().min(3).max(15).required(),
   })
   // .error((err)=>{console.log(err,"/// registerValidation  err////")})
} 


export const loginValidation={
   body:Joi.object({
      username:Joi.string().regex(/^[a-zA-Z0-9\s.\-_,#%@&]+$/).required(),     
      password:Joi.string().required()
   })
   .error((err)=>{console.log(err,"/// loginValidation  err////")})   
}


