import { useNavigate } from "react-router-dom";
import { registerschema } from "../components/formSchema/registerschema";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";


function Register()
{   
    const navigate=useNavigate();
    const {register,handleSubmit,formState:
        {errors}}=useForm({resolver:zodResolver(registerschema)})

    function onSubmit1(data)
    {
       console.log(data)
       alert("Registered")
       navigate("/",
        {state:data}
       )
    }
    return(
        
<div className="h-screen w-screen bg-gray-100">
       <div className="bg-stone-300 w-[320px] min-h-300px p-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-2xl shadow-black ">
       <h2 className="text-2xl font-bold text-center text-black mb-6">REGISTRATION</h2>
       <form onSubmit={handleSubmit(onSubmit1)} className="flex flex-col gap-3">
            <div>
            <label className="block font-semibold mb-1">Name</label>
            <input type="text" placeholder="Enter name" {...register("name")} className="w-full p-2 rounded-2xl outline-none border border-orange-300 focus:ring-2 focus:ring-orange-500"/>
            <p className="text-red-600 text-sm">{errors.name?.message}</p>
            </div>
            <div>
            <label className="block font-semibold mb-1">Email</label>
            <input type="email" placeholder="Enter email" {...register("email")} className="w-full p-2 rounded-2xl outline-none border border-orange-300 focus:ring-2 focus:ring-orange-500"/>
            <p className="text-red-600 text-sm">{errors.email?.message}</p>
            </div>
            <div>
            <label className="block font-semibold mb-1">Password</label>
            <input type="password" placeholder="Enter password" {...register("password")} className="w-full p-2 rounded-2xl outline-none border border-orange-300 focus:ring-2 focus:ring-orange-500"/>
            <p className="text-red-600 text-sm">{errors.password?.message}</p>
            </div>
            <div>
            <label className="block font-semibold mb-1">Age</label>
            <input type="number" placeholder="Enter age" {...register("age")} className="w-full p-2 rounded-2xl outline-none border border-orange-300 focus:ring-2 focus:ring-orange-500"/>
            <p className="text-red-600 text-sm">{errors.age?.message}</p>
            </div>
            <button type="submit" className="w-[200px] bg-orange-500 hover:bg-orange-600 text-black font-bold p-2 rounded-3xl mt-2 transition"> SUBMIT </button>
        </form>
        </div>
</div>

    );
}

export default Register;