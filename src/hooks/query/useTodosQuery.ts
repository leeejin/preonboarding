import { useQuery } from "@tanstack/react-query";
import api from "../../api/api";
import { TODOS } from "../../constants/querykey";

const useTodosQuery = () => {
  return useQuery({
    queryKey: [TODOS],
    queryFn: () => api.todos.getTodos(),
  });
};
export default useTodosQuery;
