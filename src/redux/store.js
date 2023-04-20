import { configureStore } from '@reduxjs/toolkit'
import starshipSlice from './starshipSlice'

export const store = configureStore({
  reducer: {
    starships : starshipSlice,
  },
})

