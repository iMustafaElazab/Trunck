import {useMutation, useQueryClient} from '@tanstack/react-query';
import type {ApiRequest, BaseResponse, ServerError} from '@src/core';
import queryProfile from '../../services/queryProfile';
import type {UseMutationOptions} from '@tanstack/react-query';

const usePutProfileApi = (
  options?: Omit<
    UseMutationOptions<BaseResponse<any>, ServerError, ApiRequest<FormData>>,
    'mutationFn'
  >,
) => {
  const queryClient = useQueryClient();
  const {onSuccess, ...restOptions} = options ?? {};
  return useMutation<BaseResponse<any>, ServerError, ApiRequest<FormData>>({
    mutationFn: request => queryProfile.updateProfile(request),
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({queryKey: ['user']});
      onSuccess?.(data, variables, context);
    },
    ...restOptions,
  });
};

export default usePutProfileApi;
