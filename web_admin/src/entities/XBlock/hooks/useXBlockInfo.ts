import { useQuery } from "@tanstack/react-query";
import { XBLOCK_QUERY_KEY } from "../libs/contants";
import { fetchInfo, FetchInfoQueryKey } from "../api/fetchInfo";
import { useXBlockContext } from "./useXBlockContext";
import { XBlockInfo } from "../model/XBlockInfo";
import { IError } from "@/shared/types";

export const useXBlockInfo = () => {
  const { infoUrl, baseUrl } = useXBlockContext();

  return useQuery<XBlockInfo, IError, XBlockInfo, FetchInfoQueryKey>({
    queryKey: [XBLOCK_QUERY_KEY, { infoUrl, baseUrl }],
    queryFn: fetchInfo,
    enabled: !!infoUrl && !!baseUrl,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: 1,
  });
};
