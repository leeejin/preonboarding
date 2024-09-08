import { Link } from "react-router-dom";
import { useTodosQuery } from "../../hooks/query";

function MainPage() {
  const { data: todos } = useTodosQuery();
  return (
    <div>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      {todos?.map((todo) => (
        <Link to={`/todo/${todo.id}`} key={todo.id}>
          <h1>{todo.title}</h1>
        </Link>
      ))}
    </div>
  );
}

export default MainPage;
