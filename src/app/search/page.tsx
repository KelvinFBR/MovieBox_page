'use client'

import { useEffect, useMemo } from "react";
import { useSearchParams } from 'next/navigation'
import { useDispatch } from "react-redux";
import { setCurrentPageUrl, setLoading, setTitles } from "@/store/slices/titlesSlice";
import { TitlesState } from "@/store/model/interfaces";
import { SearchFilter, TitlesContainer } from "@/components"
import { MovieService } from "@/services";

const movieService = new MovieService();

const SearchPage = () => {
  const searchParams = useSearchParams();
  const dispatch = useDispatch()

  const search = searchParams.get('q')
  const sort = searchParams.get('sort')
  const titleType = searchParams.get('titleType')
  const year = searchParams.get('year')

  const params = useMemo(() => ({
    startYear: year,
    sort,
    titleType,
  }), [year, sort, titleType,])

  useEffect(() => {
    async function fetchTitleTypes() {
      if (!search) return
      dispatch(setLoading(true))
      try {
        await movieService.searchByFilter<TitlesState>(`titles/search/title/${search}`, params)
          .then((data) => {
            dispatch(setTitles(data))
            const { sort, titleType, startYear } = params
            const currentPath = `titles/search/title/${search}${sort || titleType || startYear ? '?' : ''}${sort ? `&sort=${sort}` : ''}${titleType ? `&titleType=${titleType}` : ''}${startYear ? `&startYear=${startYear}` : ''}`
            dispatch(setCurrentPageUrl(currentPath))
          })
          .finally(() => dispatch(setLoading(false)))
      } catch (error) {
        console.error('Error fetching titles:', error);
      }
    }

    fetchTitleTypes();
  }, [dispatch, search, params]);

  return (
    <>
      <SearchFilter />
      <TitlesContainer />
    </>
  )
}

export default SearchPage