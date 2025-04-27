import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../app/axiosApi';
import { User } from '../Auth/types/auth';
import { Repos } from './types/repos';
import axios from 'axios';
import { toast } from 'react-toastify';

export const getRepositories = createAsyncThunk<Repos[], {user: User, token: string}>(
  'repos/get',
  async ({user, token}) => {
    try {
      const result = await axiosApi.post('/github/repos', {
        login: user.login,
        token: token,
      });
      return result.data.result;
    } catch (error) {
      toast.error("Error repositories!");
    }
  }
);

export const getRepositoriesByLogin = createAsyncThunk<Repos[], string>(
  'repos/getOther',
  async (login) => {
    try {
      const result = await axios.get(`https://api.github.com/users/${login}/repos`);
      return result.data;
    } catch (error) {
      toast.error(`Error ${login} repositories!`);
    }
  }
);