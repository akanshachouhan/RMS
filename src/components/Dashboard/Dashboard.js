import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CandidateList from "../Candidate-Dashboard/CandidateList";
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems } from './listItems';
import ImageAvatars from './AvtarProfile';
import { ManagerItems } from '../Manager-Dashboard/ManagerList';
import UseButton from './DashboardBtn';
import DashboardMainContent from './DashboardMainContent';

import logo from './bottom-logo.png';
import { listItems } from './HrList';


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

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent(props) {
  // const [open, setOpen] = React.useState(true);
  // const userEmails = {"hr@bellurbis.com": "HR", "manager@bellurbis.com": "MANAGER"};
  // const email = JSON.parse(localStorage.getItem('userData')).emailid;
  // console.log(email, userEmails)
  // const [userType, setUserType] = React.useState(userEmails[email]);
  // const toggleDrawer = () => {
  //   setOpen(!open);
  // };

  const [open, setOpen] = React.useState(true);
  const userType = JSON.parse(localStorage.getItem('userData')).userType;
  console.log(userType)
  // const [userType, setUserType] = React.useState(userEmails[email]);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const setSidebar = () => {
    if(userType === 'hr'){
      return <List>{listItems}</List>
    }
    else if(userType === 'manager'){
      return <List>{ManagerItems}</List>
    }
    else if(userType === 'admin'){
      return <List>{mainListItems}</List>
    }
    else{
      return <List>{CandidateList}</List>
    }
  }

  // React.useEffect(()=>{
  //   console.log(props);
  // }, [])

  console.log(props);

 
  return (
    <ThemeProvider theme={mdTheme} >
      <Box sx={{ display: 'flex'}}>
        <CssBaseline />
        <AppBar position="absolute" open={open} >
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
                <Grid 
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                >
                <Grid item xs={3} display="flex" justifyContent="space-between" >
                  <Grid fontWeight="bold" fontSize="1.5rem">
                    Recruitment Management System
                  </Grid>
                <UseButton  {...props}  />
                </Grid>
                </Grid>
            </Typography>
            <IconButton color="inherit">
              {/* <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge> */}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
                <img src={logo}  alt="Logo" width="200" height="70"  />
            <Box sx={{display: 'flex',flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <p style={{fontWeight: 'bold', fontSize: '1.7rem', margin: 0}} >{}</p>
            </Box>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />

          {/* <List>{ManagerItems}</List> */}
          {/* <List>{mainListItems}</List> */}
          {/* <List>{CandidateList}</List> */}

          {setSidebar()}
          

          <Divider />
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="inherit"
                >
                    <Box>
                          <ImageAvatars/>
                          {/* <UseButton/> */}
                    </Box>
            </Box>
          {/* <List><ImageAvatars/></List> */}
          {/* <Divider />
          <List>{secondaryListItems}</List> */}
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{
                    // p: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column', 
                  }}
                >
                  <DashboardMainContent/>
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
  

export default function Dashboard(props) {
  console.log(props)
  return <DashboardContent {...props} />;

}