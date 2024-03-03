import type {ApiRequest, BaseResponse} from '@src/core';
import {httpClient} from '@src/core';
import type {AddCartResponse, CartResponse} from '../responses/AddCartResponse';

export interface CartBody {
  product_id: string;
}

const queryCart = {
  addCart: (request: ApiRequest<CartBody>) =>
    httpClient
      .post<BaseResponse<AddCartResponse>>('/carts', request.body)
      .then(response => response.data),

  getCart: () =>
    httpClient
      .get<BaseResponse<CartResponse>>('/carts')
      .then(response => response.data),
};

export default queryCart;
