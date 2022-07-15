import React,{useState} from 'react'
import MonitorIcon from '@mui/icons-material/Monitor';

import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Modal from '../../ui/Modal';
import { Box } from '@mui/system';
import { Button } from '@mui/material';

import { scheduleInterviewForManager } from '../../../api/api';
function TooltipForInterview(props) {

    
    const[select, setSelect] = useState(false)
    const [addedJobs,setAddedJobs] = useState();
    const[formManager, setFormManager] = React.useState({dateTime: '',interviewLink:''
  })

    const selectHandler = () => {
        setSelect(true)
    }

    const closeSelectHandler = () =>{
        setSelect(false)
        setAddedJobs(false)
    }
   

    const handleInterviewSubmit = (event) => {
        event.preventDefault();
     
        if(!isValid()){
          alert('fill required details')
          return
        }
       
        const data = new FormData(event.currentTarget);


        // let responseJobData = await addJobs(data);
        // console.log(responseJobData)

        // setTimeout(()=>{
        //   props.props.fun();
        // }, 500)

        // console.log({
        //     // firstName: {props.props.firstName}
        //     firstName: props.props.firstName,
        //     lastName: props.props.lastName,
        //     jobRole: props.props.jobRole,
        //     date : data.get('dateAndTime'),
        //     link : data.get('link'),
        // })
        var scheduleData = {
         emailid : props.props.emailid,
         _id  : props.props._id,
         interviewLink : data.get('interviewLink'),
         dateTime:data.get('dateTime')
        }
      console.log(scheduleData)
    scheduleInterviewForManager(scheduleData)
    setAddedJobs(true)
     
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
                  Schedule Interview  successfully!
                  <Button
                  onClick={ closeSelectHandler}
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

    return (
        <div>
             <Tooltip title="Schedule Interview For Manager">
                <IconButton sx={{mt: 1, mb: 1, ml: 2, size:'small'}} onClick={selectHandler}>
                <MonitorIcon/>
                </IconButton>
            </Tooltip>

        {select &&  
             <Modal onClose={props.props.onClose}>
             <Box sx={{ textAlign: 'center', m: 1, fontWeight: 'bold' }}>Send Interview link to manager and {props.props.emailid}</Box>
             <Box sx={{display: 'flex',justifyContent: 'center', fontWeight: '0.7rem'}}>{props.props.firstName} {props.props.lastName} {props.props.testScore} Applied for - {props.props.jobRole}</Box>
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '22ch' },
            }}
            noValidate
            // onSubmit={() => {handleInterviewSubmit(props.props)}}
            onSubmit={handleInterviewSubmit}
            autoComplete="off"
            >
            {/* <TextField id="filled-basic" required name="designation" label="Job Title" variant="filled" /> */}
            <TextField id="filled-basic"   onChange={(event) => {managerHandler(event,'dateTime')}}  required type="datetime-local" name="dateTime" variant="filled" />
           
            {/* <TextField id="filled-basic" name="time" label="Time" variant="filled" /> */}
            <TextField id="filled-basic"   onChange={(event) => {managerHandler(event,'interviewLink')}} required label="Link" name="interviewLink" variant="filled" />
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
                    Send 
                  </Button>
                  <Button
                    onClick={closeSelectHandler}
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
}
        </div>
    )
}

export default TooltipForInterview
