import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../components/formSchema/api";

function Dash()
{
    const location=useLocation();
    const[userdata,setUserdata]=useState("");
    const [count,setCount]=useState(0);

    function display()
    {
        setCount(count+1)
    }
    useEffect(()=>{
        setUserdata(location.state)
       
    }, [])

    const checkendpoint=async ()=>{
       const response=await API.get("/api/get");
       console.log(response.data)
    }

    return(
        <div>
           <div>{/*{userdata.username}*/} rash</div>
           <button type="button" onClick={checkendpoint}>CLICK</button>


        </div>
       
    );
}
export default Dash;