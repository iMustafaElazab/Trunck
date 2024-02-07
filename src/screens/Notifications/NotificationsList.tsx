import {FlatList} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {ActivityIndicator} from 'react-native-paper';
import {ListEmptyComponent, ListLoadingMore} from '@src/components';
import {useGetNotificationsApi} from '@src/core';
import {useFocusNotifyOnChangeProps} from '@src/utils';
import NotificationItem from './NotificationItem';
import NotificationsListSeparator from './NotificationsListSeparator';
import styles from './styles';

export default React.memo(() => {
  const {t: translate} = useTranslation();
  const notifyOnChangeProps = useFocusNotifyOnChangeProps();

  const {
    data: allPages,
    isLoading,
    isFetching,
    isFetchingNextPage,
    refetch,
    fetchNextPage,
    error,
    isLoadingError,
  } = useGetNotificationsApi({
    notifyOnChangeProps: notifyOnChangeProps?.(),
  });

  const notificationsList = allPages?.pages
    ?.map(page => (page.data ? page.data : []))
    ?.flat();

  return isLoading ? (
    <ActivityIndicator size="large" style={styles.loadingIndicator} />
  ) : (
    <>
      <FlatList
        data={notificationsList}
        renderItem={info => <NotificationItem {...info} />}
        ListEmptyComponent={
          <ListEmptyComponent
            data={translate('notifications')}
            error={error}
            isLoadingError={isLoadingError}
          />
        }
        onRefresh={() => refetch()}
        refreshing={isFetching && !isFetchingNextPage}
        onEndReached={() => fetchNextPage()}
        contentContainerStyle={
          !notificationsList || !notificationsList.length
            ? styles.emptyList
            : undefined
        }
        ItemSeparatorComponent={NotificationsListSeparator}
      />
      <ListLoadingMore isFetchingNextPage={isFetchingNextPage} />
    </>
  );
});
