import {useQuery} from '@tanstack/react-query';
import {default as Config} from 'react-native-config';
import {fakerUser, queryUser} from '@src/core';
import type {User, ServerError} from '@src/core';
import type {UseQueryOptions} from '@tanstack/react-query';

const useGetUserDetailsApi = (
  options?: Omit<UseQueryOptions<User, ServerError>, 'queryFn' | 'queryKey'>,
) =>
  useQuery<User, ServerError>({
    queryFn: () =>
      Config.USE_FAKE_API === 'true'
        ? fakerUser.getUserDetails()
        : queryUser.getUserDetails(),
    queryKey: ['user'],
    ...(options ?? {}),
  });

export default useGetUserDetailsApi;
