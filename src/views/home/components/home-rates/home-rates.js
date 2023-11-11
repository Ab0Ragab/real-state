import Rate from "../../../../components/rate/rate";
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function HomeRates() {
  const rates = [{}, {}, {}, {}];
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
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={breakpoints}>
        {rates.map((item, i) => (
          <SwiperSlide key={i}>
            <Rate />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default HomeRates;
