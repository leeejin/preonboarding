import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import Loading from "../../components/Loading";
import { useTodoQuery } from "../../hooks/query";

function TodoPage() {
  const { todoId } = useParams();
  const navigate = useNavigate();
  const { data: todo, isLoading } = useTodoQuery(Number(todoId));

  const handleLocation = () => {
    navigate(-1);
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <span>No. {todo?.id}</span>
      <h1>{todo?.title}</h1>
      <p>완료여부: {todo?.completed.toString()}</p>

      <Button
        className="border p-3 rounded-md hover:brightness-50 transition-all"
        onClick={handleLocation}
      >
        뒤로가기
      </Button>
    </div>
  );
}

export default TodoPage;
