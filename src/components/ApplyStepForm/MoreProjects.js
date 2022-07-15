import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {formActions} from '../../store/applyForm';

// import { ProjectInformation } from './ProjectInformation';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';
// import LinaerStepper from '../LinearStepper';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  }
}))


function MoreProjects(props) {

  const dispatch = useDispatch();
  
  console.log('props data of form - ', props)

  const classes = useStyles()
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), projectName: '', projectStartDate: '' ,projectEndDate:"",projectLink:""},
  ]);
  // const[isShowingAllDetails, setIsShowingAllDetails] = React.useState(false);
  
  // const allDetailsShowHandler = () => {
  //   setIsShowingAllDetails(true);
  // }
  // const allDetailsCloseHandler = () => {
  //   setIsShowingAllDetails(false);
  // }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields==", inputFields);
    let obj = {}
    // Utils.setFile(fileInput.current.name, fileInput.current.files[0]);
    inputFields.forEach((value, key) => {obj[key] = value})
    dispatch(formActions.nextForm({key: 'projectInfo',data: obj}))
  };



  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    
    setInputFields(newInputFields);
  }

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidv4(),  projectName: '', projectStartDate: '',projectEndDate:"",projectLink:"" }])
  }

  const handleRemoveFields = id => {
    const values  = [...inputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields(values);
  
  }

  return (
    <Container>
      {/* <h6>Add New Project</h6> */}
      <form className={classes.root} onSubmit={handleSubmit}>
        { inputFields.map(inputField => (
          <div key={inputField.id}>
            
             <TextField
               id="standard-number"
               name="projectName"
               label="Project Name"
               type="text"
               value={inputField.projectName}
               onChange={event => handleChangeInput(inputField.id, event)}
               InputLabelProps={{
                 shrink: true,
               }}
               variant="standard"
            />
            
            <TextField
               id="standard-number"
               name="projectLink"
               label="Project Link"
               type="text"
               value={inputField.projectLink}
               onChange={event => handleChangeInput(inputField.id, event)}
               InputLabelProps={{
                 shrink: true,
               }}
               
               variant="standard"
            />

            
            <TextField
               id="standard-number"
               name="projectStartDate"
               label="projectStartDate"
               type="date"
               value={inputField.projectStartDate}
               onChange={event => handleChangeInput(inputField.id, event)}
               InputLabelProps={{
                 shrink: true,
               }}
               variant="standard"
            />
            
           
            <TextField
          id="standard-number"
          name="projectEndDate"
          label="projectEndDate"
          type="date"
          value={inputField.projectEndDate}
          onChange={event => handleChangeInput(inputField.id, event)}
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />


            <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
              <RemoveIcon />
            </IconButton>
            <IconButton
              onClick={handleAddFields}
            >
              <AddIcon />
            </IconButton>
          </div>
        )) }
        {/* <Button
          className={classes.button}
          variant="contained" 
          color="primary" 
          type="submit" 
          endIcon={<Icon>send</Icon>}
          onClick={handleSubmit}
        >Send</Button> */}
                <Button
          color="primary"
          variant="contained"
          sx={{
            mt: 2,
            mb: 3,
            background: "#FFB344",
            "&:hover": {
              background: "#FFB319",
            },
            "&:active": {
              background: "#e30914",
            },
            fontSize: "0.8rem",
          }}
          onClick={handleSubmit}
          // onClick={() => navigation.next()}
        >
          Save
        </Button>
        
      </form>
      
      {/* {isShowingAllDetails && <LinaerStepper onClose={allDetailsCloseHandler}
        projectName={props.inputField.projectName}
        projectLink={props.projectLink}
        projectStartDate={props.projectStartDate}
        projectEndDate={props.projectEndDate}
        />}  */}
    </Container>
    
  );
  
}

export default MoreProjects;
