import {useQuery} from '@tanstack/react-query';

import {queryHome} from '@src/core';
import type {BaseResponse, HomeResponse, ServerError} from '@src/core';
import type {UseQueryOptions} from '@tanstack/react-query';

const useHomeApi = (
  options?: Omit<
    UseQueryOptions<BaseResponse<HomeResponse>, ServerError>,
    'queryFn' | 'queryKey'
  >,
) =>
  useQuery<BaseResponse<HomeResponse>, ServerError>({
    queryKey: ['home'],
    queryFn: () => queryHome.home(),
    ...(options ?? {}),
  });

export default useHomeApi;
