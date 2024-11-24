import { useQuery } from "@tanstack/react-query";
import { TASK_QUERY_KEY } from "../libs/constants";
import { fetchTask } from "../api/fetchTask";

export const useTask = () => {
  return useQuery({ queryKey: [TASK_QUERY_KEY], queryFn: fetchTask });
};
