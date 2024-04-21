import { createSlice } from "@reduxjs/toolkit";
// import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";


const initialState = {
    notes : [ {text: 'hyy',
      createdOn: new Date()
    },
    {text: 'hitesh',
    createdOn: new Date()
  }]
}


const noteSlice = createSlice({
    name: 'note',
    initialState: initialState,
    reducers: {
        add: (state, action) => {

        state.notes.push({
            text: action.payload,
            createdOn: new Date()
        })

        },

        delete: (state, action)  => {
            state.notes.splice(action.payload, 1)
        
        }

    }
})


export const noteReducer = noteSlice.reducer;
export const actions = noteSlice.actions; 

// selector
export const noteSelector = (state) => state.noteReducer.notes;

// export function noteReducer(state=initialState, action){

//     switch(action.type){
//         case ADD_NOTE:
//             return{
//                 ...state, notes:[
//                     ...state.notes, {
//                         text: action.text,
//                         createdOn: new Date()
//                     }
//                 ]
//             }


//             case DELETE_NOTE:

//             state.notes.splice(action.index,1)
//                 return {
//                     ...state,
//                     notes: [...state.notes]
//                 }

//                 default: 
//                 return state;
//     }
// }