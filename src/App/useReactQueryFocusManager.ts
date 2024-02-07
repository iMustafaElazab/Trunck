import {focusManager} from '@tanstack/react-query';
import * as React from 'react';
import {AppState, Platform} from 'react-native';
import type {AppStateStatus} from 'react-native';

export const useReactQueryFocusManager = () => {
  function onAppStateChange(status: AppStateStatus) {
    if (Platform.OS !== 'web') {
      focusManager.setFocused(status === 'active');
    }
  }

  React.useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange);

    return () => subscription.remove();
  }, []);
};
