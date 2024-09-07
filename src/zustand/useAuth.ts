import { create } from "zustand";

interface AuthState {
  accessToken: string | null;
  logIn: (userData: string) => void;
  logOut: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  logIn: (userData: string) => {
    set(() => ({
      accessToken: userData,
    }));
  },
  logOut: () => {
    set(() => ({
      accessToken: null,
    }));
  },
}));

export default useAuthStore;
