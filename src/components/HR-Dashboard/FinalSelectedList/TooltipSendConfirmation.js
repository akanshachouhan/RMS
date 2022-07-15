import React,{useState} from 'react'

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Modal from '../../ui/Modal';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { TextareaAutosize } from '@mui/material';

import CheckIcon from '@mui/icons-material/Check'

import { sendCongratulationMail } from '../../../api/api.js';

const TooltipShortlist = (props) => {

    const[select, setSelect] = useState(false)
    const[addedJobs,setAddedJobs] = useState()


    const[formManager, setFormManager] = React.useState({text: '',
  })

//   const userEmail = JSON.parse(localStorage.getItem('userData')).emailid;
   const selectHandler = () => {
        setSelect(true)
    }

    const closeSelectHandler = () =>{
        setSelect(false)
        setAddedJobs(false);
    }

    // const closeHandler=() =>{
    //   setAddedJobs(false);
    // }

    const sendEmail = (event) => {
        event.preventDefault();
        if(!isValid()){
          alert('fill required details')
          return
        }
        const data = new FormData(event.currentTarget);
        var scheduleTestData = {
    
      emailid: props.props.emailid,
        text: data.get('text')
        }
        console.log(scheduleTestData)
        
        sendCongratulationMail(scheduleTestData)
        setAddedJobs(true);
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

    // const isValid = () => {
    //     for(let i in formManager){
    //       if(formManager[i].length === 0){
    //         return false
    //       }
    //     }
    //     return true;
    //   }

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
                  Send Mail successfully!
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
            <Tooltip title="Send Confirmation Mail">
                <IconButton sx={{mt: 1, mb: 1, ml: 2}} onClick={selectHandler}>
                <CheckIcon/>
                </IconButton>
            </Tooltip>

            {select && <Modal onClose={props.onClose}>
          {/* <Box>
            <h4></h4>
          </Box> */}
            <Box sx={{ textAlign: 'center', m: 1, fontWeight: 'bold' }}>Send Confirmation Mail to {props.props.firstName} {props.props.lastName}</Box>
            <Box sx={{ textAlign: 'center', m: 1, fontWeight: 'normal',fontSize: '0.8rem' }}>Email Address {props.props.emailid}
            </Box>
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '45ch' },
            }}
            noValidate
            onSubmit={sendEmail}
            autoComplete="off"
            >
            {/* <TextField id="filled-basic" name="name" label="Name" variant="filled" />
            <TextField id="filled-basic" name="email" label="Email" variant="filled" /> */}
            <TextareaAutosize id="filled-basic" aria-label="minimum height"
                minRows={2}
                onChange={(event) => {managerHandler(event,'text')}} 
                placeholder="Enter Text"
                style={{ width: 400 }} required fullWidth name="text" label="Congratulation Text" variant="filled" />


            {/* <TextField id="filled-basic" label="JD" name="jobDescription" variant="filled" /> */}
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
                    Send mail
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
        </Modal>}
     

        </div>

    )
}

export default TooltipShortlist
