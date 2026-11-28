import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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

    return(
        <div>{userdata.username}</div>
    );
}
export default Dash;