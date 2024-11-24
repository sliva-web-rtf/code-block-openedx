import { XBlockInfo } from "../model/XBlockInfo";
import { XBlockResponseDto } from "../dtos/XBlockInfoResponseDto";
import { baseApi } from "./baseApi";
import { AxiosResponse } from "axios";

type fetchInfoParams = {
  signal: AbortSignal;
  url: string;
};

export const fetchInfo = async ({ signal, url }: fetchInfoParams) => {
  const responseDto = await baseApi.post<
    undefined,
    AxiosResponse<XBlockResponseDto>
  >(url, "{}", { signal });

  try {
    return new XBlockInfo(responseDto.data);
  } catch {
    throw new Error("Failed parse XBlockInfo response");
  }
};
