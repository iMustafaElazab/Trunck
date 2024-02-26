import * as React from 'react';
import {Screen, ScrollContainer} from '@src/components';
import Form from './Form';
import Header from './Header';
import styles from './styles';

export default React.memo(() => (
  <Screen>
    <Header />
    <ScrollContainer
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}>
      <Form />
    </ScrollContainer>
  </Screen>
));
