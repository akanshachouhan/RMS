import React, { useState } from 'react'

import Modal from '../ui/Modal.js'
import Box from '@mui/material/Box';
//import TextField from '@mui/material/TextField';
import TextField from '@material-ui/core/TextField';

import Button from '@mui/material/Button';

import {updateJobCardById} from '../../api/api';
// import UseButton from './AddJobBtnFromBackdrop.js';
export default function BasicTextFields(props){

  const form = React.useRef(null);

  
//onst [editJobs, setEditJobs]= useState(false);



  const[addedJobs,setAddedJobs] = useState(false);

  const token = JSON.parse(localStorage.getItem('userData')).currentToken;

    const handleJobsSubmit = async (event) => {
        event.preventDefault();
        
        const data = new FormData(form.current);
        console.log('id is - ', props.id)
        let obj = {id: props.id}
        data.forEach((value,key) => {
          console.log(value, key)
          obj[key] = value;
        })
        

        let responseJobData = await updateJobCardById(obj,token);
console.log(responseJobData);
        // dispatch(addingJobsActions.addedJobsSuccessfully())
        // console.log(dispatch)

        // setTimeout(()=>{
        //   props.fun();
        // }, 500)

        console.log({
            jobTitle : data.get('designation'),
            experience : data.get('experience'),
            skills : data.get('skills'),
            id :props.id,
            jobDescription : data.get('jobDescription'),
            location: data.get('location')
          
        })
        setAddedJobs(true);
    }

    if(addedJobs){
      return(
        <Modal onClose={props.onClose}>
          <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: '#FFB319',
              px: [1],
            }}>
                  update one job card successfully!
                  <Button
                  onClick={props.onClose}
                  variant="contained"
                  sx={{ mt: 1, mb: 1, mr: 3, fontSize: '0.8rem',background: '#FFB319','&:hover': {
                    background: "#FFB344",
                 },}}
                >
                  close
                </Button>
          </Box>
        </Modal>
      );
    }

    // const managerHandler = (event,key) => {
    //   setFormManager((prev) => {
    //     let obj = {...prev}
    //     obj[key] = event.target.value;
    //     return obj
    //   })
    // }
    
    // const isValid = () => {
    //   for(let i in formManager){
    //     if(formManager[i].length === 0){
    //       return false
    //     }
    //   }
    //   return true;
    // }

  return (
      <Modal onClose={props.onClose}>
             <Box sx={{ textAlign: 'center', m: 1, fontWeight: 'bold' }}>Add Jobs</Box>
            <Box
            ref={form}
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '22ch' },
            }}
            noValidate
            onSubmit={handleJobsSubmit}
            autoComplete="off"
            >
               
            <TextField inputProps={{ readOnly: false, }} type="text" defaultValue={props.designation}  name="designation" label="Job Title" variant="filled"/>
            <TextField inputProps={{ readOnly: false, }} type="text"  defaultValue={props.experience}   name="experience" label="Experience" variant="filled" />
            <TextField id="filled-basic"  defaultValue={props.skills} required  name="skills" label="Skills" variant="filled" />
            <TextField id="filled-basic"  defaultValue={props.location} required name="location" label="location" variant="filled" />
            <TextField id="filled-basic"   defaultValue ={props.jobDescription} aria-label="minimum height"
                  minRows={2}
                  placeholder="JD"
                  style={{ width: 200, padding: '3px 5px' }} name="jobDescription" variant="filled" />
            <Box sx={{
              '& > :not(style)': { m: 1, width: '100%'},
                width: '100%',
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center'
              }}>
                    <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 2, mb: 2, background: '#2FDD92','&:hover': {
                      background: "#34BE82",
                  },'&:active': {
                    background: "#2FDD92",
                }, fontSize: '0.8rem'}}
                  >
                    Add 
                  </Button>
                  <Button
                    onClick={props.onClose}
                    variant="contained"
                    sx={{ mt: 2, mb: 2,background: '#FFB344','&:hover': {
                      background: "#FFB319",
                  },'&:active': {
                    background: "#FFB344",
                }, fontSize: '0.8rem'}}
                  >
                    close
                  </Button>
              </Box>
            </Box>
        </Modal>
  );
}

