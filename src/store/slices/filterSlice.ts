'use client'

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { FilterState, SortType } from '../model/interfaces'



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
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.search = action.payload
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

export const { setSort, setTitleType, setYear, reset, setTitleTypes, setSearchValue } = filterSlice.actions

export default filterSlice.reducer