import { createSlice } from "@reduxjs/toolkit";
import { getUserById } from "./user.actions";

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    isLoading: false,
    error: '',
    user: {}
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUserById.pending, state => {
        state.isLoading = true
      })
      .addCase(getUserById.fulfilled, ((state, { payload }) => {
        state.isLoading = false
        state.user = payload
      }))
      .addCase(getUserById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload.error
        state.user = {}
      })
  }
})