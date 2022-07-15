import React, { useState } from 'react'
import classes from './Card.module.css'
import { deleteJobUrl } from '../../../api/constants';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useDispatch } from 'react-redux';
import EditJobInputBackdrop  from '../../HR-Dashboard/EditJobInputBackdrop'
import { deleteJobsActions } from '../../../store/deleteJobSuccess'
import TooltipJdshow from './TooltipJdshow'

const Card = (props) => {

    const dispatch = useDispatch();

    const[isDeleted, setIsdeleted] = useState(false)
    const[httpError, setHttpError] = useState();
    const [isEdited, setIsEdited] = useState(false);

    const token = JSON.parse(localStorage.getItem('userData')).currentToken;

    const editJobCardHandler = (id) => {
      setIsEdited(true);

    }
    const closeEditHandler = ()=>{
      setIsEdited(false);
    }

    

    const deleteJobCardHandler = (id) => {
        console.log(JSON.stringify(id))
        var confirmDeletePrompt = window.confirm("Are you sure You want To Delete?");
        if(confirmDeletePrompt){
          try{
            fetch(deleteJobUrl + id,{
                  method : 'DELETE',
                  headers:{
                    'Content-Type': 'Application/Json',
                    'authorization': token
                  }
              })
              setIsdeleted(true)
              setTimeout(() => {setIsdeleted(false)},1000)
              dispatch(deleteJobsActions.deletingJobSuccessfully())
          }
          catch(error){
              setIsdeleted(false)
              setHttpError(error.message)
          }
        }
        else{
          return
        }
    }

    if(isDeleted){
        return(
          <section className={classes.JobIsDeleted}>
            <p>Deleted successfully!</p>
          </section>
        // <Modal onClose={props.onClose}>
        //   <Box sx={{
        //       display: 'flex',
        //       alignItems: 'center',
        //       justifyContent: 'space-between',
        //       color: '#FFB319',
        //       px: [1],
        //     }}>
        //           Deleted one job card successfully!
        //           <Button
        //           onClick={props.onClose}
        //           variant="contained"
        //           sx={{ mt: 1, mb: 1, mr: 3, fontSize: '0.8rem',background: '#FFB319','&:hover': {
        //             background: "#FFB344",
        //          },}}
        //         >
        //           close
        //         </Button>
        //   </Box>
        // </Modal>
        );
      }
      
      if(httpError){
        return(
          <section className={classes.JobsError}>
            <p>{httpError}</p>
          </section>
        );
      }

    return (
        // <div className={classes.mainDiv}>
            // <div className={classes.subDiv}>
                <div className={classes.card}>
                    <h5><b>{props.designation}</b></h5>
                    {/* <h3>{props.identity}</h3> */}
                    <h5> Experience - {props.experience}</h5>

                    <p> Skills - {props.skills} </p>
                    <h5> Location - {props.location} </h5>
                    
                    <h5> Job Description - <TooltipJdshow props={props}/></h5>
                    <div className={classes.btnDiv}>
                            <Tooltip title="Edit">
                                <IconButton sx={{mt: 1, mb: 1, ml: 2}} onClick={() => {editJobCardHandler()}}>
                                  <EditIcon />
                                </IconButton>
                              </Tooltip>
                              {isEdited && <EditJobInputBackdrop location ={props.location} id={props.id} skills={props.skills}  jobDescription={props.jobDescription} experience={props.experience} designation={props.designation}   onClose={closeEditHandler}/>}
                              
                            

                            <Tooltip title="Delete">
                                <IconButton sx={{mt: 1, mb: 1, ml: 2}} onClick={() => {deleteJobCardHandler(props.id)}}>
                                  <DeleteIcon />
                                </IconButton>
                              </Tooltip>
                    </div>
                </div>
            // </div>
        // </div> 
    )
}

export default Card