import { createSlice } from "@reduxjs/toolkit";



const AdminSlice=createSlice({
    name:'userData',
    initialState:{
        users:[],
        search:""
    },
    reducers:{
         uplode:(state,action)=>{
            state.users=action.payload
            
            
         },
         searchdata:(state,action)=>{
            state.search=action.payload
            
            
         }
         
         
    }
})

export const{uplode,searchdata}=AdminSlice.actions
export default AdminSlice.reducer
