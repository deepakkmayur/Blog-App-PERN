import pool from "../db.js"

export const getAllPosts =async (req, res) => {
   console.log("rchd getAllPosts");
   const psql="select * from posts"
   // const values=[]
   const result=await pool.query(psql)
   console.log(result?.rows[0]);
   res.json(result?.rows[0])
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


