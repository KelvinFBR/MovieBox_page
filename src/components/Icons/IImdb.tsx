import Image from "next/image"

import IMDb from '@/png/imdb.png'

const IImdb = () => (
  <Image width={100} height={100} quality={100} className='w-10 h-4 object-cover' src={IMDb} alt='IMDb' />
)
export default IImdb 
