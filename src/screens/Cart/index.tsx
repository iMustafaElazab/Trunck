import * as React from 'react';

import {Screen, ScrollContainer} from '@src/components';
import Body from './Body';
import Header from './Header';
import styles from './styles';

export default React.memo(() => (
  <Screen style={{flex: 1}}>
    <ScrollContainer
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}>
      <Header />
      <Body />
    </ScrollContainer>
  </Screen>
));
