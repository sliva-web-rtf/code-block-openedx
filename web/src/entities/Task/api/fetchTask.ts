import { QueryFunction } from "@tanstack/react-query";
import { Task } from "../types/Task";
import { TASK_MOCK } from "../libs/mocks";

export const fetchTask: QueryFunction<Task> = () => {
  return TASK_MOCK;
};
