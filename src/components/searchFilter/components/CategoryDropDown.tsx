"use client"

import { setTitleType } from "@/store/slices/filterSlice";
import { useDispatch } from "react-redux";
import { CategoryDropDownProps } from "../model/interfaces";
import { Loader } from "@/components";

export const CategoryDropDown = ({ isloading, titleTypes }: CategoryDropDownProps) => {
  const dispatch = useDispatch()

  if (isloading) {
    <ul className="w-full max-h-40 scroolbar absolute left-0 top-12 z-10 flex flex-col gap-2  border border-gray_900 rounded-md overflow-hidden bg-primary_white scroll-smooth overflow-y-scroll overflow-x-hidden">
      <Loader />
    </ul>
  }

  return (
    <ul className="w-full max-h-40 scroolbar absolute left-0 top-12 z-10 flex flex-col gap-2  border border-gray_900 rounded-md overflow-hidden bg-primary_white scroll-smooth overflow-y-scroll overflow-x-hidden">
      {titleTypes.map((titleType) => (
        (titleType && <li
          key={titleType}
          onClick={() => dispatch(setTitleType(titleType))}
          className="py-2 px-3 cursor-pointer hover:bg-rose_700 hover:text-primary_white" > {titleType}</li>)
      ))}
    </ul>
  )
}
