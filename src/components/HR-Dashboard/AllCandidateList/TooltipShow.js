import React,{useState} from 'react'

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Modal from '../../ui/Modal';
import { Box } from '@mui/system';
import { Button, TableContainer } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import {  staticUrl } from '../../../api/constants';

//const imageUrl = "https://i.imgur.com/fHyEMsl.jpg";




// import CheckIcon from '@mui/icons-material/Check'

// import { sendCongratulationMail } from '../../../api/api.js';

const TooltipShortlist = (props) => {

    console.log('localhost:10000/rms/photos/' + props.props.imageName + '.jpeg');
    const[select, setSelect] = useState(false)
    const[addedJobs,setAddedJobs] = useState()



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
            <Tooltip title="Image">
                <IconButton sx={{mt: 1, mb: 1, ml: 2}} onClick={selectHandler}>
                <ImageIcon/>
                </IconButton>
            </Tooltip>

            {select && <Modal onClose={props.onClose}>
           <TableContainer>
               
           
           <Box sx={{ textAlign: 'center', m: 1, fontWeight: 'bold' }}>Image Of {props.props.firstName}</Box>  
            
         <img src={`${staticUrl}${props.props.imageName}`}  alt="images"></img> 
           <Box sx={{
              '& > :not(style)': { m: 1, width: '100imageId%'},
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
                      <a     href={`${staticUrl}${props.props.imageName}`} download>Download</a>
                    
                 
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
       



      
    
               
           </TableContainer>
                   
        </Modal>}
     

        </div>

    )
}

export default TooltipShortlist
