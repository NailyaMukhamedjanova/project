import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Slider.module.css';
import { Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import 'swiper/swiper-bundle.css';
import { Children, cloneElement, useEffect, useState } from 'react';

export const Slider = ({ slides }) => {
  

    return (
        <>
        <div className={styles['swiper']}> 
            <Swiper
        
                modules={[Scrollbar, A11y]}
       
                slidesPerView={1}
                loop = {true}

                scrollbar={{ draggable: true }} >

                {slides.map((slide) =>
                (<SwiperSlide key={slide.image}  >
                <img className={styles['frame-img']} src={slide.image} alt={slide.title} />
                </SwiperSlide>))}
            </Swiper>
            </div>
        </>)




}