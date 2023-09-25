"use client"

import { setYear } from "@/store/slices/filterSlice";
import { useDispatch } from "react-redux";
import { YearDropDownProps } from "../model/interfaces";

export const YearDropDown = ({ initYear, lastYear = new Date().getFullYear() }: YearDropDownProps) => {
  const years = Array.from({ length: lastYear - initYear + 1 }, (_, index) => initYear + index);
  const dispatch = useDispatch()

  return (
    <ul className="w-full max-h-40 scroolbar absolute left-0 top-12 z-10 flex flex-col gap-2  border border-gray_900 rounded-md overflow-hidden bg-primary_white scroll-smooth overflow-y-scroll overflow-x-hidden">
      {years.map((year) => (
        <li
          key={year}
          onClick={() => dispatch(setYear(year))}
          className="py-1 px-3 cursor-pointer hover:bg-rose_700 hover:text-primary_white">{year}</li>
      ))}
    </ul>
  )
}
