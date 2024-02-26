import * as React from 'react';
import {Screen, ScrollContainer} from '@src/components';
import Body from './Body';
import Header from './Header';
import styles from './styles';

export default React.memo(() => (
  <Screen>
    <ScrollContainer
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}>
      <Header />
      <Body />
    </ScrollContainer>
  </Screen>
));
