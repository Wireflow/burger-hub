import {  StateCreator } from "zustand";

export type SearchStore = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  clearSearchTerm: () => void;
};

 export const createSearchStore: StateCreator<SearchStore> = (set) => ({
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),
  clearSearchTerm: () => set({ searchTerm: "" }),
});

 