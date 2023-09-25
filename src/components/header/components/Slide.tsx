"use client"

import { CSSProperties } from 'react';
import { Pagination, A11y, Autoplay, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { slideItems } from '@/data/headerSlideData';
import { SlideItem } from './SlideItem';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/virtual';

export const Slide = () => {
  return (
    <Swiper
      loop
      spaceBetween={0}
      className='px-24'
      modules={[Pagination, A11y, Virtual, Autoplay]}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
      pagination={{
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className} border border-spacing-1 border-[#fff]"></span>`;
        }
      }}
      style={{
        height: '100vh',
        maxHeight: '640px',
        '--swiper-pagination-color': '#fff',
        '--swiper-pagination-bullet-size': '12px',
        '--swiper-pagination-bullet-inactive-color': '#ffffff38',
        '--swiper-pagination-bullet-inactive-opacity': 1
      } as CSSProperties}
    >
      {slideItems.map((slideContent, index) => (
        <SwiperSlide key={slideContent.id} virtualIndex={index}>
          <SlideItem {...slideContent} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
