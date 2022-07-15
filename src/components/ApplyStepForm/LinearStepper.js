import React, { useState, useEffect } from "react";
import { jobApply} from "../../../src/api/api";
import AddMorePg from './AddMorePg'
import ImgUpload from './ImgUpload'
import FileUpload from "./FileUpload";
import { Box } from "@mui/system";
 import { useSelector } from "react-redux";
import MoreProjects from './MoreProjects'
import Utils from '../Career-Opportunities/utils'
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
// import AddMoreExperience from "./AddMoreExperience";


const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Personal information",
    " Educational Information",
    "Projects Information",
    "Experience Information",
  ];
}

const BasicForm = (props) => {
  localStorage.getItem('imgId');
  localStorage.setItem(showFormData);
    const showFormData =  useSelector(state => state.applyForm.allFormData)
    
    useEffect(
    ()=>{console.log('form data from redux - ',showFormData.jobInfo)},[showFormData]  
    )

    function formHandler(e){
      e.preventDefault()
    }


  const { control , formState:{errors}} = useFormContext();
  return (
    <>

<p
        style={{
          fontSize: "1.2rem",
          fontWeight: "bold",
          marginTop: "1px",
          marginLeft: "1rem",
        }}
      >
        Applied for - {showFormData.jobInfo}
      </p>
      
    
     <ImgUpload/>
  

<Box
        sx={{
          "& > :not(style)": { m: 1, width: "20%" },
          width: "20%",
          m: 2,
          ml: 50,
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      > 
         {/* <Button
         color="secondary"
                variant="contained"
                component="label"
                sx={{ mt: 1, mb:  2, background: '#F58840','&:hover': {
                  background: "#E59934",
               }, }}
              >
               Image
              <input
            ref={fileInput}
            name='image'
            onChange={fileHandler}
            type="file"
            accept="image/*"
            hidden
        
            />
            </Button>
      

            <Button
         color="primary"
                variant="contained"
                component="label"
                sx={{ mt: 1, mb:  2, background: '#F58840','&:hover': {
                  background: "#E59934",
               }, }}
              >
               Resume
              <input
            ref={resInput}
            name='resume'
            onChange={resHandler}
            type="file"
            accept="application/pdf,application/vnd.ms-excel"
            hidden
            />
            </Button> */}
        </Box>

    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1,mt:1,ml:4, width: '24ch' },
      }}
      noValidate
      onSubmit={formHandler}
      autoComplete="off"
    >
       <Controller
        control={control}
        name="firstName"
        rules={{
          required:"Username should be 3-16 characters!",
        }}
        render={({ field }) => (
          <TextField
          id="standard-number"
          name="firstName"
          label=" First Name"
          error={Boolean (errors.firstName)}
          helperText={errors.firstName?.message}
          type="text"
       
           variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
            placeholder="Enter Your First Name"
            // fullWidth
            margin="normal"
            {...field}
          required
          />
          
        )}
      />

<Controller
        control={control}
        name="lastName"
        rules={{
          required:"Last name is required!",
        }}
        render={({ field }) => (
          <TextField
          id="standard-number"
          name="lastName"
          label=" Last Name"
          type="text"
          error={errors.lastName}
          helperText={errors.lastName?.message}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
            placeholder="Enter Your Last Name"
            // fullWidth
            margin="normal"
            {...field}
            required
          />
          
        )}
      />

<Controller
        control={control}
        name="emailid"
        rules={{
          required:"It should be a valid email address!",
        }}
        render={({ field }) => (
          <TextField
          id="standard-number"
          name="emailid"
          label=" Email Id"
          type="text"
          error={errors.emailid}
          helperText={errors.emailid?.message}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
            placeholder="Enter Your Email-ID"
            // fullWidth
            margin="normal"
            {...field}
            required
          />
          
        )}
      /> 
           <Controller
        control={control}
        name="contactNumber"
        rules={{
          required:"Please enter 10 digit number",
        }}
        render={({ field }) => (
          <TextField
          id="standard-number"
          name="contactNumber"
          label="Contact Number"
          type="number"
          error={errors.contactNumber}
          helperText={errors.contactNumber?.message}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
            placeholder="+91"
            // fullWidth
            margin="normal"
            {...field}
            required
          />
          
        )}
      /> 
            <Controller
        control={control}
        name="gender"
        rules={{
          required:"This field is required",
        }}
        render={({ field }) => (
          <TextField
          id="standard-number"
          name="gender"
          label=" Gender"
          type="text"
          error={errors.gender}
          helperText={errors.gender?.message}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
            placeholder="Male/Female"
            // fullWidth
            margin="normal"
            {...field}
            required
          />
          
        )}
      />
            <Controller
        control={control}
        name="country"
        rules={{
          required:"This field is required",
        }}
        render={({ field }) => (
          <TextField
          id="standard-number"
          name="country"
          label=" Country"
          type="text"
          error={errors.country}
          helperText={errors.country?.message}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
            placeholder="Enter Your Country"
            // fullWidth
            margin="normal"
            {...field}
            required
          />
          
        )}
      />
      
            <Controller
        control={control}
        name="state"
        rules={{
          required:"This field is required",
        }}
        render={({ field }) => (
          <TextField
          id="standard-number"
          name="state"
          label=" State"
          type="text"
          error={errors.state}
          helperText={errors.state?.message}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
            placeholder="Enter Your State"
            // fullWidth
            margin="normal"
            {...field}
            required
          />
          
        )}
      />
            <Controller
        control={control}
        name="city"
        rules={{
          required:"This field is required",
        }}
        render={({ field }) => (
          <TextField
          id="standard-number"
          name="city"
          label="City"
          type="text"
          error={errors.city}
          helperText={errors.city?.message}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
            placeholder="Enter Your City"
            // fullWidth
            margin="normal"
            {...field}
            required
          />
          
        )}
      /> 
      
             <Controller
        control={control}
        name="address"
        rules={{
          required:"This field is required",
        }}
        render={({ field }) => (
          <TextField
          id="standard-number"
          name="address"
          label="Address"
          type="text"
          error={errors.address}
          helperText={errors.address?.message}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
            placeholder="Enter Your Address"
            // fullWidth
            margin="normal"
            {...field}
            required
          />
          
        )}
      />

<Controller
        control={control}
        name="pinCode"
        rules={{
          required:"This field is required",
        }}
        render={({ field }) => (
          <TextField
          id="standard-number"
          name="pinCode"
          label="Pin Code"
          type="number"
          error={errors.pinCode}
          helperText={errors.pinCode?.message}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
            placeholder="Enter Your Pin Code"
            // fullWidth
            margin="normal"
            {...field}
          />
          
        )}
      />
       <Controller
        control={control}
        name="candidateType"
        rules={{
          required:"Please fill out either you are Fresher/lateral",
        }}
        render={({ field }) => (
          <TextField
          id="standard-number"
          name="candidateType"
          label="Candidate Type"
          type="text"
          error={errors.candidateType}
          helperText={errors.candidateType?.message}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
            placeholder="Fresher / Lateral"
            // fullWidth
            margin="normal"
            {...field}
            required
          />
          
        )}
      /> 
     
</Box>


    
    </>
  );
};
const ContactForm = () => {

  const { control , formState:{errors}} = useFormContext();
  return (
    <>
     <FileUpload/>
<AddMorePg/>
{/* <AddMoreUg/>     */}

<hr/>
<Box
      sx={{
        '& > :not(style)': { m: 1,mt:1,ml:4,mb:3, width: '24ch' },
      }}
      noValidate
      autoComplete="off"
    >


<h6>Under Graduation</h6>
<Controller
        control={control}
        name="degreeForUg"
        rules={{
          required:"Please fill out this field!",
        }}
        render={({ field }) => (
          <TextField
          id="standard-number"
          name="degreeForUg"
          label=" Degree"
          error={Boolean (errors.degreeForUg)}
          helperText={errors.degreeForUg?.message}
          type="text"
           variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
            placeholder="Enter Your Branch"
            // fullWidth
            margin="normal"
            {...field}
          
          />
          
        )}
      />

<Controller
        control={control}
        name="branchForUg"
        rules={{
          required:"Please fill out this field!",
        }}
        render={({ field }) => (
          <TextField
          id="standard-number"
          name="branchForUg"
          label=" Branch"
          type="text"
          error={errors.branchForUg}
          helperText={errors.branchForUg?.message}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
            placeholder="Enter Your Branch"
            // fullWidth
            margin="normal"
            {...field}
            
          />
          
        )}
      />

<Controller
        control={control}
        name="percentageForUg"
        rules={{
          required:"Please fill out this field",
        }}
        render={({ field }) => (
          <TextField
          id="standard-number"
          name="percentageForUg"
          label="Percentage"
          type="number"
          error={errors.percentageForUg}
          helperText={errors.percentageForUg?.message}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
            placeholder="Enter Your Percentage"
            // fullWidth
            margin="normal"
            {...field}
            
          />
          
        )}
      />
            <Controller
        control={control}
        name="instituteNameForUg"
        rules={{
          required:"Please fill out field",
        }}
        render={({ field }) => (
          <TextField
          id="standard-number"
          name="instituteNameForUg"
          label="Institute Name"
          type="text"
          error={errors.instituteNameForUg}
          helperText={errors.instituteNameForUg?.message}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
            placeholder="Enter your Institute name"
            // fullWidth
            margin="normal"
            {...field}
          
          />
          
        )}
      />
            <Controller
        control={control}
        name="universityNameForUg"
        rules={{
          required:"This field is required",
        }}
        render={({ field }) => (
          <TextField
          id="standard-number"
          name="universityNameForUg"
          label=" University Name"
          type="text"
          error={errors.universityNameForUg}
          helperText={errors.universityNameForUg?.message}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
            placeholder="Enter University Name"
            // fullWidth
            margin="normal"
            {...field}
            
          />
          
        )}
      />
            <Controller
        control={control}
        name="passingYearForUg"
        rules={{
          required:"This field is required",
        }}
        render={({ field }) => (
          <TextField
          id="standard-number"
          name="passingYearForUg"
          label=" Passing Year"
          type="date"
          error={errors.passingYearForUg}
          helperText={errors.passingYearForUg?.message}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
            placeholder="Enter Your Passing year"
            // fullWidth
            margin="normal"
            {...field}
            
          />
          
        )}
      />

    </Box>
<hr/>

<Box
      sx={{
        '& > :not(style)': { m: 1,mt:1,ml:4,mb:3, width: '24ch' },
      }}
      noValidate
      autoComplete="off"
    >   
    
    <h6>Higher Secondary</h6>
<Controller
        control={control}
        name="percentageForHss"
        rules={{
          required:"Please fill out this field",
        }}
        render={({ field }) => (
          <TextField
          id="standard-number"
          name="percentageForHss"
          label="Percentage"
          type="number"
          error={errors.percentageForHss}
          helperText={errors.percentageForHss?.message}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
            // placeholder="Enter Your Address"
            // fullWidth
            margin="normal"
            {...field}
            // required
          />
          
        )}
      />

<Controller
        control={control}
        name="passingYearForHss"
        rules={{
          required:"Please fill out this field",
        }}
        render={({ field }) => (
          <TextField
          id="standard-number"
          name="passingYearForHss"
          label="Passing Year"
          type="date"
          error={errors.passingYearForHss}
          helperText={errors.passingYearForHss?.message}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
            // placeholder="Enter Your Address"
            // fullWidth
            margin="normal"
            {...field}
            // required
          />
          
        )}
      />
      <Controller
        control={control}
        name="boardTypeForHss"
        rules={{
          required:"Please fill out this field",
        }}
        render={({ field }) => (
          <TextField
          id="standard-number"
          name="boardTypeForHss"
          label="Board Type"
          type="text"
          error={errors.boardTypeForHss}
          helperText={errors.boardTypeForHss?.message}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
            // placeholder="Enter Your Address"
            // fullWidth
            margin="normal"
            {...field}
            // required
          />
          
        )}
      />
      <Controller
        control={control}
        rules={{
          required:"Please fill out this field",
        }}
        name="schoolNameForHss"
        render={({ field }) => (
          <TextField
          id="standard-number"
          name="schoolNameForHss"
          label="School Name"
          type="text"
          error={errors.schoolNameForHss}
          helperText={errors.schoolNameForHss?.message}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
            // placeholder="Enter Your Address"
            // fullWidth
            margin="normal"
            {...field}
            // required
          />
        
        )}
      />
      <h6>High School</h6>
      <Controller
        control={control}
        name="percentageForHighSchool"
        rules={{
          required:"Please fill out this field",
        }}
        render={({ field }) => (
          <TextField
          id="standard-number"
          name="percentageForHighSchool"
          label="Percentage/Cgpa"
          type="number"
          error={errors.percentageForHighSchool}
          helperText={errors.percentageForHighSchool?.message}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
            // placeholder="Enter Your Address"
            // fullWidth
            margin="normal"
            {...field}
            // required
          />
          
        )}
      />

<Controller
        control={control}
        name="passingYearForHighSchool"
        rules={{
          required:"Please fill out this field",
        }}
        render={({ field }) => (
          <TextField
          id="standard-number"
          name="passingYearForHighSchool"
          label="Passing Year"
          type="date"
          error={errors.passingYearForHighSchool}
          helperText={errors.passingYearForHighSchool?.message}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
            // placeholder="Enter Your Address"
            // fullWidth
            margin="normal"
            {...field}
            // required
          />
          
        )}
      />
      <Controller
        control={control}
        name="boardTypeForHighSchool"
        rules={{
          required:"Please fill out this field",
        }}
        render={({ field }) => (
          <TextField
          id="standard-number"
          name="boardTypeForHighSchool"
          label="Board Type"
          type="text"
          error={errors.boardTypeForHighSchool}
          helperText={errors.boardTypeForHighSchool?.message}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
            // placeholder="Enter Your Address"
            // fullWidth
            margin="normal"
            {...field}
            // required
          />
          
        )}
      />
      <Controller
        control={control}
        name="schoolNameForHighSchool"
        rules={{
          required:"Please fill out this field",
        }}
        render={({ field }) => (
          <TextField
          id="standard-number"
          name="schoolNameForHighSchool"
          label="School Name"
          type="text"
          error={errors.schoolNameForHighSchool}
          helperText={errors.schoolNameForHighSchool?.message}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
            // placeholder="Enter Your Address"
            // fullWidth
            margin="normal"
            {...field}
            // required
          />
        
        )}
      />
      </Box>
    </>
  );
};
const PersonalForm = (props) => {
  //const { control } = useFormContext();
  return (
    <>
    <div>
      <MoreProjects inputFields={props.inputFields} />
    </div>
    
     
    </>
  );
};
const PaymentForm = () => {
  //const { control } = useFormContext();
  
  const showFormData =  useSelector(state => state.applyForm.allFormData)

    useEffect(
    ()=>{console.log('all form data from redux - ',showFormData)},[showFormData]  
    )
  return (
    <>
      {/* <AddMoreExperience/>   */}
    </>
  );
};

