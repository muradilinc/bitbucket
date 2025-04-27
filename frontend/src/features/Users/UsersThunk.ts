import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Users } from './types/users';
import { toast } from 'react-toastify';

export const searchUsers = createAsyncThunk<Users, string>(
  'search/get',
  async (login) => {
    try {
      const result = await axios.get(`https://api.github.com/search/users?q=${login}`);
      return result.data;
    } catch (error) {
      toast.error('Error search!');
    }
  }
);