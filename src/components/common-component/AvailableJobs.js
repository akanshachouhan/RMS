import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showJobUrl } from '../../api/constants';
import { addingJobsActions } from '../../store/addJobsSuccess';
import { deleteJobsActions } from '../../store/deleteJobSuccess';
import Card from '../layout/card/Card';
import classes from './AvailableJobs.module.css';
import CircularProgress from '@mui/material/CircularProgress';
 

const AvailableJobs = (props) => {

  const dispatch =  useDispatch(); 

  //const token = JSON.parse(localStorage.getItem('userData')).currentToken;

  const AddedJobs = useSelector(state => state.addJobsSuccess.isAddedJobs);
 const DeletedJobs = useSelector(state => state.deleteJobSuccess.isDeletingJob);

    const[jobs, setJobs] = useState([]);
    const[isLoading, setIsLoading] = useState(true);
    const[httpError, setHttpError] = useState();

    

    // useEffect(() => {
    //   const fetchJobs = async () => {
    //     const response = await fetch ( showJobUrl,{
    //       method: 'GET',
    //       headers: {
    //         "authorization" : token
    //       }
    //     });
        
    //     if(!response.ok){
    //         throw new Error ('Something went wrong!');
    //       }
    //     else{
    //         console.log('successfully fetched the data');
    //     }
    //     // console.log(response)
    //       const responseData = await response.json();
  
    //       console.log("responseData: ",responseData);
  
    //       const loadedJobs = []
  
          
    //     for (const key in responseData){
    //       loadedJobs.push({
    //         userId:responseData[key].userId,
    //         id: key,
    //         _id: responseData[key]._id,
    //         designation: responseData[key].designation,
    //         experience: responseData[key].experience,
    //         location : responseData[key].location,
    //         skills: responseData[key].skills,
    //         jobDescription: responseData[key].jobDescription,
    //       });
    //       }
    //       setJobs(loadedJobs);
    //       console.log(jobs);
    //         setIsLoading(false);
    //       // setTimeout(()=>{
    //       // }, 10000)
        
    // }
        
    //     fetchJobs().catch( error =>{
    //         console.log(error)
    //           setIsLoading(false);
    //         // setTimeout(()=>{
    //         // }, 10000)
    //         setHttpError(error.message);
    //         // setIsLoading(false);
    //         // setHttpError(error.message);
    //       });
    //     console.log(jobs);
    //     dispatch(addingJobsActions.notAddedJobsSuccessfully())
    //     dispatch(deleteJobsActions.notDeletingJobSuccessfully())
    // },[AddedJobs,DeletedJobs])

    useEffect (() =>{
      const fetchData=async () =>{
        const response = await fetch( showJobUrl);
        const postData = await response.json();
        setJobs(postData);
        setIsLoading(false)
        
        console.log(postData)
      }
      fetchData().catch(error => {
        console.log(error)
        setIsLoading(false);
        setHttpError(error.message);
      });
     dispatch(addingJobsActions.notAddedJobsSuccessfully())
    dispatch(deleteJobsActions.notDeletingJobSuccessfully())
    
    },[AddedJobs,DeletedJobs,dispatch])
    if(isLoading){
      return(
        <section className={classes.JobIsLoading}>
          <CircularProgress/>
        </section>
      );
    }
    
    if(httpError){
      return(
        <section className={classes.JobsError}>
          <p>{httpError}</p>
        </section>
      );
    }
 
    const job_list = jobs.sort((a, b) => a.designation.localeCompare(b.designation)).map(job => <Card id={job._id}  jobId ={job.jobId}  location ={job.location} designation={job.designation} experience={job.experience} skills={job.skills} jobDescription={job.jobDescription} />);

    return (
        <>
            <div style={{margin: '1rem'}}>
              <div style={{}}>
              {job_list}
              </div>
           
            </div>
        </>
    )
}

export default AvailableJobs
