import {createSlice} from '@reduxjs/toolkit';
import type {NetworkStateState} from './networkState.types';
import type {PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  isInternetAvailable: true,
  isConnectionExpensive: false,
} as NetworkStateState;

export const networkStateSlice = createSlice({
  name: 'networkState',
  initialState,
  reducers: {
    setIsInternetAvailable(state, action: PayloadAction<boolean>) {
      state.isInternetAvailable = action.payload;
    },
    setIsConnectionExpensive(state, action: PayloadAction<boolean>) {
      state.isConnectionExpensive = action.payload;
    },
    removeIsConnectionExpensive(state) {
      state.isConnectionExpensive = undefined;
    },
  },
});

export const {
  setIsInternetAvailable,
  setIsConnectionExpensive,
  removeIsConnectionExpensive,
} = networkStateSlice.actions;

export default networkStateSlice.reducer;
