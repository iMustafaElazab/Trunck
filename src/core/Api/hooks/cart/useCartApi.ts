import {useMutation} from '@tanstack/react-query';
import type {ServerError, ApiRequest, BaseResponse} from '@src/core';
import queryCart from '../../services/queryCart';
import type {AddCartResponse} from '../../responses/AddCartResponse';
import type {CartBody} from '../../services/queryCart';
import type {UseMutationOptions} from '@tanstack/react-query';

const useAddCartApi = (
  options?: Omit<
    UseMutationOptions<
      BaseResponse<AddCartResponse>,
      ServerError,
      ApiRequest<CartBody>
    >,
    'mutationFn'
  >,
) =>
  useMutation<BaseResponse<AddCartResponse>, ServerError, ApiRequest<CartBody>>(
    {
      mutationFn: request => queryCart.addCart(request),
      ...(options ?? {}),
    },
  );

export default useAddCartApi;
