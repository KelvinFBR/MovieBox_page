'use client'


import { Titles } from "@/store/model/interfaces";
import { CardTitle } from "..";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

interface TitlesProps {
  isLoadingTitles: boolean,
}

export const TitlesContainer = ({ isLoadingTitles }: TitlesProps) => {
  const { results: titles } = useSelector((state: RootState) => state.titles);

  if (isLoadingTitles) {
    return (
      <p>Loading...</p>
    )
  }

  return (
    <section className="my-20">
      {titles.length === 0 ? (<h2 className="text-center text-lg font-medium">Titles not exist</h2>) : null}

      <div className="flex flex-wrap justify-center gap-x-16 gap-y-20 px-4">
        {titles.map(title => (
          <CardTitle key={title._id} {...title} />
        ))}
      </div>
    </section>
  )
}
