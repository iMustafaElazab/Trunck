import * as React from 'react';
import type {User} from '@src/core';
import {
  getUser as getLocalStorageUser,
  useGetUserDetailsApi,
  setUser as setLocalStorageUser,
} from '@src/core';
import {useAppDispatch, setUser as setStateUser} from '@src/store';

export const useSplashUserLoader = (isBootSplashLogoLoaded: boolean) => {
  // #region Logger
  const getLogMessage = (message: string) =>
    `## SplashScreen::useSplashUserLoader:: ${message}`;
  // #endregion

  // #region Redux
  const dispatch = useAppDispatch();
  // #endregion

  // #region State
  const [shouldStartUserLoading, setShouldStartUserLoading] =
    React.useState<boolean>(false);

  const [isUserLoaded, setUserLoaded] = React.useState<boolean>(false);
  // #endregion

  // #region API
  const {
    data: apiUser,
    isError: isErrorApi,
    isSuccess: isSuccessApi,
  } = useGetUserDetailsApi({
    enabled: shouldStartUserLoading,
  });
  // #endregion

  /**
   * setUserToReduxStore
   *
   * Set given user to redux store.
   *
   * @param user The user to set to redux store.
   */
  const setUserToReduxStore = React.useCallback(
    (user: User) => {
      console.info(getLogMessage('setUserToReduxStore'), user);
      dispatch(setStateUser(user));
    },
    [dispatch],
  );

  /**
   * getSavedUser
   *
   * Load user data from local storage then:
   * - If user available:
   *   - Set user to redux store.
   *   - Check if Internet connection available then:
   *     - If available call "getUpdatedUserData" to load updated user data from API.
   *     - Else set "isUserLoaded" state variable.
   * - Else:
   *   - Set "isUserLoaded" state variable.
   */
  const getSavedUser = React.useCallback(async () => {
    console.info(getLogMessage('getSavedUser'));
    const user = await getLocalStorageUser();
    console.info(getLogMessage('user'), user);

    if (user) {
      setUserToReduxStore(user);
      setShouldStartUserLoading(true);
    } else {
      setUserLoaded(true);
    }
  }, [setUserToReduxStore]);

  /**
   * saveUserData
   *
   * - Set user to local storage.
   * - Set user to redux store.
   * - Set "isUserLoaded" state variable.
   */
  const saveUserData = React.useCallback(() => {
    if (apiUser) {
      setLocalStorageUser(apiUser);
      setUserToReduxStore(apiUser);
    }

    setUserLoaded(true);
  }, [apiUser, setUserToReduxStore]);

  // #region Setup
  React.useEffect(() => {
    if (isBootSplashLogoLoaded) {
      getSavedUser();
    }
  }, [isBootSplashLogoLoaded, getSavedUser]);

  React.useEffect(() => {
    if (isSuccessApi) {
      saveUserData();
    }

    if (isErrorApi) {
      setUserLoaded(true);
    }
  }, [isSuccessApi, isErrorApi, saveUserData]);
  // #endregion

  return isUserLoaded;
};
