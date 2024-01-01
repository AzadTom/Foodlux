import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../reducers/productSlice.js';
import cartReducer from '../reducers/cartSlice.js';

const store = configureStore({

    reducer:{
        product:productReducer,
        cart:cartReducer
    }
})


export default store;

