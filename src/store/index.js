import { configureStore } from "@reduxjs/toolkit";
import addJobsSuccessReducer from "./addJobsSuccess";
import applyFormReducer from "./applyForm";
import educationFormReducer from "./educationForm";
import deleteJobSuccessReducer from "./deleteJobSuccess";
import addImageReducer from './addImage'



const store = configureStore({
    middleware: (getDefaultMiddleware) => {return getDefaultMiddleware({
        serializableCheck: false
      }) },
    reducer: {addJobsSuccess: addJobsSuccessReducer, applyForm: applyFormReducer, addImage:addImageReducer,educationForm: educationFormReducer, deleteJobSuccess: deleteJobSuccessReducer}
})
export default store;