import Image from 'next/image';

export const SlideItem = () => {
  return (
    <Image sizes='100vw' fill quality={100} className='w-full h-full object-cover object-center' src={'https://images.pexels.com/photos/2376994/pexels-photo-2376994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='image slide' />
  )
}
