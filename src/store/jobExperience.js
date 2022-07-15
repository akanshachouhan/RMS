import { createSlice } from "@reduxjs/toolkit";

const initialFormState = {
    experienceFormData: []
}
const experienceFormSlice = createSlice({
    name: 'experineceForm',
    initialState: initialFormState,
    reducers: {
        nextForm(state, action) {
            state.experienceFormData = [action.payload]
        },
    }
})

console.log(initialFormState.experienceFormData)

export const formActions = experienceFormSlice.actions;

export default experienceFormSlice.reducer