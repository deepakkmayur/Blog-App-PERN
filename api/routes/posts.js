import express from 'express'
import { addPost, deletePost, getAllPosts, getSinglePost, updatePost } from "../controllers/posts.js"

const router=express.Router()

router.get("/",getAllPosts)
router.get("/:id",getSinglePost)
router.post("/",addPost)
router.delete("/:id",deletePost)
router.put("/:id",updatePost)

export default router