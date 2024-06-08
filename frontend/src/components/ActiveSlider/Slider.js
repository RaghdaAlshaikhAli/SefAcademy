import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./style.scss";
import Img6 from "../../assets/images/A Great Place to Grow 1.jpg";
import Img5 from "../../assets/images/A Great Place to Grow 2.jpg";
import Img4 from "../../assets/images/A Great Place to Grow 3.jpg";
import Img3 from "../../assets/images/A Great Place to Grow 4.jpg";
import Img2 from "../../assets/images/A Great Place to Grow 5.jpg";
import Img1 from "../../assets/images/A Great Place to Grow 6.jpg";

const Slider = () => {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6];

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
      className="SwiperSlide"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="contact_card">
            <img className="img_contact" src={image} alt={`Slide ${index}`} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
