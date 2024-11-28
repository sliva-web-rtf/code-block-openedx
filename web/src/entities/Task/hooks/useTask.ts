import { useQuery } from "@tanstack/react-query";
import { TASK_QUERY_KEY } from "../libs/constants";
import { fetchTask } from "../api/fetchTask";
import { useXBlockInfo } from "@/entities/XBlock";

export const useTask = () => {
  const { data } = useXBlockInfo();
  const { relationId, sectionId } = data || {};

  return useQuery({
    queryKey: [TASK_QUERY_KEY],
    queryFn: ({ signal }) =>
      fetchTask({ signal, relationId: relationId!, sectionId: sectionId! }),
    enabled: !!relationId && !!sectionId,
  });
};
