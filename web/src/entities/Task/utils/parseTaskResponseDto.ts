import { SafeParseReturnType } from "zod";
import { TaskResponseDto, TaskResponseSchema } from "../dtos/TaskResponseDto";

export const parseTaskResponseDto = (
  data: unknown,
): SafeParseReturnType<TaskResponseDto, TaskResponseDto> =>
  TaskResponseSchema.safeParse(data);
