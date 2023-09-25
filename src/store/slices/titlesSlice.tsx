'use client'

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Titles, TitlesState } from '../model/interfaces'

type SortType = 'ascendente' | 'descendente'

const initialState: TitlesState = {
  isLoadingTitles: true,
  entries: 0,
  next: null,
  page: 1,
  currentPageUrl: '',
  results: []
}

export const titlesSlice = createSlice({
  name: 'titles',
  initialState,
  reducers: {
    setTitles: (state, action: PayloadAction<TitlesState>) => {
      return action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoadingTitles = action.payload
    },
    setCurrentPageUrl: (state, action: PayloadAction<string>) => {
      state.currentPageUrl = action.payload
    },
  },
})

export const { setTitles, setCurrentPageUrl, setLoading } = titlesSlice.actions

export default titlesSlice.reducer