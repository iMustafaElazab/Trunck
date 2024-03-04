import {useQuery} from '@tanstack/react-query';
import type {BaseResponse, ServerError} from '@src/core';
import queryProfile from '../../services/queryProfile';
import type {UseQueryOptions} from '@tanstack/react-query';

const useGetProfileApi = (
  options?: Omit<
    UseQueryOptions<BaseResponse<any>, ServerError>,
    'queryFn' | 'queryKey'
  >,
) =>
  useQuery<BaseResponse<any>, ServerError>({
    queryFn: () => queryProfile.getProfile(),
    queryKey: ['user'],
    ...(options ?? {}),
  });

export default useGetProfileApi;
