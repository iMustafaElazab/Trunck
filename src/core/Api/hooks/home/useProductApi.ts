import {useQuery} from '@tanstack/react-query';
import type {ApiRequest, BaseResponse, ServerError} from '@src/core';
import {queryHome} from '@src/core';
import type {Product} from '../../responses/HomeResponse';
import type {UseQueryOptions} from '@tanstack/react-query';

const useProductApi = (
  id: ApiRequest<any | number | string>,
  options?: Omit<
    UseQueryOptions<BaseResponse<Product>, ServerError>,
    'queryFn' | 'queryKey'
  >,
) =>
  useQuery<BaseResponse<Product>, ServerError>({
    queryKey: ['product', id],
    staleTime: 5000,
    queryFn: () => queryHome.productDetail(id),
    ...(options ?? {}),
  });

export default useProductApi;
