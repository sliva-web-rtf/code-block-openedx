import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postAnswer } from "../api/postAnswer";
import { ATTEMPTS_QUERY_KEY } from "@/entities/Attempt/libs/constants";

export const usePostAnswer = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postAnswer,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: [ATTEMPTS_QUERY_KEY] });
    },
  });
};
