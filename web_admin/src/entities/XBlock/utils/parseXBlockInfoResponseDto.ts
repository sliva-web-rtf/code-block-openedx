import { SafeParseReturnType } from "zod";
import {
  XBlockResponseDto,
  XBlockResponseSchema,
} from "../dtos/XBlockInfoResponseDto";

export const parseXBlockInfoResponseDto = (
  data: unknown,
): SafeParseReturnType<XBlockResponseDto, XBlockResponseDto> =>
  XBlockResponseSchema.safeParse(data);
