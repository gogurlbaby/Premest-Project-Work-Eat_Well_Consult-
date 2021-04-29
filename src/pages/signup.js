import { React, useState } from "react";
import { Link, useHistory } from "react-router-dom"
import InputField from "../components/inputfield";
import Button from "../components/button"

function SignUp() {
  const history = useHistory()
  const [values, setvalues] = useState({})


  const onchange = (e) => {
    setvalues({...values, [e.target.name]: e.target.value})
  }

  // const gotosignin = (e) => {
  //   e.preventDefault();
  //   history.push("/")
  // }

  // function signup(e){
  //   e.preventDefault();
  //   console.log(values);
  // }

  const gotodashboard = (e) => {
    e.preventDefault();
    console.log(values);
    history.push("/dashboard")

  }

  return (
      <form className="signup-form"> 
        <h1 className="sign">Create an Account</h1>
        <InputField type="text" label="Full Name" name="full name" placeholder="e.g. John Mensah" onchange={onchange}/>
        <InputField type="text" label="Username" name="username" onchange={onchange}/>
        <InputField type="email" label="Email" name="email" placeholder="e.g. jome@gmail.com" onchange={onchange}/>
        <InputField type="password" label="Password" name="password" onchange={onchange}/>
        <InputField type="password" label="Confirm Password" name="cpassword" onchange={onchange}/>
        <div>
          <h5 className="terms">By continuing, you agree to Eat Well Consult <br/> Terms & Conditions and Privacy Policy</h5>
          <Button text="Sign Up" classname="btn-danger" onclick={gotodashboard}/>
          <Link to = "/signin" className="already">Already Have An Account?</Link>
        </div>
      </form>
  );
}

export default SignUp;
