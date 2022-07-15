import React, { useEffect, useState } from 'react'
import { allTestCandidateUrl } from '../../../api/constants'

//import * as XLSX from "xlsx";
// import ReadMoreReact from 'read-more-react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Modal from '../../ui/Modal'
import { Button } from '@mui/material';






import TablePagination from '@mui/material/TablePagination';
import SearchAppBar from './ScheduleTestHeader'
import Paper from '@mui/material/Paper';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';


import DoNotDisturbOffIcon from '@mui/icons-material/DoNotDisturbOff';


import AddIcon from '@mui/icons-material/Add';





import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead'
import CircularProgress from '@mui/material/CircularProgress';

import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';

import Collapse from '@mui/material/Collapse';
import Fab from '@mui/material/Fab';
import classes from './ShortlistedForTest.module.css'




import { deleteFromOnlineTest ,rejectedListUrlHandler, shortlistedForTechnicalForTestHandler } from '../../../api/api'

import { Table } from '@mui/material'

import { TableRow,TableBody,TableContainer } from '@mui/material'

import ReactHTMLTableToExcel from 'react-html-table-to-excel';

import TooltipTestScore from './TooltipTestScore'
import TooltipShortlist from './TooltipShortlist'





//import { deleteMultipleCandidateList } from '../../../api/api'


