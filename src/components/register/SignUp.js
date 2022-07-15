import * as React from 'react';
//import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { registerUser } from '../../api/api';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://bellurbis.com/">
        BellurbisTechnologies
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp(props) {

 


  const [formManager, setFormManager] = React.useState({
    firstName: '', lastName: '', emailid: '', password: ''
  })

 

 

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isValid()) {
      alert('fill required details')
      return
    }
    const data = new FormData(event.currentTarget);
    let obj = {  }
    data.forEach((value, key) => {
      console.log(value, key)
      obj[key] = value;
    })
    console.log(obj)

    // let combinedData = {userTypeInput,obj}
    // console.log('combined data - ', obj)

    let responseData = await registerUser(obj);
    console.log(responseData)

    props.history.push('/');



    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      emailid: data.get('emailid'),
      password: data.get('password'),
      userType: data.get('userType'),
      key: data.get('key')

      // data
    });
  };

  const managerHandler = (event, key) => {
    setFormManager((prev) => {
      let obj = { ...prev }
      obj[key] = event.target.value;
      return obj
    })
  }

  const isValid = () => {
    for (let i in formManager) {
      if (formManager[i].length === 0) {
        return false
      }
    }
    return true;
  }


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
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
                  onChange={(event) => { managerHandler(event, 'firstName') }}
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  variant="filled"
                  fullWidth
                  onChange={(event) => { managerHandler(event, 'lastName') }}
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
                  onChange={(event) => { managerHandler(event, 'emailid') }}
                  id="email"
                  label="Email Address"
                  name="emailid"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  variant="filled"
                  fullWidth
                  name="password"
                  onChange={(event) => { managerHandler(event, 'password') }}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="userType"
                  // value={firstName}
                  // ref={nameInputRef}
                  variant="filled"
                  fullWidth
                  id="userType"
                  label="User Type"
                  autoFocus
                />
              </Grid> */}
              {/* <Grid item xs={12} sm={6}>
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
                      <MenuItem value='admin'>Admin</MenuItem>
                    </Select>
                </FormControl>
              </Box>
                </Grid> */}
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  // autoComplete="given-name"
                  name="key"
                  // value={firstName}
                  // ref={nameInputRef}
                  variant="filled"
                  fullWidth
                  id="key"
                  label="Secret Key"
                  autoFocus
                />
              </Grid> */}
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Keep me logged in"
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}