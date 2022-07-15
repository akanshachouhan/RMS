import React from 'react'
import LinearStepper from '../ApplyStepForm/LinearStepper';
import { Route, useRouteMatch} from 'react-router'
import { Switch } from 'react-router-dom';
import JobsForCandidate from '../Candidate-Dashboard/AvailableJobsForCandidate/JobsForCandidate'



import AddJobs from '../HR-Dashboard/AddJobs';

import DoNotHireMain from '../Manager-Dashboard/DoNotHireMain';


import DNH from '../HR-Dashboard/DoNotHire/DNH';

import FinalSelected from '../HR-Dashboard/FinalSelectedList/FinalSelected';

import ShortlistedByManager from '../HR-Dashboard/ShortlistedByManager/ShortlistedByManager';
import ShortlistForOnlineTest from '../HR-Dashboard/SelectedForTest/ShortlistForOnlineTest'

//import SignUp from '../register/SignUp';
import UsersList from '../Manager-Dashboard/UsersList';
// import ShowInfo from '../Candidate-Dashboard/NewForm/ShowInfo';
import TechnicalInterviewRound from '../HR-Dashboard/ScheduleInterview/TechnicalInterviewRound';

import NextTechnicalRound from '../HR-Dashboard/ScheduleInterview/NextTechnicalRound';

import RejectedList from '../HR-Dashboard/DoNotHire/RejectedList';

import CandidateList from '../HR-Dashboard/AllCandidateList/CandidateList'

import ManagementRound from '../HR-Dashboard/SelectedForTest/ManagementRound'
import SchdeduleInterviewByHr from  '../Manager-Dashboard/SchdeduleInterviewByHr';
import LateralCandidate from '../HR-Dashboard/AllCandidateList/LateralCandidate'
import BellForm from '../ApplyStepForm/BellForm';
import BellFresherForm from '../ApplyStepForm/BellFresherForm';
import BellHome from '../Candidate-Dashboard/AvailableJobsForCandidate/BellHome';

//const userType = JSON.parse(localStorage.getItem('userData')).userType;
 //const userType = JSON.parse(localStorage.getItem('userData')).userType;

//const userType = "admin";

const DashboardMainContent = (props) => {

    let {url, path} = useRouteMatch();
    console.log(path, url);
    return (
        <>
            <div>        
                <Switch>
                    {/* manager nav */}
                   
                     <Route exact path="/dashboard/manager-scheduledInterview" component={SchdeduleInterviewByHr} /> 
                    
                    <Route exact path="/dashboard/manager-report" component={DoNotHireMain} />
                    <Route exact path="/dashboard/manager-users" component={UsersList} />
                  
                     <Route exact path="/dashboard/available-jobs" component={AddJobs} /> 
                  

                    <Route exact path="/dashboard/hr-candidate-list" component={CandidateList} />
                   
                     <Route exact path="/dashboard/hr-candidate-list/lateral" component={LateralCandidate} /> 
                     <Route exact path="/dashboard/schedule-test" component={ShortlistForOnlineTest} /> 
                     <Route exact path="/dashboard/technical-round" component={TechnicalInterviewRound} />
                     <Route exact path="/dashboard/technical-round/NextTechnicalRound" component={NextTechnicalRound} />
                    <Route exact path="/dashboard/hrround" component={ManagementRound} />
                    {/* <Route exact path="/dashboard/hrround" component={ScheduleInterviewList} /> */}
                    <Route exact path="/dashboard/shortlisted-by-manager" component={ShortlistedByManager} />
                    <Route exact path="/dashboard/hr-do-not-hire" component={DNH} />
                    <Route exact path="/dashboard/rejectlist" component={RejectedList} />

                   
                    <Route exact path="/dashboard/final-list" component={FinalSelected} />
                 <Route exact path="/dashboard/Users" component={UsersList} />

                    {/* candidate nav */}
                    <Route exact path="/dashboard/available-jobs-candidate" component={JobsForCandidate} />
                    {/* <Route exact path="/dashboard/Linear" component={LinearStepper} /> */}
                    <Route exact path="/dashboard/bellform" component={BellForm} />
                    <Route exact path="/dashboard/bellformFresher" component={BellFresherForm} />
                    {/* <Route exact path="/dashboard/bellhome" component={BellHome} /> */}

                </Switch>
            </div>
        </>
    )
}

export default DashboardMainContent
