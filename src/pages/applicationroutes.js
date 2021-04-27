
import {Switch, Route} from "react-router-dom"
import SignIn from "./signin"
import SignUp from "./signup"
import Dashboard from "./dashboard/dashboard"
import LandingPage from "./landingpage"





const ApplicationRoutes = () => {

    return(
        <div>
           
            <Switch>
           <Route exact path="/" component={LandingPage}/>
           <Route exact path="/signin" component={SignIn}/>
           <Route exact path="/signup" component={SignUp}/>
           <Route exact path="/dashboard" component={Dashboard} />
       </Switch>
      
       </div>
    )
}

export default ApplicationRoutes;