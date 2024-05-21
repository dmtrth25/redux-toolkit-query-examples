import { createSlice } from '@reduxjs/toolkit'
import { getUserById } from './user.actions'
import { IStateInitial, IUser } from '../../types/user.interfaces'

const initialState: IStateInitial = {
  isLoading: false,
  error: '',
  user: {} as IUser,
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUserById.pending, state => {
        state.isLoading = true
      })
      .addCase(getUserById.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload
      })
      .addCase(getUserById.rejected, (state, action: any) => {
        state.isLoading = false
        state.error = action.payload.error
        state.user = {} as IUser
      })
  },
})
