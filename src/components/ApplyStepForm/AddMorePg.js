import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from "@material-ui/core/styles";
import {formActions} from '../../store/applyForm';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function AddMorePg() {

    const dispatch = useDispatch();

  const classes = useStyles();
  const [inputFieldsPg, setInputFieldsPg] = useState([
    {
      id: uuidv4(),
      degreeForPg:"",
      branchForPg:"",
      percentageForPg:"",
      instituteNameForPg:"",
      passingYearForPg:"",
      universityNameForPg:"",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields-Of-Post-Graduation", inputFieldsPg);
    let obj = {}
    // Utils.setFile(fileInput.current.name, fileInput.current.files[0]);
    inputFieldsPg.forEach((value, key) => {obj[key] = value})
    dispatch(formActions.nextForm({key: 'pgInfo',data: obj}))
  };

  const handleChangeInput = (id, event) => {
    const newInputFieldsPg = inputFieldsPg.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFieldsPg(newInputFieldsPg);
  };

  const handleAddFields = () => {
    setInputFieldsPg([
      ...inputFieldsPg,
      {
        id: uuidv4(),
        degreeForPg:"",
    branchForPg:"",
    percentageForPg:"",
    instituteNameForPg:"",
    passingYearForPg:"",
    universityNameForPg:"",

      },
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFieldsPg];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFieldsPg(values);
  };

  return (
    <Container>
      <h6>Post Graduation</h6>
      <form className={classes.root} onSubmit={handleSubmit}>
        {inputFieldsPg.map((inputField) => (
          <div key={inputFieldsPg.id}>
            <TextField
              id="standard-number"
              name="degreeForPg"
              label="Degree"
              type="text"
            //   placeholder="Degree"
              value={inputField.degreeForPg}
              onChange={(event) => handleChangeInput(inputField.id, event)}
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
            />

            <TextField
              id="standard-number"
              name="branchForPg"
              label="Branch"
              type="text"
              value={inputField.branchForPg}
              onChange={(event) => handleChangeInput(inputField.id, event)}
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
            />

<TextField
              id="standard-number"
              name="percentageForPg"
              label="Percentage/Cgpa"
              type="number"
              value={inputField.percentageForPg}
              onChange={(event) => handleChangeInput(inputField.id, event)}
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
            /> 
            <TextField
              id="standard-number"
              name="instituteNameForPg"
              label="Institute Name "
              type="text"
              value={inputField.instituteNameForPg}
              onChange={(event) => handleChangeInput(inputField.id, event)}
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
            />
 <TextField
              id="standard-number"
              name="universityNameForPg"
              label="University Name "
              type="text"
              value={inputField.universityNameForPg}
              onChange={(event) => handleChangeInput(inputField.id, event)}
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
            />

            <TextField
              id="standard-number"
              name="passingYearForPg"
              label="Passing Year"
              type="date"
              value={inputField.passingYearForPg}
              onChange={(event) => handleChangeInput(inputField.id, event)}
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
            />

           
            
            <IconButton
              disabled={inputFieldsPg.length === 1}
              onClick={() => handleRemoveFields(inputFieldsPg.id)}
            >
              <RemoveIcon />
            </IconButton>
            <IconButton onClick={handleAddFields}>
              <AddIcon />
            </IconButton>
          </div>
        ))}
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
            mb: 2,
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
    </Container>
  );
}

export default AddMorePg;
