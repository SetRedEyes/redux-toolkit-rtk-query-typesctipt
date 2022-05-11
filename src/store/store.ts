import { configureStore } from '@reduxjs/toolkit'
import { postAPI } from '../services/post.service'
import userReducer from './reducers/users'

export const store = configureStore({
  reducer: { users: userReducer, [postAPI.reducerPath]: postAPI.reducer },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(postAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
