import Image from "next/image"

import TomatoPercent from '@/png/tomato.png'

const ITomatoRate = () => (
  <Image width={100} height={100} quality={100} className='w-4 h-4' src={TomatoPercent} alt='IMDb' />
)
export default ITomatoRate 