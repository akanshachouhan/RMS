import { createSlice } from "@reduxjs/toolkit";

const initialAddJobState = {
    isAddedJobs: false
}

const addJobSuccessSlice = createSlice({
    name: 'addingJobs',
    initialState: initialAddJobState,
    reducers: {
        addedJobsSuccessfully(state) {
            state.isAddedJobs = true;
        },
        notAddedJobsSuccessfully(state) {
            state.isAddedJobs = false;
        }
    }
})

export const addingJobsActions = addJobSuccessSlice.actions;

export default addJobSuccessSlice.reducer