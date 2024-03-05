import type {ApiRequest} from '@src/core';
import {httpClient} from '@src/core';

const queryProfile = {
  getProfile: () =>
    httpClient.get<any>('/auth/profile').then(response => response.data),

  updateProfile: (request: ApiRequest<FormData>) =>
    httpClient
      .postForm<any>('/auth/profile-update', request.body, {
        headers: {'Content-Type': 'multipart/form-data'},
      })
      .then(response => response.data),
};

export default queryProfile;
