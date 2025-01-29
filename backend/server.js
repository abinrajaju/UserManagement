import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './src/lib/db.js'
import authRout from './src/route/Auth.route.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
dotenv.config()
const PORT =process.env.PORT||5001

const app= express()
app.use(cookieParser());
app.use(express.json({ limit: "100mb" }));

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

connectDB()

app.use("/auth",authRout)
app.listen(PORT, ()=>{
    console.log('running in'+PORT);
    
})