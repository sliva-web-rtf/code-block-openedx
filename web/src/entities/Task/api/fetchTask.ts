import { QueryFunction } from "@tanstack/react-query";
import { Task } from "../models/Task";
import axios, { AxiosResponse } from "axios";
import { TaskResponseDto } from "../dtos/TaskResponseDto";
import { ITask } from "../models/ITask";

export const fetchTask: QueryFunction<ITask> = async ({ signal }) => {
  const responseDto = await axios.get<
    undefined,
    AxiosResponse<TaskResponseDto>
  >("https://api.radium-rtf.ru/v1/relation/section?relationId=1bab2a4a-7a70-4952-b5d6-7c2b612e0357&sectionId=2ce0f1a5-b4d9-4480-ba9f-c235b67a782d", { signal });

  try {
    return new Task(responseDto.data)
  } catch {
    throw new Error("Failed parse XBlockInfo response");
  }
};
