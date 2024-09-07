import Button from "../components/Button/Button";
import { useAuthMutation } from "../hooks/mutation";

import useAuthStore from "../zustand/useAuth";

function Menubar() {
  const { logOutMutation } = useAuthMutation();
  const { accessToken } = useAuthStore();
  const handleLogOut = () => logOutMutation();
  return (
    <div className="flex flex-row gap-5 p-4 w-full bg-sky-500">
      <Button to="/">홈</Button>
      <div className="flex-grow" />
      {accessToken ? (
        <>
          <Button onClick={handleLogOut}>로그아웃</Button>
          <Button to="/mypage">마이페이지</Button>
        </>
      ) : (
        <>
          <Button to="/login">로그인</Button>
          <Button to="/signup">회원가입</Button>
        </>
      )}
    </div>
  );
}

export default Menubar;
