import { supabase } from "@/src/services/supabase/client";
import { useQuery } from "@tanstack/react-query"

export const useGetAddressbyUserId=(id:string)=>{
    return useQuery({
        queryKey:['user','address',id],
        queryFn:()=>GetAddressbyUserId(id)
    })
}

const GetAddressbyUserId=async(id:string): Promise<any> =>{
    try {
        const {data:Address,error}=await supabase
        .from("Addresses")
        .select("*")
        .eq("user_id",id);
        if(error) throw new Error("error in ");
        return Address;
    } catch (error) {
        console.error(error)
    }
}