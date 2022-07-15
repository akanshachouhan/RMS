import React from 'react'
import image from "../../Images/home1.png";
import logoBell from "../../Images/top-logo.png";
import "./FresherBellForm.css";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import BellAddGraduation from "./BellAddGraduation";
import ImgUpload from "./ImgUpload";
import NumberFormat from "react-number-format";
import { Box } from "@mui/system";
import { useLocation } from 'react-router-dom';
import Button from "@mui/material/Button";
import {
  TextField,
  Grid,
  Typography,
  Autocomplete,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import axios from "axios";
import FileUpload from "./FileUpload";
import Utils from '../Career-Opportunities/utils';


export default function FreshersBellFrom(props) {

  // localStorage.getItem('imgId');
  // localStorage.setItem(showFormData);
  //   const showFormData =  useSelector(state => state.applyForm.allFormData)
    
    
  //   useEffect(
  //   ()=>{console.log('form data from redux - ',showFormData.jobInfo)},[showFormData]  
  //   )

  //   function formHandler(e){
  //     e.preventDefault()
  //   }

  const intialValues = {
    firstName: "",
    emailId: "",
    contactNumber: "",
    address: "",
    degreeForUg:"",
     branchForUg:"",
        percentageForUg:"",
        instituteNameForUg:"",
        passingYearForUg:"",
        startingYearForUg:"",
        universityNameForUg:"",
        degreeForPg:"",
        branchForPg:"",
        percentageForPg:"",
        instituteNameForPg:"",
        passingYearForPg:"",
        universityNameForPg:"",
        gradesForPg:"",
        startingYearForPg:"",
        percentageForHss:"",
        passingYearForHss:"",
        boardTypeForHss:"",
        schoolNameForHss:"",
        percentageForHighSchool:"",
        passingYearForHighSchool:"",
        boardTypeForHighSchool:"",
        schoolNameForHighSchool:"",
  };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [values, setValues] = useState();
  const [data, setData] = useState([]);
  const [getCountry, setCountry] = useState();
  const [getState, setState] = useState([]);
  const [selectedState, setSelectedState] = useState();
  const [cities, setCities] = useState([]);
  const [genders,setGenders] = useState("");

  const location = useLocation();
  useEffect(()=>{
    console.log(location.state.detail)
  })

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleCountries = (e) => {
    setValues(e.target.value);
    console.log(setValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    console.log(formValues,genders);
    console.log(" Your Gender --- ", genders)
    console.log(" Your Country --- ", cities)
    
  };

  useEffect(()=>{
    axios
    .get(
      "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
    )
    .then((res) => {
      //  console.log(res)
      setData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  },[])

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.firstName = "Please Enter your valid Name!";
    }
    if (!values.address) {
      errors.address = "Please Enter your valid Address!";
    }
    if (!values.degreeForPg) {
      errors.degreeForPg = "Please Fill [ N/A ] If You are not Aplicable!";
    }
    if (!values.branchForPg) {
      errors.branchForPg = "Please Fill [ N/A ] If You are not Aplicable!";
    }
    if (!values.percentageForPg) {
      errors.percentageForPg = "Please Fill [ N/A ] If You are not Aplicable!";
    }
    if (!values.instituteNameForPg) {
      errors.instituteNameForPg = "Please Fill [ N/A ] If You are not Aplicable!";
    }
    if (!values.universityNameForPg) {
      errors.universityNameForPg = "Please Fill [ N/A ] If You are not Aplicable!";
    }
    if (!values.passingYearForPg) {
      errors.passingYearForPg = "Please Fill [ N/A ] If You are not Aplicable!";
    }
    if (!values.startingYearForPg) {
      errors.startingYearForPg = "Please Fill [ N/A ] If You are not Aplicable!";
    }
    if (!values.gradesForPg) {
      errors.gradesForPg = "Please Fill [ N/A ] If You are not Aplicable!";
    }
    if (!values.degreeForUg) {
      errors.degreeForUg = "This Field is required!";
    }
    if (!values.branchForUg) {
      errors.branchForUg = "This Field is required!";
    }
    if (!values.percentageForUg) {
      errors.percentageForUg = "This Field is required!";
    }
    if (!values.instituteNameForUg) {
      errors.instituteNameForUg = "This Field is required!";
    }
    if (!values.universityNameForUg) {
      errors.universityNameForUg = "This Field is required!";
    }
    if (!values.passingYearForUg) {
      errors.passingYearForUg = "This Field is required!";
    }
    if (!values.startingYearForUg) {
      errors.startingYearForUg = "This Field is required!";
    }
    if (!values.gradesForUg) {
      errors.gradesForUg = "This Field is required!";
    }
    if (!values.schoolNameForHss) {
      errors.schoolNameForHss = "This Field is required!";
    }
    if (!values.boardTypeForHss) {
      errors.boardTypeForHss = "This Field is required!";
    }
    if (!values.percentageForHss) {
      errors.percentageForHss = "This Field is required!";
    }
    if (!values.passingYearForHss) {
      errors.passingYearForHss = "This Field is required!";
    }
    if (!values.schoolNameForHighSchool) {
      errors.schoolNameForHighSchool = "This Field is required!";
    }
    if (!values.boardTypeForHighSchool) {
      errors.boardTypeForHighSchool = "This Field is required!";
    }
    if (!values.percentageForHighSchool) {
      errors.percentageForHighSchool = "This Field is required!";
    }
    if (!values.passingYearForHighSchool) {
      errors.passingYearForHighSchool = "This Field is required!";
    }
    if (!values.emailId) {
      errors.emailId = "Email Id is required!";
    } else if (!regex.test(values.emailId)) {
      errors.emailId = "This is not a valid email Id format!";
    }
    if (!values.contactNumber) {
      errors.contactNumber = "Contact Numberis required";
    } else if (values.contactNumber.length < 10) {
      errors.contactNumber = "Contact Number must be 10 characters";
    } else if (values.contactNumber.length > 10) {
      errors.contactNumber =
        "Contact Number cannot exceed more than 10 characters";
    }
    return errors;
  };

  const country = [...new Set(data.map(item=>item.country))];
   country.sort();
   console.log("I am Contry",country)

   const handleCountry=(e)=>{
    let states = data.filter(state=>state.country===e.target.value);
    states=[...new Set(states.map(item=>item.subcountry))]
    states.sort(); 
    console.log("I am state",states.indexOf)
    setState(states);
  }

  const handleState = (e)=>{
    let cities = data.filter(city =>city.subcountry === e.target.value)
    setCities(cities);
    console.log("I am cities",cities)
  }
  
 

 

  return (
    <>
    <div>
    <img src={image} alt="Bellurbis" className="aboutAvatarbell" />
   <img src={logoBell} alt="Bellurbis" className="aboutLogobell" />
    </div>

    <div className='applyFor'>
    <p
        style={{
          fontSize: "1.2rem",
          fontWeight: "bold",
          marginTop: "1px",
          marginLeft: "1rem",
        }}
      >
        Applied for - 
        {/* {showFormData.jobInfo} */}
      </p>

    </div>
    <div className='fresherForm'> 
    <form onSubmit={handleSubmit}>
        <Box>
          <Accordion sx={{ paddingBottom: "1%" ,width:"95%"}}>
            <Box
              sx={{
                background: "#1A2E4D",
                height: "47px",
                color: "white",
                fontSize: "17px",
                paddingLeft: "0%",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                {" "}
                Personal Information
           
              </AccordionSummary>
              
            </Box>
             
            <AccordionDetails
              sx={{
                borderStyle: "solid",
                borderColor: "#FFFFFF;",
                borderRadius: "5px",
                borderWidth: "thin",
              }}
            >
            <label style={{marginTop:"10px",background:"#1A2E4D",fontSize: "0.9rem", fontWeight: "bold" ,color:"white",marginLeft:"2%"}}>Personal Information Details : <span style={{color:"#16B7BF"}}>" Please Fill All The Informations ! "</span></label>
            
            
            <ImgUpload/>
          

              <Grid container spacing={0} sx={{ marginTop:"1%", pl: 1, pr: 1 }}>
                <Grid item lg={3}>
                  {" "}
                  <div>
                    <label style={{ fontSize: "0.9rem", fontWeight: "bold" ,color:"#1A2E4D"}}>Full Name *</label>
                    <input
                      sx={{ fontSize: "2px"}}
                      id="firstName-input"
                      name="firstName"
                      label="First Name *"
                      type="text"
                      placeholder='Please enter your name!'
                      value={formValues.firstName}
                      onChange={handleOnChange}
                      variant="standard"
                      size="small"
                    />
                  </div>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                    {formErrors.firstName}
                  </p>
                </Grid>{" "}
                
                <Grid item lg={3} xs={12}>
                  <div>
                    {" "}
                    <label style={{fontSize: "0.9rem", fontWeight: "bold" ,color:"#1A2E4D"}}>Email Id *</label>
                    <input
                      sx={{ fontSize: "0.1rem", fontWeight: "bold" }}
                      id="emailId"
                      name="emailId"
                      label="Email Id *"
                      placeholder='Ex: Bellurbis@gmail.com'
                      type="text"
                      value={formValues.emailId}
                      onChange={handleOnChange}
                      variant="standard"
                      size="small"
                    />
                  </div>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                    {formErrors.emailId}
                  </p>
                </Grid>
                <Grid item lg={3} xs={12}>
                  <div>
                    <div>
                      {" "}
                      <label style={{fontSize: "0.9rem", fontWeight: "bold" ,color:"#1A2E4D"}}>Contact Number *</label>
                      <input
                        sx={{ fontSize: "0.8rem", fontWeight: "bold" }}
                        id="contactNumber"
                        name="contactNumber"
                        label="Contact Number *"
                        placeholder='Enter 10 digit number'
                        type="text" inputmode="numeric"
                        value={formValues.contactNumber}
                        onChange={handleOnChange}
                        variant="standard"
                        size="small"
                      />
                    </div>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      {formErrors.contactNumber}
                    </p>
                  </div>
                </Grid>

                <Grid item lg={3} xs={12}>
                  <label style={{fontSize: "0.9rem", fontWeight: "bold" ,color:"#1A2E4D"}}>Gender *</label>
                  <br></br>
                  <select onChange={(e)=>setGenders(e.target.value)} style={{width:"80%" ,height:"30px"}}   required>
                    <option >Select Gender</option>
                    <option>Female</option>
                      <option>Male</option>
                      <option>Others</option>
                      
                  </select>
                  </Grid>

                <Grid item lg={3} xs={12}>
                  <label style={{fontSize: "0.9rem", fontWeight: "bold" ,color:"#1A2E4D"}}>Country *</label>
                  <select style={{width:"80%" ,height:"30px"}} onChange={(e) => handleCountry(e)} required>
                    <option value="">Select Country</option>
                    {country.map((items) => (
                      <option key={items} value={getCountry}>
                        {items}
                      </option>
                    ))}
                  </select>
                  </Grid>
              
               
                  <Grid item lg={3} xs={12}>
          <div>       
        <label style={{fontSize: "0.9rem", fontWeight: "bold" ,color:"#1A2E4D"}}>State *</label>
        <br></br>
        <select style={{width:"80%" ,height:"30px"}} onChange={(e)=>handleState(e)} required>
        <option value="">select State</option>
          {
            getState.map(items=><option key={items} value={selectedState}>{items}</option>)
          }
        </select>
        </div>
        </Grid>
        
        <Grid item lg={3} xs={12}>
        <div>       
        <label style={{fontSize: "0.9rem", fontWeight: "bold" ,color:"#1A2E4D"}}>City *</label >
        <br></br>
          <select style={{width:"80%" ,height:"30px"}} required>
        <option value="">select City</option>
          {
            cities.map(items=><option key={items.name} >{items.name}</option>)
          }
        </select>
        </div>
        </Grid>

        <Grid item lg={3}>
                  {" "}
                  <div>
                    <label style={{fontSize: "0.9rem", fontWeight: "bold" ,color:"#1A2E4D"}}>Address *</label>
                    <input
                      sx={{ fontSize: "0.8rem", fontWeight: "bold" }}
                      id="address"
                      name="address"
                      type="text"
                      placeholder='Please enter your address!'
                      value={formValues.address}
                      onChange={handleOnChange}
                      variant="standard"
                      size="small"
                    />
                  </div>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                    {formErrors.address}
                  </p>
                </Grid>{" "}
                
              </Grid>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ width: "95%", paddingBottom: "1%" }}>
            <Box
              sx={{
                width: "100%",
                background: "#1A2E4D",
                height: "45px",
                color: "white",
                fontSize: "17px",
                paddingLeft: "0%",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                {" "}
                Educational Information
              </AccordionSummary>
            </Box>
            <div className='addMoreEdu'>
              <BellAddGraduation/>
           </div>

            <AccordionDetails
              sx={{
                borderStyle: "solid",
                borderColor: "#FFFFFF;",
                borderRadius: "5px",
                borderWidth: "thin",
              }}
            >

           
           <label style={{marginTop:"15px",background:"#1A2E4D",fontSize: "0.9rem", fontWeight: "bold" ,color:"white",marginLeft:"2%"}}>Educational Information Details : <span style={{color:"#16B7BF"}}>" Please Fill All The Informations ! "</span></label>

           <FileUpload/>
           <Grid container spacing={0} sx={{ marginTop:"1%", pl: 1, pr: 1 }}>
           
           <Grid item lg={3}>
             {" "}
             
             <div>
               <label style={{fontSize: "0.9rem", fontWeight: "bold" ,color:"gray"}}>Degree *</label>
              <br></br>
               <input
                 sx={{ fontSize: "0.8rem", fontWeight: "bold"}}
                 id="degreeForUg"
                 name="degreeForUg"
                 type="text"
                 value={formValues.degreeForUg}
                 onChange={handleOnChange}
                 variant="standard"
                 size="small"
               />
             </div>
             <p
               style={{
                 fontSize: "0.8rem",
                 fontWeight: "bold",
                 color: "red",
               }}
             >
               {formErrors.degreeForUg}
             </p>
           </Grid>{" "}

           <Grid item lg={3} xs={12}>
           {" "}
             <div>
               <label style={{fontSize: "0.9rem", fontWeight: "bold" ,color:"gray"}}>Field Of Study *</label>
               <input
                 sx={{ fontSize: "0.8rem", fontWeight: "bold"}}
                 id="branchForUg"
                 name="branchForUg"
                 type="text"
                 value={formValues.branchForUg}
                 onChange={handleOnChange}
                 variant="standard"
                 size="small"
               />
             </div>
             <p
               style={{
                 fontSize: "0.8rem",
                 fontWeight: "bold",
                 color: "red",
               }}
             >
               {formErrors.branchForUg}
             </p>
           </Grid>

           <Grid item lg={3} xs={12}>
           {" "}
             <div>
               <label style={{fontSize: "0.9rem", fontWeight: "bold" ,color:"gray"}}>Percentage *</label>
               <input
                 sx={{ fontSize: "0.8rem", fontWeight: "bold"}}
                 id="percentageForUg"
                 name="percentageForUg"
                 type="text"
                 value={formValues.percentageForUg}
                 onChange={handleOnChange}
                 variant="standard"
                 size="small"
               />
             </div>
             <p
               style={{
                 fontSize: "0.8rem",
                 fontWeight: "bold",
                 color: "red",
               }}
             >
               {formErrors.percentageForUg}
             </p>
           </Grid>

           <Grid item lg={3} xs={12}>
           {" "}
             <div>
               <label style={{fontSize: "0.9rem", fontWeight: "bold" ,color:"gray"}}>Institute Name *</label>
               <input
                 sx={{ fontSize: "0.8rem", fontWeight: "bold"}}
                 id="instituteNameForUg"
                 name="instituteNameForUg"
                 type="text"
                 value={formValues.instituteNameForUg}
                 onChange={handleOnChange}
                 variant="standard"
                 size="small"
               />
             </div>
             <p
               style={{
                 fontSize: "0.8rem",
                 fontWeight: "bold",
                 color: "red",
               }}
             >
               {formErrors.instituteNameForUg}
             </p>
           </Grid>
           <Grid item lg={3} xs={12}>
           {" "}
             <div>
               <label style={{fontSize: "0.9rem", fontWeight: "bold" ,color:"gray"}}>University Name *</label>
               <input
                 sx={{ fontSize: "0.8rem", fontWeight: "bold"}}
                 id="universityNameForUg"
                 name="universityNameForUg"
                 type="text"
                 value={formValues.universityNameForUg}
                 onChange={handleOnChange}
                 variant="standard"
                 size="small"
               />
             </div>
             <p
               style={{
                 fontSize: "0.8rem",
                 fontWeight: "bold",
                 color: "red",
               }}
             >
               {formErrors.universityNameForUg}
             </p>
           </Grid>
           <Grid item lg={3} xs={12}>
           {" "}
             <div>
               <label style={{fontSize: "0.9rem", fontWeight: "bold" ,color:"gray"}}>Start Date *</label>
               <input
                 sx={{ fontSize: "0.8rem", fontWeight: "bold"}}
                 id="startingYearForUg"
                 name="startingYearForUg"
                 type="text"
                 value={formValues.startingYearForUg}
                 onChange={handleOnChange}
                 variant="standard"
                 size="small"
               />
             </div>
             <p
               style={{
                 fontSize: "0.8rem",
                 fontWeight: "bold",
                 color: "red",
               }}
             >
               {formErrors.startingYearForUg}
             </p>
           </Grid>
           <Grid item lg={3} xs={12}>
           {" "}
             <div>
               <label style={{fontSize: "0.9rem", fontWeight: "bold" ,color:"gray"}}>End Date *</label>
               <input
                 sx={{ fontSize: "0.8rem", fontWeight: "bold"}}
                 id="passingYearForUg"
                 name="passingYearForUg"
                 type="text"
                 value={formValues.passingYearForUg}
                 onChange={handleOnChange}
                 variant="standard"
                 size="small"
               />
             </div>
             <p
               style={{
                 fontSize: "0.8rem",
                 fontWeight: "bold",
                 color: "red",
               }}
             >
               {formErrors.passingYearForUg}
             </p>
           </Grid>
           <Grid item lg={3} xs={12}>
           {" "}
             <div>
               <label style={{fontSize: "0.9rem", fontWeight: "bold" ,color:"gray"}}>Grades *</label>
              <br></br>
               <input
                 sx={{ fontSize: "0.8rem", fontWeight: "bold"}}
                 id="gradesForUg"
                 name="gradesForUg"
                 type="text"
                 value={formValues.gradesForUg}
                 onChange={handleOnChange}
                 variant="standard"
                 size="small"
               />
             </div>
             <p
               style={{
                 fontSize: "0.8rem",
                 fontWeight: "bold",
                 color: "red",
               }}
             >
               {formErrors.gradesForUg}
             </p>
           </Grid>
           
           </Grid>
           <label style={{marginTop:"3px",marginBottom:"15px",background:"#1A2E4D",fontSize: "0.9rem", fontWeight: "bold" ,color:"white",marginLeft:"2%"}}>Higher Secondary Details : <span style={{color:"#16B7BF"}}> " Please Fill All The Informations ! "</span></label>
      <Grid container spacing={3} sx={{  pl: 1, pr: 1 }}>
      
           <Grid item lg={3}>
             {" "}
             
             <div>
               <label style={{fontSize: "0.9rem", fontWeight: "bold" ,color:"gray"}}>School Name *</label>
               <input
                 sx={{ fontSize: "0.8rem", fontWeight: "bold"}}
                 id="schoolNameForHss"
                 name="schoolNameForHss"
                 type="text"
                 value={formValues.schoolNameForHss}
                 onChange={handleOnChange}
                 variant="standard"
                 size="small"
               />
             </div>
             <p
               style={{
                 fontSize: "0.8rem",
                 fontWeight: "bold",
                 color: "red",
               }}
             >
               {formErrors.schoolNameForHss}
             </p>
           </Grid>{" "}

           <Grid item lg={3} xs={12}>
           {" "}
             <div>
               <label style={{fontSize: "0.9rem", fontWeight: "bold" ,color:"gray"}}>Board Type *</label>
               <input
                 sx={{ fontSize: "0.8rem", fontWeight: "bold"}}
                 id="boardTypeForHss"
                 name="boardTypeForHss"
                 type="text"
                 value={formValues.boardTypeForHss}
                 onChange={handleOnChange}
                 variant="standard"
                 size="small"
               />
             </div>
             <p
               style={{
                 fontSize: "0.8rem",
                 fontWeight: "bold",
                 color: "red",
               }}
             >
               {formErrors.boardTypeForHss}
             </p>
           </Grid>

           <Grid item lg={3} xs={12}>
           {" "}
             <div>
               <label style={{fontSize: "0.9rem", fontWeight: "bold" ,color:"gray"}}>Percentage *</label>
               <input
                 sx={{ fontSize: "0.8rem", fontWeight: "bold"}}
                 id="percentageForHss"
                 name="percentageForHss"
                 type="text"
                 value={formValues.percentageForHss}
                 onChange={handleOnChange}
                 variant="standard"
                 size="small"
               />
             </div>
             <p
               style={{
                 fontSize: "0.8rem",
                 fontWeight: "bold",
                 color: "red",
               }}
             >
               {formErrors.percentageForHss}
             </p>
           </Grid>

           <Grid item lg={3} xs={12}>
           {" "}
             <div>
               <label style={{fontSize: "0.9rem", fontWeight: "bold" ,color:"gray"}}>Passing Year *</label>
               <br></br>
               <input
                 sx={{ fontSize: "0.8rem", fontWeight: "bold"}}
                 id="passingYearForHss"
                 name="passingYearForHss"
                 type="date"
                 value={formValues.passingYearForHss}
                 onChange={handleOnChange}
                 variant="standard"
                 size="small"
               />
             </div>
             <p
               style={{
                 fontSize: "0.8rem",
                 fontWeight: "bold",
                 color: "red",
               }}
             >
               {formErrors.passingYearForHss}
             </p>
           </Grid>
          
           
           </Grid>
           <label style={{marginBottom:"15px",marginTop:"3px",background:"#1A2E4D",fontSize: "0.9rem", fontWeight: "bold" ,color:"white",marginLeft:"2%"}}>High School Details : <span style={{color:"#16B7BF"}}> " Please Fill All The Informations ! "</span></label>
      <Grid container spacing={3} sx={{  pl: 1, pr: 1 }}>
      
           <Grid item lg={3}>
             {" "}
             
             <div>
               <label style={{fontSize: "0.9rem", fontWeight: "bold" ,color:"gray"}}>School Name *</label>
               <input
                 sx={{ fontSize: "0.8rem", fontWeight: "bold"}}
                 id="schoolNameForHighSchool"
                 name="schoolNameForHighSchool"
                 type="text"
                 value={formValues.schoolNameForHighSchool}
                 onChange={handleOnChange}
                 variant="standard"
                 size="small"
               />
             </div>
             <p
               style={{
                 fontSize: "0.8rem",
                 fontWeight: "bold",
                 color: "red",
               }}
             >
               {formErrors.schoolNameForHighSchool}
             </p>
           </Grid>{" "}

           <Grid item lg={3} xs={12}>
           
             <div>
               <label style={{fontSize: "0.9rem", fontWeight: "bold" ,color:"gray"}}>Board Type *</label>
               <input
                 sx={{ fontSize: "0.8rem", fontWeight: "bold"}}
                 id="boardTypeForHighSchool"
                 name="boardTypeForHighSchool"
                 type="text"
                 value={formValues.boardTypeForHighSchool}
                 onChange={handleOnChange}
                 variant="standard"
                 size="small"
               />
             </div>
             <p
               style={{
                 fontSize: "0.8rem",
                 fontWeight: "bold",
                 color: "red",
               }}
             >
               {formErrors.boardTypeForHighSchool}
             </p>
           </Grid>

           <Grid item lg={3} xs={12}>
           {" "}
             <div>
               <label style={{fontSize: "0.9rem", fontWeight: "bold" ,color:"gray"}}>Percentage *</label>
               <input
                 sx={{ fontSize: "0.8rem", fontWeight: "bold"}}
                 id="percentageForHighSchool"
                 name="percentageForHighSchool"
                 type="text"
                 value={formValues.percentageForHighSchool}
                 onChange={handleOnChange}
                 variant="standard"
                 size="small"
               />
             </div>
             <p
               style={{
                 fontSize: "0.8rem",
                 fontWeight: "bold",
                 color: "red",
               }}
             >
               {formErrors.percentageForHighSchool}
             </p>
           </Grid>

           <Grid item lg={3} xs={12}>
           {" "}
             <div>
               <label style={{fontSize: "0.9rem", fontWeight: "bold" ,color:"gray"}}>Passing Year *</label>
               <br></br>
               <input
                 sx={{ fontSize: "0.8rem", fontWeight: "bold"}}
                 id="passingYearForHighSchool"
                 name="passingYearForHighSchool"
                 type="date"
                 value={formValues.passingYearForHighSchool}
                 onChange={handleOnChange}
                 variant="standard"
                 size="small"
               />
             </div>
             <p
               style={{
                 fontSize: "0.8rem",
                 fontWeight: "bold",
                 color: "red",
               }}
             >
               {formErrors.passingYearForHighSchool}
             </p>
           </Grid>
          
           
           </Grid>

            </AccordionDetails>
          </Accordion>
         

        </Box>
        <div>
          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "100%", fontSize: "0.rem" },
              width: "10%",
              mt: 1,
              ml: 120,
              display: "flex",
              fontSize: "0.8rem",
              fontWeight: "bold",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Button
              sx={{backgroundColor:"#14607C"}}
              variant="contained"
              color="primary"
              // onClick={handleOnClickExperience}
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </div>
      </form>
      </div>
    </>
  )
}
