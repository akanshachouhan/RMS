import * as React from 'react';
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { resetPasswordHandler } from '../../api/api';




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

export default function ForgotPassword(props) {
  

  const handleInterviewSubmit = (event) => {
    event.preventDefault();
   
    const data = new FormData(event.currentTarget);


    // let responseJobData = await addJobs(data);
    // console.log(responseJobData)

    // setTimeout(()=>{
    //   props.props.fun();
    // }, 500)

    // console.log({
    //     // firstName: {props.props.firstName}
    //     firstName: props.props.firstName,
    //     lastName: props.props.lastName,
    //     jobRole: props.props.jobRole,
    //     date : data.get('dateAndTime'),
    //     link : data.get('link'),
    // })
    var scheduleData = {
     emailbyuser: props.match.params.emailbyuser,
     token:props.match.params.token,
     passwordByUser: data.get('passwordByUser'),
     confirmPasswordByUser: data.get('confirmPasswordByUser')
    }
  console.log(scheduleData)
 resetPasswordHandler(scheduleData)
 props.history.push('/');
  //setAddedJobs(true);
}



  // useEffect(() => {
  //   if (localStorage.getItem('userData')){
  //     props.history.replace('/dashboard')
  //   }
  // },[])

  console.log(props)

  
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     // eslint-disable-next-line no-console
//     console.log({
//       email: data.get('emailid'),
//       password: data.get('password'),
//     });
//     let responseData = await loginUser({
//       emailid: data.get('emailid'),
//       password: data.get('password'),
//     });
//     console.log(responseData)
//     try{
//       if(responseData.success === false){
//         alert(responseData.message)
//       }
//       else if (responseData.tokens.length>0){
//         localStorage.setItem('userData', JSON.stringify(responseData))
//         const userType = JSON.parse(localStorage.getItem('userData')).userType;
//         if(userType === 'hr'){
//           props.history.replace('/dashboard/available-jobs')
//         }
//         else if(userType === 'manager'){
//           props.history.replace('/dashboard/manager-table')
//         }
//         else{
//           props.history.replace('/dashboard/available-jobs-candidate')
//         }
//       }
//     }
//     catch(error){
//       alert('something went wrong')
//     }
//   };

  // const userEmails = {"hr@bellurbis.com": "HR", "manager@bellurbis.com": "MANAGER"};
  // const email = JSON.parse(localStorage.getItem('userData')).emailid;
  // console.log(email, userEmails)
  // const [userType, setUserType] = React.useState(userEmails[email]);

  // if(userType === 'HR'){
  //   props.history.replace('/dashboard/available-jobs')
  // }
  // else if(userType === 'MANAGER'){
  //   props.history.replace('/dashboard/available-jobs')
  // }
  // else{
  //   props.history.replace('/dashboard/available-jobs')
  // }

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
          <h2>Bellurbis Technologies</h2>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Reset Password
          </Typography>
          <Box component="form"  onSubmit={handleInterviewSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              variant="filled"
              required
              fullWidth
              id="password"
              label="Enter New Password"
              name="passwordByUser"
              autoComplete="password"
              autoFocus
              // onChange={onEmailChange}
            />
            
             <TextField
              margin="normal"
              variant="filled"
              required
              fullWidth
              id="password"
              label="Enter Confirm Password"
              name="confirmPasswordByUser"
              autoComplete="password"
              autoFocus
              // onChange={onEmailChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Change Password
            </Button>
            {/* <Grid container>
              <Grid item xs>
                <Link to="/" variant="body2">
                  Sign in
                </Link>
              </Grid>
              <Grid item>
                <Link to="/sign-up" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>

            </Grid> */}
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}