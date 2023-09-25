'use client'

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Titles, TitlesState } from '../model/interfaces'

type SortType = 'ascendente' | 'descendente'

const initialState: TitlesState = {
  entries: 0,
  next: null,
  page: 1,
  results: []
}

export const titlesSlice = createSlice({
  name: 'titles',
  initialState,
  reducers: {
    setTitles: (state, action: PayloadAction<TitlesState>) => {
      return action.payload
    },
  },
})

export const { setTitles } = titlesSlice.actions

export default titlesSlice.reducer