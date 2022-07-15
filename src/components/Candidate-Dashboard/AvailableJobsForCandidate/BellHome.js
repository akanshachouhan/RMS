import { Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { formActions } from "../../../store/applyForm";
// import "./BellHome.css";
import img from "../../../Images/home1.png";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import logo from "../../../Images/top-logo.png";
import Box from "@mui/material/Box";
import classes from "../../Candidate-Dashboard/AvailableJobsForCandidate/CandidateCard.module.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
import { showJobUrl } from "../../../api/constants";

export default function BellHome(props) {
  console.log("props", props);

  const [open, setOpen] = React.useState(false);

  const [fresherForm, setFresherForm] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");

  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(showJobUrl);
      const postData = await response.json();
      setJobs(postData);
      setIsLoading(false);

      console.log(postData);
    };
    fetchData().catch((error) => {
      console.log(error);
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value
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
    dispatch(formActions.nextForm({ key: "jobInfo", data: designation }));
    console.log("props ----", props);
    // history.push("/dashboard/candidate-personainfo")
    // history.push("/dashboard/Linear")
    history.push("/dashboard/bellform");
    // let fresher = prompt("Are you Fresher or Experience","Fresher")
    // alert(`Are you ${fresher} ?`)
    // props.history.push("/dashboard/education-information")
  };

  const handleOnClickFresher = () => {
    history.push({ pathname: "/BellurbisFreshersForm",state: {detail:DATA.designation}});
  };
  const handleOnClickExperience = () => {
    history.push("/BellurbisExperienceForm");
  };

  console.log("propppsssss", props);
  const DATA = [
    {

      id:1,
      designation:"js",
      location:"indore",
      experience:"1 year",
      skills: "js, react",
      description:"abc",

    },
    {
      id:2,
      designation:"react",
      location:"indore",
      experience:"2 year",
      skills: "js, react",
      description:"abc",

    },
    {
      id:3,
      designation:"java",
      location:"indore",
      experience:"3 year",
      skills: "js, react",
      description:"abc",

    },
    {
      id:4,
      designation:"python",
      location:"indore",
      experience:"4 year",
      skills: "js, react",
      description:"abc",

    },

  ]

  return (
    <>
      <Box sx={{display:"flex",alignItems:"center",flexWrap:"wrap"}}>
        {DATA.map((data)=>(

          // <Box key={data.id} >
          //   <Card>
          //     <CardContent>
          //     <h4><b>designation</b></h4> 
          //      <p>Location - {data.location}</p> 
           
          //    {/* <h6>Mode -  Indore /WFH</h6> */}
          //      <h6>Experience - {data.experience}</h6>
          //      <h6>Skills - {data.skills}</h6>
          //      <h6>Description - {data.description}</h6>
          //     </CardContent>
          //   </Card>
          // </Box>  
          
          
          <div  className={classes.mainDiv}>
          <div className={classes.subDiv}>
            <div className={classes.card}>
              <h5>
                <b>{data.designation}</b>
              </h5>
              <h5> Experience - {data.experience}</h5>
              <h5> Skills - {data.skills} </h5>
              <h5> Location - {data.location} </h5>
  
              <h5> </h5>
  
              <div className={classes.btnDiv}>
                <Button
                  onClick={()=>handleClickOpen()}
                  style={{
                    background: "#0E2036",
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
                  sx={{width:"390px",mt: 3, mb: 2 }}
                >
                  Apply
                </Button>
              </div>
            </div>
          </div>
          </div>



        ))}
        

        {/* <div  className={classes.mainDiv}>
        <div className={classes.subDiv}>
          <div className={classes.card}>
            <h5>
              <b>{props.designation}</b>
            </h5>
            <h5> Experience - {props.experience}</h5>
            <h5> Skills - {props.skills} </h5>
            <h5> Location - {props.location} </h5>

            <h5> </h5>

            <div className={classes.btnDiv}>
              <Button
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
          </div>
        </div>
        </div> */}

        <Dialog
          // fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={open}
          onClose={handleClose}
        >
          <DialogTitle
            style={{
              fontSize: "1.1rem",
              fontWeight: "bold",
              marginTop: "1px",
              //   background: "#09253D",
            }}
          >
            Applied for - {props.designation}
          </DialogTitle>
          <DialogContent>
            <marquee style={{ fontWeight: "bold", color: "#09253D", mt: 2 }}>
              Please select you are Fresher / Experience!
            </marquee>
            <Box
              noValidate
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                m: "auto",
                width: "fit-content",
              }}
            >
              <Box
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: "100%",
                    fontSize: "0.7rem",
                  },
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
                  style={{ color: "white", background: "#09253D" }}
                  onClick={handleOnClickFresher}
                >
                  Fresher
                </Button>

                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  style={{ color: "white", background: "#09253D" }}
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
            <CloseIcon
              sx={{ mb: 2, mr: "6%" }}
              onClick={handleClose}
            ></CloseIcon>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
}
