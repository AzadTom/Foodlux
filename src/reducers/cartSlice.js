import { createSlice } from "@reduxjs/toolkit";



const STATUS = Object.freeze({
    idle:"idle",
    loading:"loading",
    error:"error",
})

const initialState = {
    cart:[],
    status:STATUS.idle,
}



const cartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{

       addtocart:(state,action)=>{

            state.cart.push(action.payload);

       },

       removetocart:(state,action)=>{

            state.cart = state.cart.filter((item)=> (item.id !== action.payload.id));

       },

       setStatus : (state,action)=>{


        state.status = action.payload;

       }

  }
})

export const {addtocart,removetocart,setStatus} = cartSlice.actions;

export default cartSlice.reducer;

