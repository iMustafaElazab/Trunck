import messaging from '@react-native-firebase/messaging';
import {
  setUser as setLocalStorageUser,
  removeUser as removeLocalStorageUser,
} from '@src/core';
import type {User} from '@src/core';
import {reset} from '@src/navigation';
import {
  store,
  setUser as setStateUser,
  removeUser as removeStateUser,
  setErrorDialogMessage,
} from '@src/store';
import {queryClient} from '@src/utils';

const getLogMessage = (message: string) => `## UserUtils:: ${message}`;

const handleSaveUserError = (errorMessage?: string) => {
  console.info(getLogMessage('handleSaveUserError'), errorMessage);

  if (errorMessage) {
    store.dispatch(setErrorDialogMessage(errorMessage));
  }
};

export const saveUserData = async (
  user: User,
  errorMessage?: string,
  onFinish?: () => void,
) => {
  console.info(getLogMessage('saveUserData'), user, errorMessage);

  try {
    const userSaved = await setLocalStorageUser(user);

    if (userSaved) {
      store.dispatch(setStateUser(user));
      onFinish?.();
    } else {
      handleSaveUserError(errorMessage);
    }
  } catch (error) {
    console.error(getLogMessage('error'), error);
    handleSaveUserError(errorMessage);
  }
};

export const saveUserDataOpenHome = (user: User, errorMessage?: string) => {
  console.info(getLogMessage('saveUserDataOpenHome'), user, errorMessage);

  saveUserData(user, errorMessage, () => {
    reset('home');
  });
};

export const removeUserDataLogout = async () => {
  console.info(getLogMessage('removeUserDataLogout'));
  const userRemoved = removeLocalStorageUser();
  console.info(getLogMessage('userRemoved'), userRemoved);
  await messaging().deleteToken();
  store.dispatch(removeStateUser());
  reset('login');
  queryClient.resetQueries();
};
