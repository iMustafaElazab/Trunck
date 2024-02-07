import * as React from 'react';
import {View} from 'react-native';
import {StatusBar} from 'react-native-bars';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import tinyColor from 'tinycolor2';
import {useAppTheme} from '@src/utils';
import type {Props} from './types';

export default React.memo((props: Props) => {
  const insets = useSafeAreaInsets();
  const theme = useAppTheme();
  const {edges, statusBarProps, statusBarColor} = props;

  const {barStyle: statusBarStyle, ...restStatusBarProps} =
    statusBarProps || {};

  const statusBarContainerStyle = {
    height: !edges || (edges && edges.includes('top')) ? insets.top : 0,
    backgroundColor: statusBarColor ? statusBarColor : theme.colors.background,
  };

  return (
    <View style={statusBarContainerStyle}>
      <StatusBar
        barStyle={
          statusBarStyle
            ? statusBarStyle
            : tinyColor(
                  statusBarColor ? statusBarColor : theme.colors.background,
                ).isLight()
              ? 'dark-content'
              : 'light-content'
        }
        {...restStatusBarProps}
      />
    </View>
  );
});
