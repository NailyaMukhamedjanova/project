import styles from './ProductCart.module.css';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SwiperSlider } from '../SwiperSlider/SwiperSlider';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css'
// import { Slider } from '../Slider/Slider';
// import { Scrollbar, A11y } from 'swiper/modules'
// import 'swiper/css';
// import 'swiper/css/scrollbar';
// import 'swiper/css/a11y';
// import 'swiper/swiper-bundle.css';
// // import slides from './mock.json'
// import Flickity from 'react-flickity-component'
// // import  from './flickity.css'




function ProductCart() {
  
    const images = [
    "./cartImg1.png",
        "./cartImg2.png",
        "./cartImg3.png",
    ]
    

    return (
     
        
  <div>   
            <div className={styles['frame']} >
                 
                <button className={styles['frame-button']}> <img src="./icons/iconBtn.svg" alt="" /></button>
          


       <SwiperSlider /> 


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


            </div></div>
      
        
                 
            
   
    )
}

export default ProductCart;