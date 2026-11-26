import { useState } from "react";
import { useLocation } from "react-router-dom";

function Dash()
{
    const location=useLocation();
    const[userdata,setUserdata]=useState("");
    function display()
    {
        setUserdata(location.state);
        console.log(userdata);
    }

    return(
        <button onClick={display}>BUTTON</button>
    );
}
export default Dash;