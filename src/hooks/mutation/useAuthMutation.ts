import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import { AUTH } from "../../constants/querykey";
import { TLoginUser, TUser } from "../../types/user";
import useAuthStore from "../../zustand/useAuth";

const useAuthMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { logIn, logOut, accessToken } = useAuthStore();
  //회원가입
  const { mutate: signUpMutation } = useMutation({
    mutationFn: (signUpData: TUser) => api.user.registerUser(signUpData),
    onSuccess: async () => {
      alert("회원가입에 성공하였습니다");
      navigate("/login");
    },
    onError: () => {
      alert("회원가입에 실패하였습니다");
    },
  });
  //로그인
  const { mutate: logInMutation } = useMutation({
    mutationFn: (logInData: TLoginUser) => api.user.logInUser(logInData),
    onSuccess: async (data) => {
      queryClient.invalidateQueries({ queryKey: [AUTH, accessToken] });
      logIn(data.accessToken);
      navigate("/");
    },
    onError: () => {
      alert("로그인에 실패하였습니다");
    },
  });

  //로그아웃
  const { mutate: logOutMutation } = useMutation({
    mutationFn: () => api.user.logOutUser(accessToken),
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: [AUTH, accessToken] });
      logOut();
      alert("로그아웃되었습니다");
    },
  });

  //회원정보 수정
  const { mutate: userInfoMutation } = useMutation({
    mutationFn: (userData: FormData) =>
      api.user.updateUser({ userData, accessToken }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [AUTH, accessToken] });
      alert("회원정보가 업데이트되었습니다");
    },
    onError: () => {
      alert("업데이트 실패하였습니다");
    },
  });
  return {
    signUpMutation,
    logInMutation,
    logOutMutation,
    userInfoMutation,
  };
};

export default useAuthMutation;
