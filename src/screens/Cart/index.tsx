import * as React from 'react';
import {Text} from 'react-native-paper';
import {Screen, ScrollContainer} from '@src/components';
import styles from './styles';

export default React.memo(() => (
  <Screen style={{flex: 1}}>
    <ScrollContainer
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}>
      <Text>klshfhdsfoh</Text>
    </ScrollContainer>
  </Screen>
));
