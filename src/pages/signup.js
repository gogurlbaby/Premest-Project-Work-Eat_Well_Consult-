import { useState } from "react";
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

  function signup(e){
    e.preventDefault();
    console.log(values);
  }
  return (
      <form className="signup-form"> 
        <h1 className="sign">Create an Account</h1>
        <InputField type="text" label="Firstname" name="firstname" placeholder="e.g. John" onchange={onchange}/>
        <InputField type="text" label="Lastname" name="lastname" placeholder="e.g. Mensah" onchange={onchange}/>
        <InputField type="email" label="Email" name="email" placeholder="e.g. jome@gmail.com" onchange={onchange}/>
        <InputField type="password" label="Password" name="password" onchange={onchange}/>
        <InputField type="password" label="Confirm Password" name="cpassword" onchange={onchange}/>
        <div>
          <Button text="Sign Up" classname="btn-danger" onclick={signup}/>
          <Link to = "/" className="already">Already Have An Account?</Link>
        </div>
      </form>
  );
}

export default SignUp;
