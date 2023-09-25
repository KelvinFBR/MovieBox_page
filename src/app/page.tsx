'use client'

import { useEffect } from "react";
import { SearchFilter, TitlesContainer } from "@/components";
import { setCurrentPageUrl, setLoading, setTitles } from "@/store/slices/titlesSlice";
import { useDispatch} from "react-redux";
import { MovieService } from "@/services";
import { TitlesState } from "@/store/model/interfaces";

const movieService = new MovieService();

export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchTitleTypes() {
      dispatch(setLoading(true))
      try {
        await movieService.searchByFilter<TitlesState>(`titles`, {
          list: 'most_pop_movies'
        })
          .then((data) => {
            dispatch(setTitles(data))
            dispatch(setCurrentPageUrl('/titles'))
          })
          .finally(() => dispatch(setLoading(false)))
        
      } catch (error) {
        console.error('Error fetching titles:', error);
      }
    }

    fetchTitleTypes();
  }, [dispatch]);

  return (
    <main>
      <SearchFilter />
      <TitlesContainer />
    </main>
  )
}
