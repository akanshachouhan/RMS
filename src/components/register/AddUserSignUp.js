import  React from 'react';



import Button from '@mui/material/Button';
import Modal from '../ui/Modal'

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';




import { registerUser, sendUserEmailToHr } from '../../api/api';
import CandidateModal from '../ui/CandidateModal.js'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';




export default function AddUserSignUp(props) {

  const[userType, setuserType] = React.useState('');
  const[addedJobs,setAddedJobs] = React.useState();
  const[formManager, setFormManager] =  React.useState({firstName: '',lastName: '',emailid: '',password: '',key:''
  })
  
 
  

  const  closeSelectHandler = () => {
    setAddedJobs(false)
  }

   

  const handleChange = (event) => {
    setuserType(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!isValid()){
      alert('fill required details')
      return
    }
    const data = new FormData(event.currentTarget);
    let obj = {userType}
    data.forEach((value,key) => {
      console.log(value, key)
      obj[key] = value;
    })
    console.log(obj)
  
    

    let sendEmail = {
      emailid: obj.emailid,
      password: obj.password
    }
    console.log(sendEmail);

    sendUserEmailToHr(sendEmail);
 
    let responseData = await registerUser(obj);
    setAddedJobs(true)
    console.log(responseData)
  


     


    console.log({
      firstName : data.get('firstName'),
      lastName : data.get('lastName'),
      emailid: data.get('emailid'),
      password: data.get('password'),
      userType: data.get('userType'),
      key:data.get('key')
    // data
    });
  };

  const managerHandler = (event,key) => {
    setFormManager((prev) => {
      let obj = {...prev}
      obj[key] = event.target.value;
      return obj
    })
  }
  
  const isValid = () => {
    for(let i in formManager){
      if(formManager[i].length === 0){
        return false
      }
    }
    return true;
  }
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
                Add User Successfully!
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
     <CandidateModal  onClose={props.onClose}>    
     <Box sx={{ textAlign: 'center', m: 1 ,fontWeight: 'bold'}}> Add User  </Box>
    

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  // value={firstName}
                  // ref={nameInputRef}
                  variant="filled"
                  fullWidth
                  id="firstName"
                  onChange={(event) => {managerHandler(event,'firstName')}}
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  variant="filled"
                  fullWidth
                  onChange={(event) => {managerHandler(event,'lastName')}}
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  variant="filled"
                  fullWidth
                  onChange={(event) => {managerHandler(event,'emailid')}}
                  id="email"
                  label="Email Address"
                  name="emailid"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                //value={password}
                  required
                  variant="filled"
                  fullWidth
                  name="password"
                  onChange={(event) => {managerHandler(event,'password')}}
                 // onChange={(event) => setIsNumbers(val => !val)}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
                  {/* <Button type="submit" onClick={generatePassword} >Generate Password</Button> */}
                
              </Grid>
             
            
              {/* <Button type="submit" onClick={generatePassword} >Generate Password</Button> */}
              <Grid item xs={12} sm={6}>
              <Box item  sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">User Type</InputLabel>
                    <Select
                      fullWidth
                      variant="filled"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={userType}
                      label="User Type"
                      onChange={handleChange}
                    >
                      <MenuItem value='hr'>Hr</MenuItem>
                      <MenuItem value='manager'>Manager</MenuItem>
                    
                    </Select>
                </FormControl>
              </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                  // autoComplete="given-name"
                  name="key"
                  // value={firstName}
                  // ref={nameInputRef}
                  variant="filled"
                  fullWidth
                  id="key"
                  label="Secret Key"
                  onChange={(event) => {managerHandler(event,'key')}}
                  autoFocus
                />
              </Grid>
              
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Keep me logged in"
                />
              </Grid> */}
            </Grid>
            <br></br>
            {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button> */}
            <Grid>
            
            <Box sx={{
              '& > :not(style)': { m: 1, width: '100%'},
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
                    Send 
                  </Button>
                  <Button
                    onClick={props.onClose}
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
              </Grid>
            </Box>
            {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 1 }}
            >
              Add
            </Button> */}
            
       
      {/* </Container>
    </ThemeProvider> */}
    </CandidateModal>
  );
  }
