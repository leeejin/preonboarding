import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { TAccessToken } from "../types/user";

interface AuthState {
  accessToken: TAccessToken;
  logIn: (userData: TAccessToken) => void;
  logOut: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    immer((set) => ({
      accessToken: null,
      logIn: (userData: TAccessToken) => {
        set((state) => {
          state.accessToken = userData;
        });
      },
      logOut: () => {
        set((state) => {
          state.accessToken = null;
        });
      },
    })),
    {
      name: "user",
    }
  )
);
export default useAuthStore;
