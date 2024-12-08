import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import { AUTH } from "../../constants/querykey";
import { useToast } from "../../contexts/toast.context";
import { TLoginUser, TUser } from "../../types/user";
import useAuthStore from "../../zustand/useAuth";

interface CustomError extends Error {
  data?: {
    message?: string;
  };
}

const useAuthMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const toast = useToast();
  const { logIn, accessToken } = useAuthStore();
  //회원가입
  const { mutate: signUpMutation } = useMutation({
    mutationFn: (signUpData: TUser) => api.user.registerUser(signUpData),
    onSuccess: async () => {
      toast.on("회원가입에 성공하였습니다");
      navigate("/login");
    },
    onError: (error: Error) => {
      const customError = error as CustomError;
      toast.on(customError.data?.message || "회원가입에 실패하였습니다");
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
    onError: (error: Error) => {
      const customError = error as CustomError;
      toast.on(customError.data?.message || "로그인에 실패하였습니다");
    },
  });

  //회원정보 수정
  const { mutate: userInfoMutation } = useMutation({
    mutationFn: (userData: FormData) =>
      api.user.updateUser({ userData, accessToken }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [AUTH, accessToken] });
      toast.on("회원정보가 업데이트되었습니다");
    },
    onError: (error: Error) => {
      const customError = error as CustomError;
      toast.on(customError.data?.message || "업데이트 실패하였습니다");
    },
  });
  return {
    signUpMutation,
    logInMutation,
    userInfoMutation,
  };
};

export default useAuthMutation;
