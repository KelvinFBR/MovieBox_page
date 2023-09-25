'use client'

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


type SortType = 'ascendente' | 'descendente'

interface FilterState {
  search: string,
  sort: SortType | 'ordenar',
  year?: number | string,
  titleType: string
  titleTypes: string[]
}

const initialState: FilterState = {
  search: '',
  year: 'Año',
  sort: 'ordenar',
  titleType: 'Titulo',
  titleTypes: [],
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<SortType>) => {
      state.sort = action.payload
    },
    setYear: (state, action: PayloadAction<number | string>) => {
      state.year = action.payload
    },
    setTitleType: (state, action: PayloadAction<string>) => {
      state.titleType = action.payload
    },
    setTitleTypes: (state, action: PayloadAction<string[]>) => {
      state.titleTypes = action.payload
    },
    reset: () => {
      return initialState
    },
  },
})

export const { setSort, setTitleType, setYear, reset, setTitleTypes } = filterSlice.actions

export default filterSlice.reducer