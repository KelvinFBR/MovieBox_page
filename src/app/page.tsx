'use client'

import { useEffect, useState } from "react";
import { SearchFilter, TitlesContainer } from "@/components";
import { setTitles } from "@/store/slices/titlesSlice";
import { useDispatch} from "react-redux";
import { MovieService } from "@/services";
import { TitlesState } from "@/store/model/interfaces";

const movieService = new MovieService();

export default function Home() {
  const [isLoadingTitles, setIsLoadingTitles] = useState<boolean>(true);
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchTitleTypes() {
      setIsLoadingTitles(true)
      try {
        await movieService.searchByFilter<TitlesState>(`titles/random`, {
          list: 'most_pop_movies'
        })
          .then((data) => {
            dispatch(setTitles(data))
          })
          .finally(() => setIsLoadingTitles(false))
      } catch (error) {
        console.error('Error fetching titles:', error);
      }
    }

    fetchTitleTypes();
  }, [dispatch]);

  return (
    <main>
      <SearchFilter />
      <TitlesContainer isLoadingTitles={isLoadingTitles} />
    </main>
  )
}
