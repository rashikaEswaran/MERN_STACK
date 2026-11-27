import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  
  //const[password,setPassword]=useState("");
  //const[email,setEmail]=useState("");
  const[logindata,setLogindata]=useState({
   username:"",
   password:""
})  
  const navigate=useNavigate();
  const location=useLocation();
  function formdisplay(e)
  {
   e.preventDefault();
   setLogindata({
      ...logindata,
      [e.target.name]:e.target.value
   })

}
  const print=(e)=>
  {
     e.preventDefault()
     const register=location.state;
     console.log("login",logindata);
     console.log("register",register);
     if(logindata.username===register.name && logindata.password===register.password)
     {
      navigate("/dashboard",{state:logindata});
     }else{
      alert("Try again!");
     }

     
     
  }
  return ( 
       
      <form onSubmit={print}>
         {/*<h4>Enter Password:</h4>
         <input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
         <br/>
         <h4>Enter Email:</h4>
         <input type="Email" placeholder="mail" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>*/}
        {/* <button type="submit" onClick={()=>{console.log(email,password)}}>Submit</button>
        */}
        <h4>Username:</h4>
        <input type="text" placeholder="enter the username" name="username" onChange={formdisplay}/>
        <br/>
        <h4>Password:</h4>
        <input type="password" placeholder="enter the password" name="password" onChange={formdisplay}/>
        <button type="submit">Submit</button>
      </form>
    
      
     );
}

export default Login;
