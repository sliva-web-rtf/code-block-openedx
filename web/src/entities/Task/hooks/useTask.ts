import { useQuery } from "@tanstack/react-query";
import { TASK_QUERY_KEY } from "../libs/constants";
import { fetchTask, FetchTaskQueryKey } from "../api/fetchTask";
import { useXBlockInfo } from "@/entities/XBlock";
import { ITask } from "../models/ITask";
import { IError } from "@/shared/types";

export const useTask = () => {
  const { data } = useXBlockInfo();
  const { relationId, sectionId } = data || {};

  return useQuery<ITask, IError, ITask, FetchTaskQueryKey>({
    queryKey: [TASK_QUERY_KEY, { relationId, sectionId }],
    queryFn: fetchTask,
    enabled: !!relationId && !!sectionId,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: 1,
  });
};
