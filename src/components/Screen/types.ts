import {type StyleProp, type ViewStyle} from 'react-native';
import {type StatusBarProps, type NavigationBarProps} from 'react-native-bars';
import type * as React from 'react';
import type {Edge} from 'react-native-safe-area-context';

export interface Props {
  edges?: Edge[];
  statusBarProps?: StatusBarProps;
  statusBarColor?: string;
  navigationBarProps?: NavigationBarProps;
  navigationBarColor?: string;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}
