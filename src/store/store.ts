import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { userSlice } from './user/user.slice'
import { api } from './api/api'

const reducers = combineReducers({
  user: userSlice.reducer,
  [api.reducerPath]: api.reducer,
})

export const store = configureStore({
  reducer: reducers,
  middleware: (
    getDefaultMiddleware, // include rtk query
  ) => getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
