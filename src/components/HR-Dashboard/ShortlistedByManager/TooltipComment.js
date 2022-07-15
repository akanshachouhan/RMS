import React,{useState} from 'react'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Modal from '../../ui/Modal'
import { Box } from '@mui/system';


import CloseIcon from '@mui/icons-material/Close';


import Toolbar from '@mui/material/Toolbar';

import { MuiBulletedTextArea } from 'react-bulleted-textarea'

import FeedbackIcon from '@mui/icons-material/Feedback';

const TooltipShow = (props) => {

    const [show, setShow] = useState(false)
    //const [addedJobs, setAddedJobs] = useState();

    console.log('tooltip data - ', props)

    const showHandler = () => {
        setShow(true)
    }

    const closeShowHandler = () => {
        setShow(false)
       
    }

   
    return (
        <div>
           <Tooltip title="Comment By Manager">
                <IconButton sx={{ mt: 1, mb: 1, ml: 3 }} onClick={showHandler}>
                  <FeedbackIcon/>
                </IconButton>
            </Tooltip> 
            {
                show &&              <Modal onClose={props.props.onClose}>
               
               <Toolbar variant="dense">  <Box sx={{display: 'flex',justifyContent: 'center', fontWeight: '0.7rem'}}>Comment For {props.props.firstName} {props.props.lastName}</Box> 
       
           <Tooltip title="Close">
                                <IconButton sx={{mt: 1, mb: 1, ml: 15}} onClick={closeShowHandler}>
                                    <CloseIcon />
                                </IconButton>
                            </Tooltip> </Toolbar>
      
               <Box
               component="form"
               sx={{
                   '& > :not(style)': { m: 1, width: '100%' },
               }}
               noValidate
               // onSubmit={() => {handleInterviewSubmit(props.props)}}
               //onSubmit={handleInterviewSubmit}
               autoComplete="off"
               >
               {/* <TextField id="filled-basic" required name="designation" label="Job Title" variant="filled" /> */}
              
              
               {/* <TextField id="filled-basic" name="time" label="Time" variant="filled" /> */}
               {/* <TextareaAutosize id="filled-basic" aria-label="minimum height"
                   minRows={2}
                   placeholder="Enter Comment"
                   style={{ width: 400 }} required fullWidth name="comment" label="Comment" variant="filled" /> */}
   
   <MuiBulletedTextArea
          
           value={props.props.commentByManager}
           
           
           sx={{width:'100%'}}
         />
        
              
               </Box>
           </Modal>
            }
        </div>
    )
}

export default TooltipShow
