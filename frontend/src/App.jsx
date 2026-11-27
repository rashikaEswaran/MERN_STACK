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
import Adminlayout from "./pages/admin/adminlayout";
import Admindash from "./pages/admin/admindash";
import Settings from "./pages/admin/settings";
import Userdetails from "./pages/admin/userdetails";

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
        <Route path="/admin" element={<Adminlayout/>}>
            <Route path="admindashboard" element={<Admindash/>}/>
            <Route path="adminsettings" element={<Settings/>}/>
            <Route path="userdetails" element={<Userdetails/>}/>
        </Route>        
      </Routes>
      </BrowserRouter>
         
    
      
     );
}

export default App;
