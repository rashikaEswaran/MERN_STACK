import { useState } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./pages/login";
import Projects from "./pages/projects";
import Tasks from './pages/login';
import Calender from "./pages/calender";
import Client from "./pages/clients";
import Dash from "./pages/dashboard";
import Team from "./pages/team";
import Register from "./pages/register";

function App() {
  
  return ( 

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/tasks" element={<Tasks/>}/>
        <Route path="/calender" element={<Calender/>}/>
        <Route path="/client" element={<Client/>}/>
        <Route path="/dashboard" element={<Dash/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="register" element={<Register/>}/>


        
      </Routes>
      </BrowserRouter>
         
    
      
     );
}

export default App;
