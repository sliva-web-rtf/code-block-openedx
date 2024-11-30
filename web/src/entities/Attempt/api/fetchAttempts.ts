import { AxiosResponse } from "axios";
import { Attempt } from "../models/Attempt";
import { baseRadiumApi } from "@/shared/api/baseRadiumApi";
import { QueryFunction } from "@tanstack/react-query";
import { IAttempt } from "../models/IAttempt";
import { ATTEMPTS_QUERY_KEY } from "../libs/constants";
import { BadArgsError } from "@/shared/libs/BadArgsError";
import { FetchError } from "@/shared/libs/FetchError";
import { parseAttemptsResponseDto } from "../utils/parseAttemptsResponseDto";
import { ParseError } from "@/shared/libs/ParseError";

export type FetchAttemptsParams = [
  typeof ATTEMPTS_QUERY_KEY,
  {
    sectionId?: string;
    relationId?: string;
    userId?: string;
  },
];

export const fetchAttempts: QueryFunction<
  IAttempt[],
  FetchAttemptsParams
> = async ({ queryKey, signal }) => {
  const [, { relationId, sectionId, userId }] = queryKey;

  if (!relationId || !sectionId || !userId) {
    throw new BadArgsError();
  }

  let response: AxiosResponse<unknown, unknown>;
  try {
    response = await baseRadiumApi.get("/v1/relation/attempts", {
      signal,
      params: {
        sectionId,
        relationId,
        userId,
      },
    });
  } catch {
    throw new FetchError();
  }

  const parsedData = parseAttemptsResponseDto(response.data);
  if (!parsedData.success) {
    throw new ParseError();
  }

  return parsedData.data.attempts.map((attempt) => new Attempt(attempt));
};
