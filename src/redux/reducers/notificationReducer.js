import { createSlice } from "@reduxjs/toolkit"
import { actions } from "./todoReducer";


const initialState = {
    message : ''
}


export const notificationSlice = createSlice({

    name : 'notification',
    initialState,
    reducers: {

        reset: (state, action) => {
            state.message = '';
        }

    },
// first way
    // extraReducers: {
    //     "todo/add" : (state,action) => {
    //         state.message = 'todo is created'
    //     }
    // }

    // Another way builder way which is recomded
    // extraReducers:(builder)=> {
    //     builder.addCase(actions.add, (state, action)=>{
    //         state.message = 'todo is created'
    //     })
        
    // }

    // map Way
    extraReducers:{
    //  map object : [key]: value 

    [actions.add]: (state, action) =>{
        state.message = 'todo is created'
    }
    }

})
export const notificationReducer = notificationSlice.reducer;
export const resetNotification = notificationSlice.actions.reset

export const notificationSelector = (state) => state.notificationReducer.message