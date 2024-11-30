import { useXBlockInfo } from "@/entities/XBlock";
import { useQuery } from "@tanstack/react-query";
import { ATTEMPTS_QUERY_KEY } from "../libs/constants";
import { fetchAttempts, FetchAttemptsParams } from "../api/fetchAttempts";
import { IAttempt } from "../models/IAttempt";
import { IError } from "@/shared/types";

export const useAttempts = () => {
  const { data } = useXBlockInfo();
  const { relationId, sectionId, userId } = data || {};

  return useQuery<IAttempt[], IError, IAttempt[], FetchAttemptsParams>({
    queryKey: [ATTEMPTS_QUERY_KEY, { relationId, sectionId, userId }],
    queryFn: fetchAttempts,
    enabled: !!relationId && !!sectionId && !!userId,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: 1,
  });
};
