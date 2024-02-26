import {useQueryClient, useMutation} from '@tanstack/react-query';

import {queryUser} from '@src/core';
import type {User, ServerError, ApiRequest} from '@src/core';
import type {UseMutationOptions} from '@tanstack/react-query';

const useUpdateUserProfileApi = (
  options?: Omit<
    UseMutationOptions<User, ServerError, ApiRequest<FormData, number>>,
    'mutationFn'
  >,
) => {
  const queryClient = useQueryClient();
  const {onSuccess, ...restOptions} = options ?? {};

  return useMutation<User, ServerError, ApiRequest<FormData, number>>({
    mutationFn: request => queryUser.updateUserProfile(request),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({queryKey: ['user']});
      onSuccess?.(data, variables, context);
    },
    ...restOptions,
  });
};

export default useUpdateUserProfileApi;
