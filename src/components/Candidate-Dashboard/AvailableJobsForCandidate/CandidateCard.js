import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import classes from "./CandidateCard.module.css";
import Button from "@mui/material/Button";
import {formActions} from '../../../store/applyForm';
import { useHistory } from "react-router";
import TooltipShow from "./TooltipShow";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import { useSelector } from "react-redux";
import { useEffect,useState } from "react";
import BellForm from "../../ApplyStepForm/BellForm";
import LinaerStepper from "../../ApplyStepForm/LinearStepper";
const CandidateCard = (props) => {

  console.log(props)
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
    // history.push("/dashboard/bellhome")
  };
  

  return (
    <div className={classes.mainDiv}>
      <div className={classes.subDiv}>
        <div className={classes.card}>
          <h5><b>{props.designation}</b></h5>
          <h5> Experience - {props.experience}</h5>
          <h5> Skills - {props.skills} </h5>
          <h5> Location - {props.location} </h5>
          {/* <h5> id - {props.identity}</h5> */}
          <h5>
            {" "}
            Job Description - <TooltipShow props={props} />
          </h5>
          
          <div className={classes.btnDiv}>
            <Button
              // onClick={() => {deleteJobCardHandler(props.identity)}}
              // onClick={()=>{handleJobsSubmit(props.designation)}}
              onClick={handleClickOpen}
              style={{
                background: "3399FF",
                "&:hover": {
                  background: "FF2626",
                },
                "&:active": {
                  background: "#E02401",
                },
                color: "#FFFFFF",
                fontSize: "0.8rem",
                fontWeight: "bold",
              }}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
                Apply
            </Button>
          </div>

          {/* <Button  onClick={handleClickOpen}               style={{
                background: "3399FF",
                "&:hover": {
                  background: "FF2626",
                },
                "&:active": {
                  background: "#E02401",
                },
                color: "#FFFFFF",
                fontSize: "0.8rem",
                fontWeight: "bold",
              }}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
        Apply here
      </Button> */}
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
          // background: "#12B6BE",
        }}>Applied for - {props.designation}</DialogTitle>
        <DialogContent>
          <marquee style={{fontWeight: "bold",color:"red",mt:2}}>
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
                  onClick={handleOnClickFresher}
                  >
                  Fresher
                </Button>
              
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
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
      </div>
    </div>
  );
};

export default CandidateCard;
