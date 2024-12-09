import { Link } from "react-router-dom";
import { useTodosQuery } from "../../hooks/query";

function MainPage() {
  const { data: todos } = useTodosQuery();

  return (
    <ol>
      {todos?.map((todo) => (
        <li className="hover:font-bold" key={todo.id}>
          <Link to={`/todo/${todo.id}`}>{todo.title}</Link>
        </li>
      ))}
    </ol>
  );
}

export default MainPage;
