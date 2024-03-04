import type {ApiRequest} from '@src/core';
import {httpClient} from '@src/core';

const queryProfile = {
  getProfile: () =>
    httpClient.get<any>('/auth/profile').then(response => response.data),

  updateProfile: (request: ApiRequest<FormData>) =>
    httpClient
      .putForm<any>('/auth/profile-update', request.body)
      .then(response => response.data),
};

export default queryProfile;
