import {Link} from "react-router-dom"


function Navbar() {
    
    return(
        <div className="nav">
        <h2>Eat Well Consult</h2>
          <ul>
            <Link href="#about" className="about"><li >About Us</li></Link>
            <li>
              <select name="services" className="services">
                <option value="services">Services</option>
                <option value="counselling with dietitian">Counselling With Dietitain</option>
                <option value="fitness exercises">Live Fitness Exercises</option>
                <option value="healthy food delivery">Healthy Food Delivery</option>
                </select></li> 
            <li>Contact</li>
            <li><Link to="/signin" className="login">Login</Link></li>
           <li><Link to="/signup" className="signup">SignUp</Link></li>
           </ul>
       </div>

    )
}

export default Navbar;