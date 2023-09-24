import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SlideItem } from './SlideItem';

const slides = [1, 2, 3]
 export const Slide = () => {
  return (
    <Swiper
      style={{ height: '100vh', maxHeight: '480px' }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {slides.map((slideContent, index) => (
        <SwiperSlide key={slideContent} virtualIndex={index}>
          <SlideItem />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
