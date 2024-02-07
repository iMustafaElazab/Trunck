import {useQueryClient, useMutation} from '@tanstack/react-query';
import {default as Config} from 'react-native-config';
import {fakerNotifications, queryNotifications} from '@src/core';
import type {
  MarkNotificationReadResponse,
  ServerError,
  ApiRequest,
} from '@src/core';
import type {UseMutationOptions} from '@tanstack/react-query';

const useMarkNotificationReadApi = (
  options?: Omit<
    UseMutationOptions<
      MarkNotificationReadResponse,
      ServerError,
      ApiRequest<any, string | number>
    >,
    'mutationFn'
  >,
) => {
  const queryClient = useQueryClient();
  const {onSuccess, ...restOptions} = options ?? {};

  return useMutation<
    MarkNotificationReadResponse,
    ServerError,
    ApiRequest<any, string | number>
  >({
    mutationFn: request =>
      Config.USE_FAKE_API === 'true'
        ? fakerNotifications.markNotificationRead(request)
        : queryNotifications.markNotificationRead(request),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({queryKey: ['notifications']});
      onSuccess?.(data, variables, context);
    },
    ...restOptions,
  });
};

export default useMarkNotificationReadApi;
