import { Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { formActions } from "../../../store/applyForm";
import "./BellHome.css";
import img from "../../../Images/home1.png";
import logo from "../../../Images/top-logo.png";
import Box from "@mui/material/Box";
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
import AvailableJobsForCandidate from "./AvailableJobsForCandidate";
import BellHome from "./BellHome";

export default function MainUI(props) {
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
    history.push("/dashboard/bellformFresher");
  };
  const handleOnClickExperience = () => {
    history.push("/dashboard/bellform");
  };

  console.log("propppsssss", props);

  return (
    <>
      <div >
        <div>
          <img src={img} alt="Bellurbis" className="aboutAvatar" />
          <img src={logo} alt="Bellurbis" className="aboutLogo" />
        </div>
        <div><button className='loginButton'>Login</button></div>
        <BellHome />
      </div>
    </>
  );
}
