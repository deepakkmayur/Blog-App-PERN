import pool from "../db.js"

export const getAllPosts =async (req, res) => {
 try {
   console.log(req.query.cat,"//////////////////////////");
   
   // const psql="select * from posts"
   const values=[req.query?.cat]
   const result=await pool.query(req.query.cat?"select * from posts where category=$1":"select * from posts",values)
   // const result=await pool.query("select * from posts where category='science'")
   console.log(result?.rows[0],"results");
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

export const getSinglePost = (req, res) => {
   res.json("hii success")
}

export const addPost = (req, res) => {
   res.json("hii success")
}


export const deletePost = (req, res) => {
   res.json("hii success")
}


export const updatePost = (req, res) => {
   res.json("hii success")
}


