import { useXBlockInfo } from "@/entities/XBlock";
import { useQuery } from "@tanstack/react-query";
import { ATTEMPTS_QUERY_KEY } from "../libs/constants";
import { fetchAttempts } from "../api/fetchAttempts";

export const useAttempts = () => {
  const { data } = useXBlockInfo();
  const { relationId, sectionId, userId } = data || {};

  return useQuery({
    queryKey: [ATTEMPTS_QUERY_KEY],
    queryFn: ({ signal }) =>
      fetchAttempts({
        signal,
        relationId: relationId!,
        sectionId: sectionId!,
        userId: userId!,
      }),
    enabled: !!relationId && !!sectionId,
  });
};
