import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "./HeroSlider.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HeroSlider = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="swiper-wrapper  ">
            <div className="container">
              <h1>
                Get your <span> education</span> today
              </h1>
              <div className="row">
                <div className="col-4">
                  <div className="swiper-card">
                    <h2>Online Courses</h2>
                    <span>View more</span>
                  </div>
                </div>
                <div className="col-4">
                  <div className="swiper-card">
                    <h2>Online Courses</h2>
                    <span>View more</span>
                  </div>
                </div>
                <div className="col-4">
                  <div className="swiper-card">
                    <h2>Online Courses</h2>
                    <span>View more</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-wrapper swiper-w ">
            <div className="container">
              <h1>
                Get your <span> education</span> today
              </h1>
              <div className="row">
                <div className="col-4">
                  <div className="swiper-card">
                    <h2>Online Courses</h2>
                    <span>View more</span>
                  </div>
                </div>
                <div className="col-4">
                  <div className="swiper-card">
                    <h2>Online Courses</h2>
                    <span>View more</span>
                  </div>
                </div>
                <div className="col-4">
                  <div className="swiper-card">
                    <h2>Online Courses</h2>
                    <span>View more</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
