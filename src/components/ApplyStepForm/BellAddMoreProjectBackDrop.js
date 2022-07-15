import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import ProjectModal from '../ui/ProjectModal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import { addJobs } from '../../api/api.js';
import { addingJobsActions } from '../../store/addJobsSuccess.js';


// import UseButton from './AddJobBtnFromBackdrop.js';

export default function BasicTextFields(props){

  const form = React.useRef(null);

  const[formManager, setFormManager] = useState({designation: '',experience: '',skills: '', jobDescription: ''
  })

  const dispatch = useDispatch();

  const[addedJobs,setAddedJobs] = useState(false);

  const token = JSON.parse(localStorage.getItem('userData')).currentToken;

    const handleJobsSubmit = async (event) => {
        event.preventDefault();
        if(!isValid()){
          alert('fill required details')
          return
        }
        const data = new FormData(form.current);
        let obj = {}
        data.forEach((value,key) => {
          console.log(value, key)
          obj[key] = value;
        })

        // let responseJobData = await addJobs(obj,token);
        // console.log(responseJobData)
        // dispatch(addingJobsActions.addedJobsSuccessfully())
        // console.log(dispatch)

        // setTimeout(()=>{
        //   props.fun();
        // }, 500)

        console.log({
            jobTitle : data.get('designation'),
            experience : data.get('experience'),
            skills : data.get('skills'),
            location : data.get('location'),
            jobDescription:data.get('jobDescription')
        })
        setAddedJobs(true);
    }

    if(addedJobs){
      return(
        <ProjectModal onClose={props.onClose}>
          <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: '#FFB319',
              px: [1],
            }}>
                  Added one job card successfully!
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
        </ProjectModal>
      );
    }

    const managerHandler = (event,key) => {
      setFormManager((prev) => {
        let obj = {...prev}
        obj[key] = event.target.value;
        return obj
      })
    }
    
    const isValid = () => {
      for(let i in formManager){
        if(formManager[i].length === 0){
          return false
        }
      }
      return true;
    }

  return (
      <ProjectModal onClose={props.onClose}>
             <Box sx={{ textAlign: 'center', m: 1, fontWeight: 'bold' }}>Add More Project Details</Box>
             <label style={{marginTop:"3px",background:"pink",fontSize: "0.9rem", fontWeight: "bold" ,color:"Black",marginLeft:"2%"}}>Project Details : </label>
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
               
            <TextField id="standard-basic" onChange={(event) => {managerHandler(event,'designation')}} required name="designation" label="Project Name" variant="standard" />
            <TextField id="standard-basic" required onChange={(event) => {managerHandler(event,'experience')}} name="experience" label="Project Link" variant="standard" />
            <TextField id="standard-basic" required onChange={(event) => {managerHandler(event,'skills')}} name="skills" label="Project Start Date" variant="standard" />
            <TextField id="standard-basic" required onChange={(event) => {managerHandler(event,'location')}} name="location" label="Project End Date" variant="standard" />
            
{/* <TextareaAutosize id="filled-basic"  aria-label="minimum height"
                  minRows={2}
                  placeholder="JD"
                  style={{ width: 200, padding: '3px 5px' }} type="file" name="jobDescription" variant="filled" /> */}
           
           {/* <Button
         color="primary"
                variant="contained"
                component="label"
                sx={{ mt: 1, mb:  2, background: '#F58840','&:hover': {
                  background: "#E59934",
               }, }}
              >
              Upload Job Description              <input
            //ref={resInput}
            name='file'
            //onChange={resHandler}
            type="file"
            accept="application/pdf,application/vnd.ms-excel"
            hidden
            />
            </Button> */}
           {/* <TextareaAutosize id="filled-basic" aria-label="minimum height"
                minRows={6}
                placeholder="Enter JD"
                style={{ width: 400 }}  onChange={(event) => {managerHandler(event,'jobDescription')}} required fullWidth name="jobDescription" label="Comment" variant="filled" /> */}
            
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
        </ProjectModal>
  );
}

