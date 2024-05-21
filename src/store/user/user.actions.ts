import { createAsyncThunk } from '@reduxjs/toolkit'
import { IUser } from '../../types/user.interfaces'

const fetchUserById = (userId: number): Promise<IUser> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: 1, name: 'Dmytro' })
    }, 1000)
  })

export const getUserById = createAsyncThunk<IUser, number>(
  'users/by-id',
  async (userId, thunkApi) => {
    try {
      const response = await fetchUserById(userId)
      return response
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  },
)
