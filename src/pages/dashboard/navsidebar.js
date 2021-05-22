import React, { useState } from "react";
import {FaBars} from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai"
import { Link,BrowserRouter,Switch,Route } from "react-router-dom";
import { SidebarData } from "./sidebardata"
import {IconContext} from "react-icons"
// import Navsidebar from "./navsidebar"
import Home from "./home"
import ConsultationWithDietitian from "./consultation-with-dietitian"
import FitnessExercise from "./fitness-exercises"
import Profile from "./profile"
import Settings from "./settings"
import SignOut from "./signout"


function Navsidebar() {

  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)


  return(

    <BrowserRouter>
        <IconContext.Provider value={{color:"#fff"}}>
  <div className="navsidebar">
    <Link to="#" className="menu-bars">
       <FaBars onClick={showSidebar}/> 
    </Link>
    <div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
     <ul className="nav-menu-items" onClick={showSidebar}>
       <li className="navbar-toggle">
         <Link to="#"className="menu-bars">
          <AiOutlineClose/>            
         </Link>
       </li>
       {SidebarData.map((item, index) => {
         return(
             <li key={index} className={item.cName}>
               <Link to={item.path}>{item.icon}
               <span>{item.title}</span>
               </Link>
             </li> 
         );
       })}
     </ul>
      </nav>
      </div>
      </div>

      <div style={{display :'flex',backgroundColor:'red',width:'100%',height:'90vh'}}>
       <Switch>
       {/* <Route exact path="/dashboard" component={Navsidebar} /> */}
           <Route exact path="/home" component={Home}/>
           <Route exact path="/consultationwithdietitian" component={ConsultationWithDietitian}/>
           <Route exact path= "/fitnessexercises" componen={FitnessExercise}/>
           <Route exact path= "/profile" componen={Profile}/>
           <Route exact path= "/settings" component={Settings}/>
           <Route exact path= "/signout" componen={SignOut}/>
         </Switch>
      </div>
      </IconContext.Provider>
      </BrowserRouter>

      
    );
}
    export default Navsidebar;

