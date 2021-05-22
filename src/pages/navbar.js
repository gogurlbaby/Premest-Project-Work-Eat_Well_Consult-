import {Link} from "react-router-dom"
import Button from "../components/button"
import {useHistory} from "react-router-dom"

function Navbar() {

    const history= useHistory()

    const gotosignup = (e) => {
         e.preventDefault();
         history.push("/signup")
     }
    
    return(
        <div className="nav">
        <h2 className="eat">GoGurl</h2>
          <ul>
            <li>Home</li>
           <li  className="nav-service">Services</li>
            {/* <Link href="#landing-services" className="nav-service"><li>Services</li></Link> */}

             <li>Contact</li>
               <li className="login">Sign In</li>
               {/* <li><Link to="/signin" className="login">Sign In</Link></li> */}

            <li><Button text="Sign Up" classname="nav-button" onclick={gotosignup}/></li>
           </ul>
           </div>
        

    )
}

export default Navbar;