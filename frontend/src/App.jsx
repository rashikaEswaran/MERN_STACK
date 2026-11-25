import { useState } from "react";
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Login from "./pages/login";
import Projects from "./pages/projects";
import Tasks from "./pages/tasks";


function App() {
  
  return ( 
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/project" element={<Projects/>}/>
        <Route path="tasks" element={<Tasks/>}/>
       </Routes>
       </BrowserRouter>
      
    
      
     );
}

export default App;
