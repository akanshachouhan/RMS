import { createSlice } from "@reduxjs/toolkit";

const initialAddMoreProjectState = {
    isAddedMoreProjects: false
}

const addProjectSlice = createSlice({
    name: 'addingprojects',
    initialState: initialAddMoreProjectState,
    reducers: {
        addedProjectSuccessfully(state) {
            state.isAddedMoreProjects = true;
        },
        notAddedJobsSuccessfully(state) {
            state.isAddedMoreProjects = false;
        }
    }
})

export const addingJobsActions = addJobSuccessSlice.actions;

export default addJobSuccessSlice.reducer