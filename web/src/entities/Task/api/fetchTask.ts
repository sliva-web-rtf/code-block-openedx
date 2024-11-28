import { Task } from "../models/Task";
import axios, { AxiosResponse } from "axios";
import { TaskResponseDto } from "../dtos/TaskResponseDto";

type fetchTaskParams = {
  signal?: AbortSignal;
  sectionId: string;
  relationId: string;
};

export const fetchTask = async ({
  signal,
  relationId,
  sectionId,
}: fetchTaskParams) => {
  const responseDto = await axios.get<
    undefined,
    AxiosResponse<TaskResponseDto>
  >("https://api.radium-rtf.ru/v1/relation/section", {
    signal,
    params: {
      sectionId,
      relationId,
    },
  });

  try {
    return new Task(responseDto.data);
  } catch {
    throw new Error("Failed parse XBlockInfo response");
  }
};
