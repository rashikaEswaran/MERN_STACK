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
       navigate("/")
    }
    return(
        <>
           <form onSubmit={handleSubmit(onSubmit1)}>
            <input type="text" placeholder="enter name" {...register("name")}/>
            <p>{errors.name?.message}</p>
            <input type="email" placeholder="enter email" {...register("email")}/>
            <p>{errors.email?.message}</p>
            <input type="password" placeholder="enter password" {...register("password")}/>
            <p>{errors.password?.message}</p>
            <input type="number" placeholder="enter age" {...register("age")}/>
            <p>{errors.age?.message}</p>
            <button type="submit">Button</button>

           </form>
        </>
    );
}

export default Register;