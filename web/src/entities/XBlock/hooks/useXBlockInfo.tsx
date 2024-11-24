import { useQuery } from "@tanstack/react-query";
import { XBLOCK_QUERY_KEY } from "../libs/contants";
import { fetchInfo } from "../api/fetchInfo";
import { useXBlockContext } from "./useXBlockContext";
import { DEFAULT_URL_MOCK } from "../mocks/contextMock";

export const useXBlockInfo = () => {
  const { runtime, element } = useXBlockContext();
  const infoUrl =
    element && runtime?.handlerUrl(element, DEFAULT_URL_MOCK.INFO_URL);

  return useQuery({
    queryKey: [XBLOCK_QUERY_KEY],
    queryFn: ({ signal }) =>
      fetchInfo({
        signal,
        url: infoUrl!,
      }),
    enabled: Boolean(infoUrl),
  });
};
