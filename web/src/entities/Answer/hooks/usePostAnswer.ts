import { useMutation } from "@tanstack/react-query";
import { postAnswer } from "../api/postAnswer";

export const usePostAnswer = () => useMutation({ mutationFn: postAnswer });
