import type {BaseResponse, HomeResponse} from '@src/core';
import {httpClient} from '@src/core';

const queryHome = {
  home: () =>
    httpClient
      .get<BaseResponse<HomeResponse>>('/home')
      .then(response => response.data),
};

export default queryHome;
