import bcrypt from 'bcryptjs'
import pool from '../db.js';

export const register = async (req, res) => {  
   console.log(req.body);
 try {
   const {password,username,email}=req.body
    // check existing user 
 const existingUser=await pool.query(`select * from users where email='${req.body.email}' or username= '${req.body.username}'`)  
 if(existingUser.rows.length){//length > 0
   console.log(existingUser.rows[0],"existingUser");
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




export const login = (req, res) => {  
   res.json("hii register")
}




export const logout = (req, res) => {
   res.json("hii register")
} 
