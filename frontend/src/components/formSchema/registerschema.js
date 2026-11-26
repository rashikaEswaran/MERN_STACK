import z from "zod";

export const registerschema=z.object({
    name:z.string().min(3,"name sould be greater than 3"),
    email:z.string().email("enter valid email id"),
    password:z.string().min(8,"password should be 8 characters"),
    age:z.coerce.number().min(18,"age shoud be greater 18")
})