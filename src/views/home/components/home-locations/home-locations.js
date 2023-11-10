import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ReactSVG } from "react-svg";

import "./home-locations.scss";

function HomeLocations() {
  const swiperRef = useRef(null);
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
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };
  const locations = [
    { image: "/images/image1.png", title: "California" },
    { image: "/images/image2.png", title: "New York" },
    { image: "/images/image3.png", title: "San Francisco" },
    { image: "/images/image4.png", title: "Los Angeles" },
    { image: "/images/image2.png", title: "Miami" },
  ];
  return (
    <div className="locations pt-5 pb-5">
      <div className="container">
        <div className="row pt-4 gx-4">
          <div className="col-md-12 mb-4">
            <div className="d-md-flex d-block justify-content-between align-items-center">
              <div>
                <h2>Browse Locations</h2>
                <p>
                  Take a deep dive and browse homes for sale, original
                  neighborhood photos,
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <Swiper
              ref={swiperRef}
              modules={[Pagination]}
              spaceBetween={50}
              slidesPerView={3}
              pagination={{
                clickable: true,
                el: ".swiper-custom-pagination",
              }}
              breakpoints={breakpoints}>
              {locations.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="locations-card">
                    <div className="locations-card-container">
                      <img
                        src={item.image}
                        alt="house"
                        loading="lazy"
                        className="img-fluid"
                      />
                      <div className="locations-card-overlay">
                        <div className="locations-card-overlay-text d-flex">
                          {item.title}
                          <span>
                            <ReactSVG src="icons/right-arrow.svg" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="d-flex align-items-center mt-4">
              <div className="swiper-custom-pagination" />
              <button
                type="button"
                className="slider-btn"
                onClick={() => swiperRef.current.swiper.slidePrev()}>
                <ReactSVG src="icons/arrow-left.svg" />
              </button>
              <button
                type="button"
                className="slider-btn"
                onClick={() => swiperRef.current.swiper.slideNext()}>
                <ReactSVG src="icons/right-arrow.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLocations;
