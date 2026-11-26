import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  
  //const[password,setPassword]=useState("");
  //const[email,setEmail]=useState("");
  const[formdata,setFormdata]=useState({username:"",password:""})  
  const navigate=useNavigate();
  function formdisplay(e)
  {
   e.preventDefault();
   setFormdata({
      ...formdata,
      [e.target.name]:[e.target.value]
   })

}
  const print=(e)=>
  {
     e.preventDefault()
     console.log(formdata.username,formdata.password);
     alert("Log in successfull");
     navigate("/dashboard",
      {state:formdata}
     )
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

export default App;
