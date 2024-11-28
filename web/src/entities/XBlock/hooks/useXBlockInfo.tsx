import { useQuery } from "@tanstack/react-query";
import { XBLOCK_QUERY_KEY } from "../libs/contants";
import { fetchInfo } from "../api/fetchInfo";
import { useXBlockContext } from "./useXBlockContext";

export const useXBlockInfo = () => {
  const { infoUrl, baseUrl } = useXBlockContext();

  return useQuery({
    queryKey: [XBLOCK_QUERY_KEY],
    queryFn: ({ signal }) =>
      fetchInfo({
        signal,
        infoUrl: infoUrl!,
        baseUrl: baseUrl!
      }),
    enabled: !!infoUrl && !!baseUrl
  });
};
