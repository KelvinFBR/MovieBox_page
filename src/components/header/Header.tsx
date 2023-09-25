'use client'

import { ILogo } from '../Icons';
import { Slide } from './components/Slide';

export const Header = () => {
  return (
    <header className='relative'>
      <div className='absolute top-4 pl-10 md:pl-24 z-10 '>
        <ILogo />
      </div>
      <Slide />
    </header>
  )
}