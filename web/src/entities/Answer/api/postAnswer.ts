import { baseRadiumApi } from "@/shared/api/baseRadiumApi";
import { MutationFunction } from "@tanstack/react-query";
import { AnswerResponseDto } from "../dtos/AnswerResponseDto";
import { AxiosResponse } from "axios";
import { AnswerRequestDto } from "../dtos/AnswerRequestDto";
import { Answer } from "../models/Answer";

export const postAnswer: MutationFunction<Answer, AnswerRequestDto> = async (
  data,
) => {
  const response = await baseRadiumApi.post<
    undefined,
    AxiosResponse<AnswerResponseDto>
  >("/v1/answer", data);

  try {
    return new Answer(response.data);
  } catch {
    throw new Error("Failed parse answer");
  }
};
