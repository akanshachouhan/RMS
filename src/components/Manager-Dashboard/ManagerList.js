import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import DoNotDisturbOffIcon from '@mui/icons-material/DoNotDisturbOff';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';


import { Link } from 'react-router-dom';


export const ManagerItems = (
  <>


  
   
      
      <Link to="/dashboard/manager-scheduledInterview" style={{ textDecoration: 'none', color: 'black' }}>
      <ListItem button>
        <ListItemIcon>
        <LaptopChromebookIcon/>
          {/* <PeopleIcon /> */}
        </ListItemIcon>
        <ListItemText primary="Scheduled Interview" />
      </ListItem>
      </Link>


      
      {    
      <Link to="/dashboard/manager-report" style={{ textDecoration: 'none', color: 'black' }}>
        <ListItem button>
          <ListItemIcon>
          <DoNotDisturbOffIcon />
          </ListItemIcon>
          <ListItemText primary="Report" />
        </ListItem>
      </Link> }
      
  </>
);

