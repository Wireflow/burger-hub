import { supabase } from "@/src/services/supabase/client";
import { useQuery } from "@tanstack/react-query";

interface Category {
  id: number;
  name: string;
  // add other fields as necessary
}

export const getAllCategory = async () => {
  try {
    const { data, error } = await supabase
      .from("Categories")
      .select("*");

    if (error) throw new Error("Could not fetch category products.");

    console.log("Fetched categories:", data);
    return data || []; // Return an empty array if no data is found
  } catch (error: any) {
    console.error("Error getting categories:", error);
    throw error;
  }
};

// Usage with useQuery
 