import styles from './ProductCart.module.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { Slider } from '../Slider/Slider';
import { Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import 'swiper/swiper-bundle.css';

import slides from './mock.json'


function ProductCart({slide, ...props}) {
  
    
    

    return (
     
        
  
            
            <div className={styles['frame']} >
                <button className={styles['frame-button']}> <img src="./icons/iconBtn.svg" alt="" /></button>
                
    

            <Swiper 
                className={styles['swiper']}
                modules={[Scrollbar, A11y]}
                slidesPerView={1}
                loop={true}
                scrollbar={{ draggable: true }} >
                {slides.map((slide) =>
                (<SwiperSlide key={slide.image}  >
                    <img className={styles['frame-img']} src={slide.image} alt={slide.title} />
                </SwiperSlide>))}
            </Swiper>


                <div className={styles['bottom']}>
                    <div className={styles['bottom-frame']}>
                        <h3 className={styles['bottom-title']} > Лонг-Айленд</h3>
                        <p className={styles['bottom-text']}> Сладкий </p>
                        <div className={styles['bottom-icons']} >
                            <div className={styles['bottom-icon']} >
                                <img src="./icons/fortress/iconNonAlc.svg" alt="" />
                                <img src="./icons/format/iconShort.svg" alt="" />
                                <img src="./icons/complexity/iconEasy.svg" alt="" />
                            </div>
                            <div className={styles['bottom-reiting']}>
                                <span>4.2</span>
                                <img width='12px' height='12px' src="./icons/iconStar.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        
                 
            
   
    )
}

export default ProductCart;