import type {RootStackParamList} from '@src/navigation';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type * as React from 'react';
import type {Animated} from 'react-native';

export interface UseSplashProps {
  opacity: React.MutableRefObject<Animated.Value>;
  translateY: React.MutableRefObject<Animated.Value>;
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'splash',
    'RootStack'
  >;
  isBootSplashLogoLoaded: boolean;
}
