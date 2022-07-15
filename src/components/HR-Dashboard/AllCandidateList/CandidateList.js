import React, { useEffect, useState } from 'react'
import {  showAllCandidateDataUrl , staticUrl } from '../../../api/constants'
import TooltipShow from './TooltipShow'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
//import { useDispatch , useSelector} from 'react-redux';


import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Modal from '../../ui/Modal'
import { Button } from '@mui/material';




import classes from './CandidateList.module.css'

import TablePagination from '@mui/material/TablePagination';
import SearchAppBar from './HrSearchUI'
import Paper from '@mui/material/Paper';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';



import AddIcon from '@mui/icons-material/Add';

import Fab from '@mui/material/Fab';



import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead'
import CircularProgress from '@mui/material/CircularProgress';

import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';


import Collapse from '@mui/material/Collapse';




import { deleteMultipleCandidateList, rejectedListUrlHandler, shortlistByCandidateTypeHandler } from '../../../api/api'
import { TableContainer } from '@mui/material'
import { Table } from '@mui/material'
import { TableBody } from '@mui/material'
import { TableRow } from '@mui/material'


import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import DoNotDisturbOffIcon from '@mui/icons-material/DoNotDisturbOff';



// const sendEmail = (event) => {
//   event.preventDefault();
  
//   const data = new FormData(event.currentTarget);
//   var scheduleTestData = {

// imageId: row.imageId,
  
//   }
//   console.log(scheduleTestData)
  
//   //sendCongratulationMail(scheduleTestData)
//   setAddedJobs(true);
// }

 















