import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import jobsForCandidate from "../../frontend-rms/src/components/Candidate-Dashboard/AvailableJobsForCandidate/JobsForCandidate"
import ProtectedRoute from './components/common-component/ProtectedRoute';
import Dashboard from './components/Dashboard/Dashboard';
import SignIn from './components/login/LoginUI';
import SignUp from './components/register/SignUp';
import ForgotPassword from './components/forgot password/ForgotPassword';
import ResetPassword from './components/forgot password/ResetPassword';
import AvailableJobsForCandidate from './components/Candidate-Dashboard/AvailableJobsForCandidate/AvailableJobsForCandidate';
// import Home from './components/ApplyStepForm/Home';
import BellHome from './components/Candidate-Dashboard/AvailableJobsForCandidate/BellHome';
import MainUi from './components/Candidate-Dashboard/AvailableJobsForCandidate/MainUi';
import FreshersBellFrom from './components/ApplyStepForm/FreshersBellFrom';
import ExperienceBellForm from './components/ApplyStepForm/ExperienceBellForm';


function App() {

  return (
      <>
       <BrowserRouter>
        <Switch>
        
          <Route path="/sign-up" component={SignUp} />
          
          {/* <Route exact path="/" component={SignIn} /> */}
          <Route exact path="/BellurbisFreshersForm" component={FreshersBellFrom} />
          <Route exact path="/BellurbisExperienceForm" component={ExperienceBellForm} />
          <Route exact path="/" component={MainUi} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/reset-password/:token/:emailbyuser" component={ResetPassword} />
          
          <ProtectedRoute path="/dashboard" comp={Dashboard} /> 
           

        </Switch>
      </BrowserRouter>
      </>
  );
}

export default App;