function getStepContent(step) {
  
  switch (step) {
    case 0:
      return <BasicForm />;

    case 1:
      return <ContactForm />;
    case 2:
      return <PersonalForm />;
    case 3:
      return <PaymentForm />;
    default:
      return "unknown step";
  }
}

const LinaerStepper = (props) => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
        firstName:"",
        lastName:"",
        emailid:"",
        contactNumber:"",
        gender:"",
        country:"",
        state:"",
        city:"",
        address:"",
        candidateType:"",
        degreeForUg:"",
        branchForUg:"",
        percentageForUg:"",
        instituteNameForUg:"",
        passingYearForUg:"",
        universityNameForUg:"",
        percentageForHss:"",
        passingYearForHss:"",
        boardTypeForHss:"",
        schoolNameForHss:"",
        percentageForHighSchool:"",
        passingYearForHighSchool:"",
        boardTypeForHighSchool:"",
        schoolNameForHighSchool:"",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  
  const steps = getSteps();

  const isStepFailed =()=>{
    return Boolean(Object.keys(methods.formState.errors).length)
  }

  const isStepOptional = (step) => {
    return step === 2 ;
    // || step === 3;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const showFormData =  useSelector(state => state.applyForm.allFormData)

  // const handleSubmit = async (data) => {
  //   // event.preventDefault();
  //   let responseData = jobApply(data,showFormData);

  // console.log(responseData);
  // jobApply(responseData);
  // setAddedForm(true);
  // }
  // const imageId = JSON.parse(localStorage.getItem("imgId"))
     
  const handleNext = (data) => {
    const imageId = JSON.parse(localStorage.getItem("imgId"))
    const resumeId = JSON.parse(localStorage.getItem("resumeId"))
    console.log('image id ',imageId)
    console.log('image id ',resumeId)
    // event.preventDefault();
    console.log("hellloooo",data);
    // console.log("dataaaaaaaaaa",Utils.setFile)
    const file = Utils.file
    
    //const resData = Utils.setResume

    //   let responseData = jobApply(data,showFormData);
    //   console.log('data for api - ',responseData)
    //  const imageId = JSON.parse(localStorage.getItem("imgId"))
    //  console.log("img" , imageId)
    const allData = {data,showFormData,imageId,resumeId}
    
    console.log('my dataaa',allData)

    // console.log(responseData);
    // jobApply(responseData);
    // setAddedForm(true);
    // data.append('foo',JSON.stringify(inputFields))
    if (activeStep === steps.length - 1) {
        console.log('all console data - ',allData)
        jobApply(allData)
       
        //addImage(file)
        console.log("image dataaaa",file)
          setActiveStep(activeStep + 1);
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
    // const dataa = fetch("uploadfile", {
    //   method: "post",
    //   headers: { "Content-Type": "multipart/form-data" },
    //   body: JSON.stringify({

      // }),
    // });]


  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }

          if(isStepFailed() && activeStep === index){
            labelProps.error=true;
          }

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h5" align="center">
          Thank You for submitting, we will be in touch!
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              
              {getStepContent(activeStep)}
              
              <Box
        sx={{
          "& > :not(style)": { m: 1, width: "20%" },
          width: "20%",
          m: 2,
          ml: 50,
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
              <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
                color="secondary"
          variant="contained"
                
              >
                back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                >
                  skip
                </Button>
              )}
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                // onClick={handleSubmit}
                type="submit"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
              </Box>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default LinaerStepper;

