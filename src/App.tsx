import { RouterProvider } from "react-router-dom";
import { ToastProvider } from "./contexts/toast.context";
import QueryProvider from "./providers/QueryProvider";
import router from "./shared/Router";

function App() {
  return (
    <QueryProvider>
      <ToastProvider>
        <RouterProvider router={router} />
      </ToastProvider>
    </QueryProvider>
  );
}

export default App;
