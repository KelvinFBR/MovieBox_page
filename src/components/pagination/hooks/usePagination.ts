import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPageUrl, setLoading, setTitles } from "@/store/slices/titlesSlice";
import { TitlesState } from "@/store/model/interfaces";
import { MovieService } from "@/services";

const movieService = new MovieService();

export const usePagination = () => {
  const { page: currentPage, next: nextPage, currentPageUrl } = useSelector((state: RootState) => state.titles);
  const dispatch = useDispatch()

  const handdlePage = async (page: number) => {
    if (+currentPage === page) return

    if (!currentPageUrl) return
    let newPage = '';
    const regex = /page=\d+/;

    if (regex.test(currentPageUrl)) {
      newPage = currentPageUrl.replace(regex, `page=${page}`);
    } else {
      const interrogativeExist = currentPageUrl.includes('?')
      newPage = `${currentPageUrl}${!interrogativeExist ? '?' : ''}&page=${page}`;
    }

    if (!newPage) return
    dispatch(setLoading(true))
    try {
      await movieService.searchByFilter<TitlesState>(newPage)
        .then((data) => {
          dispatch(setTitles(data))
          dispatch(setCurrentPageUrl(newPage))
        })
        .finally(() => dispatch(setLoading(false)))
    } catch (error) {
      console.error('Error fetching titles:', error);
    }
  }

  const handdlePrevPage = async () => {
    if (!currentPageUrl) return
    let prevPage = '';
    const regex = /page=\d+/;

    if (regex.test(currentPageUrl)) {
      prevPage = currentPageUrl.replace(regex, `page=${+currentPage - 1}`);
    } else {
      prevPage = `${currentPageUrl}&page=${+currentPage - 1}`;
    }

    if (!prevPage) return
    dispatch(setLoading(true))
    try {
      await movieService.searchByFilter<TitlesState>(prevPage)
        .then((data) => {
          dispatch(setTitles(data))
          dispatch(setCurrentPageUrl(prevPage))
        })
        .finally(() => dispatch(setLoading(false)))
    } catch (error) {
      console.error('Error fetching titles:', error);
    }
  }

  const handdleNextPage = async () => {
    if (!nextPage) return;
    dispatch(setLoading(true))
    try {
      await movieService.searchByFilter<TitlesState>(nextPage)
        .then((data) => {
          dispatch(setTitles(data))
          dispatch(setCurrentPageUrl(nextPage))
        })
        .finally(() => dispatch(setLoading(false)))
    } catch (error) {
      console.error('Error fetching titles:', error);
    }
  }

  return {
    // Methods
    handdlePage,
    handdlePrevPage,
    handdleNextPage,
  }
}
