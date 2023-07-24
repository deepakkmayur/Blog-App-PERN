import express from "express"
import morgan from "morgan"
import postRoute from "./routes/posts.js"
import authRoute from "./routes/auth.js"
import userRoute from "./routes/user.js"
import validationMiddleware from "./middlewares/validationMiddleware.js"
import cors from "cors"

const app=express()

app.use(cors())
// app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use("/api/auth",authRoute)
app.use("/api/user",userRoute)
app.use("/api/posts",postRoute)

app.use((req,res,next)=>{
   console.log("hit");
   next()
})
//validation error handler
app.use(validationMiddleware)


app.listen(3003,()=>console.log(`port running on 3003`)) 