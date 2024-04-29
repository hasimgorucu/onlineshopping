import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../sliceses/productSlice";
import  {productApi}  from "../sliceses/producApi";

const store = configureStore({
    reducer:{
        product: productSlice,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(productApi.middleware)
    
});

export default store;