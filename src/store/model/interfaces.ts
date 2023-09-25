export interface Titles {
  _id: string
  originalTitleText: {
    text: string
  }
  primaryImage: {
    url: string
  }
  releaseYear: {
    year: number
    endYear: number | null
  }
  titleType: {
    text: string
  }
  titleText: {
    text: string
  }
}

export interface TitlesState {
  isLoadingTitles: boolean
  entries: number
  next: string | null
  page: number | string
  currentPageUrl: string
  results: Titles[]
}

export type SortType = 'ascendente' | 'descendente'

export interface FilterState {
  search: string,
  sort: SortType | 'ordenar',
  year?: number | string,
  titleType: string
  titleTypes: string[]
}
