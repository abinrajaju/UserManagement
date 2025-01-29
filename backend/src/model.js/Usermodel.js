import mongoose from "mongoose";

const userSchema= new mongoose.Schema(
    {
        email:{
        type  :String,
        required:true,
        unique:true,
        },
         name:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
            minlength:6,
        },
        role: { type: String,  
            default: 'user' }, 
        profilePic:{
                type:String,
                default:""
            },
        
    },
    {
           timestamps:true
    }
)

const User=  mongoose.model('User',userSchema)

export default User