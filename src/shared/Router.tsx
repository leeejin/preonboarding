import { createBrowserRouter } from "react-router-dom";
import {
  HOME,
  LOGIN,
  MYPAGE,
  SIGNUP,
  TODO,
  UNKNOWN,
} from "../constants/pathname";
import Layout from "../layouts/Layout";

import { LogInPage, SignUpPage, UserPage } from "../pages/AuthPage";
import { TodoPage, TodosPage } from "../pages/TodoPage";
import UnknownPage from "../pages/UnknownPage";
import ProtectRoute from "./ProtectRoute";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: HOME,
        element: <TodosPage />,
      },
      {
        path: TODO,
        element: <TodoPage />,
      },
      {
        path: LOGIN,
        element: <LogInPage />,
      },
      {
        path: SIGNUP,
        element: <SignUpPage />,
      },
      {
        path: MYPAGE,
        element: <ProtectRoute element={<UserPage />} />,
      },
      {
        path: UNKNOWN,
        element: <UnknownPage />,
      },
    ],
  },
]);

export default router;
