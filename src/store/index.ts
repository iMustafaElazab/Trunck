import {configureStore} from '@reduxjs/toolkit';
import {default as Config} from 'react-native-config';
import {default as logger} from 'redux-logger';
import dialogsReducer from './dialogs';
import networkStateReducer from './networkState';
import userReducer from './user';

export const store = configureStore({
  reducer: {
    user: userReducer,
    dialogs: dialogsReducer,
    networkState: networkStateReducer,
  },
  middleware: getDefaultMiddleware =>
    Config.ENABLE_LOCAL_LOG === 'true'
      ? getDefaultMiddleware().concat(
          logger as unknown as ReturnType<typeof getDefaultMiddleware>,
        )
      : getDefaultMiddleware(),
});

// Types exports.
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// Hooks export.
export * from './hooks';

// Reducers exports.
export * from './dialogs';
export * from './networkState';
export * from './user';
