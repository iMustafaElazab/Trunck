import {createSlice} from '@reduxjs/toolkit';
import type {User} from '@src/core';
import type {UserState} from './user.types';
import type {PayloadAction} from '@reduxjs/toolkit';

const initialState = {user: undefined} as UserState;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    removeUser(state) {
      state.user = undefined;
    },
  },
});

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;
