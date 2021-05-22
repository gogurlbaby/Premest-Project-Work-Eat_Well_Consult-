import {Switch, Route} from "react-router-dom"
import SignIn from "./signin"
import SignUp from "./signup"
import LandingPage from "./landingpage"
// import Navsidebar from "../dashboard/dashboardpages/navsidebar"




const ApplicationRoutes = () => {

    return(
        <div>
           
            <Switch>
           <Route exact path="/" component={LandingPage}/>
           <Route exact path="/signin" component={SignIn}/>
           <Route exact path="/signup" component={SignUp}/>
           {/* <Route exact path="/dashboard" component={Navsidebar} /> */}

            </Switch>
      
       </div>
    )
}

export default ApplicationRoutes;