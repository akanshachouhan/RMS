import { createSlice } from "@reduxjs/toolkit";

const initialFormState = {
    projectFormData: []
}
const projectFormSlice = createSlice({
    name: 'projectForm',
    initialState: initialFormState,
    reducers: {
        nextForm(state, action) {
            state.projectFormData = [action.payload]
        },
    }
})

console.log(initialFormState.projectFormData)

export const formActions = projectFormSlice.actions;

export default projectFormSlice.reducer