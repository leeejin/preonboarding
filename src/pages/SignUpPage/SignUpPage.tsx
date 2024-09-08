import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import { useAuthMutation } from "../../hooks/mutation";

function SignUpPage() {
  const navigate = useNavigate();
  const { signUpMutation } = useAuthMutation();
  const handleSignup = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const info = new FormData(e.currentTarget);
    const id = info.get("id");
    const password = info.get("password");
    const nickname = info.get("nickname");

    signUpMutation({ id, password, nickname });
  };
  return (
    <div>
      <form onSubmit={handleSignup} className="flex flex-col gap-5">
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
        <Input
          name="nickname"
          title="닉네임"
          placeholder="닉네임을 입력해주세요"
        />

        <button
          className="border p-3 rounded-md hover:brightness-50 transition-all"
          type="submit"
        >
          회원가입
        </button>

        <button
          className="border p-3 rounded-md hover:brightness-50 transition-all"
          onClick={() => navigate("/login")}
        >
          로그인
        </button>
      </form>
    </div>
  );
}

export default SignUpPage;
