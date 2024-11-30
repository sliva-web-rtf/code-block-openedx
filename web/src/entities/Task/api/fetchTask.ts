import { Task } from "../models/Task";
import { AxiosResponse } from "axios";
import { TASK_QUERY_KEY } from "../libs/constants";
import { QueryFunction } from "@tanstack/react-query";
import { ITask } from "../models/ITask";
import { BadArgsError } from "@/shared/libs/BadArgsError";
import { baseRadiumApi } from "@/shared/api/baseRadiumApi";
import { FetchError } from "@/shared/libs/FetchError";
import { parseTaskResponseDto } from "../utils/parseTaskResponseDto";
import { ParseError } from "@/shared/libs/ParseError";

export type FetchTaskQueryKey = [
  typeof TASK_QUERY_KEY,
  {
    sectionId?: string;
    relationId?: string;
  },
];

export const fetchTask: QueryFunction<ITask, FetchTaskQueryKey> = async ({
  queryKey,
  signal,
}) => {
  const [, { relationId, sectionId }] = queryKey;

  if (!sectionId || !relationId) {
    throw new BadArgsError();
  }

  let response: AxiosResponse<unknown, unknown>;
  try {
    response = await baseRadiumApi.get("/v1/relation/section", {
      signal,
      params: {
        sectionId,
        relationId,
      },
    });
  } catch {
    throw new FetchError();
  }

  const parsedData = parseTaskResponseDto(response.data);
  if (!parsedData.success) {
    throw new ParseError();
  }

  return new Task(parsedData.data);
};
