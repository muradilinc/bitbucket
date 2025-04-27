import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../app/axiosApi';
import { User } from './types/auth';
import { toast } from 'react-toastify';

export const getAccessToken = createAsyncThunk<{profile: User; token: string}, string>(
  'user/token',
  async (code) => {
    try {
      const result = await axiosApi.get(`/auth/github?code=${code}`);
      localStorage.setItem('token', result.data.token);
      return result.data;
    } catch (error) {
      toast.error("Error token!")
    }
  });