const CustomerData = (props) => {
  const [open, setOpen] = React.useState(false);
 

  const { row } = props;
  const [candidateData, setCandidateData] = useState([row]);
  
 



  

 
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
  
    <TableCell  component="th" scope="row">
      {row.firstName} {row.lastName}
    </TableCell>

    
    <TableCell >{row.jobInfo}</TableCell>
    <TableCell >{row.candidateType}</TableCell>
    <TableCell >{row.emailid}</TableCell>
    <TableCell>{row.contactNumber}</TableCell>
    <TableCell>{row.gender}</TableCell>
    <TableCell  >{row.status}</TableCell>
    <TableCell > <TooltipShortlist props={row} /></TableCell> 
           <TableCell>  <TooltipTestScore props={row}/></TableCell>


    
    
  </TableRow>
  <TableRow>
    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box sx={{ margin: 1 }}>
          <Typography variant="h6" gutterBottom component="div">
            Address
          </Typography>
          <Table size="large" aria-label="purchases">
            <TableHead>
              <TableRow>
                <TableCell  sx={{fontWeight:'bold', fontSize:'0.9rem'}}>Address</TableCell>
                <TableCell  sx={{fontWeight:'bold', fontSize:'0.9rem'}}>City</TableCell>
                <TableCell  sx={{fontWeight:'bold', fontSize:'0.9rem'}} >PinCode</TableCell>
                <TableCell  sx={{fontWeight:'bold', fontSize:'0.9rem'}}>State</TableCell>
                <TableCell  sx={{fontWeight:'bold', fontSize:'0.9rem'}}>Country</TableCell>
              
              </TableRow>
            </TableHead>
            
            <TableBody>
              
                <TableRow>
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
                <TableCell  sx={{fontWeight:'bold', fontSize:'0.9rem'}}>Degree</TableCell>
                <TableCell  sx={{fontWeight:'bold', fontSize:'0.9rem'}}>Branch</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }} >Percentage</TableCell>
            
                <TableCell  sx={{fontWeight:'bold', fontSize:'0.9rem'}}>Passing Year</TableCell>
                <TableCell  sx={{fontWeight:'bold', fontSize:'0.9rem'}}>Institute</TableCell>
                <TableCell sx={{fontWeight:'bold', fontSize:'0.9rem'}} >University</TableCell>
              </TableRow>
            </TableHead>
            
            <TableBody>
              {row.ug.map(u=>
              
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
    <TableCell style={{ paddingBottom: 0, paddingTop: 0 , width:650}} colSpan={12}>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box sx={{ margin: 1 }}>
          <Typography variant="h6" gutterBottom component="div">
            Post Graduation Details
          </Typography>
          <Table size="large" aria-label="purchases" >
            <TableHead>
              <TableRow>
              <TableCell  sx={{fontWeight:'bold', fontSize:'0.9rem'}}>Degree</TableCell>
                <TableCell  sx={{fontWeight:'bold', fontSize:'0.9rem'}}>Branch</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }} >Percentage</TableCell>
                <TableCell sx={{fontWeight:'bold', fontSize:'0.9rem'}} >Passing Year</TableCell>
                <TableCell  sx={{fontWeight:'bold', fontSize:'0.9rem'}} >Institute</TableCell>
                <TableCell sx={{fontWeight:'bold', fontSize:'0.9rem'}} >University</TableCell>
              </TableRow>
            </TableHead>
            
            <TableBody>
              {row.pg.map(u=>
              
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
                <TableCell  sx={{fontWeight:'bold', fontSize:'0.9rem'}}>School </TableCell>
                <TableCell  sx={{fontWeight:'bold', fontSize:'0.9rem'}}>Board Type</TableCell>
                <TableCell  sx={{fontWeight:'bold', fontSize:'0.9rem'}}>Percentage</TableCell>
                <TableCell  sx={{fontWeight:'bold', fontSize:'0.9rem'}}>Passing Year</TableCell>
           
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
              <TableCell sx={{fontWeight:'bold', fontSize:'0.9rem'}}>School </TableCell>
                <TableCell  sx={{fontWeight:'bold', fontSize:'0.9rem'}} >Board Type</TableCell>
                <TableCell  sx={{fontWeight:'bold', fontSize:'0.9rem'}}>Percentage</TableCell>
                <TableCell  sx={{fontWeight:'bold', fontSize:'0.9rem'}}>Passing Year</TableCell>
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
                <TableCell sx={{fontWeight:'bold', fontSize:'0.9rem'}}>Project Name</TableCell>
                <TableCell sx={{fontWeight:'bold', fontSize:'0.9rem'}}>Project Link</TableCell>
                <TableCell sx={{fontWeight:'bold', fontSize:'0.9rem'}} >Project StartDate</TableCell>
                <TableCell sx={{fontWeight:'bold', fontSize:'0.9rem'}}>Project EndDate</TableCell>
               
              </TableRow>
            </TableHead>
            
            <TableBody>
             
              {row.projects.map(p=>
                
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
                <TableCell sx={{fontWeight:'bold', fontSize:'0.9rem'}}>Job Role</TableCell>
                <TableCell sx={{fontWeight:'bold', fontSize:'0.9rem'}}>Company NAme</TableCell>
                <TableCell sx={{fontWeight:'bold', fontSize:'0.9rem'}}>Experience</TableCell>
                <TableCell sx={{fontWeight:'bold', fontSize:'0.9rem'}}>Sills</TableCell>
                <TableCell sx={{fontWeight:'bold', fontSize:'0.9rem'}}>Job StartDate</TableCell>
                <TableCell sx={{fontWeight:'bold', fontSize:'0.9rem'}}>Job EndDates</TableCell>
              </TableRow>
            </TableHead>
            
            <TableBody>
             
              {row.experience.map(p=>
                
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
    const [search, setSearch] = useState('');
  // const [readMore,setReadMore]=useState(false);
  const [isShortlisted, setIsShortlisted] = React.useState(false);
  const [candidateData, setCandidateData] = useState([]);
  // const[resumeData, setResumeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const [isDeleted, setIsDeleted] = useState();
  const [isRejected, setIsRejected] = useState();
  
 
  
   const userType = JSON.parse(localStorage.getItem('userData')).userType;

  


  const token = JSON.parse(localStorage.getItem('userData')).currentToken;
  
  const [page, setPage] = React.useState(0);
  
 
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const allDeleteHandler = () => {
    setIsDeleted(false);
  }
  
  const allDetailCloseHandler = () => {
    setIsShortlisted(false);
  }
  const allRejectHandler = () => {
    setIsRejected(false)
  }
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  

  



  useEffect (() =>{
    const fetchData=async () =>{
      const response = await fetch(allTestCandidateUrl);
      const postData = await response.json();
      setCandidateData(postData);
      setIsLoading(false)
      
      console.log(postData)
    }
    fetchData().catch(error => {
      console.log(error)
      setIsLoading(false);
      setHttpError(error.message);
    });;
  
  },[])

 




//   if(isDeleted){
//     return(
//       <section className={classes.fieldIsDeleted}>
//         <p>Deleted successfully!</p>
//       </section>
//     );
//   }

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
    
    //axios
    // .delete(`http://localhost:10000/deleteMultipleApply/${arrayids}`)
    // .then(data => {
    //   console.log(data);
    //  //fetchCandidateData();
    // })
    // .catch(err => alert(err));
    var confirmDeletePrompt = window.confirm("Are you sure You want To Delete?");
    if (confirmDeletePrompt) {
      try {
        deleteFromOnlineTest(arrayids,token)
        setIsDeleted(true)
        
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
        shortlistedForTechnicalForTestHandler(arrayids,token)
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
      rejectedListUrlHandler(arrayids,token)
     setIsRejected(true)
    }
    catch (error) {
      setHttpError(error.message)
      setIsRejected(false)
      
    }

  }


  return (
    <>
    <SearchAppBar  onChange={(event) => {setSearch(event.target.value.toLowerCase())}}/>
    <div>
    {userType==='admin' &&           
          <Tooltip title="Delete Candidate">
            <Fab  size="small" color="primary" aria-label="add" sx={{ mt: 1, mb: 1, ml: 3 }} onClick={() => deleteCandidateByIds()}>
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
 

<Tooltip title="Shortlist For Technical">
          
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
          <TableCell sx={{ fontWeight:'bold'}}>All Details</TableCell>
          
            <TableCell sx={{ fontWeight:'bold'}}>Name</TableCell>
            <TableCell sx={{ fontWeight:'bold'}} >Job Role</TableCell>
            <TableCell sx={{ fontWeight:'bold'}} >Candidate Type</TableCell>
            <TableCell sx={{ fontWeight:'bold'}} >Email</TableCell>
            <TableCell sx={{ fontWeight:'bold'}}>Contact</TableCell>
            <TableCell sx={{ fontWeight:'bold'}} >Gender</TableCell>
           
            <TableCell sx={{ fontWeight:'bold'}} >Status</TableCell>
            <TableCell sx={{ fontWeight:'bold'}} >Action</TableCell>
            <TableCell sx={{ fontWeight:'bold'}} >Action</TableCell>

            
          </TableRow>
        </TableHead>
        <TableBody>
          {candidateData.filter((e) => { return e.firstName?.toLowerCase().indexOf(search) >= 0 || e.lastName?.toLowerCase().indexOf(search) >= 0 || e.emailid?.toLowerCase().indexOf(search) >= 0 || e.jobRole?.toLowerCase().indexOf(search) >= 0 }).sort((a, b) => a.firstName.localeCompare(b.firstName)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
            
           
        
          
    
    
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
      
     </div>
     </>

  )
}
