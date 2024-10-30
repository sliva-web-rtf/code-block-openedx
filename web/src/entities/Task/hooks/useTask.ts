import { useQuery } from "@tanstack/react-query";
import { TASK_QUERY_KEY } from "../libs/constants";
import { fetchTask } from "../api/fetchTask";
import type { Task } from "../types/Task";

export const useTask = () => {
  return useQuery<Task>({ queryKey: [TASK_QUERY_KEY], queryFn: fetchTask });
};
