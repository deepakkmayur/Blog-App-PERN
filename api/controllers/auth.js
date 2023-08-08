import bcrypt from 'bcryptjs'
import pool from '../db.js';
import jwt from "jsonwebtoken"
import {JWT_SECRET_KEY} from "../env.js"
import { token } from 'morgan';

const generateJwtToken=(username)=>{

}

export const register = async (req, res) => {  
 try {
   const {password,username,email}=req.body
    // check existing user 
 const existingUser=await pool.query(`select * from users where email='${req.body.email}' or username= '${req.body.username}'`)  
 if(existingUser.rows.length){//length > 0
   res.status(409).json({message:"user already exist"})
}else{
  const salt=await bcrypt.genSalt(10);
  const hashedPassword=await bcrypt.hash(password,salt)

  const psql="INSERT INTO users (email,username,password) Values($1,$2,$3) returning id"
  const values=[email,username,hashedPassword]      
  const result=await pool.query(psql,values)
   
   res.status(201).json({message:"User created succussfully"}) 
}             
 } catch (error) {
   console.log(error);
   res.status(500).json({ message: 'Something went wrong',error:error });      
 }
};




export const login = async (req, res) => {     
   console.log("rchd login -----=- ");
   try {
      if(req.body.username&&req.body.password){
         // const sql="select * from users where id=$"
      const user= await pool.query(`select * from users where username='${req.body.username}'`)
        const comparePassword= await bcrypt.compare(req.body.password, user.rows[0].password)
            if (comparePassword) {
              const token=jwt.sign({id:user.rows[0].id},JWT_SECRET_KEY) 
               const {password,...passwordRemovedUserDetails} =user.rows[0]
               // res.cookie("access_token",token,{httpOnly:true}).status(200).json({passwordRemovedUserDetails, message: "Login success" })
               res.cookie("access_token",token,{httpOnly:true}).status(200).json(passwordRemovedUserDetails)
               // res.cookie(name, 'value', {expire: 360000 + Date.now()}); 
               // res.cookie(name, 'value', {maxAge: 360000});
            } else {
                return res.status(401).json({ message: "Wrong Password",})
            }
      
   
      }else{
         res.status(401).json({message:"Enter credentials properly"})
      }
   } catch (error) {
      res.status(500).json({message:"Somethig went wrong"})
   }
}




export const logout = (req, res) => {
   // res.clearCookie("access_token", {
   //    sameSite: "none",
   //    secure: true,
   //  })
   res.clearCookie("access_token")
.status(200).json({message:"User has been logout"}) 

// res.status(200).json({message:"log out succesfully"})
} 





