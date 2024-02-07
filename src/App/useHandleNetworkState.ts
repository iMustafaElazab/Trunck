import * as React from 'react';
import {Toast} from 'react-native-toast-notifications';
import {translate} from '@src/core';
import {
  useAppDispatch,
  removeIsConnectionExpensive,
  setIsConnectionExpensive,
  setIsInternetAvailable,
} from '@src/store';
import type {NetInfoState} from '@react-native-community/netinfo';

export const useHandleNetworkState = () => {
  // #region Logger
  const getLogMessage = (message: string) =>
    `## App::useHandleNetworkState:: ${message}`;
  // #endregion

  // #region Variables
  const internetLostToastId = React.useRef<string | undefined>(undefined);
  // #endregion

  // #region Redux
  const dispatch = useAppDispatch();
  // #endregion

  const checkInternetAvailableState = React.useCallback(
    (state: NetInfoState) => {
      console.info(getLogMessage('checkInternetAvailableState'));
      console.info(getLogMessage('state'), state);

      const isInternetAvailable =
        state.isConnected && state.isInternetReachable;
      console.info(getLogMessage('isInternetAvailable'), isInternetAvailable);

      dispatch(
        setIsInternetAvailable(
          isInternetAvailable == null ? true : isInternetAvailable,
        ),
      );

      return isInternetAvailable;
    },
    [dispatch],
  );

  const checkConnectionExpensiveState = React.useCallback(
    (state: NetInfoState) => {
      console.info(getLogMessage('checkConnectionExpensiveState'));
      console.info(getLogMessage('state'), state);
      const isConnectionExpensive = state.details?.isConnectionExpensive;
      console.info(
        getLogMessage('isConnectionExpensive'),
        isConnectionExpensive,
      );

      if (isConnectionExpensive === undefined) {
        dispatch(removeIsConnectionExpensive());
      } else {
        dispatch(setIsConnectionExpensive(isConnectionExpensive));
      }
    },
    [dispatch],
  );

  const handleInternetLoastToast = React.useCallback(
    (isInternetAvailable: boolean | null) => {
      console.info(getLogMessage('handleInternetLoastToast'));

      console.info(
        getLogMessage('internetLostToastId'),
        internetLostToastId.current,
      );

      if (isInternetAvailable === false) {
        if (internetLostToastId.current) {
          Toast.update(
            internetLostToastId.current,
            translate('internet_lost'),
            {
              type: 'danger',
              onClose: () => (internetLostToastId.current = undefined),
            },
          );
        } else {
          internetLostToastId.current = Toast.show(translate('internet_lost'), {
            type: 'danger',
            onClose: () => (internetLostToastId.current = undefined),
          });
        }
      } else {
        if (internetLostToastId.current) {
          Toast.hide(internetLostToastId.current);
        }
      }
    },
    [],
  );

  /**
   * handleNetworkState
   *
   * Save network state to redux store.
   * Check if not internet then show connection lost toast.
   *
   * @param state The new network state to handle.
   */
  const handleNetworkState = React.useCallback(
    (state: NetInfoState) => {
      console.info(getLogMessage('handleNetworkState'));
      console.info(getLogMessage('state'), state);

      // Check Internet available state.
      const isInternetAvailable = checkInternetAvailableState(state);

      // Check connection expensive state.
      checkConnectionExpensiveState(state);

      // Show internet lost toast if no Internet connection available.
      handleInternetLoastToast(isInternetAvailable);
    },
    [
      checkConnectionExpensiveState,
      checkInternetAvailableState,
      handleInternetLoastToast,
    ],
  );

  return handleNetworkState;
};
