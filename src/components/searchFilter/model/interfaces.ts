export type TypeDropDown = "category" | "year" | "Sort"

export interface YearDropDownProps {
  initYear: number
  lastYear?: number
}

export interface CategoryDropDownProps {
  isloading: boolean;
  titleTypes: string[];
}
