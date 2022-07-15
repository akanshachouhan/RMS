import React, { useEffect, useState } from 'react'
import { showFinalShortlistedCandidateUrl } from '../../../api/constants'

import SearchAppBar from './FinalSelectedHeader'
import { CircularProgress } from '@mui/material'
import TablePagination from '@mui/material/TablePagination';
import { deleteFromFinalHandler } from '../../../api/api'

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import { Table } from '@mui/material'
import { TableBody,TableCell,TableContainer,TableHead, Paper } from '@mui/material'
import Modal from '../../ui/Modal'
import { Button } from '@mui/material';

import { TableRow } from '@mui/material'
import TooltipSendConfirmation from './TooltipSendConfirmation'
import DeleteIcon from '@mui/icons-material/Delete';
import classes from './FinalSelectedList.module.css'


import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Typography from '@mui/material/Typography';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import Fab from '@mui/material/Fab';

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
    {/* <TableCell> {Number(row.id) + 1}</TableCell> */}
    <TableCell    component="th" scope="row">
      {row.firstName} {row.lastName}
    </TableCell>

    
    <TableCell >{row.jobInfo}</TableCell>
    <TableCell >{row.candidateType}</TableCell>
    <TableCell>{row.emailid}</TableCell>
    <TableCell >{row.contactNumber}</TableCell>
    <TableCell >{row.testScore}</TableCell>
    <TableCell  >{row.status}</TableCell>
    <TableCell > <TooltipSendConfirmation props={row}/></TableCell> 
  
         


    
    
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

  const [candidateData, setCandidateData] = useState([]);
  // const[resumeData, setResumeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const [isDeleted, setIsDeleted] = useState();

  
  
   const userType = JSON.parse(localStorage.getItem('userData')).userType;

  


  //const token = JSON.parse(localStorage.getItem('userData')).currentToken;
  
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

  useEffect (() =>{
    const fetchData=async () =>{
      const response = await fetch(showFinalShortlistedCandidateUrl);
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

  // removePeople(e) {
  //   var array = []; // make a separate copy of the array
  //   var _id = array.indexOf(e.target.value)
  //   if (_id !== -1) {
  //     array.splice(_id, 1);
  //     candidateData({_id: array});
  //   }
  // },
  //   const deleteCustomerByIds =(_id) => {
  // let temArray = [{_id}]
  // console.log(temArray)
  //    let  ids =[]
  //     for (let i in temArray){
  //       ids.push(temArray[i]._id)
  //     }
  //     console.log(ids)

  //     // let index = ids.indexOf(e.target.value)
  //     // if (index !== -1){
  //     //   ids.splice(index, 1);
  //     //   candidateData({_id: ids});
  //     // }
  //     //   for (const i in key){
  //     //     const responseData = await response.json();
  //     //     ids.push({
  //     //       _id: key._id,
  //     //     });
  //     //   }
  //     //   setCandidateData(ids)
  //     // }
  //     //console.log(ids);


  //      //onsole.log(temArray);
  //     // try{
  //     //   deleteMultipleCandidateList(ids);
  //     //   //setIsDeleted(true)
  //     // }
  //     // catch(error){
  //     //   // setIsDeleted(false)
  //     //   setHttpError(error.message)
  //     // }

  //     // axios
  //     //   .delete(`http://localhost:10000/deleteMultipleApply/${ids}`)

  //     //   .then(data => {

  //     //     console.log(data);

  //     //   })


  //     //   .catch(err => alert(err));
  //   };
  // const deleteCustomerByIds = (_id) => {
  //   let arrayids = [];

  //   // arrayids.push(_id)
  //   // console.log(arrayids);
  //   //let ids=[];
  // //  console.log('arrayid is',arrayids)
  // //   // let ids=[]
  //   candidateData.forEach(d => {
  //     if (d.select) {
  //       arrayids.push(d._id);
  //     }
  //     //console.log(arrayids);
  //   });
  //   // for(let i in arrayids){
  //   //   ids.push(arrayids[i]._id)
  //   // }
  //   // console.log('array is -',ids);

  //   axios
  //     .delete(`http://localhost:10000/deleteMultipleApply/${arrayids}`)
  //     .then(data => {
  //       console.log(data);
  //       // getCustomer();
  //     })
  //     .catch(err => alert(err));
  // };

  // const deleteCandidateByIds=(_id) =>{
  //   let arrayids = [{_id}];
  //   let ids=[];

  // ids.forEach(d => {
  //         if (d.select) {
  //           arrayids.push(d._id);
  //         }
  //       console.log('array is ',arrayids);
  //       });
  // for ( let i in arrayids){
  //   ids.push(arrayids[i]._id);
  // }
  // console.log(ids)


  // }
  //let arrayids = [];
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
    if(confirmDeletePrompt){
    try{
      deleteFromFinalHandler(arrayids)
      setIsDeleted(true)
    }
    catch(error){
      setHttpError(error.message)
      setIsDeleted(false)
    }
  }
}
// const sendCandidateToFinalList = () => {
//     let arrayids = [];
//     // console.log(deleteCandidateByIds)
//     candidateData.forEach(d => {
//       if (d.select) {
//         arrayids.push(d._id);
//       }

//     });
//     console.log('array is ', arrayids)
    
//     // .catch(err => alert(err));


//     try {
//       sendDataInFinalListHandler(arrayids)
//       setIsShortlisted(true)
//     }
//     catch (error) {
//       setHttpError(error.message)
//       setIsShortlisted(false)
//     }

//   }


  return (
    <>
    <SearchAppBar onChange={(event) => { setSearch(event.target.value.toLowerCase()) }}/>
    {userType==='admin' && 
      <Tooltip title="Delete">
        {/* <IconButton sx={{ mt: 1, mb: 1, ml: 2 }} onClick={() => deleteCandidateByIds()}>
          <DeleteIcon />
        </IconButton> */}
        <Fab size="small" color="primary" aria-label="add" sx={{ mt: 1, mb: 1,ml:3 }} onClick={()=> deleteCandidateByIds()}>
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
    
    

        <TableContainer component={Paper} >
      <Table style={{minWidth: 400}} id="emp-table" aria-label="collapsible table">
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
          {/* <TableCell sx={{fontWeight:'bold'}}>SNo</TableCell> */}
            <TableCell sx={{ fontWeight:'bold'}}>Name</TableCell>
            <TableCell sx={{ fontWeight:'bold'}} >Job Role</TableCell>
            <TableCell sx={{ fontWeight:'bold'}} >Candidate Type</TableCell>
            <TableCell sx={{ fontWeight:'bold'}} >Email</TableCell>
            <TableCell sx={{ fontWeight:'bold'}}>Contact</TableCell>
            <TableCell sx={{ fontWeight:'bold'}} >TestScore</TableCell>

            <TableCell sx={{fontSize:'1rem ', fontWeight:'bold'}} >Status</TableCell>
            
            <TableCell sx={{fontSize:'1rem ', fontWeight:'bold'}} >Action</TableCell>
    

            
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
      
  
    </>

  )
}
