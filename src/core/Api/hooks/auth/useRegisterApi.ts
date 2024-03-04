import {useMutation} from '@tanstack/react-query';
import {queryAuth} from '@src/core';
import type {
  BaseResponse,
  ServerError,
  ApiRequest,
  RegisterBody,
} from '@src/core';
import type RegisterResponse from '../../responses/RegisterResponse';
import type {UseMutationOptions} from '@tanstack/react-query';

const useRegisterApi = (
  options?: Omit<
    UseMutationOptions<
      BaseResponse<RegisterResponse>,
      ServerError,
      ApiRequest<RegisterBody>
    >,
    'mutationFn'
  >,
) =>
  useMutation<
    BaseResponse<RegisterResponse>,
    ServerError,
    ApiRequest<RegisterBody>
  >({
    mutationFn: request => queryAuth.register(request),
    ...(options ?? {}),
  });

export default useRegisterApi;
