import { useParams } from "react-router-dom";
import { useTodoQuery } from "../../hooks/query";

function TodoPage() {
  const { todoId } = useParams();
  const { data: todo } = useTodoQuery(Number(todoId));

  return (
    <div>
      <span>No. {todo?.id}</span>
      <h1>{todo?.title}</h1>
      <span>완료여부: {todo?.completed.toString()}</span>
    </div>
  );
}

export default TodoPage;
