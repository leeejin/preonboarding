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
import LogInPage from "../pages/LogInPage";
import MainPage from "../pages/MainPage";
import SignUpPage from "../pages/SignUpPage";
import TodoPage from "../pages/TodoPage";
import UnknownPage from "../pages/UnknownPage";
import UserPage from "../pages/UserPage";
import ProtectRoute from "./ProtectRoute";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: HOME,
        element: <MainPage />,
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
