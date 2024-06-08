import React from "react";
import "./style.scss";
import img1 from "../../../../assets/images/Eng . Shimaa.jpg";
import img2 from "../../../../assets/images/Eng.Ahmed Mohamed.jpg";
import img3 from "../../../../assets/images/Eng.Amira.jpg";
import img4 from "../../../../assets/images/Eng.Eman.jpg";
import img5 from "../../../../assets/images/Eng.Marwan Ibrahim.jpg";
import img6 from "../../../../assets/images/Islam Mohamed.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const TeamSection = () => {
  const teamInfo = [
    { image: img1, title: "Eng.Shimaa", description: "Technical Support" },
    {
      image: img2,
      title: "Eng.Ahmed Mohamed",
      description: "Technical Support",
    },
    { image: img6, title: "Islam Mohamed", description: "Owner" },
    {
      image: img5,
      title: "Eng.Marwan Ibrahim",
      description: "Technical Support",
    },
    { image: img4, title: "Eng.Eman", description: "Technical Support" },
    { image: img3, title: "Eng.Amira", description: "Technical Support" },
  ];

  return (
    <div className="grid-container4">
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
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
          1200: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        className="team_swiper"
      >
        {teamInfo.map((info, index) => (
          <SwiperSlide key={index} className="swipper">
            <div className="team_grid-item">
              <div className="div_img">
                <div
                  style={{ backgroundImage: `url(${info.image})` }}
                  className="circle_img"
                >
                  <div className="overlay_team"></div>
                </div>
              </div>
              <div>
                <h2>{info.title}</h2>
                <p className="aboutus_pp">{info.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamSection;
