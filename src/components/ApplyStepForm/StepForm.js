import React from 'react'
import Linear from './Linear'
// import LinearStepper from "./LinearStepper";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";

const StepForm = () => {
    return (
        <>
       
        <CssBaseline />
        <Container component={Box} p={4}>
          <Paper component={Box} p={3}>
            {/* <LinearStepper /> */}
            <Linear/>
          </Paper>
        </Container>
      </>
    )
}



export default StepForm
