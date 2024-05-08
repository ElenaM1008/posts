import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './slices/postsSlices'

export const store = configureStore({
  reducer: {
	posts: postsReducer,
  },
})