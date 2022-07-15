import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Stack from '@mui/material/Stack';
import { useButton } from '@mui/core/ButtonUnstyled';
import { styled } from '@mui/system';
import { logoutUser } from '../../api/api';


import Avatar from '@mui/material/Avatar';
import LogoutModal from '../ui/LogoutModal'
import { Box } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PeopleIcon from '@mui/icons-material/People';
import ListItemText from '@mui/material/ListItemText';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';

const CustomButtonRoot = styled('button')(`
  background-color: #007fff;
  padding: 7px 10px;
  border-radius: 5px;
  color: #fff;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;

  &:hover {
    background-color: #0059b2;
  }

  &.active {
    background-color: #004386;
  }

  &.focusVisible {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`);

const CustomButton = React.forwardRef(function CustomButton(props, ref) {
  const { children } = props;
  const { active, disabled, focusVisible, getRootProps } = useButton({
    ...props,
    ref,
    component: CustomButtonRoot,
  });

  const classes = {
    active,
    disabled,
    focusVisible,
  };

  return (
    <CustomButtonRoot {...getRootProps()} className={clsx(classes)}>
      {children}
    </CustomButtonRoot>
  );
});

CustomButton.propTypes = {
  children: PropTypes.node,
};

export default function UseButton(props,token) {
  const[isAcknowledgingShortlisted, setIsAcknowledgingShortlisted] = React.useState(false);

  const userName = JSON.parse(localStorage.getItem('userData')).firstName;

  const showHandler = () => {
    setIsAcknowledgingShortlisted(true)
}

const closeShowHandler=()=>{
  setIsAcknowledgingShortlisted(false);
}
  const logoutHandler = async () => {

    const responseData = await logoutUser(props,token)
    console.log(props)
    console.log(responseData)

    localStorage.removeItem('userData'); 
    props.history.replace('/')
   
     
     
    // let result = await fetch(logOutUrl,
    // {
    // method: "GET",
    // headers: {
    // "Authorization":"Baerer " + localStorage.getItem('user-info')
    // }
    // }).then(localStorage.removeItem("user-info")).then(props.history.push("/"))
    // result = await result.json()

  }
    
  

  return (
    //<Stack spacing={2} direction="row">
    <div>
       <Stack direction="row" alignContent="center" alignItems="center" spacing={2}>
                <Avatar alt="Hr" onClick={showHandler} src=""  sx={{ width: 40, height: 40, fontSize: "0.8rem" }}/>
                {/* <CustomButton onClick={ logoutHandler}>Log Out</CustomButton> */}
              </Stack>
              {
                isAcknowledgingShortlisted && <LogoutModal> 
              <Box>
             
              <ListItem >
        <ListItemIcon>
        
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary={userName} />
        {/* <ListItemText primary={userType}   /> */}
      </ListItem>
      <ListItem button>
        <ListItemIcon>
        
          <LockIcon/>
        </ListItemIcon>
        <ListItemText onClick={ logoutHandler} primary='LogOut' />
      </ListItem>
      <Button
                    onClick={closeShowHandler}
                    variant="contained"
                    sx={{ mt: 2, mb: 2, background: '#2FDD92','&:hover': {
                      background: "#34BE82", 
                  },'&:active': {
                    background: "#2FDD92",
                }, 
                itemAlign:'center',
                
                fontSize: '0.8rem'}}
                  >
                    Cancel
                  </Button>
                {/* <CustomButton onClick={ logoutHandler}>Log Out</CustomButton> */}
                </Box> 

                </LogoutModal>
              }

</div>
      
   
      //  <Logout/>
     
     
   // </Stack>
  );
}
