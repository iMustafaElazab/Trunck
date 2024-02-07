import {useMutation} from '@tanstack/react-query';
import {default as Config} from 'react-native-config';
import {fakerAuth, queryAuth} from '@src/core';
import type {User, ServerError, ApiRequest, LoginBody} from '@src/core';
import type {UseMutationOptions} from '@tanstack/react-query';

const useLoginApi = (
  options?: Omit<
    UseMutationOptions<User, ServerError, ApiRequest<LoginBody>>,
    'mutationFn'
  >,
) =>
  useMutation<User, ServerError, ApiRequest<LoginBody>>({
    mutationFn: request =>
      Config.USE_FAKE_API === 'true'
        ? fakerAuth.login(request)
        : queryAuth.login(request),
    ...(options ?? {}),
  });

export default useLoginApi;
