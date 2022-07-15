import React,{useState} from 'react'

import AddIcon from  '@mui/icons-material/Add';

import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Modal from '../../ui/Modal';
import { Box } from '@mui/system';
import { Button } from '@mui/material';

import { testScoreToTechnical } from '../../../api/api';
function TooltipForInterview(props) {

    
    const[select, setSelect] = useState(false)

    const [addedJobs, setAddedJobs] = useState()

    const[formManager, setFormManager] = React.useState({testScore: '',
  })
    const selectHandler = () => {
        setSelect(true)
    }

    const closeSelectHandler = () =>{
        setSelect(false)
        setAddedJobs(false)
    }
    
   
    const sendTestScore = (event) => {
        event.preventDefault();
        if(!isValid()){
          alert('fill required details')
          return
        }
        const data = new FormData(event.currentTarget);
        var scheduleTestData = {
    
      emailid: props.props.emailid,
          testScore: data.get('testScore'),
        }
        console.log(scheduleTestData)
        
        testScoreToTechnical(scheduleTestData)
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
                    update test score successfully!
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
             <Tooltip title="Update Test Score">
                <IconButton sx={{mt: 1, mb: 1, ml: 2}} onClick={selectHandler}>
                <AddIcon />
                </IconButton>
            </Tooltip>

        {select &&  
             <Modal onClose={props.onClose}>
             <Box sx={{ textAlign: 'center', m: 1, fontWeight: 'bold' }}>Update Test Score of {props.props.firstName}{props.props.lastName}</Box>
             <Box sx={{display: 'flex',justifyContent: 'center', fontWeight: '0.7rem'}}></Box>
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '22ch' },
            }}
            noValidate
            //  onSubmit={() => {sendTestScore(props)}}
            onSubmit={sendTestScore}
            autoComplete="off"
            >
            {/* <TextField id="filled-basic" required name="designation" label="Job Title" variant="filled" /> */}
            {/* <TextField id="filled-basic" required onChange={(event) => {managerHandler(event,'dateAndTime')}} type="datetime-local" name="dateAndTime" variant="filled" /> */}
            <TextField id="filled-basic"  onChange={(event) => {managerHandler(event,'testScore')}}label="Test Score" type="text" name="testScore" variant="filled" />
            {/* <TextField id="filled-basic" name="time" label="Time" variant="filled" /> */}
            {/* <TextField id="filled-basic" required onChange={(event) => {managerHandler(event,'link')}} label="Link" name="link" variant="filled" /> */}
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
