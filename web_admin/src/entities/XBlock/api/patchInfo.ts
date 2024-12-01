import { MutationFunction } from "@tanstack/react-query";
import { IXblockInfo } from "../model/IXBlockInfo";
import { XBlockInfoUpdateDto } from "../dtos/XBlockInfoUpdateDto";
import { XBlockInfo } from "../model/XBlockInfo";
import { IXBlockContext } from "../types/IXBlockContext";
import { BadArgsError, FetchError, ParseError } from "@/shared/libs";
import { baseApi } from "./baseApi";
import { AxiosResponse } from "axios";
import { parseXBlockInfoResponseDto } from "../utils/parseXBlockInfoResponseDto";

type PatchInfoDto = XBlockInfoUpdateDto & Omit<IXBlockContext, "infoUrl">;

export const patchInfo: MutationFunction<IXblockInfo, PatchInfoDto> = async ({
  relationId,
  sectionId,
  baseUrl,patchInfoUrl
}) => {
  if (!baseUrl || !patchInfoUrl) {
    throw new BadArgsError()
  }

  let response: AxiosResponse<unknown, unknown>;
  try {
    response = await baseApi.post(baseUrl + patchInfoUrl, JSON.stringify({
      sectionId,
      relationId
    }))
  } catch {
    throw new FetchError()
  }

  const parsedData = parseXBlockInfoResponseDto(response.data)
  if (!parsedData.success) {
    throw new ParseError()
  }

  return new XBlockInfo(parsedData.data);
};
