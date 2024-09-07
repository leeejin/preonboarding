import { RouterProvider } from "react-router-dom";

import QueryProvider from "./providers/QueryProvider";
import router from "./shared/Router";

//회원가입, 로그인, 마이페이지 (프로필 변경) 구현해야함
function App() {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  );
}

export default App;
