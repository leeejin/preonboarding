import { useQuery } from "@tanstack/react-query";
import api from "../../api/api";
import { TODO } from "../../constants/querykey";

const useTodoQuery = (todosNm: number) => {
  return useQuery({
    queryKey: [TODO, todosNm],
    queryFn: () => api.todos.getTodo(todosNm),
    enabled: !!todosNm,
  });
};
export default useTodoQuery;
