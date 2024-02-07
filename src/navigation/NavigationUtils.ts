/**
 * NavigationUtils
 *
 * Helper methods for navigating while you have no access to the navigation prop.
 * These methods should be used only if you don't have a navigation prop.
 * If you need to navigate from nested component without passing the navigation prop
 * don't use these methods instead you can use "useNavigation".
 */

import {
  createNavigationContainerRef,
  StackActions,
  CommonActions,
} from '@react-navigation/native';

import type {RootStackParamList} from '@src/navigation';

const getLogMessage = (message: string) => `## NavigationUtils:: ${message}`;

type RouteName = keyof RootStackParamList;

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const navigate = (
  screenName: RouteName,
  params?: RootStackParamList[RouteName],
) => {
  console.info(getLogMessage('navigate'), screenName, params);

  if (navigationRef.isReady()) {
    navigationRef.navigate(screenName, params as any);
  }
};

export const getCurrentRouteName = () => {
  console.info(getLogMessage('getCurrentRouteName'));

  if (navigationRef.isReady()) {
    return navigationRef.getCurrentRoute()?.name;
  }

  return undefined;
};

export const goBack = () => {
  console.info(getLogMessage('goBack'));

  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
};

export const push = (
  screenName: RouteName,
  params?: RootStackParamList[RouteName],
) => {
  console.info(getLogMessage('push'), screenName, params);

  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(screenName, params));
  }
};

export const replace = (
  screenName: RouteName,
  params?: RootStackParamList[RouteName],
) => {
  console.info(getLogMessage('push'), screenName, params);

  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(screenName, params));
  }
};

export const popToTop = () => {
  console.info(getLogMessage('popToTop'));

  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.popToTop());
  }
};

export const reset = (
  screenName: RouteName,
  params?: RootStackParamList[RouteName],
) => {
  console.info(getLogMessage('reset'), screenName, params);

  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: screenName, params: params}],
      }),
    );
  }
};
