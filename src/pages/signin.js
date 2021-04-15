import { useState } from "react";
import { useHistory } from "react-router";
import Inputfield from "../components/inputfield";
import Button from "../components/button"

function SignIn() {
    const history= useHistory()
    const[email, setemail] = useState('')
    const[password, setpassword] = useState('')

    const onchangeemail = e => {
        setemail(e.target.value)
    }

    const onchangepassword = (e) => {
        setpassword(e.target.value)
    }

    // const gotosignup = (e) => {
    //     e.preventDefault();
    //     history.push("/signup")
    // }

    function signin(e) {
        e.preventDefault();

        console.log({email,password});
    }
    
    return (
       <form className="signin-form">
       <h1 className="sign">Sign In Here</h1>
       <Inputfield type="email" label="Email" name="email" placeholder="e.g. jome@gmail.com" onchange={onchangeemail}/>
       <Inputfield type="password" label="Password" name="password" onchange={onchangepassword}/>

       <div >
       <Button text="Sign In" classname="btn-primary" onclick={signin}/>
       
       </div>     
       </form>
   )
   }
   
   
   export default SignIn;