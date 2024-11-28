
import axios, { AxiosResponse } from "axios";
import { Attempt } from "../models/Attempt";
import { AttemptsResponseDto } from "../dtos/AttemptResponseDto";

type fetchAttemptsParams = {
  signal?: AbortSignal;
  sectionId: string;
  relationId: string;
  userId: string;
};

export const fetchAttempts = async ({
  signal,
  relationId,
  sectionId,
  userId
}: fetchAttemptsParams) => {
  const responseDto = await axios.get<
    undefined,
    AxiosResponse<AttemptsResponseDto>
  >("https://api.radium-rtf.ru/v1/relation/attempts", {
    signal,
    params: {
      sectionId,
      relationId,
      userId
    },
  });

  try {
    return responseDto.data.attempts.map((attemptDto) => new Attempt(attemptDto));
  } catch {
    throw new Error("Failed parse XBlockInfo response");
  }
};
