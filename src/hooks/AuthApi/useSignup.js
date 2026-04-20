import { useMutation } from "@tanstack/react-query";
import { signupRequest } from "../../Api/AuthApi.js";


export const useSignup = () => {
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: signupMutation,
  } = useMutation({
    mutationFn: signupRequest,
    onSuccess: (data) => {
      console.log("successfully signed up", data);
    },
    onError: (error) => {
      console.error("failed to sign up", error);
    },
  });
  return {
    isPending,
    isSuccess,
    error,
    signupMutation,
  };
};
