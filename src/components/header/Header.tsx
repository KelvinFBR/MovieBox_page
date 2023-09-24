"use client"

import { Pagination, A11y, Autoplay, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SlideItem } from './SlideItem';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/virtual';
import { CSSProperties } from 'react';

const slides = [1, 2, 3]

export const Header = () => {
  return (
    <header>
      <Swiper
        loop
        spaceBetween={0}
        modules={[Pagination, A11y, Virtual, Autoplay]}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
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
          maxHeight: '540px',
          '--swiper-pagination-color': '#fff',
          '--swiper-pagination-bullet-size': '12px',
          '--swiper-pagination-bullet-inactive-color': '#ffffff38',
          '--swiper-pagination-bullet-inactive-opacity': 1
        } as CSSProperties}
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            <SlideItem />
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  )
}