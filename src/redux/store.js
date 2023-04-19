import { configureStore } from '@reduxjs/toolkit'
import starshipSlice from './starshipSlice.js'

export const store = configureStore({
  reducer: {
    starships : starshipSlice,
  },
})

