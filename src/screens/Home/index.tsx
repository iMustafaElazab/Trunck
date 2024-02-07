import {Text} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {Screen, ScrollContainer} from '@src/components';
import {useGetUserDetailsApi} from '@src/core';
import {useFocusNotifyOnChangeProps, useRefreshOnFocus} from '@src/utils';
import Header from './Header';
import styles from './styles';

export default React.memo(() => {
  const notifyOnChangeProps = useFocusNotifyOnChangeProps();

  const {
    data: userData,
    dataUpdatedAt,
    refetch,
  } = useGetUserDetailsApi({notifyOnChangeProps: notifyOnChangeProps?.()});

  useRefreshOnFocus(refetch);

  return (
    <Screen>
      <Header />
      <ScrollContainer
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}>
        <Text>{`UserData: ${JSON.stringify(
          userData,
        )}\n\nDataUpdatedAt: ${new Date(dataUpdatedAt)}`}</Text>
      </ScrollContainer>
    </Screen>
  );
});
