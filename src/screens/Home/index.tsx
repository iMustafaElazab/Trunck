import * as React from 'react';
import {Screen, ScrollContainer} from '@src/components';
import {useGetUserDetailsApi} from '@src/core';
import {useFocusNotifyOnChangeProps, useRefreshOnFocus} from '@src/utils';
import Body from './Body';
import Header from './Header';
import styles from './styles';

export default React.memo(() => {
  const notifyOnChangeProps = useFocusNotifyOnChangeProps();

  const {refetch} = useGetUserDetailsApi({
    notifyOnChangeProps: notifyOnChangeProps?.(),
  });

  useRefreshOnFocus(refetch);

  return (
    <Screen>
      <Header />
      <ScrollContainer
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}>
        <Body />
      </ScrollContainer>
    </Screen>
  );
});
