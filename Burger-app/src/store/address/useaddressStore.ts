import { create } from "zustand";

import {
  AllAddressState,
  createAllAddressSlice,
} from "./createalladdresState";



type AddressState = Partial<AllAddressState>;

export const useAddressStore = create<AddressState>((set, get, store) => ({
  ...createAllAddressSlice(set, get, store),
}));


