'use client'

import { configureStore } from '@reduxjs/toolkit'
import { filterReducer, titlesReducer } from './slices'

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    titles: titlesReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;