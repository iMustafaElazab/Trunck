import type {ApiRequest, BaseResponse, HomeResponse} from '@src/core';
import {httpClient} from '@src/core';
import type {Product} from '../responses/HomeResponse';

const queryHome = {
  home: () =>
    httpClient
      .get<BaseResponse<HomeResponse>>('/home')
      .then(response => response.data),

  productDetail: (
    request: ApiRequest<any, string | number>,
  ): Promise<BaseResponse<Product>> =>
    httpClient
      .get<BaseResponse<Product>>(`/products/${request.pathVar}`)
      .then(response => response.data),
};

export default queryHome;
