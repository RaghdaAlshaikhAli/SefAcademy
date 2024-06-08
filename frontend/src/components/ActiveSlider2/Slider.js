
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './style.scss';
import Img4 from '../../assets/images/banner6.png'
import Img3 from '../../assets/images/banner7.png'
import Img2 from '../../assets/images/banner8.png'
import Img1 from '../../assets/images/banner5.png'

const Slider = () => {
  const images = [
    Img1, Img2, Img3, Img4
  ];

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
      freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="about_card">
            <img className="img_card" src={image} alt={`Slide ${index}`} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
