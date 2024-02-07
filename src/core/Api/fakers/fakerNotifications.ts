import type {
  ApiRequest,
  PagingResponse,
  Notification,
  UpdateFcmTokenBody,
  UpdateFcmTokenResponse,
  MarkNotificationReadResponse,
} from '@src/core';
import {randomIntFromInterval} from '@src/utils';

const getLogMessage = (message: string) =>
  `## fakers::fakerNotifications:: ${message}`;

const fakerNotifications = {
  getNotifications: (
    request: ApiRequest,
  ): Promise<PagingResponse<Notification>> => {
    console.info(getLogMessage('getNotifications'), request);

    return new Promise(res =>
      setTimeout(
        () => {
          const page = request.params?.page ?? 1;
          const pageSize = request.params?.size ?? 10;

          res({
            currentPage: page,
            lastPage: 10,
            data: Array.from({length: pageSize}, (_, i) => {
              const id = page * pageSize - pageSize + 1 + i;

              return {
                id: id,
                key: `notification_${id}`,
                title: `Notification ${id}`,
                message: `Notification ${id} body`,
              };
            }),
          });
        },
        randomIntFromInterval(100, 1000),
      ),
    );
  },
  updateFcmToken: (
    request: ApiRequest<UpdateFcmTokenBody>,
  ): Promise<UpdateFcmTokenResponse> => {
    console.info(getLogMessage('updateFcmToken'), request);

    return new Promise(res =>
      setTimeout(
        () => {
          res({message: 'Updated FCM token successfully'});
        },
        randomIntFromInterval(100, 1000),
      ),
    );
  },
  markNotificationRead: (
    request: ApiRequest<any, string | number>,
  ): Promise<MarkNotificationReadResponse> => {
    console.info(getLogMessage('markNotificationRead'), request);

    return new Promise(res =>
      setTimeout(
        () => {
          res({message: 'Marked notification read successfully'});
        },
        randomIntFromInterval(100, 1000),
      ),
    );
  },
};

export default fakerNotifications;
