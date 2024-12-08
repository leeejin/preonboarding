import { useQuery } from "@tanstack/react-query";
import api from "../../api/api";
import { AUTH } from "../../constants/querykey";
import useAuthStore from "../../zustand/useAuth";

const useAuthQuery = () => {
  const { accessToken } = useAuthStore();
  return useQuery({
    queryKey: [AUTH, accessToken],
    queryFn: () => api.user.getUser(accessToken),
    enabled: !!accessToken,
  });
};

export default useAuthQuery;
