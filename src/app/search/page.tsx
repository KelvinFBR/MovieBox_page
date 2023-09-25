'use client'

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from 'next/navigation'
import { useDispatch } from "react-redux";
import { setTitles } from "@/store/slices/titlesSlice";
import { TitlesState } from "@/store/model/interfaces";
import { SearchFilter, TitlesContainer } from "@/components"
import { MovieService } from "@/services";

const movieService = new MovieService();

const SearchPage = () => {
  const searchParams = useSearchParams();
  const dispatch = useDispatch()
  const [isLoadingTitles, setIsLoadingTitles] = useState<boolean>(true);

  const search = searchParams.get('q')
  const sort = searchParams.get('sort')
  const titleType = searchParams.get('titleType')
  const year = searchParams.get('year')

  const params = useMemo(() => ({
    year,
    sort,
    titleType,
  }), [year, sort, titleType,])

  useEffect(() => {
    async function fetchTitleTypes() {
      if (!search) return
      setIsLoadingTitles(true)
      try {
        await movieService.searchByFilter<TitlesState>(`titles/search/title/${search}`, params)
          .then((data) => {
            dispatch(setTitles(data))
          })
          .finally(() => setIsLoadingTitles(false))
      } catch (error) {
        console.error('Error fetching titles:', error);
      }
    }

    fetchTitleTypes();
  }, [dispatch, search, params]);

  return (
    <>
      <SearchFilter />
      <TitlesContainer isLoadingTitles={isLoadingTitles} />
    </>
  )
}

export default SearchPage