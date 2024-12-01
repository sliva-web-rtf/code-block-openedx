import { useMutation, useQueryClient } from "@tanstack/react-query";
import { XBLOCK_MUTATION_KEY, XBLOCK_QUERY_KEY } from "../libs/contants";
import { useXBlockContext } from "./useXBlockContext";
import { patchInfo } from "../api/patchInfo";
import { XBlockInfoUpdateDto } from "../dtos/XBlockInfoUpdateDto";
import { IError } from "@/shared/types";
import { XBlockResponseDto } from "../dtos/XBlockInfoResponseDto";

export const usePatchXBlockInfo = () => {
  const queryClient = useQueryClient();
  const { baseUrl, patchInfoUrl } = useXBlockContext();

  return useMutation<XBlockResponseDto, IError, XBlockInfoUpdateDto>({
    mutationKey: [XBLOCK_MUTATION_KEY],
    mutationFn: (data) => patchInfo({ ...data, baseUrl, patchInfoUrl }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [XBLOCK_QUERY_KEY] });
    }
  });
};
