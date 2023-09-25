"use client"

import { setSort } from "@/store/slices/filterSlice"
import { useDispatch } from "react-redux"

export const SortDropDown = () => {
  const dispatch = useDispatch()

  return (
    <ul className="w-full max-h-40 scroolbar absolute left-0 top-12 z-10 flex flex-col gap-2  border border-gray_900 rounded-md overflow-hidden bg-primary_white">
      <li
        onClick={() => dispatch(setSort("ascendente"))}
        className="py-2 px-3 cursor-pointer hover:bg-rose_700 hover:text-primary_white">ascendente</li>
      <li
        onClick={() => dispatch(setSort("descendente"))}
        className="py-2 px-3 cursor-pointer hover:bg-rose_700 hover:text-primary_white">descendente</li>
    </ul>
  )
}
