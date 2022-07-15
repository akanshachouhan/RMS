import { Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router";
import {formActions} from '../../../src/store/applyForm';
// import "./Home.css";
import img from "../../Images/home1.png";
import logo from "../../Images/top-logo.png";
import Box from '@mui/material/Box';
import classes from "../Candidate-Dashboard/AvailableJobsForCandidate/CandidateCard.module.css";
import Button from "@mui/material/Button";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';


export default function Home(props) {
    

    const [open, setOpen] = React.useState(false);
  
    const [fresherForm, setFresherForm] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');
  
    
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
  
    const handleMaxWidthChange = (event) => {
      setMaxWidth(
        // @ts-expect-error autofill of arbitrary value is not handled.
        event.target.value,
      );
    };
  
    const handleFullWidthChange = (event) => {
      // setFullWidth(event.target.checked);
    };
  
    let history = useHistory();
  
    // const form = React.useRef(null);
  
    const dispatch = useDispatch();
  
    
    const handleJobsSubmit = (designation) => {
      
      // let obj = {}
      // Utils.setFile(fileInput.current.name, fileInput.current.files[0]);
      // data.forEach((value, key) => {obj[key] = value})
      dispatch(formActions.nextForm({key: 'jobInfo',data: designation}))
      console.log('props ----',props)
      // history.push("/dashboard/candidate-personainfo")
      // history.push("/dashboard/Linear")
      history.push("/dashboard/bellform")
      // let fresher = prompt("Are you Fresher or Experience","Fresher")
      // alert(`Are you ${fresher} ?`)
      // props.history.push("/dashboard/education-information")
    };
  
    
  
    const handleOnClickFresher = () => {
      history.push("/dashboard/bellformFresher")
    };
    const handleOnClickExperience = () => {
      history.push("/dashboard/bellform")
    };
  

  return (
      <>
      <h1>{props.experience}</h1>
    <div className='home'>    
   <div>
   <img src={img} alt="Bellurbis" className="aboutAvatar" />
   <img src={logo} alt="Bellurbis" className="aboutLogo" />
   </div>
     <div>
        <button className='loginButton'>Login</button>
     </div>

    
 <div className="card">
  <div className="container">
    <h4><b>Associate - React js Developer</b></h4> 
    <p>Location - Indore M.P</p> 

    <h6>Mode -  Indore /WFH</h6>
    <h6>Experience - {props.experience}</h6>
    <h6>Skills - React.js , Redux</h6>
    <h6>Description - PDF</h6>
   
  </div>
  <button className='applyButton' onClick={handleClickOpen}
>Apply</button>
</div>

<Dialog
         
        // fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle  style={{
          fontSize: "1.1rem",
          fontWeight: "bold",
          marginTop: "1px",
        //   background: "#09253D",
        }}>Applied for - {props.designation}</DialogTitle>
        <DialogContent>
          <marquee style={{fontWeight: "bold",color:"#09253D",mt:2}}>
            Please select you are Fresher / Experience!
          </marquee>
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}
          >

              <Box
        sx={{
          "& > :not(style)": { m: 1, width: "100%" ,fontSize: "0.7rem"},
          width: "100%",
          mt: 1,
          // ml: 1,
          display: "flex",
         fontSize: "0.7rem",
        fontWeight: "bold",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >

              {/* {isStepOptional(activeStep) && ( */}
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  style={{color:"white",background:"#09253D"}}
                  onClick={handleOnClickFresher}
                  >
                  Fresher
                </Button>
              
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                style={{color:"white",background:"#09253D"}}
                onClick={handleOnClickExperience}
                type="submit"
              >
                Experience
              </Button>
              </Box>
              {/* <CloseIcon sx={{  ml: 35,mb: 2,mr:"6%" }} onClick={handleClose}></CloseIcon> */}
          
          </Box>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose} style={{
                background: "rgb(20,96,124)",
                "&:hover": {
                  background: "rgb(20,96,124)",
                },
                "&:active": {
                  background: "rgb(20,96,124)",
                },
                color: "#FFFFFF",
                fontSize: "0.7rem",
                fontWeight: "bold",
              }}
              variant="contained"
              sx={{  mb: 2,mr:"6%" }}>Close</Button> */}
              <CloseIcon sx={{  mb: 2,mr:"6%" }} onClick={handleClose}></CloseIcon>
        </DialogActions>
      </Dialog>

</div>
</>

    
  )
}
