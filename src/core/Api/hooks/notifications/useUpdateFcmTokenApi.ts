import {useMutation} from '@tanstack/react-query';
import {default as Config} from 'react-native-config';
import {fakerNotifications, queryNotifications} from '@src/core';
import type {
  UpdateFcmTokenResponse,
  ServerError,
  ApiRequest,
  UpdateFcmTokenBody,
} from '@src/core';
import type {UseMutationOptions} from '@tanstack/react-query';

const useUpdateFcmTokenApi = (
  options?: Omit<
    UseMutationOptions<
      UpdateFcmTokenResponse,
      ServerError,
      ApiRequest<UpdateFcmTokenBody>
    >,
    'mutationFn'
  >,
) =>
  useMutation<
    UpdateFcmTokenResponse,
    ServerError,
    ApiRequest<UpdateFcmTokenBody>
  >({
    mutationFn: request =>
      Config.USE_FAKE_API === 'true'
        ? fakerNotifications.updateFcmToken(request)
        : queryNotifications.updateFcmToken(request),
    ...(options ?? {}),
  });

export default useUpdateFcmTokenApi;
