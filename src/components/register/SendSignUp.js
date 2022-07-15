// import React,{useState} from 'react'
// import Modal from '../ui/Modal.js'
// import Box from '@mui/material/Box';

// import TextareaAutosize from '@mui/material/TextareaAutosize'
// import Button from '@mui/material/Button';

// import { sendUserEmailToHr } from '../../api/api';



// const SendSignUp = (props) => {
   
//   const[userType, setuserType] = React.useState('');
//   const[formManager, setFormManager] = React.useState({testLink: '',
//   })
  
  

//   const userEmail = JSON.parse(localStorage.getItem('userData')).emailid;

//   const sendEmail = (event) => {
//     event.preventDefault();
//     // if(!isValid()){
//     //   alert('fill required details')
//     //   return
//     // }
//     const data = new FormData(event.currentTarget);
//     var scheduleTestData = {
//       emailid: data.get('emailid'),
//       credentials: data.get('credentials'),
//       userEmail
//     }
//     console.log(scheduleTestData)
//     sendUserEmailToHr(scheduleTestData)
//   }

//   // const sendEmail = (e) => {
//   //   e.preventDefault();

//   //   emailjs.sendForm('service_wafcfju', 'template_8aoffoj', form.current, 'YOUR_USER_ID')
//   //     .then((result) => {
//   //         console.log(result.text);
//   //     }, (error) => {
//   //         console.log(error.text);
//   //     });
//   // };

//   const managerHandler = (event,key) => {
//     setFormManager((prev) => {
//       let obj = {...prev}
//       obj[key] = event.target.value;
//       return obj
//     })
//   }
  
//   const isValid = () => {
//     for(let i in formManager){
//       if(formManager[i].length === 0){
//         return false
//       }
//     }
//     return true;
//   }

//     return (
//         <Modal onClose={props.onClose}>
//           {/* <Box>
//             <h4></h4>
//           </Box> */}
//             <Box sx={{ textAlign: 'center', m: 1, fontWeight: 'bold' }}>Send test email to {props.firstName} {props.lastName}</Box>
//             <Box sx={{ textAlign: 'center', m: 1, fontWeight: 'normal',fontSize: '0.8rem' }}>Email Address {props.emailid}</Box>
//             <Box
//             component="form"
//             sx={{
//                 '& > :not(style)': { m: 1, width: '45ch' },
//             }}
//             noValidate
//             onSubmit={sendEmail}
//             autoComplete="off"
//             >
//             {/* <TextField id="filled-basic" name="name" label="Name" variant="filled" />
//             <TextField id="filled-basic" name="email" label="Email" variant="filled" /> */}
//                         <TextareaAutosize   value={password}  onChange={() => setIsUpperCase(val => !val)} id="filled-basic" aria-label="minimum height"
//                 minRows={2}
//                 placeholder="enter test link with message"
//                 style={{ width: 400 }} required  fullWidth name="credentials" label="Message with test link" variant="filled" />
            
//             <Button
//             onClick={generatePassword}
//                     type="submit"
//                     variant="contained"
//                     alignItems="left"
//                     sx={{ mt: 1, mb: 2, mr: 4, background: '#2FDD92','&:hover': {
//                       background: "#34BE82",
//                   },'&:active': {
//                     background: "#2FDD92",
//                 }, fontSize: '0.8rem'}}
//                   >
//                     Generate Password
//                   </Button><TextareaAutosize id="filled-basic" aria-label="minimum height"
//                 minRows={2}
//                 placeholder="enter test link with message"
//                 style={{ width: 400 }} required onChange={(event) => {managerHandler(event,'emailid')}} fullWidth name="emailid" label="Message with test link" variant="filled" />
//             {/* <TextField id="filled-basic" label="JD" name="jobDescription" variant="filled" /> */}
//             <Box sx={{
//               '& > :not(style)': { m: 1, width: '100%'},
//                 width: '100%',
//                 display: 'flex',
//                 justifyContent: 'space-evenly',
//                 alignItems: 'center'
//               }}>
//                     <Button
//                     type="submit"
//                     variant="contained"
//                     sx={{ mt: 2, mb: 2, background: '#2FDD92','&:hover': {
//                       background: "#34BE82",
//                   },'&:active': {
//                     background: "#2FDD92",
//                 }, fontSize: '0.8rem'}}
//                   >
//                     Send mail
//                   </Button>
//                   <Button
//                     onClick={props.onClose}
//                     variant="contained"
//                     sx={{ mt: 2, mb: 2,background: '#FFB344','&:hover': {
//                       background: "#FFB319",
//                   },'&:active': {
//                     background: "#FFB344",
//                 }, fontSize: '0.8rem'}}
//                   >
//                     close
//                   </Button>
//               </Box>
//             </Box>
//         </Modal>
//     )
// }


// export default SendSignUp;
