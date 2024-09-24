import { create } from "zustand";
import { CartState, createCartSlice } from "./cartSlice";
 
  
export const useOrderStore = create<CartState>((set, get, store) => ({
   ...createCartSlice(set, get, store),
 
}));