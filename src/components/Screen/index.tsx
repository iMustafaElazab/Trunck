import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {useAppTheme} from '@src/utils';
import NavigationBar from './NavigationBar';
import StatusBar from './StatusBar';
import styles from './styles';
import type {Props} from './types';

export default React.memo((props: Props) => {
  const insets = useSafeAreaInsets();
  const theme = useAppTheme();
  const {edges, children, style} = props;

  const contentStyle = {
    backgroundColor: theme.colors.background,
    paddingRight:
      !edges || (edges && edges.includes('right')) ? insets.right : 0,
    paddingLeft: !edges || (edges && edges.includes('left')) ? insets.left : 0,
  };

  return (
    <SafeAreaProvider>
      <StatusBar />
      <View style={StyleSheet.flatten([styles.content, contentStyle, style])}>
        {children}
      </View>
      <NavigationBar />
    </SafeAreaProvider>
  );
});
