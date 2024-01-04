import pool from "../db.js"
import {JWT_SECRET_KEY} from "../env.js"
import jwt from "jsonwebtoken"


export const getAllPosts =async (req, res) => {
 try {
   // console.log(req.query.cat,"//////////////////////////");
   
   // const psql="select * from posts"
   const values=[req.query?.cat]
   const result=await pool.query(req.query.cat?"select * from posts where category=$1":"select * from posts",values)
   // const result=await pool.query("select * from posts where category='science'")
   console.log(result?.rows[0],"results//////////");
  
   if(result?.rows[0]){
      res.status(200).json(result?.rows[0])    
   }else{
      res.status(404).json({message:"posts not found"})                
   }
 } catch (error) {
   console.log(error);
   res.status(400).json({error:error,message:"error occured"})
 }
}

export const getSinglePost = async(req, res) => {
 try {
   const sql=`SELECT u.username, p.title, p.desc, p.img as postImage, u.img as userImage, p.category as cat, p.created_at as date FROM users u LEFT JOIN posts p ON (u.id=p.user_id) WHERE p.id=$1`
   const values=[req.params.id]

   const result=await pool.query(sql,values).then((data)=>{
      // console.log(data.rows[0],"//data/");
       res.status(200).json(data?.rows[0])
   }).catch((err)=>{
      console.log(err,"err");
    res.status(400).json(err)
   })
 
 } catch (error) {
   console.log(error);
   res.status(400).json(error)
 }
}

export const addPost = (req, res) => {
   res.json("hii success")
}


export const deletePost = (req, res) => {
  try {
   console.log(req.cookies);  
   console.log(req.cookies.access_token,"...."); 
   const token=req.cookies.access_token
   if(!token){
      console.log("111111111111");
       jwt.verify(token,JWT_SECRET_KEY,(err,userInfo)=>{
         
       })  
     res.status(400).json({message:"Not authenticated"})
   }else{

      console.log("22222222222222");
      res.status(200).json("hii success")
   }
  } catch (error) {
   console.log("3333333333333333");
   console.log(error);
   res.status(400).json({message:"catch error"})

  }
}


export const updatePost = (req, res) => {
   res.json("hii success")
}


