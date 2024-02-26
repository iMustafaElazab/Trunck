import {useMutation} from '@tanstack/react-query';
import {queryAuth} from '@src/core';
import type {
  ApiRequest,
  ForgetBody,
  LogoutResponse,
  ServerError,
} from '@src/core';
import type {UseMutationOptions} from '@tanstack/react-query';

const useForgetPasswordApi = (
  options?: Omit<
    UseMutationOptions<LogoutResponse, ServerError, ApiRequest<ForgetBody>>,
    'mutationFn'
  >,
) =>
  useMutation<LogoutResponse, ServerError, ApiRequest<ForgetBody>>({
    mutationFn: request => queryAuth.forgetPassword(request),
    ...(options ?? {}),
  });

export default useForgetPasswordApi;
