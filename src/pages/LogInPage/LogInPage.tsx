import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import { useAuthMutation } from "../../hooks/mutation";

function LogInPage() {
  const navigate = useNavigate();
  const { logInMutation } = useAuthMutation();
  const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const info = new FormData(e.currentTarget);
    const id = info.get("id");
    const password = info.get("password");

    logInMutation({ id, password });
  };
  return (
    <div>
      <form onSubmit={handleLogin} className="flex flex-col gap-5">
        <Input
          name="id"
          title="아이디"
          placeholder="아이디를 입력해주세요."
          autoFocus
        />
        <Input
          type="password"
          title="비밀번호"
          name="password"
          placeholder="비밀번호를 입력해주세요."
        />

        <button
          className="border p-3 rounded-md hover:brightness-50 transition-all"
          type="submit"
        >
          로그인
        </button>
        <button
          className="border p-3 rounded-md hover:brightness-50 transition-all"
          onClick={() => navigate("/signup")}
        >
          회원가입
        </button>
      </form>
    </div>
  );
}

export default LogInPage;
