import { supabase } from "@/src/services/supabase/client"
import { useQuery } from "@tanstack/react-query"

export const useGetAllOrders=()=>{
    useQuery({
        queryKey:['orders'],
        queryFn:GetAllOrders
    })
}
const GetAllOrders=async()=>{
    try {
        const {data:oders,error}=await supabase
        .from("Orders")
        .select("*,Address:address_id(*)")
        return oders
    } catch (error) {
        
    }
}