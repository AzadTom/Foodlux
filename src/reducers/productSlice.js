import { createSlice } from "@reduxjs/toolkit";



const STATUS = Object.freeze({
    idle:"idle",
    loading:"loading",
    error:"error",
})

const initialState = {
    products:[],
    status:STATUS.idle,
}

const productSlice = createSlice({
    name : "products",
    initialState:initialState,
    reducers:{

       getProducts :(state,action)=>{

           
            state.products = action.payload;
           

       },


       setStatus : (state,action)=>{


            state.status = action.payload;

       }
       
       


    }
})


export const  { getProducts ,setStatus} = productSlice.actions;

export default productSlice.reducer;




