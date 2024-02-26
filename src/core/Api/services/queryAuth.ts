import type {
  ApiRequest,
  LoginBody,
  LoginResponse,
  User,
  LogoutResponse,
  RegisterBody,
  ForgetBody,
} from '@src/core';
import {httpClient} from '@src/core';

const queryAuth = {
  // TODO: Change params, endpoint, method, and response mapping based on API requirements.
  login: (request: ApiRequest<LoginBody>): Promise<User> =>
    httpClient.post<LoginResponse>('/login', request.body).then(response => ({
      ...response.data.user,
      apiToken: `Bearer ${response.data.token}`,
    })),

  register: (request: ApiRequest<RegisterBody>): Promise<User> =>
    httpClient
      .post<any>('/auth/signup', request.body)
      .then(response => response.data),
  // TODO: Change params, endpoint, method, and response mapping based on API requirements.
  logout: () =>
    httpClient.post<LogoutResponse>('/logout').then(response => response.data),

  forgetPassword: (request: ApiRequest<ForgetBody>) =>
    httpClient
      .post<LogoutResponse>('/auth/forget-password', request.body)
      .then(response => response.data),
};

export default queryAuth;
