import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Stack from '@mui/material/Stack';
import { useButton } from '@mui/core/ButtonUnstyled';
import { styled } from '@mui/system';
import BasicTextFields from './BellAddMoreProjectBackDrop';

const CustomButtonRoot = styled('button')(`
  background-color: #E8F0FE;
  padding: 3px 3px;
  border-radius: 2.5px;
  color: black;
  font-weight: 550;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;

  &:hover {
    background-color: #e38e0e;
  }

  &.active {
    background-color: #2FDD92;
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

export default function AddBtn(props) {

  const[addJobBtnClicked, setAddJobBtnClicked] = useState(false);

  const addJobHandler = () => {
    setAddJobBtnClicked(true);
  }

  const hideJobsHandler = () => {
    setAddJobBtnClicked(false);
  }
  
  return (
    <Stack spacing={2} direction="row">
      <CustomButton onClick={addJobHandler}>Add More </CustomButton>
      {addJobBtnClicked && <BasicTextFields onClose={hideJobsHandler}/>}
      {/* <CustomButton disabled>Disabled</CustomButton> */}
    </Stack>
  );
}
