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
  entries: number
  next: number | null
  page: number
  results: Titles[]
}