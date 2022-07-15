import React,{useState} from 'react'
import LaunchIcon from '@mui/icons-material/Launch';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DetailsModal from '../../ui/DetailsModal';
import { Box } from '@mui/system';


import CloseIcon from '@mui/icons-material/Close';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';

const TooltipShow = (props) => {

    const [show, setShow] = useState(false)

    console.log('tooltip data - ', props)

    const showHandler = () => {
        setShow(true)
    }

    const closeShowHandler = () => {
        setShow(false)
    }

//    const downloadTxtFile = () => {
//         const element = document.createElement("a");
//         const file = new Blob([document.getElementById('myInput').value], {type: 'text/plain'});
//         element.href = URL.createObjectURL(file);
//         element.download = "myFile.txt";
//         document.body.appendChild(element); // Required for this to work in FireFox
//         element.click();
//       }

    return (
        <div>
           <Tooltip title="Show Job Description">
                <IconButton sx={{ mt: 1, mb: 1, ml: 3 }} onClick={showHandler}>
                  <LaunchIcon />
                </IconButton>
            </Tooltip> 
            {
                show && <DetailsModal>
                <TableContainer>
                   
                    <Box sx={{padding: '8px 5px', display: 'flex' , alignItems: 'center',justifyContent: 'space-between', fontWeight: 'bold', fontSize: '0.8rem'}} >
                    <AppBar position="static">
      <Toolbar variant="dense">
       
        <Typography variant="h6" color="inherit" component="div">
          Job Description of {props.props.designation}
        </Typography>
        <Tooltip title="Close">
                                <IconButton sx={{mt: 1, mb: 1, ml: 80 }} onClick={closeShowHandler}>
                                    <CloseIcon />
                                </IconButton>
                            </Tooltip>
      </Toolbar>
    </AppBar>
                       
                                {/* <Button
                                onClick={props.onClose}
                                variant="contained"
                                sx={{ mt: 1, mb: 1, ml: 1,background: '#FFB344','&:hover': {
                                    background: "#FFB319",
                                    },'&:active': {
                                    background: "#FFB344",
                                }, fontSize: '0.8rem'}}
                                    >
                                Close
                          </Button> */}
                            
                    </Box>
                        <Box id="myInput">
                            <Box  sx={{display: 'flex',justifyContent: 'center'}}>
                            <Paper  sx={{border: '1px solid #000', padding: '20px'}} >
                                <p> {props.props.jobDescription}</p>
                               
                            {/* <p>fid = {props.id}</p>
                            <p>s_no = {props.id}</p> */}
                            </Paper>
                            
                                </Box>
                             </Box>
                        
                    
                </TableContainer>
                
            </DetailsModal>
            }
        </div>
    )
}

export default TooltipShow
