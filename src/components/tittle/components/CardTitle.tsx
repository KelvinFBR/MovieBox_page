"use client"

import { Titles } from "@/store/model/interfaces"
import Image from "next/image"

export const CardTitle = ({ titleText, primaryImage, titleType, releaseYear }: Titles) => {
  return (
    <div className="w-full max-w-[200px]">
      <div className="w-full h-72 rounded-xl overflow-hidden relative">
        {primaryImage?.url
          ? <Image width={100} height={100} quality={100} className='w-full h-full object-cover' src={primaryImage?.url} alt='IMDb' />
          : <Image width={100} height={100} quality={100} className='w-full h-full object-cover' src={'https://hackmd.io/_uploads/HyA7l2Ryp.jpg'} alt='image not found' />}
        <span className="absolute top-0 ml-3 mt-3 px-2 font-medium uppercase rounded-xl text-[11px] text-gray_900  bg-gray_des">{titleType.text}</span>
      </div>
      <span className="text-gray_500 text-xs">USA, {releaseYear?.year || "not date"}</span>
      <h3 className="font-bold mt-2">{titleText.text}</h3>
    </div>
  )
}
