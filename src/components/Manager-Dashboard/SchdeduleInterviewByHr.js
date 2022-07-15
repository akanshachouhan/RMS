






import React, { useEffect, useState } from 'react'
import classes from './Schedule.module.css'
import Modal from '../ui/Modal'
import { Button } from '@mui/material';

import { Table } from '@mui/material'

import { TableBody, TableCell, TableContainer, TableHead, Paper } from '@mui/material'
import { TableRow } from '@mui/material'

import TooltipShortlistbyManager from './TooltipShorlistbyManager'
import SearchAppBar from './HeaderScheduled'





import { CircularProgress } from '@mui/material';
import TablePagination from '@mui/material/TablePagination';




import { IconButton } from '@mui/material';
import { Tooltip } from '@mui/material';



import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Typography from '@mui/material/Typography';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import Fab from '@mui/material/Fab';
import { showScheduleInterviewUrl } from '../../api/constants'
import { sendDataInReportList } from '../../api/api';
import DoNotDisturbOff from '@mui/icons-material/DoNotDisturbOff';

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
                <TableCell component="th" scope="row">
                    {row.firstName} {row.lastName}
                </TableCell>


                <TableCell >{row.jobInfo}</TableCell>
                <TableCell >{row.candidateType}</TableCell>
                <TableCell>{row.dateAndTimeForInterview}</TableCell>
                <TableCell ><a target="_blank" rel="noreferrer" href={`//${row.linkForInterview}`}>Link</a></TableCell>
                <TableCell >{row.testScore}</TableCell>
                <TableCell  >{row.status}</TableCell>
                <TableCell > <TooltipShortlistbyManager props={row} /></TableCell>






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
                                        <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Address</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>City</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }} >PinCode</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>State</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Country</TableCell>

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
                                        <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Degree</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Branch</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }} >Percentage</TableCell>
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
                                        <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }} >Percentage</TableCell>
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
    
    const [isShortlisted, setIsShortlisted] = React.useState(false);
    const [candidateData, setCandidateData] = useState([]);
   
    const [isLoading, setIsLoading] = useState(true);
const [httpError, setHttpError] = useState();
   
    
   
