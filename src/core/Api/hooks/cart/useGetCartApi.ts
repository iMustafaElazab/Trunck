import {useQuery} from '@tanstack/react-query';
import type {BaseResponse, ServerError} from '@src/core';
import queryCart from '../../services/queryCart';
import type {CartResponse} from '../../responses/AddCartResponse';
import type {UseQueryOptions} from '@tanstack/react-query';

const useGetCartApi = (
  options?: Omit<
    UseQueryOptions<BaseResponse<CartResponse>, ServerError>,
    'queryFn' | 'queryKey'
  >,
) =>
  useQuery<BaseResponse<CartResponse>, ServerError>({
    queryKey: ['cart'],
    queryFn: () => queryCart.getCart(),
    ...(options ?? {}),
  });

export default useGetCartApi;
