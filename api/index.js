import express from "express"
import morgan from "morgan"
import postRoute from "./routes/posts.js"
import authRoute from "./routes/auth.js"
import userRoute from "./routes/user.js"
import validationMiddleware from "./middlewares/validationMiddleware.js"
import cors from "cors"
import cookieParser from "cookie-parser"

const app=express()
// app.use(
//    cors({
//      origin: '*',
//      credentials: true,
//    })
//  );
                                
app.use(
   cors({
     origin: ['http://localhost:3000','http://localhost:3001', 'http://localhost:3002', 'http://localhost:3003','http://localhost:3004','http://localhost:3005'], // Add your trusted origins here
     credentials: true, // Allow credentials (e.g., cookies)
   })
 );


// app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

// app.use((req,res,next)=>{
//    console.log("hit");
//    next()
// })

app.use("/api/auth",authRoute)
app.use("/api/user",userRoute)
app.use("/api/posts",postRoute)

//validation error handler
app.use(validationMiddleware)


app.listen(3003,()=>console.log(`port running on 3003`)) 