const [search,setSearch] = useState('')
    //const [isShow, setIsShow] = React.useState(false)


   



    const token = JSON.parse(localStorage.getItem('userData')).currentToken;

    const [page, setPage] = React.useState(0);

    
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const allDetailCloseHandler = () => {
        setIsShortlisted(false);
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
          const response = await fetch(showScheduleInterviewUrl);
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
    
     
    
    
    
   


    // useEffect(() => {
    //     const fetchCandidateData = async () => {
    //         const response = await fetch(showScheduleInterviewUrl, {
    //             method: 'GET',
    //             headers: {
    //                 'authorization': token
    //             }
    //         });
    //         if (!response.ok) {
    //             throw new Error('Something went wrong!');
    //         }
    //         else {
    //             console.log('successfully fetched the data');
    //         }
    //         const responseData = await response.json();

    //         console.log("responseData: ", responseData);

    //         const loadedCandidateData = []


    //         for (const key in responseData) {
    //             loadedCandidateData.push({
    //                 id: key,
    //                 _id: responseData[key]._id,
    //                 firstName: responseData[key].firstName,
    //                 lastName: responseData[key].lastName,
    //                 emailid: responseData[key].emailid,
    //                 contactNumber: responseData[key].contactNumber,
    //                 gender: responseData[key].gender,
    //                 country: responseData[key].country,
    //                 state: responseData[key].state,
    //                 city: responseData[key].city,
    //                 address: responseData[key].address,
    //                 pinCode: responseData[key].pinCode,
    //                 degreeForPg: responseData[key].degreeForPg,
    //                 branchForPg: responseData[key].branchForPg,
    //                 percentageForPg: responseData[key].percentageForPg,
    //                 instituteNameForPg: responseData[key].instituteNameForPg,
    //                 universityNameForPg: responseData[key].universityNameForPg,
    //                 passingYearForPg: responseData[key].passingYearForPg,
    //                 degreeForUg: responseData[key].degreeForUg,
    //                 branchForUg: responseData[key].branchForUg,
    //                 percentageForUg: responseData[key].percentageForUg,
    //                 instituteNameForUg: responseData[key].instituteNameForUg,
    //                 universityNameForUg: responseData[key].universityNameForUg,
    //                 passingYearForUg: responseData[key].passingYearForUg,
    //                 percentageForHss: responseData[key].percentageForHss,
    //                 passingYearForHss: responseData[key].passingYearForHss,
    //                 boardTypeForHss: responseData[key].boardTypeForHss,
    //                 schoolNameForHss: responseData[key].schoolNameForHss,
    //                 percentageForHighSchool: responseData[key].percentageForHighSchool,
    //                 passingYearForHighSchool: responseData[key].passingYearForHighSchool,
    //                 boardTypeForHighSchool: responseData[key].boardTypeForHighSchool,
    //                 schoolNameForHighSchool: responseData[key].schoolNameForHighSchool,
    //                 jobRole: responseData[key].jobRole,
    //                 companyName: responseData[key].companyName,
    //                 status: responseData[key].status,
    //                 experienceYear: responseData[key].experienceYear,
    //                 addKeySkill: responseData[key].addKeySkill,
    //                 jobStartDate: responseData[key].jobStartDate,
    //                 jobEndDate: responseData[key].jobEndDate,
    //                 experienceDetails: responseData[key].experienceDetails,
    //                 projectStartDate: responseData[key].projectStartDate,
    //                 projectEndDate: responseData[key].projectEndDate,
    //                 projectName: responseData[key].projectName,
    //                 projectAssociatedWith: responseData[key].projectAssociatedWith,
    //                 clientName: responseData[key].clientName,
    //                 projectLink: responseData[key].projectLink,
    //                 projectDetails: responseData[key].projectDetails,
    //                 projectStatus: responseData[key].projectStatus,
    //                 candidateType: responseData[key].candidateType,
    //                 pg: responseData[key].pg,
    //                 ug: responseData[key].ug,
    //                 experience: responseData[key].experience,
    //                 projects: responseData[key].projects,
    //                 testScore: responseData[key].testScore,
    //                 commentByManager: responseData[key].commentByManager,
    //                 linkForInterview:responseData[key].linkForInterview,
    //                 dateAndTimeForInterview:responseData[key].dateAndTimeForInterview,
    //                 jobInfo:responseData[key].jobInfo
    //             });
    //         }

    //         setCandidateData(loadedCandidateData);
    //         //setPaginatePost(_(responseData).slice(0).take(pageSize).value());
    //         console.log(loadedCandidateData);
    //         console.log(candidateData);
    //          setIsLoading(false);
    //         //setIsLoading(false);

    //     }
    //     fetchCandidateData().catch(error => {
    //         console.log(error)
    //     setIsLoading(false);
    //         setHttpError(error.message);
    //     });
    //     console.log(candidateData)
    // }, [])










      

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

    
    let arrayids = [];
    const reportCandidate = () => {
      
        // console.log(deleteCandidateByIds)
        candidateData.forEach(d => {
            if (d.select) {
                arrayids.push(d._id);
            }

        });
        console.log('array is ', arrayids)

        // .catch(err => alert(err));


        try {
            sendDataInReportList(arrayids,token)
            setIsShortlisted(true)
        }
        catch (error) {
            setHttpError(error.message)
            setIsShortlisted(false)
        }

    }


    return (
        <>
            <SearchAppBar  onChange={(event) => {setSearch(event.target.value.toLowerCase())}} />
            
                <Tooltip title="Report Candidate">
                    {/* <IconButton sx={{ mt: 1, mb: 1, ml: 2 }} onClick={() => deleteCandidateByIds()}>
          <DeleteIcon />
        </IconButton> */}
                    <Fab size="small" color="primary" aria-label="add" sx={{ mt: 1, mb: 1, ml: 3 }} onClick={() => reportCandidate()}>
                        <DoNotDisturbOff />
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
              Report successfully!
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
            

{/* 
            <Tooltip title="Send To Final List ">
                <Fab size="small" color="primary" aria-label="add" sx={{ mt: 1, mb: 1, ml: 3 }} onClick={() => sendCandidateToFinalList()}>
                    <AddIcon />
                </Fab>
            </Tooltip> */}

            <TableContainer component={Paper} >
                <Table style={{ minWidth: 400 }} id="emp-table" aria-label="collapsible table">
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
                            <TableCell sx={{ fontWeight: 'bold' }}>All Details</TableCell>
                            {/* <TableCell sx={{fontWeight:'bold'}}>SNo</TableCell> */}
                            <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} >Job Role</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} >Candidate Type</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} >Date Time</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Link</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} >TestScore</TableCell>

                            <TableCell sx={{ fontWeight: 'bold' }} >Status</TableCell>

                            <TableCell sx={{  fontWeight: 'bold' }} >Action</TableCell>



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
                    className="btn btn-info"
                    table="emp-table"
                    filename="Emp Excel file"
                    sheet="Sheet"
                    buttonText="Export To Excel" /></Button>


        </>

    )
}
