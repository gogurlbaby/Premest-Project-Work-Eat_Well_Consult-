import { React, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Inputfield from "../components/inputfield";
import Button from "../components/button"

function SignIn() {
    const history= useHistory()
    const [values, setvalues] = useState({})


  const onchange = (e) => {
    setvalues({...values, [e.target.name]: e.target.value})
    }

    // const gotosignup = (e) => {
    //     e.preventDefault();
    //     history.push("/signup")
    // }

//     function signin(e) {
//         e.preventDefault();
//         console.log(values);
// }
    
const gotodashboard = (e) => {
  e.preventDefault();
  console.log(values);
  history.push("/dashboard")
}



       return (
       <form className="signin-form">
       <h1 className="sign">Sign In Here</h1>
       <Inputfield type="username" label="Username" name="username"  onchange={onchange}/>
       <Inputfield type="password" label="Password" name="password" onchange={onchange}/>

       <div>
       <Button text="Sign In" classname="btn-primary" onclick={ gotodashboard}/>
       <h5 className="forgot">Forgot Password?</h5>
       <div className="link">
       <h4 className="new">New Here?</h4> <Link to = "/signup" className="create">Create an Account?</Link>
       </div>
       </div>
       </form>
   )
   }
   
   
   export default SignIn;