import { XBlockInfo } from "../model/XBlockInfo";
import { XBlockResponseDto } from "../dtos/XBlockInfoResponseDto";
import { baseApi } from "./baseApi";
import { AxiosResponse } from "axios";
import { IXblockInfo } from "../model/IXBlockInfo";

type fetchInfoParams = {
  signal: AbortSignal;
  infoUrl: string;
  baseUrl: string
};

export const fetchInfo = async ({ signal, baseUrl, infoUrl }: fetchInfoParams): Promise<IXblockInfo> => {
  const responseDto = await baseApi.post<
    undefined,
    AxiosResponse<XBlockResponseDto>
  >(baseUrl + infoUrl, "{}", { signal });

  try {
    return new XBlockInfo(responseDto.data);
  } catch {
    throw new Error("Failed parse XBlockInfo response");
  }
};
