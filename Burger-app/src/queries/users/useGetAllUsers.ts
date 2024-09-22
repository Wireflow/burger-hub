import { useQuery } from "@tanstack/react-query"
import { Row } from "../../service/subabase/table.types"
import { supabase } from "../../service/subabase/client"

export const useGetAllUsers=()=>{
    return useQuery({
        queryKey:['users'],
        queryFn:GetAllUsers
    })
}

const GetAllUsers=async() =>{
    try {
        const {data:User,error}=await supabase
        .from("User")
        .select("*")
        
        if(error) throw new Error("error in get users");
        return User;
    } catch (error:any) {
        console.error(error)
    }
}