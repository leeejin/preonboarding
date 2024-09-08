// Imports
import { render, screen } from "@testing-library/react";

// To Test
import App from "../App";

// Tests
test("페이지가 제대로 뜨나요?", async () => {
  render(<App />);
  const login = await screen.findByText(/로그인/i);
  expect(login.innerHTML).toBe("로그인");

  const signup = await screen.findByText(/회원가입/i);
  expect(signup.innerHTML).toBe("회원가입");

  const home = await screen.findByText(/홈/i);
  expect(home.innerHTML).toBe("홈");

  screen.debug();
});
