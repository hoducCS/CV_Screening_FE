import { USER_KEY } from "@/constants/apis";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { login} from "./api";

export const useLogin = () => {
  // Must initialize queryClient from useQueryClient not use getQueryClient from server
  const queryClient = useQueryClient();
  const router = useRouter();
  const { error, isPending, mutate, reset } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      // Set user to queryClient
      queryClient.setQueryData(USER_KEY, data);
      router.push("/upload");
    },
    onError: (err) => {
      setTimeout(() => {
        reset();
      }, 2000);
    },
  });
  return { login: mutate, isPending, error };
};



