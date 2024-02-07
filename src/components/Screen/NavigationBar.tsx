import * as React from 'react';
import {View} from 'react-native';
import {NavigationBar} from 'react-native-bars';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import tinyColor from 'tinycolor2';
import {useAppTheme} from '@src/utils';
import type {Props} from './types';

export default React.memo((props: Props) => {
  const insets = useSafeAreaInsets();
  const theme = useAppTheme();
  const {edges, navigationBarProps, navigationBarColor} = props;

  const {barStyle: navigationBarStyle, ...restNavigationBarProps} =
    navigationBarProps || {};

  const navigationBarContainerStyle = {
    height: !edges || (edges && edges.includes('bottom')) ? insets.bottom : 0,
    backgroundColor: navigationBarColor
      ? navigationBarColor
      : theme.colors.background,
  };

  return (
    <View style={navigationBarContainerStyle}>
      <NavigationBar
        barStyle={
          navigationBarStyle
            ? navigationBarStyle
            : tinyColor(
                  navigationBarColor
                    ? navigationBarColor
                    : theme.colors.background,
                ).isLight()
              ? 'dark-content'
              : 'light-content'
        }
        {...restNavigationBarProps}
      />
    </View>
  );
});
