import express from 'express'
import { addPost, deletePost, getAllPosts, getSinglePost, updatePost } from "../controllers/posts.js"

const router=express.Router()

router.get("/",getAllPosts)
router.get("/:id",getSinglePost)
router.post("/",addPost)
router.delete("/",deletePost)
router.put("/",updatePost)

export default router