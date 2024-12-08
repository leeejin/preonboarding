import MainPage from "../pages/TodoPage/TodosPage";
import useAuthStore from "../zustand/useAuth";

interface ProtectRouteProps {
  element: React.ReactElement;
}

const ProtectRoute: React.FC<ProtectRouteProps> = ({ element }) => {
  const { accessToken } = useAuthStore();
  return accessToken ? element : <MainPage />;
};

export default ProtectRoute;
