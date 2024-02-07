import type {User} from '@src/core';
import {
  useLocalStorage,
  getMap,
  setMap,
  removeItem,
  LocalStorageKeys,
} from '@src/core';

const getLogMessage = (message: string) => `## LocalStorage::user:: ${message}`;

export const useLocalStorageUser = () => useLocalStorage(LocalStorageKeys.USER);

export const getUser = async () => {
  console.info(getLogMessage('getUser'));
  const user = await getMap(LocalStorageKeys.USER);
  console.info(getLogMessage('user'), user);
  return user ? (user as User) : null;
};

export const setUser = async (user: User) => {
  console.info(getLogMessage('setUser'), user);
  const userSaved = await setMap(LocalStorageKeys.USER, user);
  console.info(getLogMessage('userSaved'), userSaved);
  return userSaved;
};

export const removeUser = () => {
  console.info(getLogMessage('removeUser'));
  const userRemoved = removeItem(LocalStorageKeys.USER);
  console.info(getLogMessage('userRemoved'), userRemoved);
  return userRemoved;
};
