import React from 'react'
import { useEffect, useState } from 'react';
import {  viewUserUrl } from '../../api/constants';
import Modal from '../ui/Modal'
import { Button,Box } from '@mui/material';

import classes from '../HR-Dashboard/FinalSelectedList/FinalSelectedList.module.css'
import SearchAppBar from './UsersSearch';
import { CircularProgress } from '@mui/material';
import TablePagination from '@mui/material/TablePagination';
import { deleteFromUsersHandler } from '../../api/api';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';

const UsersList= (props) => {
  const[search,setSearch] = useState('')
    const[userList, setUserList] = useState([]);
    
    const[isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();
  const [isDeleted, setIsDeleted] = useState();
    
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
  const allDetailCloseHandler = () => {
    setIsDeleted(false)
  }



    // useEffect(()=>{
    // const fetchUserList  = async () => {
    //     const response = await fetch(viewUserUrl,{
    //       method:"GET",
    //       headers: {
    //         'authorization' : token
    //       }
    //     });
    //     if(!response.ok){
    //         throw new Error ('Something went wrong!');
    //       }
    //     else{
    //         console.log('successfully fetched the data');
    //     }
    //     const responseData = await response.json();

    //           console.log("responseData: ",responseData);
    
    //           const loadedUserList= []
              
    //           for (const key in responseData){
    //             loadedUserList.push({
    //               id:key,
    //                     _id: responseData[key]._id,
    //                     userId: responseData[key].userId,
    //                   firstName: responseData[key].firstName,
    //                   lastName: responseData[key].lastName,
    //                   emailid: responseData[key].emailid,
    //                   password: responseData[key].password,
    //                   userType: responseData[key].userType

    //                 });
    //             }
    //             console.log(responseData);
    
    //             setUserList(loadedUserList);
    //             console.log(loadedUserList)
    //             console.log(userList);
    //            setIsLoading(false);
    // }
    // fetchUserList().catch( error =>{
    //     console.log(error)
    //     setIsLoading(false);
    //     setHttpError(error.message);
    //     // setIsLoading(false);
    //     // setHttpError(error.message);
    //   });
    // },[])

    useEffect (() =>{
      const fetchData=async () =>{
        const response = await fetch(viewUserUrl);
        const postData = await response.json();
        setUserList(postData);
        setIsLoading(false)
        
        console.log(postData)
      }
      fetchData().catch(error => {
        console.log(error)
        setIsLoading(false);
        setHttpError(error.message);
      });;
    
    },[])
  
   
  
  
  

    if(isLoading){
      return(
        <section className={classes.JobIsLoading}>
          {/* <p>loading...</p> */}
          <CircularProgress/>
        </section>
      );
    }
    
    
    

    if(httpError){
      return(
        <section className={classes.JobsError}>
          <p>{httpError}</p>
        </section>
      );
    }

    // const userList = userList.map(feedData => {return <BasicTable 
    //     id={Number(feedData.id)+1} 
    //     identity={feedData.identity}
    //     firstName={feedData.firstName}
    //     lastName={feedData.lastName}
    //     feedback={feedData.feedback}
    //     ratings={feedData.ratings}
    //     /> })

    const deleteCandidateByIds = () => {
      let arrayids = [];
      // console.log(deleteCandidateByIds)
      userList.forEach(d => {
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
        deleteFromUsersHandler(arrayids)
        setIsDeleted(true)
      }
      catch(error){
        setHttpError(error.message)
        setIsDeleted(false)
      }
    }
  }
    // let list= userList

        return (
          <div>
            <SearchAppBar onChange={(event) => {setSearch(event.target.value.toLowerCase())}}/>

            <Tooltip title="Delete">
        {/* <IconButton sx={{ mt: 1, mb: 1, ml: 2 }} onClick={() => deleteCandidateByIds()}>
          <DeleteIcon />
        </IconButton> */}
        <Fab size="small" color="primary" aria-label="add" sx={{ mt: 1, mb: 1,ml:3 }} onClick={()=> deleteCandidateByIds()}>
        <DeleteIcon />
</Fab>
      
      </Tooltip> 
      {
          isDeleted && <Modal onClose={props.onClose}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: '#FFB319',
              px: [1],
            }}>
              Delete Users successfully!
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
         <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => {
            deleteCandidateByIds();
          }}
        >
          Delete Customer
        </button>  */}
  
  
  
  
        <table className="table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  onChange={e => {
                    let value = e.target.checked;
                    setUserList(
                      userList.map(d => {
                        d.select = value;
                        return d;
                      })
                    );
                  }}
                />
              </th>
             
              <th scope="col">Name</th>
  
             
            
              <th scope="col">Email</th>
              <th scope="col">User Type</th>
              
            </tr>
          </thead>
          <tbody>
          {userList.filter((e) => { return e.firstName?.toLowerCase().indexOf(search) >= 0 || e.lastName?.toLowerCase().indexOf(search) >= 0  }).sort((a, b) => a.firstName.localeCompare(b.firstName)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(d => (
  
              <tr key={d._id}>
                <td>
                  <input
                    type="checkbox"
                    checked={d.select}
                    onChange={e => {
                      let value = e.target.checked;
                      setUserList(
                        userList.map(sd => {
                          if (sd._id === d._id) {
                            sd.select = value;
                          }
                          return sd;
                        })
                      );
                    }}
                  />
                </td>
                {/* <th scope="row">{d._id}</th> */}
            
                <td>{d.firstName} {d.lastName}</td>
            
                 <td>{d.emailid}</td> 
                 <td>{d.userType}</td>      
  
                {/* <td>{d.id}</td>
        <td>{d.s_no}</td>
        <td>{d.gender}</td>
        <td>{d.state}</td>
  
        <td>{d.city}</td>
        <td>{d.address}</td>
        <td>{d.pinCode}</td><td>{d.degreeForPg}</td>
        <td>{d.branchForPg}</td>
        <td>{d.instituteNameForPg}</td>
        <td>{d.percentageForPg}</td>
        <td>{d.universityNameForPg}</td>
        <td>{d.passingYearForPg}</td>
        <td>{d.degreeForUg}</td>
        <td>{d.branchForUg}</td>
        <td>{d.percentageForUg}</td>
        <td>{d.universityNameForUg}</td>
  
        <td>{d.passingYearForUg}</td>
        <td>{d.gender}</td>
        <td>{d.gender}</td>
        <td>{d.gender}</td>
        <td>{d.gender}</td>
        <td>{d.gender}</td>
        <td>{d.gender}</td>
        <td>{d.gender}</td>
        */}
  
  
              
                {/* <Tooltip title="Show all details">
                    <IconButton sx={{mt: 1, mb: 1, ml: 3}} onClick = {()=>shortlistByCandidateType(props)}>
                      <LaunchIcon />
                    </IconButton>
                  </Tooltip> */}
  
                <td>
  
                </td>
               
  
              </tr>
            ))
              }
                 {userList.filter((e) => { return e.firstName?.toLowerCase().indexOf(search) >= 0 || e.lastName?.toLowerCase().indexOf(search) >= 0 || e.emailid?.toLowerCase().indexOf(search) >= 0 || e.jobRole?.toLowerCase().indexOf(search) >= 0 }).length === 0 && <div><p className={classes.notFound}>No match found</p></div>}
  
  
  
          </tbody>
  
  
  
        </table>
        <TablePagination
        rowsPerPageOptions={[10, 20, 100]}
        component="div"
        count={userList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
  
  
  
      </div>
  
     
  
        )
}
export default UsersList