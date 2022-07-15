import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import WorkIcon from '@mui/icons-material/Work';
import PeopleIcon from '@mui/icons-material/People';

import DoNotDisturbOffIcon from '@mui/icons-material/DoNotDisturbOff';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import ComputerIcon from '@mui/icons-material/Computer';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';

import ClearIcon from '@mui/icons-material/Clear';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';

  //const userType = JSON.parse(localStorage.getItem('userData')).userType;

 //const userType='admin';


export const listItems = (
  <>
    <Link to="/dashboard/available-jobs" style={{ textDecoration: 'none', color: 'black' }}>
    <ListItem button>
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="Available Jobs" style={{width: '10px'}} />
      </ListItem>
    </Link>
      
      <Link to="/dashboard/hr-candidate-list" style={{ textDecoration: 'none', color: 'black' }}>
      <ListItem button>
        <ListItemIcon>
        
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Candidates List" />
      </ListItem>
      </Link>

      <Link to="/dashboard/schedule-test" style={{ textDecoration: 'none', color: 'black' }}>
        <ListItem button>
          <ListItemIcon>
          <ComputerIcon/>
           
          </ListItemIcon>
          <ListItemText primary="Schedule Test" />
        </ListItem>
      </Link>

      <Link to="/dashboard/technical-round" style={{ textDecoration: 'none', color: 'black' }}>
        <ListItem button>
          <ListItemIcon>
          <ScheduleSendIcon/>
           
          </ListItemIcon>
          <ListItemText primary="Technical Round" />
        </ListItem>
      </Link>

      
      <Link to="/dashboard/hrround" style={{ textDecoration: 'none', color: 'black' }}>
        <ListItem button>
          <ListItemIcon>
          <ScreenSearchDesktopIcon/>
           
          </ListItemIcon>
          <ListItemText primary="Management Round" />
        </ListItem>
      </Link>


      <Link to="/dashboard/shortlisted-by-manager" style={{ textDecoration: 'none', color: 'black' }}>
        <ListItem button>
          <ListItemIcon>
            <AddCircleIcon />
           
            </ListItemIcon>
          <ListItemText primary="Shortisted By Manager" />
        </ListItem>
      </Link>
      
      <Link to="/dashboard/hr-do-not-hire" style={{ textDecoration: 'none', color: 'black' }}>
        <ListItem button>
          <ListItemIcon>
            <ClearIcon />
           
          </ListItemIcon>
          <ListItemText primary="Do Not Hire" />
        </ListItem>
      </Link>

     < Link to="/dashboard/rejectlist" style={{ textDecoration: 'none', color: 'black' }}>
        <ListItem button>
          <ListItemIcon>
            <DoNotDisturbOffIcon />
           
          </ListItemIcon>
          <ListItemText primary="Reject List" />
        </ListItem>
      </Link>


      {/* <Link to="/dashboard/feedback" style={{ textDecoration: 'none', color: 'black' }}>
        <ListItem button>
          <ListItemIcon>
            <FeedbackIcon/>
           
          </ListItemIcon>
          <ListItemText primary="Feedback" />
        </ListItem>
      </Link> */}

      <Link to="/dashboard/final-list" style={{ textDecoration: 'none', color: 'black' }}>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
           
          </ListItemIcon>
          <ListItemText primary="Final List" />
        </ListItem>
      </Link>
      
  </>
);
