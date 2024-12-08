// Imports
import { render, screen } from "@testing-library/react";

// To Test
import App from "../App";
import Button from "../components/Button";
import Input from "../components/Input";
import WhiteModal from "../components/Modal";

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

const toast = {
  id: "1123",
  text: "토스트창",
  seconds: 2000,
};

test("토스트창이 제대로 뜨나요?", () => {
  render(<WhiteModal toast={toast} />);
  const toast1 = screen.getByText(/토스트창/i);
  expect(toast1.innerHTML).toBe("토스트창");
});

test("인풋창이 제대로 뜨나요?", () => {
  render(<Input title={"인풋창"} value={"인풋창입니다. "} />);
  const input = screen.getByText(/인풋창/i);
  expect(input.innerHTML).toBe("인풋창");
});

const handleButton = () => {
  console.log("버튼움직임");
};
test("버튼이 제대로 뜨나요?", () => {
  render(<Button onClick={handleButton}>링크</Button>);
  const button = screen.getByText(/링크/i);
  expect(button.innerHTML).toBe("링크");
});
