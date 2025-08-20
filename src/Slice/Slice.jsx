import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const Slice = createSlice({
    name :'customer',
    initialState,
    reducers:{
        addCustomer(state,action){
            state.push(action.payload)
        },
        deleteCustomer(state,action){
          let deleteIndex =  action.payload
          return state.filter((val,index) => index!=(action.payload) )
        }
    }

})

export const {addCustomer,deleteCustomer} = Slice.actions
export default Slice.reducer