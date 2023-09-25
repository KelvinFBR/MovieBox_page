'use client'

import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { INextPage, INextPageDisable, IPrevPage, IPrevPageDisable } from "..";
import { usePagination } from "./hooks/usePagination";


const Pagination = () => {
  const { page: currentPage, next: nextPage } = useSelector((state: RootState) => state.titles);
  const { handdleNextPage, handdlePage, handdlePrevPage } = usePagination()

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