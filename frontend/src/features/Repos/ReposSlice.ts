import { Repos } from './types/repos';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getRepositories, getRepositoriesByLogin } from './ReposThunk';
import { RootState } from '../../app/store/store';

interface ReposState {
  repos: Repos[];
  reposOther: Repos[];
  reposLoading: boolean;
  reposOtherLoading: boolean;
}

const initialState: ReposState = {
  repos: [],
  reposOther: [],
  reposLoading: false,
  reposOtherLoading: false,
};

const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRepositories.pending, (state) => {
      state.reposLoading = true;
    });
    builder.addCase(getRepositories.fulfilled, (state, {payload: repos}: PayloadAction<Repos[]>) => {
      state.reposLoading = false;
      state.repos = repos;
    });
    builder.addCase(getRepositories.rejected, (state) => {
      state.reposLoading = false;
    });
    builder.addCase(getRepositoriesByLogin.pending, (state) => {
      state.reposOtherLoading = true;
    });
    builder.addCase(getRepositoriesByLogin.fulfilled, (state, {payload: repos}: PayloadAction<Repos[]>) => {
      state.reposOtherLoading = false;
      state.reposOther = repos;
    });
    builder.addCase(getRepositoriesByLogin.rejected, (state) => {
      state.reposOtherLoading = false;
    });
  }
});

export const reposReducer = reposSlice.reducer;
export const selectRepos = (state: RootState) => state.repos.repos;
export const selectReposOther = (state: RootState) => state.repos.reposOther;
export const selectReposLoading = (state: RootState) => state.repos.reposLoading;
export const selectReposOtherLoading = (state: RootState) => state.repos.reposOtherLoading;
