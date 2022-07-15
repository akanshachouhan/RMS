import { createSlice } from "@reduxjs/toolkit";

const initialFormState = {
    allFormData: {}
}
const addFormSlice = createSlice({
    name: 'nextForm',
    initialState: initialFormState,
    reducers: {
        nextForm(state, action) {
            let obj = JSON.parse(JSON.stringify(state.allFormData));
            obj[action.payload.key] = action.payload.data
            state.allFormData = obj;
            console.log(obj)
            console.log(state.allFormData)
        },
        emptyForm(state){
            state.allFormData = {}
        }
    }
})

console.log(initialFormState.allFormData)

export const formActions = addFormSlice.actions;

export default addFormSlice.reducer