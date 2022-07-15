import React from 'react'
import { useEffect, useState } from 'react';
import { showManagerCandidateUrl } from '../../api/constants';
import BasicTable from '../Manager-Dashboard/TableUI';
import classes from '../HR-Dashboard/FinalSelectedList/FinalSelectedList.module.css'

 


const ScheduledInterviewManager = (props) => {
  const [candidateList, setCandidateList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();


  useEffect(() => {
    const fetchCandidateList = async () => {
      const response = await fetch(showManagerCandidateUrl);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      else {
        console.log('successfully fetched the data');
      }
      const responseData = await response.json();

      console.log("responseData: ", responseData);

      const loadedCandidateList = []

      for (const key in responseData) {
        loadedCandidateList.push({
          id: key,
          Uid: responseData[key]._id,
          firstName: responseData[key].firstName,
          lastName: responseData[key].lastName,
          emailid: responseData[key].emailid,
          contactNumber: responseData[key].contactNumber,
          gender: responseData[key].gender,
          country: responseData[key].country,
          state: responseData[key].state,
          city: responseData[key].city,
          address: responseData[key].address,
          pinCode: responseData[key].pinCode,
          degreeForPg: responseData[key].degreeForPg,
          branchForPg: responseData[key].branchForPg,
          percentageForPg: responseData[key].percentageForPg,
          instituteNameForPg: responseData[key].instituteNameForPg,
          universityNameForPg: responseData[key].universityNameForPg,
          passingYearForPg: responseData[key].passingYearForPg,
          degreeForUg: responseData[key].degreeForUg,
          branchForUg: responseData[key].branchForUg,
          percentageForUg: responseData[key].percentageForUg,
          instituteNameForUg: responseData[key].instituteNameForUg,
          universityNameForUg: responseData[key].universityNameForUg,
          passingYearForUg: responseData[key].passingYearForUg,
          percentageForHss: responseData[key].percentageForHss,
          passingYearForHss: responseData[key].passingYearForHss,
          boardTypeForHss: responseData[key].boardTypeForHss,
          schoolNameForHss: responseData[key].schoolNameForHss,
          percentageForHighSchool: responseData[key].percentageForHighSchool,
          passingYearForHighSchool: responseData[key].passingYearForHighSchool,
          boardTypeForHighSchool: responseData[key].boardTypeForHighSchool,
          schoolNameForHighSchool: responseData[key].schoolNameForHighSchool,
          jobRole: responseData[key].jobRole,
          companyName: responseData[key].companyName,
          projectStatus: responseData[key].projectStatus,
          projectStartDate: responseData[key].projectStartDate,
          projectEndDate: responseData[key].projectEndDate,
          projectDetails: responseData[key].projectDetails,
        });
      }
      console.log(responseData);

      setCandidateList(loadedCandidateList);
      console.log(loadedCandidateList)
      console.log(candidateList);
      setIsLoading(false);
    }
    fetchCandidateList().catch(error => {
      console.log(error)
      setIsLoading(false);
      setHttpError(error.message);
      // setIsLoading(false);
      // setHttpError(error.message);
    });
    //   setIsOneTimeLoad(true);
    // console.log(jobs);

  }, [])

  if (isLoading) {
    return (
      <section className={classes.JobIsLoading}>
        <p>loading...</p>
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
  const list = candidateList.map(canData => {
    return <BasicTable
      id={canData.id}
      s_no={Number(canData.id)+1}
      firstName={canData.firstName}
      lastName={canData.lastName}
      post_applied={canData.jobRole}
      emailid={canData.emailid}
      contactNumber={canData.contactNumber}
      jobRole={canData.jobRole}
      gender={canData.gender}
      country={canData.country}
      state={canData.state}
      city={canData.city}
      address={canData.address}
      pinCode={canData.pinCode}
      degreeForPg={canData.degreeForPg}
      branchForPg={canData.branchForPg}
      percentageForPg={canData.percentageForPg}
      instituteNameForPg={canData.instituteNameForPg}
      universityNameForPg={canData.universityNameForPg}
      passingYearForPg={canData.passingYearForPg}
      degreeForUg={canData.degreeForUg}
      branchForUg={canData.branchForUg}
      percentageForUg={canData.percentageForUg}
      instituteNameForUg={canData.instituteNameForUg}
      universityNameForUg={canData.universityNameForUg}
      passingYearForUg={canData.passingYearForUg}
      percentageForHss={canData.percentageForHss}
      passingYearForHss={canData.passingYearForHss}
      boardTypeForHss={canData.boardTypeForHss}
      schoolNameForHss={canData.schoolNameForHss}
      percentageForHighSchool={canData.percentageForHighSchool}
      passingYearForHighSchool={canData.passingYearForHighSchool}
      boardTypeForHighSchool={canData.boardTypeForHighSchool}
      schoolNameForHighSchool={canData.schoolNameForHighSchool}
      jobRole={canData.jobRole}
      companyName={canData.companyName}
      projectStatus={canData.projectStatus}
      projectStartDate={canData.projectStartDate}
      projectEndDate={canData.projectEndDate}
      projectDetails={canData.projectDetails}
    />
  })




  //const[jobs, setJobs] = useState([]);



  return (
    <div>
      <ul>
        {list}
      </ul>


    </div>
  )
}

export default ScheduledInterviewManager
