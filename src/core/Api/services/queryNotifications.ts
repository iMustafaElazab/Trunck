import type {
  ApiRequest,
  PagingResponse,
  Notification,
  NotificationsResponse,
  UpdateFcmTokenBody,
  UpdateFcmTokenResponse,
  MarkNotificationReadResponse,
} from '@src/core';
import {httpClient} from '@src/core';

const queryNotifications = {
  // TODO: Change params, endpoint, method, and response mapping based on API requirements.
  getNotifications: (
    request: ApiRequest,
  ): Promise<PagingResponse<Notification>> =>
    httpClient
      .get<NotificationsResponse>('/notifications', {
        params: request.params,
      })
      .then(response => ({
        currentPage: response.data.meta?.currentPage,
        lastPage: response.data.meta?.totalPages,
        data: response.data.data?.map(notification => ({
          ...notification,
          key: `notification_${notification.id || 0}`,
        })),
      })),
  // TODO: Change params, endpoint, method, and response mapping based on API requirements.
  updateFcmToken: (request: ApiRequest<UpdateFcmTokenBody>) =>
    httpClient
      .post<UpdateFcmTokenResponse>('/update-fcm-token', request.body)
      .then(response => response.data),
  // TODO: Change params, endpoint, method, and response mapping based on API requirements.
  markNotificationRead: (request: ApiRequest<any, string | number>) =>
    httpClient
      .post<MarkNotificationReadResponse>(
        `/mark-notification-read/${request.pathVar}`,
      )
      .then(response => response.data),
};

export default queryNotifications;
