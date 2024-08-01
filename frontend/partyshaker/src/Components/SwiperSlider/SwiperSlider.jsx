// import React, { useEffect, useState } from "react";
// import people from './data';
// import './ImageSlider.css'

// export const ImageSlider = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         const lastIndex = people.length - 1;
//         if (currentIndex < 0) {
//             setCurrentIndex(lastIndex);
//         }
//         if (currentIndex > lastIndex - 1 ) {
//             setCurrentIndex(0);
//         }
//     }, [currentIndex, people]);

//     // useEffect(() => {
//     //     const slider = setInterval(() => {
//     //         setCurrentIndex(prevState => prevState + 1);
//     //     }, 5000);
//     //     return () => {
//     //         clearInterval(slider);
//     //     };
//     // }, []);

//     return (
//         <section className="section">
//             <div className="section-center">
//                 {people.map((person, personIndex) => {
//                     const { id, image, title } = person;
//                     let position = 'nextSlide';

//                     if (personIndex === currentIndex) {
//                         position = 'activeSlide';
//                     }
//                     if (personIndex === currentIndex - 1 || (currentIndex === 0 && personIndex === people.length-1)) {
//                         position = 'lastSlide';
//                     }
//                     return (
//                         <div className={position} key={id}>
//                             <img src={image} alt={title} className="person-img" />
//                         </div>
//                     );
//                 })}
//             </div>
//             <div>
//                 <button className="prev" onClick={() => setCurrentIndex(prevState => prevState - 1)}>prev</button>
//                 <button className="next" onClick={() => setCurrentIndex(prevState => prevState + 1)}>next</button>
//             </div>
//         </section>
//     );
// };


import styles from './SwiperSlider.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

// interface SwiperSliderProps {
//     images: string[];
// }

export const SwiperSlider = ({ images }) => {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            pagination={{
                clickable: true,
                renderCustom: (swiper, current, total) => {
                    let paginationHTML = '';
                    for (let i = 1; i <= total; i++) {
                        if (i === current) {
                            paginationHTML += `<span class="${styles.swiperPaginationLineActive}"></span>`;
                        } else {
                            paginationHTML += `<span class="${styles.swiperPaginationLine}"></span>`;
                        }
                    }
                    return paginationHTML;
                }
            }}
            loop={true}
            className={styles.swiperContainer}>
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <img src={image} alt="Cocktail" className={styles.cocktailCardImage} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
