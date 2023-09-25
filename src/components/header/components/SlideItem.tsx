import Image from 'next/image';
import { SlideContent } from '../model';
import { IPlay, ItomatoRate, IImdb } from '@/components/Icons';


export const SlideItem = ({ name, description, rate, ratepercent, image_url }: SlideContent) => {

  return (
    <div>
      {image_url
        ? <Image priority sizes='100vw' fill quality={100} className='w-full h-full object-cover object-top' src={image_url} alt='image slide' />
        : <Image priority sizes='100vw' fill quality={100} className='w-full h-full object-cover object-center' src={''} alt='image slide' />
      }

      <section className='flex flex-col justify-start items-start gap-y-4 pl-10 md:pl-24 w-full max-w-md absolute bottom-36 text-primary_white'>
        <h2 className='font-bold text-4xl'>{name}</h2>
        <section className='flex'>
          <div className='flex items-center mr-10'>
            <IImdb />
            <span className='ml-3'>
              {rate} / 100
            </span>
          </div>
          <span className='flex items-center mr-10'>
            <ItomatoRate />
            <span className='ml-3'>
              {ratepercent}%
            </span>
          </span>
        </section>
        <p>{description}</p>
        <button className='flex items-center uppercase font-medium bg-rose_700 px-4 py-2 rounded-md'>
          <IPlay />
          <p className='ml-2'>
            Watch Trailer
          </p>
        </button>
      </section>
    </div>
  )
}
