import * as React from 'react';
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { loginUser } from '../../api/api';



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

export default function SignIn(props) {
  console.log(props)
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('emailid'),
      password: data.get('password'),
    });
    let responseData = await loginUser({
      emailid: data.get('emailid'),
      password: data.get('password'),
    });
    console.log(responseData)
    try {
      if (responseData.success === false) {
        alert(responseData.message)
      }
      else if (responseData.tokens.length > 0) {
        localStorage.setItem('userData', JSON.stringify(responseData))
        const userType = JSON.parse(localStorage.getItem('userData')).userType;
        console.log('userType')
        if (userType === 'hr') {
          props.history.replace('/dashboard/available-jobs')
        }
        else if (userType === 'manager') {
          props.history.replace('dashboard/manager-scheduledInterview')
        }
        else if(userType=== 'admin') {
          props.history.replace('/dashboard/available-jobs')
        }

        else {
          props.history.replace('/dashboard/available-jobs-candidate')
        }
      }
    }
    catch (error) {
      alert('Invalid')
    }
  };

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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              variant="filled"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="emailid"
              autoComplete="email"
              autoFocus
            // onChange={onEmailChange}
            />
            <TextField
              margin="normal"
              variant="filled"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            // onChange={onPasswordChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/forgot-password" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/sign-up" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Grid item xs>
                {/* <Link to="/dashboard/available-jobs-candidate" variant="body2">
                  Continue without signing in
                </Link> */}
                 {/* <Link to="/dashboard/available-jobs-candidate" variant="body2">
                  Continue without signing in
                </Link> */}

              

              </Grid>
            </Grid>
          </Box>
        </Box>
     
        <Copyright sx={{ mt: 8, mb: 4 }} />

      </Container>
    </ThemeProvider>
  );
}