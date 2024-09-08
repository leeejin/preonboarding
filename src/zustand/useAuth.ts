import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface AuthState {
  accessToken: string | null;
  logIn: (userData: string) => void;
  logOut: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    immer((set) => ({
      accessToken: null,
      logIn: (userData: string) => {
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
