import {useInfiniteQuery} from '@tanstack/react-query';
import {default as Config} from 'react-native-config';
import {fakerNotifications, queryNotifications} from '@src/core';
import type {
  PagingResponse,
  Notification,
  ServerError,
  ApiRequest,
} from '@src/core';
import type {
  InfiniteData,
  UseInfiniteQueryOptions,
  QueryKey,
} from '@tanstack/react-query';

const useGetNotificationsApi = (
  options?: Omit<
    UseInfiniteQueryOptions<
      PagingResponse<Notification>,
      ServerError,
      InfiniteData<PagingResponse<Notification>, ApiRequest>,
      any,
      QueryKey,
      ApiRequest
    >,
    'queryFn' | 'queryKey' | 'initialPageParam' | 'getNextPageParam'
  >,
) =>
  useInfiniteQuery<
    PagingResponse<Notification>,
    ServerError,
    InfiniteData<PagingResponse<Notification>, ApiRequest>,
    QueryKey,
    ApiRequest
  >({
    queryFn: ({pageParam}) =>
      Config.USE_FAKE_API === 'true'
        ? fakerNotifications.getNotifications(pageParam)
        : queryNotifications.getNotifications(pageParam),
    queryKey: ['notifications'],
    initialPageParam: {
      // TODO: Change `params` object to match API.
      params: {page: 1, size: 10},
    },
    getNextPageParam: (lastPage, _allPages, lastPageParam) =>
      lastPage.currentPage === lastPage.lastPage
        ? undefined
        : {
            // TODO: Change `params` object to match API.
            params: {
              page: (lastPage.currentPage ?? 1) + 1,
              size: lastPageParam.params?.size,
            },
          },
    ...(options ?? {}),
  });

export default useGetNotificationsApi;
