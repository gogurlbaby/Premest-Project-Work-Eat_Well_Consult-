import {Switch, Route} from "react-router-dom"
import SignIn from "./signin"
import SignUp from "./signup"
import LandingPage from "./landingpage"
import Navsidebar from "./dashboard//navsidebar"
import Home from "./dashboard/dashboardpages/home"
import ConsultationWithDietitian from "./dashboard/dashboardpages/consultation-with-dietitian"
import FitnessExercise from "./dashboard/dashboardpages/fitness-exercises"
import Profile from "./dashboard/dashboardpages/profile"
import Settings from "./dashboard/dashboardpages/settings"
import SignOut from "./dashboard/dashboardpages/signout"




const ApplicationRoutes = () => {

    return(
        <div>
           
        <Switch>
           <Route exact path="/" component={LandingPage}/>
           <Route exact path="/signin" component={SignIn}/>
           <Route exact path="/signup" component={SignUp}/>
           <Route exact path="/dashboard" component={Navsidebar} /> 
           <Route exact path="/home" component={Home}/>
           <Route exact path="/consultationwithdietitian" component={ConsultationWithDietitian}/>
           <Route exact path= "/fitnessexercises" component={FitnessExercise}/>
           <Route exact path= "/profile" component={Profile}/>
           <Route exact path= "/settings" component={Settings}/>
           <Route exact path= "/signout" component={SignOut}/>
        </Switch>
      
       </div>
    )
}

export default ApplicationRoutes;