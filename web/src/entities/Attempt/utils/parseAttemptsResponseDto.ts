import { SafeParseReturnType } from "zod";
import {
  AttemptsResponseDto,
  AttemptsResponseSchema,
} from "../dtos/AttemptResponseDto";

export const parseAttemptsResponseDto = (
  data: unknown,
): SafeParseReturnType<AttemptsResponseDto, AttemptsResponseDto> =>
  AttemptsResponseSchema.safeParse(data);
