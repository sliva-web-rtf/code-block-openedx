import { XBlockInfo } from "../model/XBlockInfo";
import { baseApi } from "./baseApi";
import { AxiosResponse } from "axios";
import { FetchError } from "@/shared/libs/FetchError";
import { QueryFunction } from "@tanstack/react-query";
import { XBLOCK_QUERY_KEY } from "../libs/contants";
import { BadArgsError } from "@/shared/libs/BadArgsError";
import { ParseError } from "@/shared/libs/ParseError";
import { parseXBlockInfoResponseDto } from "../utils/parseXBlockInfoResponseDto";

export type FetchInfoQueryKey = [
  typeof XBLOCK_QUERY_KEY,
  {
    infoUrl?: string;
    baseUrl?: string;
  },
];

export const fetchInfo: QueryFunction<XBlockInfo, FetchInfoQueryKey> = async ({
  queryKey,
  signal,
}) => {
  const [, { baseUrl, infoUrl }] = queryKey;

  if (!baseUrl || !infoUrl) {
    throw new BadArgsError();
  }

  let response: AxiosResponse<unknown, unknown>;
  try {
    response = await baseApi.post(baseUrl + infoUrl, "{}", { signal });
  } catch {
    throw new FetchError(
      "Не удалось загрузить данные о платформе и пользователе",
    );
  }

  const parsedData = parseXBlockInfoResponseDto(response.data);
  if (!parsedData.success) {
    throw new ParseError(
      "Не удалось валидировать данные о платформе и пользователях",
    );
  }

  return new XBlockInfo(parsedData.data);
};
