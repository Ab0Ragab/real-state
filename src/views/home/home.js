import HomeHeader from "./components/home-header/home-header";
import HomeLocations from "./components/home-locations/home-locations";
import HomeRates from "./components/home-rates/home-rates";
import Filter from "../../components/filter/filter";
import Card from "../../components/card/card";
import Search from "../../components/search/search";
import Image from "../../components/image/image";
import SecondaryCardCard from "../../components/secondary-card/secondary-card";
import { ReactSVG } from "react-svg";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "./home.scss";

function Home() {
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
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };
  const helpItems = [
    {
      icon: "icons/home.svg",
      title: "Buy a home",
      describtion:
        "With over 1 million+ homes for sale available on the website, Trulia can match you with a house.",
    },
    {
      icon: "icons/department.svg",
      title: "Rent a home",
      describtion:
        "With over 1 million+ homes for sale available on the website, Trulia can match you with a house.",
    },
    {
      icon: "icons/bubby.svg",
      title: "Buddy search",
      describtion:
        "With over 1 million+ homes for sale available on the website, Trulia can match you with a house.",
    },
    {
      icon: "icons/house.svg",
      title: "Commercial",
      describtion:
        "With over 1 million+ homes for sale available on the website, Trulia can match you with a house.",
    },
  ];
  const listings = [
    { image: "/images/house.png" },
    { image: "/images/home1.png" },
    { image: "/images/department.png" },
  ];
  const news = [
    { image: "/images/house2.png" },
    { image: "/images/home2.png" },
    { image: "/images/house3.png" },
    { image: "/images/house2.png" },
    { image: "/images/home2.png" },
    { image: "/images/house3.png" },
  ];

  return (
    <>
      <HomeHeader />
      <div className="help pt-5 pb-5">
        <div className="container">
          <div className="row gx-5">
            <div className="col-md-12 mb-4">
              <h2 className="help-title">See How We Can Help</h2>
              <p>Let’s find a home that’s perfect for you</p>
            </div>
            {helpItems.map((item, i) => (
              <div className="col-xl-3 col-lg-4 col-md-6" key={i}>
                <div className="help-card">
                  <div className="help-card-icon">
                    <ReactSVG src={item.icon} />
                  </div>
                  <div className="help-card-title">{item.title}</div>
                  <div className="help-card-describtion">
                    {item.describtion}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="list pt-5 pb-5">
        <div className="container">
          <div className="row gx-4">
            <div className="col-md-12 mb-4">
              <div className="d-md-flex d-block justify-content-between align-items-center">
                <div>
                  <h2>New Listings in Kurigram</h2>
                  <p>View All 379 New Listings</p>
                </div>
                <div>
                  <Filter />
                </div>
              </div>
            </div>
            {listings.map((item, i) => (
              <div className="col-xl-4 col-md-6 col-12" key={i}>
                <Card image={item.image} />
              </div>
            ))}
            <div className="col-12 d-flex justify-content-center mt-4">
              <button type="button" className="btn btn-lg btn-outline-primary">
                <span>More Properties</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <HomeLocations />
      <div className="homes pt-5 pb-5">
        <div className="container">
          <div className="row gx-4">
            <div className="col-md-12 mb-4">
              <div className="d-md-flex d-block justify-content-between align-items-center">
                <div>
                  <h2>Explore Your Homes</h2>
                  <p>
                    Take a deep dive and browse homes for sale, original
                    neighborhood photos,
                  </p>
                </div>
              </div>
            </div>
            {listings.map((item, i) => (
              <div className="col-xl-4 col-md-6 col-12" key={i}>
                <Card image={item.image} />
              </div>
            ))}
            <div className="col-12 d-flex justify-content-center mt-4">
              <button type="button" className="btn btn-lg btn-outline-primary">
                <span>More Properties</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="news pt-5 pb-5">
        <div className="container">
          <div className="row gx-5">
            <div className="col-md-12 mb-4">
              <h2 className="news-title">Latest Commercial Property News</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="col-md-12">
              <Swiper
                ref={swiperRef}
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={3}
                pagination={{
                  clickable: true,
                  el: ".pagination",
                }}
                breakpoints={breakpoints}>
                {news.map((item, i) => (
                  <SwiperSlide key={i}>
                    <SecondaryCardCard image={item.image} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="d-flex align-items-center mt-4">
                <div className="pagination" />
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
      <div className="pt-5 pb-5">
        <div className="container">
          <div className="row gx-5">
            <div className="col-md-5 col-12">
              <Image
                image="images/address.png"
                ratio={605 / 879}
                alt="address"
              />
            </div>
            <div className="col-md-6 col-12 pt-5">
              <h2>
                See What Local <span className="text-success">Agents</span>{" "}
                Think Your <span className="text-success">Home</span> is Worth
              </h2>
              <p className="mt-3 mb-4">
                See what local agents think your home is worth
              </p>
              <button type="button" className="btn btn-outline-success btn-lg">
                Agent Valuation
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="rates pt-5 pb-5">
        <div className="container">
          <div className="row">
            <h2 className="mt-2 mb-5">Clients Says</h2>
            <HomeRates />
          </div>
        </div>
      </div>
      <div className="newsletter pt-5 pb-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-xl-7 col-lg-10 col-12">
              <h2>Subscribe To Our Newsletter</h2>
              <p className="newsletter-desc mt-3 mb-4">
                Get update information about update and get latest news
              </p>
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-xl-6 col-lg-9 col-11">
              <Search
                icon="icons/mail.svg"
                placeholder="Enter your email address"
                text="Send Now"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
