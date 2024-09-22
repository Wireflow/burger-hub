import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, PersistStorage } from "zustand/middleware";

 export type UserSession = {
  name: string | "";
  phone: string |"";
  email: string | "";
  id: string |" ";
};

 type SessionState = {
  session: UserSession | null;
  setSession: (session: UserSession | null) => void;
};

 const createSessionSlice = (set: (partial: Partial<SessionState>) => void) => ({
  session: null,
  setSession: (session: UserSession | null) => set({ session }),
});

const customStorage: PersistStorage<SessionState> = {
  getItem: async (name) => {
    const value = await AsyncStorage.getItem(name);
    return value ? JSON.parse(value) : null; // Deserialize
  },
  setItem: async (name, value) => {
    await AsyncStorage.setItem(name, JSON.stringify(value)); // Serialize
  },
  removeItem: async (name) => {
    await AsyncStorage.removeItem(name);
  },
};

 export const useSessionStore = create<SessionState>()(
  persist(
    (set) => createSessionSlice(set),
    {
      name: "session-storage", 
      storage: customStorage, 
    }
  )
);

 export const getSession = () => {
  return useSessionStore.getState().session;
};