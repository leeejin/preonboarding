import { createContext, PropsWithChildren, useContext, useState } from "react";
import WhiteModal from "../components/Modal";

export interface TToast {
  id: string;
  text: string;
  seconds: number;
}

interface ToastContextValue {
  on: (text: string) => void;
  off: (id: string) => void;
}
let initialState: ToastContextValue = {
  on: () => {},
  off: () => {},
};

export const ToastContext = createContext(initialState);

export const useToast = () => useContext(ToastContext);

export function ToastProvider({ children }: PropsWithChildren) {
  const [toasts, setToasts] = useState<TToast[]>([]);

  const value = {
    on: (text: string) => {
      setToasts((prev) => [
        ...prev,
        { text, id: crypto.randomUUID(), seconds: 2000 },
      ]);
    },
    off: (id: string) => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    },
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      {toasts.length > 0 && (
        <ul className="fixed bottom-6 right-6 grid grid-cols-1 gap-y-3">
          {toasts.map((toast) => (
            <li key={toast.id}>
              <WhiteModal toast={toast} />
            </li>
          ))}
        </ul>
      )}
    </ToastContext.Provider>
  );
}
