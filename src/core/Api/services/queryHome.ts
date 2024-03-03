import type {
  ApiRequest,
  BaseResponse,
  HomeResponse,
  PagingResponse,
} from '@src/core';
import {httpClient} from '@src/core';
import type {CategoryResponse, Product} from '../responses/HomeResponse';

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

  getCategories: (request: ApiRequest<string | number>) =>
    httpClient
      .get<BaseResponse<PagingResponse<CategoryResponse>>>('/categories', {
        params: request.params,
      })
      .then(response => ({
        currentPage: response.data.data.currentPage,
        lastPage: response.data.data.lastPage,
        data: response.data.data.data?.map(category => ({
          ...category,
          key: `category${category.id || 0}`,
        })),
      })),
};

export default queryHome;
