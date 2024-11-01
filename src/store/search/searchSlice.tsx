 import { Row } from "@/src/services/supabase/table.types";
import {  StateCreator } from "zustand";
 



export type SearchStore = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  clearSearchTerm: () => void;
  productsOfSearch:Row<'Products'>[]
  setProductsOfSearch:(products : Row<'Products'>[])=> void
};

 export const createSearchStore: StateCreator<SearchStore> = (set) => ({
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),
  clearSearchTerm: () => set({ searchTerm: "" }),
  productsOfSearch:[],
  setProductsOfSearch:(products)=> set({productsOfSearch:products}) 


});

 