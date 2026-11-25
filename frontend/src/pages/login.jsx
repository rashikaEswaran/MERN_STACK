import { useState } from "react";

function App() {
  
  const[password,setPassword]=useState("");
  const[email,setEmail]=useState("");  
  const print=(e)=>
  {
     e.preventDefault 
     console.log(email,password);
  }
  return ( 
       
      <form onSubmit={print}>
         <h4>Enter Password:</h4>
         <input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
         <br/>
         <h4>Enter Email:</h4>
         <input type="Email" placefolder="mail" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        {/* <button type="submit" onClick={()=>{console.log(email,password)}}>Submit</button>
        */}
        <button type="submit">Submit</button>
      </form>
    
      
     );
}

export default App;
