import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import postReducer from './posts/postSlice'




export const store = configureStore({
  reducer: {
      count:counterReducer,
      post:postReducer
  },
})