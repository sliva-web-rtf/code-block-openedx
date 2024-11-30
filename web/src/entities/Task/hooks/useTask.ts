import { useQuery } from "@tanstack/react-query";
import { TASK_QUERY_KEY } from "../libs/constants";
import { fetchTask, FetchTaskQueryKey } from "../api/fetchTask";
import { useXBlockInfo } from "@/entities/XBlock";
import { ITask } from "../models/ITask";
import { BaseError } from "@/shared/libs/BaseError";

export const useTask = () => {
  const { data } = useXBlockInfo();
  const { relationId, sectionId } = data || {};

  return useQuery<ITask, BaseError, ITask, FetchTaskQueryKey>({
    queryKey: [TASK_QUERY_KEY, { relationId, sectionId }],
    queryFn: fetchTask,
    enabled: !!relationId && !!sectionId,
  });
};
