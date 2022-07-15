import { createSlice } from "@reduxjs/toolkit";

const initialDeleteJobState = {
    isDeletingJob: false
}

const deleteJobSuccessSlice = createSlice({
    name: 'DeleteJobs',
    initialState: initialDeleteJobState,
    reducers: {
        deletingJobSuccessfully(state) {
            state.isDeletingJob = true;
        },
        notDeletingJobSuccessfully(state) {
            state.isDeletingJob = false;
        }
    }
})

export const deleteJobsActions = deleteJobSuccessSlice.actions;

export default deleteJobSuccessSlice.reducer