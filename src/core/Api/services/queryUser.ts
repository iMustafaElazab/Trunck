import type {User, ApiRequest} from '@src/core';
import {httpClient} from '@src/core';
import {store} from '@src/store';

const queryUser = {
  // TODO: Change params, endpoint, method, and response mapping based on API requirements.
  getUserDetails: () =>
    httpClient.get<User>('/user').then(response => {
      const oldUser = store.getState().user.user;

      return {
        ...response.data,
        apiToken: oldUser?.apiToken,
        fcmToken: oldUser?.fcmToken,
      };
    }),
  // TODO: Change params, endpoint, method, and response mapping based on API requirements.
  updateUserProfile: (request: ApiRequest<FormData, number>) =>
    httpClient
      .putForm<User>(`/user/${request.pathVar}`, request.body)
      .then(response => {
        const oldUser = store.getState().user.user;

        return {
          ...response.data,
          apiToken: oldUser?.apiToken,
          fcmToken: oldUser?.fcmToken,
        };
      }),
};

export default queryUser;
