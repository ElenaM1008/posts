import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './slices/postsSlices'
import authReducer from './slices/authSlices'

export const store = configureStore({
  reducer: {
	posts: postsReducer,
	auth: authReducer,
  },
})