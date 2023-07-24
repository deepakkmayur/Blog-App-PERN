import {Joi} from "express-validation"


export const registerValidation={
   body:Joi.object({
      email:Joi.string().email().required(),
      username:Joi.string().required(),
      password:Joi.string().min(3).max(15).required(),
   })
   // .error((err)=>{console.log(err,"/// registerValidation  err////")})
} 