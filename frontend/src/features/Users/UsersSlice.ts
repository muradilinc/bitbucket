import { User } from '../Auth/types/auth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { searchUsers } from './UsersThunk';
import { Users } from './types/users';
import { RootState } from '../../app/store/store';

interface UsersState {
  searchLoading: boolean;
  users: User[];
  total: number | null;
}

const initialState: UsersState = {
  users: [],
  total: null,
  searchLoading: false,
};

const usersSlice = createSlice({
  name: 'searchUser',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(searchUsers.pending, (state) => {
      state.searchLoading = true;
    });
    builder.addCase(searchUsers.fulfilled, (state, {payload: users}: PayloadAction<Users>) => {
      state.searchLoading = false;
      state.users = users.items;
      state.total = users.total_count;
    });
    builder.addCase(searchUsers.rejected, (state) => {
      state.searchLoading = false;
    });
  }
});

export const usersReducer = usersSlice.reducer;
export const selectSearchUsers = (state: RootState) => state.searchUsers.users;
export const selectSearchUsersLoading = (state: RootState) => state.searchUsers.searchLoading;
export const selectSearchUsersTotal = (state: RootState) => state.searchUsers.total;
