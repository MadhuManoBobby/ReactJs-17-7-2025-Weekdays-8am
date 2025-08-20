import { configureStore } from "@reduxjs/toolkit";
import customerReducer from './Slice/Slice'

export const Store = configureStore({
    devTools:true,
    reducer:{
        customers: customerReducer
    }
})