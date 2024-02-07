import * as React from 'react';
import {Animated, Dimensions} from 'react-native';
import {hide as rnBootSplashHide} from 'react-native-bootsplash';
import {useAppSelector} from '@src/store';
import type {UseHideSplashProps} from './useHideSplash.types';

export const useHideSplash = (props: UseHideSplashProps) => {
  // #region Logger
  const getLogMessage = (message: string) =>
    `## SplashScreen::useHideSplash:: ${message}`;
  // #endregion

  // #region Variables
  const {opacity, translateY, navigation, isLanguageLoaded, isUserLoaded} =
    props;
  // #endregion

  // #region Redux
  const {user: stateUser} = useAppSelector(state => state.user);
  // #endregion

  // #region State
  const [isBootSplashVisible, setBootSplashVisible] =
    React.useState<boolean>(true);
  // #endregion

  const openNextScreen = React.useCallback(() => {
    console.info(getLogMessage('openNextScreen'));
    navigation.replace(stateUser ? 'home' : 'login');
  }, [navigation, stateUser]);

  const hideSplash = React.useCallback(async () => {
    console.info(getLogMessage('hideSplash'));

    try {
      await rnBootSplashHide();

      Animated.stagger(250, [
        Animated.spring(translateY.current, {
          useNativeDriver: true,
          toValue: -50,
        }),
        Animated.spring(translateY.current, {
          useNativeDriver: true,
          toValue: Dimensions.get('window').height,
        }),
      ]).start();

      Animated.timing(opacity.current, {
        useNativeDriver: true,
        toValue: 0,
        duration: 150,
        delay: 350,
      }).start(() => {
        setBootSplashVisible(false);
        openNextScreen();
      });
    } catch (error) {
      console.warn(
        getLogMessage('Error while calling "rnBootSplashHide"'),
        error,
      );

      setBootSplashVisible(false);
      openNextScreen();
    }
  }, [translateY, opacity, openNextScreen]);

  // #region Setup
  React.useEffect(() => {
    // Check if register visibility, language and user loaded then:
    // - If user available in state then:
    //   - Open home screen.
    // - Else:
    //   - Open login screen.
    if (isLanguageLoaded && isUserLoaded) {
      hideSplash();
    }
  }, [isLanguageLoaded, isUserLoaded, hideSplash]);
  // #endregion

  return isBootSplashVisible;
};
