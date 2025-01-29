import { createSlice } from "@reduxjs/toolkit";


const AuthSlice= createSlice({
    name:'Auth',
    initialState:{
        authUser: JSON.parse(localStorage.getItem('authUser')) || null,
         
    },
    reducers:{
        signup:(state,data)=>{
               state.authUser=data.payload.data
               localStorage.setItem('authUser', JSON.stringify(data.payload.data));
        },
        logout:(state)=>{
            state.authUser=null
            localStorage.removeItem('authUser');
        },
        login:(state,data)=>{
            state.authUser=data.payload.data
            localStorage.setItem('authUser', JSON.stringify(data.payload.data));
        }
    }
})
export const {signup,logout,login}=AuthSlice.actions

export default AuthSlice.reducer