import {addEventListener as addNetInfoEventListener} from '@react-native-community/netinfo';
import {onlineManager} from '@tanstack/react-query';
import * as React from 'react';
import {Platform} from 'react-native';

export const useReactQueryOnlineManager = () => {
  React.useEffect(() => {
    // React Query already supports on reconnect auto refetch in web browser.
    if (Platform.OS !== 'web') {
      return addNetInfoEventListener(state => {
        onlineManager.setOnline(
          state.isConnected != null &&
            state.isConnected &&
            Boolean(state.isInternetReachable),
        );
      });
    }
  }, []);
};
