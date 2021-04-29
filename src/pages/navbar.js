import {Link} from "react-router-dom"
import Button from "../components/button"

function Navbar() {
    
    return(
        <div className="nav">
        <h2>Eat Well Consult</h2>
          <ul>
            <Link href="#about"><li className="us">About Us</li></Link>
            <Link href="#service"><li>
             <select name="services" className="services">
                <option value="services">Services</option>
                <option value="counselling with dietitian">Counselling With Dietitain</option>
                <option value="fitness exercises">Fitness Exercises</option>
                <option value="healthy food delivery">Healthy Food Delivery</option>
                </select></li></Link>
            <li>Contact</li>
            <li><Link to="/signin" className="login">Sign In</Link></li>
            <li><Link to="/signup" className="signup">Sign Up</Link></li>
           </ul>
       </div>

    )
}

export default Navbar;