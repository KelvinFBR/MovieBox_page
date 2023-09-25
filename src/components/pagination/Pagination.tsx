'use client'

import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { MovieService } from "@/services";
import { TitlesState } from "@/store/model/interfaces";
import { setCurrentPageUrl, setLoading, setTitles } from "@/store/slices/titlesSlice";
import { INextPage, INextPageDisable, IPrevPage, IPrevPageDisable } from "..";

const movieService = new MovieService();

const Pagination = () => {
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

  const buttonsPagination = [
    { id: 1, page: +currentPage - 2 },
    { id: 2, page: +currentPage - 1 },
    { id: 3, page: currentPage },
  ]

  return (
    <div className="w-full h-full flex justify-center mt-20">
      <div className=" flex gap-x-4 justify-center items-center rounded-xl h-9 overflow-hidden font-medium text-gray_500]">
        <button disabled={currentPage === 1 || currentPage === '1'} className="cursor-pointer block p-2 h-full" onClick={() => handdlePrevPage()}>
          {
            currentPage === 1 || currentPage === '1'
              ? <IPrevPageDisable />
              : <IPrevPage />
          }
        </button>
        {buttonsPagination.map((button) => (
          (+button.page > 0 ? (
            <span
              key={button.id}
              onClick={() => handdlePage(+button.page)}
              className={`flex justify-center items-center cursor-pointer rounded-md w-8 h-8 text-center ${currentPage === button.page ? "bg-rose_700 text-primary_white" : "hover:bg-[#be123d44] hover:text-primary_white"}`}>{button.page}</span>
          ) : null)
        ))}
        {nextPage
          ? (<>
            <span onClick={() => handdlePage(+currentPage + 1)} className={`flex justify-center items-center cursor-pointer rounded-md w-8 h-8 text-center hover:bg-[#be123d44] hover:text-primary_white`}>{+currentPage + 1}</span>
            <span className="cursor-pointer flex justify-center items-center  h-full">...</span>
          </>)
          : null}
        <button disabled={!nextPage} className="cursor-pointer block p-2 h-full" onClick={() => handdleNextPage()} >
          {
            !nextPage
              ? <INextPageDisable />
              : <INextPage />
          }
        </button>
      </div>
    </div >
  )
}

export default Pagination