import { createSlice } from "@reduxjs/toolkit";

const initialImageState = {
    allImageData: {}
}
const addImageSlice = createSlice({
    name: 'nextForm',
    initialState: initialImageState,
    reducers: {
        nextForm(state, action) {
            let obj = JSON.parse(JSON.stringify(state.allImageData));
            obj[action.payload.key] = action.payload.data
            state.allImageData = obj;
            console.log(obj)
            console.log(state.allImageData)
        },
        emptyForm(state){
            state.allImageData = {}
        }
    }
})

console.log(initialImageState.allImageData)

export const formActions = addImageSlice.actions;

export default addImageSlice.reducer