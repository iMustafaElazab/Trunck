import type {
  ApiRequest,
  LoginBody,
  LoginResponse,
  User,
  LogoutResponse,
} from '@src/core';
import {httpClient} from '@src/core';

const queryAuth = {
  // TODO: Change params, endpoint, method, and response mapping based on API requirements.
  login: (request: ApiRequest<LoginBody>): Promise<User> =>
    httpClient.post<LoginResponse>('/login', request.body).then(response => ({
      ...response.data.user,
      apiToken: `Bearer ${response.data.token}`,
    })),
  // TODO: Change params, endpoint, method, and response mapping based on API requirements.
  logout: () =>
    httpClient.post<LogoutResponse>('/logout').then(response => response.data),
};

export default queryAuth;
