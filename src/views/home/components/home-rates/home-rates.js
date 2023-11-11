import React, { useRef } from "react";
import { ReactSVG } from "react-svg";
import Rate from "../../../../components/rate/rate";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./home-rates.scss";

function HomeRates() {
  const swiperRef = useRef(null);
  const rates = [{ rate: 4 }, { rate: 5 }, { rate: 3 }, { rate: 2 }];
  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };
  return (
    <>
      <div className="rates">
        <Swiper
          ref={swiperRef}
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          pagination={{
            clickable: true,
            el: ".pagination-bullets",
          }}
          breakpoints={breakpoints}>
          {rates.map((item, i) => (
            <SwiperSlide key={i}>
              <Rate rate={item.rate} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="rates-slider-btn d-flex justify-content-between">
          <button
            type="button"
            className="slider-btn slider-btn-white"
            onClick={() => swiperRef.current.swiper.slidePrev()}>
            <ReactSVG src="icons/arrow-left.svg" />
          </button>
          <button
            type="button"
            className="slider-btn slider-btn-white"
            onClick={() => swiperRef.current.swiper.slideNext()}>
            <ReactSVG src="icons/right-arrow.svg" />
          </button>
        </div>
      </div>
      <div className="pagination-bullets text-center mt-5"></div>
    </>
  );
}

export default HomeRates;