const CustomerData = (props) => {
  const [open, setOpen] = React.useState(false);


  const { row } = props;
  const [candidateData, setCandidateData] = useState([row]);
  // const submit= () =>{
  //   const data = new FormData() 
  //   data.append('imageId', row.imageId)
  //   console.log(row.imageId);
  //   let url = "http://localhost:10000/RMS/files?";
    
  //   axios.post(url, data, { // receive two parameter endpoint url ,form data 
  //   })
  //   .then(res => {
  //       // localStorage["imgId"] = res.data.message
  //        // then print response status
  //        //localStorage.setItem('imgId', JSON.stringify(res.data.message))
  //       console.warn(res);
  //   })
  
  // }

  return (


    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>

        <TableCell>

          <input
            type="checkbox"
            checked={row.select}
            onChange={e => {
              //setStateCustomer(true)
              let value = e.target.checked;
              setCandidateData(
                candidateData.map(sd => {
                  if (sd._id === row._id) {
                    sd.select = value;
                  }
                  return sd;
                })
              );
            }}
          />

        </TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell component="th" scope="row">
          {row.firstName} {row.lastName}
        </TableCell>


        <TableCell >{row.jobInfo}</TableCell>
        <TableCell >{row.candidateType}</TableCell>
        <TableCell >{row.emailid}</TableCell>
        <TableCell >{row.contactNumber}</TableCell>
     
        <TableCell >{row.status}</TableCell>
        <TableCell ><TooltipShow props={row}/> </TableCell>
        

       



      </TableRow>
      
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
             Personal Information
  
              </Typography>
              <Table size="large" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    {/* <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem'}}>Image</TableCell> */}
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem'}}>Resume</TableCell>

                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem'}}>Gender</TableCell>
                    
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Address</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>City</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }} >PinCode</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>State</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Country</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>

                  <TableRow>
                  {/* <TableCell ><a target="_blank" rel="noreferrer" href={`//${row.imageId}`}>Images</a></TableCell> */}
        
        {/* <TableCell ><a target="_blank" rel="noreferrer" href={`//${row.resumeDow}`}>Resume</a></TableCell> */}
         {/* <TableCell ><a target="_blank" rel="noreferrer" href={row.resumeDow}>Resume</a></TableCell>  */}
        <TableCell> <a href={`${staticUrl}${row.resumeName}`} download>Resume </a></TableCell>
        {/* <TableCell><Button onClick={submit}>Dowmload</Button></TableCell> */}
        <TableCell>{row.gender}</TableCell>
                    <TableCell>{row.address}</TableCell>
                    <TableCell >
                      {row.city}
                    </TableCell>
                    <TableCell>{row.pinCode}</TableCell>
                    <TableCell >{row.state}</TableCell>
                    <TableCell >{row.country}</TableCell>
                    {/* <TableCell align="right">
                    {Math.round(historyRow.amount * row.price * 100) / 100}
                  </TableCell> */}
                  </TableRow>

                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Under Graduation Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Degree</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Branch</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Percentage</TableCell>

                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Passing Year</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Institute</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }} >University</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {row.ug.map(u =>

                    <TableRow>
                      <TableCell>{u.degreeForUg}</TableCell>
                      <TableCell >
                        {u.branchForUg}
                      </TableCell>
                      <TableCell>{u.percentageForUg}</TableCell>
                      <TableCell >{u.passingYearForUg}</TableCell>
                      <TableCell >{u.instituteNameForUg}</TableCell>
                      <TableCell >{u.universityNameForUg}</TableCell>

                      {/* <TableCell align="right">
                    {Math.round(historyRow.amount * row.price * 100) / 100}
                  </TableCell> */}
                    </TableRow>
                  )}

                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0, width: 650 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Post Graduation Details
              </Typography>
              <Table size="large" aria-label="purchases" >
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Degree</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Branch</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Percentage</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }} >Passing Year</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }} >Institute</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }} >University</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {row.pg.map(u =>

                    <TableRow>
                      <TableCell>{u.degreeForPg}</TableCell>
                      <TableCell >
                        {u.branchForPg}
                      </TableCell>
                      <TableCell>{u.percentageForPg}</TableCell>
                      <TableCell >{u.passingYearForPg}</TableCell>
                      <TableCell >{u.instituteNameForPg}</TableCell>
                      <TableCell >{u.universityNameForPg}</TableCell>

                      {/* <TableCell align="right">
                    {Math.round(historyRow.amount * row.price * 100) / 100}
                  </TableCell> */}
                    </TableRow>
                  )}

                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Higher Secondary Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>School </TableCell>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Board Type</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Percentage</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Passing Year</TableCell>

                  </TableRow>
                </TableHead>

                <TableBody>


                  <TableRow>
                    <TableCell>{row.schoolNameForHss}</TableCell>
                    <TableCell >
                      {row.boardTypeForHss}
                    </TableCell>
                    <TableCell>{row.percentageForHss}</TableCell>
                    <TableCell >{row.passingYearForHss}</TableCell>


                    {/* <TableCell align="right">
                    {Math.round(historyRow.amount * row.price * 100) / 100}
                  </TableCell> */}
                  </TableRow>


                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                High School Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>School </TableCell>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }} >Board Type</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Percentage</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Passing Year</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>


                  <TableRow>
                    <TableCell>{row.schoolNameForHighSchool}</TableCell>
                    <TableCell >
                      {row.boardTypeForHighSchool}
                    </TableCell>
                    <TableCell>{row.percentageForHighSchool}</TableCell>
                    <TableCell >{row.passingYearForHighSchool}</TableCell>


                    {/* <TableCell align="right">
                    {Math.round(historyRow.amount * row.price * 100) / 100}
                  </TableCell> */}
                  </TableRow>


                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Project Detials
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Project Name</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Project Link</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }} >Project StartDate</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Project EndDate</TableCell>

                  </TableRow>
                </TableHead>

                <TableBody>

                  {row.projects.map(p =>

                    <TableRow>
                      <TableCell>{p.projectName}</TableCell>
                      <TableCell >
                        {p.projectLink}
                      </TableCell>
                      <TableCell>{p.projectStartDate}</TableCell>
                      <TableCell >{p.projectEndDate}</TableCell>


                      {/* <TableCell align="right">
                    {Math.round(historyRow.amount * row.price * 100) / 100}
                  </TableCell> */}
                    </TableRow>
                  )}


                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Experience Details
              </Typography>
              <Table aria-label="collapsible table">
                <TableHead >
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Job Role</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Company NAme</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Experience</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Sills</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Job StartDate</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Job EndDates</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>

                  {row.experience.map(p =>

                    <TableRow>
                      <TableCell>{p.jobRole}</TableCell>
                      <TableCell >
                        {p.companyName}
                      </TableCell>
                      <TableCell>{p.experienceYear}</TableCell>
                      <TableCell >{p.addKeySkill}</TableCell>
                      <TableCell>{p.jobStartDate}</TableCell>
                      <TableCell >{p.jobEndDate}</TableCell>



                      {/* <TableCell align="right">
                    {Math.round(historyRow.amount * row.price * 100) / 100}
                  </TableCell> */}
                    </TableRow>
                  )}


                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}



