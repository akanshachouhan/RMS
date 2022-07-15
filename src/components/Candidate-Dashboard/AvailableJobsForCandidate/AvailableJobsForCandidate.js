import React from 'react'
import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { showJobUrl } from '../../../api/constants';
// import { addingJobsActions } from '../../store/addJobsSuccess';
import CandidateCard from './CandidateCard';
import classes from './AvailableJobs.module.css';
import Home from '../../ApplyStepForm/Home';
import BellHome from './BellHome';
import { Grid, Card, Icon, Image , Button} from 'semantic-ui-react'
 

const AvailableJobsForCandidate = (props) => {

  // const dispatch =  useDispatch();

  // const AddedJobs = useSelector(state => state.addJobsSuccess.isAddedJobs);

    const[jobs, setJobs] = useState([]);
    const[isLoading, setIsLoading] = useState(true);
    const[httpError, setHttpError] = useState();

    useEffect (() =>{
      const fetchData=async () =>{
        const response = await fetch(showJobUrl);
        const postData = await response.json();
        setJobs(postData);
        setIsLoading(false)
        
        console.log(postData)
      }
      fetchData().catch(error => {
        console.log(error)
        setIsLoading(false);
        setHttpError(error.message);
      });;
    
    },[])
  
   
  
  
  

    // useEffect(() => {
    //   const fetchJobs = async () => {
    //     const response = await fetch ( showJobUrl);
        
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
    //         id: key,
    //         Uid: responseData[key]._id,
    //         designation: responseData[key].designation,
    //         experience: responseData[key].experience,
    //         skills: responseData[key].skills,
    //         jd: responseData[key].jobDescription,
    //         location:responseData[key].location
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
    //     // dispatch(addingJobsActions.notAddedJobsSuccessfully())
    // },[])

    if(isLoading){
      return(
        <section className={classes.JobIsLoading}>
          <p>loading...</p>
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
 
//     const job_list = jobs.map(job => <BellHome style={{display:"flex"}} identity={job.Uid} location={job.location} designation={job.designation} experience={job.experience} skills={job.skills} jobDescription={job.jobDescription} />);
// console.log(job_list)
    return (
        <>
            <div>
                {/* {job_list} */}
                <BellHome/>
                </div>
        </>
    )
}

export default AvailableJobsForCandidate
