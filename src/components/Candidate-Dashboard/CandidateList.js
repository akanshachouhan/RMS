import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';

import { Link } from 'react-router-dom';


export const CandidateList = (
  <>
    <Link to="/dashboard/available-jobs-candidate" style={{ textDecoration: 'none', color: 'black' }}>
    <ListItem button>
          <ListItemIcon>
          <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Available Jobs" />
      </ListItem>
    </Link>

      {/* <Link to="/dashboard/Linear" style={{ textDecoration: 'none', color: 'black' }}> 
        <ListItem button>
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="Apply here" />
        </ListItem>
      </Link> */}
  </>
);


export default CandidateList;