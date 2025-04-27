import { User } from './types/auth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAccessToken } from './AuthThunk';
import { RootState } from '../../app/store/store';

interface UserState {
  user: User | null;
  authLoading: boolean;
  token: string | null;
}

const initialState: UserState = {
  user: null,
  authLoading: false,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutState: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAccessToken.pending, (state) => {
      state.authLoading = true;
    });
    builder.addCase(getAccessToken.fulfilled, (state, {payload: user}: PayloadAction<{
      profile: User,
      token: string
    }>) => {
      state.authLoading = false;
      state.user = user.profile;
      state.token = user.token;
    });
    builder.addCase(getAccessToken.rejected, (state) => {
      state.authLoading = false;
    });
  }
});

export const { logoutState } = authSlice.actions;

export const authReducer = authSlice.reducer;
export const selectUser = (state: RootState) => state.users.user;
export const selectToken = (state: RootState) => state.users.token;
export const selectUserLoading = (state: RootState) => state.users.authLoading;