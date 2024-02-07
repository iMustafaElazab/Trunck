import * as React from 'react';
import {StyleSheet} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import styles from './styles';
import type {Props} from './types';

export default React.memo((props: Props) => {
  const {isFetchingNextPage, style} = props;

  return isFetchingNextPage ? (
    <ActivityIndicator
      size="small"
      style={StyleSheet.compose(styles.loadingMore, style)}
    />
  ) : null;
});
