import { createSlice } from "@reduxjs/toolkit";

const initialFormState = {
    educationFormData: []
}
const addEducationFormSlice = createSlice({
    name: 'educationForm',
    initialState: initialFormState,
    reducers: {
        nextForm(state, action) {
            state.educationFormData = [action.payload]
        },
    }
})

console.log(initialFormState.educationFormData)

export const eduFormActions = addEducationFormSlice.actions;

export default addEducationFormSlice.reducer