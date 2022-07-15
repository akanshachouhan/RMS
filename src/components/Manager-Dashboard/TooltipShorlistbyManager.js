import React,{useState} from 'react'
import MonitorIcon from '@mui/icons-material/Monitor';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Modal from '../ui/Modal';
import { Box } from '@mui/system';
import { Button } from '@mui/material';

import { shorlistByManagerHandler } from '../../api/api';

import { MuiBulletedTextArea } from 'react-bulleted-textarea'
function TooltipForInterview(props) {

    
    const[select, setSelect] = useState(false)
    const [addedJobs,setAddedJobs] = useState();
    const userName = JSON.parse(localStorage.getItem('userData')).firstName;
   

    

    const selectHandler = () => {
        setSelect(true)
    }

    const closeSelectHandler = () =>{
        setSelect(false)
        setAddedJobs(false);
    }

    const handleInterviewSubmit = (event) => {
        event.preventDefault();
       
        // if(!isValid()){
        //   alert('fill required details')
        //   return
        // }
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
         
          _id:props.props._id,
          userName: userName,
        comment : data.get('comment')
        }
      console.log(scheduleData)
      shorlistByManagerHandler(scheduleData)
      setAddedJobs(true)
      
    }
    const values = ['a--', 'b--', 'c--','d--','e--','f--']
    const handleChange = (values) => {
      console.log(values) // [a, b, c]
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
                  Shortlisted Successfully!
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


    

    //const bulletChar = '*' 
    return (
        <div>
             <Tooltip title="Shortlist By Manager">
                <IconButton sx={{mt: 1, mb: 1, ml: 2}} onClick={selectHandler}>
                <MonitorIcon/>
                </IconButton>
            </Tooltip>

        {select &&  
             <Modal onClose={props.props.onClose}>
             <Box sx={{ textAlign: 'center', m: 1, fontWeight: 'bold' }}>Shortlist By Manager</Box>
             <Box sx={{display: 'flex',justifyContent: 'center', fontWeight: '0.7rem'}}>Comment For {props.props.firstName} {props.props.lastName}</Box>
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '100%' },
            }}
            noValidate
            // onSubmit={() => {handleInterviewSubmit(props.props)}}
            onSubmit={handleInterviewSubmit}
            autoComplete="off"
            >
            {/* <TextField id="filled-basic" required name="designation" label="Job Title" variant="filled" /> */}
           
           
            {/* <TextField id="filled-basic" name="time" label="Time" variant="filled" /> */}
            {/* <TextareaAutosize id="filled-basic" aria-label="minimum height"
                minRows={2}
                placeholder="Enter Comment"
                style={{ width: 400 }} required fullWidth name="comment" label="Comment" variant="filled" /> */}

<MuiBulletedTextArea
// onChange={(event) => {managerHandler(event,'comment')}} required
        onChange={handleChange}
        values={values}
        
        name="comment"
        sx={{width:'100%'}}
      />
     
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
