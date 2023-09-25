"use client"

import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { YearDropDown } from "./components/YearDropDown"
import { SortDropDown } from "./components/SortDropDown"
import { CategoryDropDown } from "./components/CategoryDropDown"
import { MovieService } from '@/services';
import { RootState } from '@/store';
import { reset, setTitleTypes, } from '@/store/slices/filterSlice';
import { IArrow, IArrowSort, ICategory, ISearch } from ".."

import { useDropDown } from './hooks/useDropDown';
import { useForm } from './hooks/useForm';

const movieService = new MovieService();


const SearchFilter = () => {
  const [isloadingCategory, setIsloadingCategory] = useState<boolean>(true);
  const searchRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch()
  const { haddleChange, haddleSubmit } = useForm(searchRef)
  const { isCategoryDropdownOpen, isSortDropdownOpen, isYearDropdownOpen, dropDownToggle } = useDropDown()
  const { year, sort, titleType, titleTypes, search } = useSelector((state: RootState) => state.filter);

  useEffect(() => {
    async function fetchTitleTypes() {
      if (titleTypes.length > 1) return
      try {
        (await movieService.getTitleTypes<{ results: string[] }>('titles/utils/titleTypes').then(data => {
          dispatch(setTitleTypes(data.results))
        }).finally(() => setIsloadingCategory(false)));
      } catch (error) {
        console.error('Error fetching title types:', error);
      }
    }

    fetchTitleTypes();
  }, [dispatch, titleTypes.length]);

  return (
    <section className="w-full px-7 flex justify-center items-center my-9">
      <div className="w-full max-w-xl">
        <form className="w-full mb-8 relative" onSubmit={(e) => haddleSubmit(e)}>
          <input
            ref={searchRef}
            onChange={(e) => haddleChange(e)}
            name='search'
            value={search}
            type="text"
            placeholder="What do you want to watch?"
            className="placeholder-gray_900 border border-gray_800 w-full py-3 px-2 rounded-md outline-none" />
          <button type='submit' className="absolute top-0 right-3 h-full flex items-center justify-end cursor-pointer">
            <ISearch />
          </button>
        </form>

        <section className="flex flex-wrap justify-between gap-y-4">
          <div
            onClick={() => dropDownToggle("year")}
            className="flex py-2 px-3 border border-gray_900 rounded-md relative">
            <p className="uppercase mr-3 font-medium">{year}</p>
            <IArrow />
            {isYearDropdownOpen ? (<YearDropDown initYear={2000} />) : null}
          </div>
          <div
            onClick={() => dropDownToggle("Sort")}
            className="flex py-2 px-3 border border-gray_900 rounded-md relative">
            <p className="uppercase mr-3 font-medium">{sort}</p>
            <IArrowSort />
            {isSortDropdownOpen ? (<SortDropDown />) : null}
          </div>
          <div
            onClick={() => dropDownToggle("category")}
            className="flex py-2 px-3 border border-gray_900 rounded-md relative">
            <p className="uppercase mr-3 font-medium">{titleType}</p>
            <ICategory />
            {isCategoryDropdownOpen ? (<CategoryDropDown isloading={isloadingCategory} titleTypes={titleTypes} />) : null}
          </div>
          <button
            onClick={() => dispatch(reset())}
            className="uppercase font-medium bg-rose_700 px-4 py-2 rounded-md text-primary_white">
            Limpiar
          </button>
        </section>
      </div>
    </section>
  )
}

export default SearchFilter