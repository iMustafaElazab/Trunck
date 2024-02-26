import {useMutation} from '@tanstack/react-query';
import {
  type User,
  type ServerError,
  type ApiRequest,
  type RegisterBody,
  queryAuth,
} from '@src/core';
import type {UseMutationOptions} from '@tanstack/react-query';

const useRegisterApi = (
  options?: Omit<
    UseMutationOptions<User, ServerError, ApiRequest<RegisterBody>>,
    'mutationFn'
  >,
) =>
  useMutation<User, ServerError, ApiRequest<RegisterBody>>({
    mutationFn: request => queryAuth.register(request),
    ...(options ?? {}),
  });

export default useRegisterApi;
