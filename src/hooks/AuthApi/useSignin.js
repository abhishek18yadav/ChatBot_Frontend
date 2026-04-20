import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../Context/useAuth.js";
import { signInRequest } from "../../Api/AuthApi.js"
export const useSignin = () => {
  const { setAuth } = useAuth();
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: signinMutation,
  } = useMutation({
    mutationFn: signInRequest,
    onSuccess: (response) => {
      console.log("successfully signed in", response);
      const userObject = JSON.stringify(response.data);
      localStorage.setItem("user", userObject);
      localStorage.setItem("token", response.data.token);
      setAuth({
        token: response.data.token,
        user: response.data,
        isLoading: false,
      });
    },
    onError: (error) => {
      console.log("failed to sign in", error);
    },
  });
  return {
    isPending,
    isSuccess,
    error,
    signinMutation,
  };
};
