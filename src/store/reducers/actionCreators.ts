import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IUser } from '../../models/IUser'
import { checkErrorMessageType } from '../../utils/checkErrorMessageType'

export const loadUsersList = createAsyncThunk(
  'user/usersRequested',
  async (_, thunkApi) => {
    try {
      const response = await axios.get<IUser[]>(
        'https://jsonplaceholder.typicode.com/users'
      )
      return response.data
    } catch (e) {
      return thunkApi.rejectWithValue(checkErrorMessageType(e))
    }
  }
)
