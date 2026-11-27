import { Link,Outlet } from "react-router-dom";

function Adminlayout()
{
    return(
         <div>
            <div className="bg-blue-950 h-25">
                 <h1 className="text-mist-50 text-center text-4xl">Admin Panel</h1>
            </div>
            <nav>
                <Link to={"/admin/admindashboard"} className="rounded-3xl shadow-2xl shadow-black bg-mauve-400">Dashboard </Link>
                <Link to={"/admin/userdetails"} className="rounded-3xl bg-400">User Details </Link>
                <Link to={"/admin/adminsettings"}>Settings</Link>
            </nav>
            <Outlet/>
         </div>
    );
}

export default Adminlayout;