export default function CollapsibleTable(props) {
  //const dispatch =  useDispatch(); 
  

  //const token = JSON.parse(localStorage.getItem('userData')).currentToken;

  
  //const DeletedJobs = useSelector(state => state.deleteCandidate.isDeletingJob);

  // useEffect(()=>{
  //   getPost();
  // },[]);
  const [search, setSearch] = useState('');
  // const [isShowingAllDetails, setIsShowingAllDetails] = React.useState();
  // const [readMore,setReadMore]=useState(false);
  const [isShortlisted, setIsShortlisted] = useState(null);
  const [candidateData, setCandidateData] = useState([]);
  const[isLoading, setIsLoading] = useState(true);
 
  const [httpError, setHttpError] = useState();
  const [isDeleted, setIsDeleted] = useState();
  const [isRejected,setIsRejected] = useState();
  //const DeletedJobs = useSelector(state => state.deleteCandidate.isDeletingJob);


 


  const userType = JSON.parse(localStorage.getItem('userData')).userType;



  
  const token = JSON.parse(localStorage.getItem('userData')).currentToken;

  const [page, setPage] = React.useState(0);

 
  const [rowsPerPage, setRowsPerPage] = React.useState(10);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const allDeleteHandler = () => {
    setIsDeleted(false);
  }

  const allDetailCloseHandler = () => {
    setIsShortlisted(false);
  }
  const allRejectHandler = () => {
    setIsRejected(false);
  }
  




useEffect (() =>{
  const fetchData=async () =>{
    const response = await fetch(showAllCandidateDataUrl);
    const postData = await response.json();
    setCandidateData(postData);
    setIsLoading(false)
    
    console.log(postData)
  }
  fetchData().catch(error => {
    console.log(error)
    setIsLoading(false);
    setHttpError(error.message);

    
  });
  //dispatch(deleteJobsActions.notDeletingJobSuccessfully())

},[])

// useEffect(() => {
//   axios.get(`https://localhost:10000/allFresher`).then((response) => {
//     setCandidateData(response);
//     console.log(response)
//   });
// }, [candidateData]);

  if (isLoading) {
    return (
      <section className={classes.JobIsLoading}>
        {/* <p>loading...</p> */}
        <CircularProgress />
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.JobsError}>
        <p>{httpError}</p>
      </section>
    );
  }



  const deleteCandidateByIds = () => {
    let arrayids = [];
    // console.log(deleteCandidateByIds)
    candidateData.forEach(d => {
      if (d.select) {
        arrayids.push(d._id);
      }

    });
    console.log('array is ', arrayids)


    var confirmDeletePrompt = window.confirm("Are you sure You want To Delete?");
    if (confirmDeletePrompt) {
      try {
        deleteMultipleCandidateList(arrayids, token)
        setIsDeleted(true)
        //setTimeout(() => {setIsDeleted(false)},1000)
        //dispatch(deleteJobsActions.deletingJobSuccessfully())

      }

      catch (error) {
        setHttpError(error.message)
        setIsDeleted(false)
      }
    }

  }




  //let obj = {}

  const shortlistCandidateByHR = () => {
    let arrayids = [];
    // console.log(deleteCandidateByIds)
    candidateData.forEach(d => {
      if (d.select) {
        arrayids.push(d._id);
      }

    });
    console.log('array is ', arrayids)

    // .catch(err => alert(err));


    try {
      shortlistByCandidateTypeHandler(arrayids, token)
      setIsShortlisted(true)
    }
    catch (error) {
      setHttpError(error.message)
      setIsShortlisted(false)
    }

  }

  const rejectCandidateByHR = () => {
    let arrayids = [];
    // console.log(deleteCandidateByIds)
    candidateData.forEach(d => {
      if (d.select) {
        arrayids.push(d._id);
      }

    });
    console.log('array is ', arrayids)

    // .catch(err => alert(err));


    try {
      rejectedListUrlHandler(arrayids, token)
      setIsRejected(true)
    
    }
    catch (error) {
      setHttpError(error.message)
     setIsRejected(false)
    }

  }




  return (
    <>
      <SearchAppBar onChange={(event) => { setSearch(event.target.value.toLowerCase()) }} />
      
        {userType === 'admin' &&
          <Tooltip title="Delete Candidate">

            <Fab size="small" color="primary" aria-label="add" sx={{ mt: 1, mb: 1, ml: 3 }} onClick={() => deleteCandidateByIds()}>
              <DeleteIcon />
            </Fab>
          </Tooltip>
        }
        {
          isDeleted && <Modal onClose={props.onClose}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: '#FFB319',
              px: [1],
            }}>
              Delete successfully!
              <Button
                onClick={allDeleteHandler}
                variant="contained"
                sx={{
                  mt: 1, mb: 1, mr: 3, fontSize: '0.8rem', background: '#FFB319', '&:hover': {
                    background: "#FFB344",
                  },
                }}
              >
                close
              </Button>
            </Box>
          </Modal>
        }
        <Tooltip title="Shortlist For Test">

          <Fab size="small" color="primary" aria-label="add" sx={{ mt: 1, mb: 1, ml: 3 }} onClick={() => shortlistCandidateByHR()}>
            <AddIcon />
          </Fab>
        </Tooltip>

        {
          isShortlisted && <Modal onClose={props.onClose}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: '#FFB319',
              px: [1],
            }}>
              Shortlisted successfully!
              <Button
                onClick={allDetailCloseHandler}
                variant="contained"
                sx={{
                  mt: 1, mb: 1, mr: 3, fontSize: '0.8rem', background: '#FFB319', '&:hover': {
                    background: "#FFB344",
                  },
                }}
              >
                close
              </Button>
            </Box>
          </Modal>
        }

        <Tooltip title="Reject">

          <Fab size="small" color="primary" aria-label="add" sx={{ mt: 1, mb: 1, ml: 3 }} onClick={() => rejectCandidateByHR()}>
            <DoNotDisturbOffIcon />
          </Fab>
        </Tooltip>
        {
          isRejected &&  <Modal onClose={props.onClose}>
          <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: '#FFB319',
              px: [1],
            }}>
                Reject successfully!
                  <Button
                  onClick={allRejectHandler}
                  variant="contained"
                  sx={{ mt: 1, mb: 1, mr: 3, fontSize: '0.8rem',background: '#FFB319','&:hover': {
                    background: "#FFB344",
                 },}}
                >
                  close
                </Button>
          </Box>
        </Modal>
        }
        <TableContainer component={Paper} >
          <Table id="emp-table" aria-label="collapsible table">
            <TableHead>
              <TableRow>

                <TableCell>
                  <input
                    type="checkbox"
                    onChange={e => {
                      //setStateCustomer(true)
                      let value = e.target.checked;
                      setCandidateData(
                        candidateData.map(d => {
                          d.select = value;
                          return d;
                        })
                      );
                    }}
                  />

                </TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>All Details</TableCell>

                <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} >Job Role</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} >Candidate Type</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} >Email</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Contact</TableCell>
               

                <TableCell sx={{ fontWeight: 'bold' }} >Status</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} >Image</TableCell>
               
              </TableRow>
            </TableHead>
            <TableBody>
              {candidateData.filter((e) => { return e.firstName?.toLowerCase().indexOf(search) >= 0 || e.lastName?.toLowerCase().indexOf(search) >= 0 || e.candidateType?.toLowerCase().indexOf(search) >= 0 || e.jobRole?.toLowerCase().indexOf(search) >= 0 }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (






                <CustomerData key={row.firstName} row={row} />








              ))}

              {candidateData.filter((e) => { return e.firstName?.toLowerCase().indexOf(search) >= 0 || e.lastName?.toLowerCase().indexOf(search) >= 0 || e.emailid?.toLowerCase().indexOf(search) >= 0 || e.jobRole?.toLowerCase().indexOf(search) >= 0 }).length === 0 && <div><p className={classes.notFound}>No match found</p></div>}



            </TableBody>

          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 20, 100]}
          component="div"
          count={candidateData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <Button>

<ReactHTMLTableToExcel
className = "btn btn-info"
table="emp-table"
filename= "Emp Excel file"
sheet= "Sheet"

buttonText="Export To Excel"/></Button>
      
    </>

  )
}
