import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


import { Button } from '@mui/material';

import { Link } from "react-router-dom";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


export default function SearchAppBar(props) {
  
 


  console.log('search prop data - ', props)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Laterals
          </Typography>
      
        
       
        
         
       <Link to="/dashboard/hr-candidate-list">
       <Button
                    
                    variant="contained"
                    sx={{ mt: 2, mb: 2, background: '#2FDD92','&:hover': {
                      background: "#34BE82",
                  },'&:active': {
                    background: "#2FDD92",
                }, fontSize: '0.8rem'}}
                  >
                    Freshers
                  </Button>
       </Link>

     
          {/* <Link to="/dashboard/technical-round">
        <button className="btn btn-primary btn-sm m-2">Fresher</button>
      </Link> */}
          
         
                      {/* <Button
             
                        variant="contained"
                          sx={{ mt: 1, mb: 1, ml: 1,background: '#FFB344','&:hover': {
                            background: "#FFB319",
                            },'&:active': {
                              background: "#FFB344",
                          }, fontSize: '0.6rem'}}
                            >
                        delete
                      </Button> */}
                      
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              onChange={(event) => {props.onChange(event)}}
              inputProps={{ 'aria-label': 'search' }}
            />
            
       
          </Search>
        </Toolbar>
      </AppBar>
      
    </Box>
   
  );
}
