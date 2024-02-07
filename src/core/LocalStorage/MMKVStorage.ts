import {MMKVLoader, create} from 'react-native-mmkv-storage';
import type {LocalStorageKeys} from '@src/core';

const getLogMessage = (message: string) => `## LocalStorage:: ${message}`;

export const storage = new MMKVLoader().withEncryption().initialize();

export const useLocalStorage = create(storage);

export const setString = async (key: LocalStorageKeys, value: string) => {
  console.info(getLogMessage('setString'), key, value);

  try {
    const result = await storage.setStringAsync(key, value);
    console.info(getLogMessage('result'), result);
    return result;
  } catch (e) {
    console.error(getLogMessage('Error setString'), key, value, e);
    return null;
  }
};

export const getString = async (key: LocalStorageKeys) => {
  console.info(getLogMessage('getString'), key);

  try {
    const string = await storage.getStringAsync(key);
    return string;
  } catch (e) {
    console.error(getLogMessage('Error getString'), key, e);
    return null;
  }
};

export const setMap = async (key: LocalStorageKeys, value: object) => {
  console.info(getLogMessage('setMap'), key, value);

  try {
    const result = await storage.setMapAsync(key, value);
    console.info(getLogMessage('result'), result);
    return result;
  } catch (e) {
    console.error(getLogMessage('Error setMap'), key, value, e);
    return null;
  }
};

export const getMap = async (key: LocalStorageKeys) => {
  console.info(getLogMessage('getMap'), key);

  try {
    const map = await storage.getMapAsync(key);
    return map;
  } catch (e) {
    console.error(getLogMessage('Error getMap'), key, e);
    return null;
  }
};

export const setBoolean = async (key: LocalStorageKeys, value: boolean) => {
  console.info(getLogMessage('setBoolean'), key, value);

  try {
    const result = await storage.setBoolAsync(key, value);
    console.info(getLogMessage('result'), result);
    return result;
  } catch (e) {
    console.error(getLogMessage('Error setBoolean'), key, value, e);
    return null;
  }
};

export const getBoolean = async (key: LocalStorageKeys) => {
  console.info(getLogMessage('getBoolean'), key);

  try {
    const bool = await storage.getBoolAsync(key);
    return bool;
  } catch (e) {
    console.error(getLogMessage('Error getBoolean'), key, e);
    return null;
  }
};

export const setInt = async (key: LocalStorageKeys, value: number) => {
  console.info(getLogMessage('setInt'), key, value);

  try {
    const result = await storage.setIntAsync(key, value);
    console.info(getLogMessage('result'), result);
    return result;
  } catch (e) {
    console.error(getLogMessage('Error setInt'), key, value, e);
    return null;
  }
};

export const getInt = async (key: LocalStorageKeys) => {
  console.info(getLogMessage('getInt'), key);

  try {
    const int = await storage.getIntAsync(key);
    return int;
  } catch (e) {
    console.error(getLogMessage('Error getInt'), key, e);
    return null;
  }
};

export const removeItem = (key: LocalStorageKeys) => {
  console.info(getLogMessage('removeItem'), key);
  return storage.removeItem(key);
};
