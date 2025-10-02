"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

import Image from "next/image";

const HeroCarousal = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel"
    >
      <SwiperSlide>
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[394px] py-10 sm:py-15 lg:py-24.5 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-semibold text-heading-3 sm:text-heading-1 text-orange-600">
                🔥
              </span>
              <span className="block text-orange-800 text-sm sm:text-custom-1 sm:leading-[24px] font-medium">
                Fresh
                <br />
                Daily
              </span>
            </div>

            <h1 className="font-semibold text-orange-900 text-xl sm:text-3xl mb-3">
              <a href="#">Authentic Indian Flavors in Melbourne</a>
            </h1>

            <p className="text-orange-700">
            Experience the vibrant taste of India at Southern Cross Food Court. Traditional recipes, fresh ingredients, made with love.
            </p>

            <a
              href="#menu"
              className="inline-flex font-medium text-orange-100 text-custom-sm rounded-md bg-orange-600 py-3 px-9 ease-out duration-200 hover:bg-orange-700 mt-10"
            >
              Explore Menu
            </a>
          </div>

          <div>
            <Image
              src="/images/hero/hero-01.png"
              alt="headphone"
              width={351}
              height={358}
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[394px] py-10 sm:py-15 lg:py-26 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-semibold text-heading-3 sm:text-heading-1 text-red-600">
                🌶️
              </span>
              <span className="block text-red-800 text-sm sm:text-custom-1 sm:leading-[24px] font-medium">
                Spice
                <br />
                Master
              </span>
            </div>

            <h1 className="font-semibold text-red-900 text-xl sm:text-3xl mb-3">
              <a href="#">Taste the Real India Every Day</a>
            </h1>

            <p className="text-red-700">
              From mild to fiery hot - discover flavors that transport you straight to the heart of India. Made fresh every morning.
            </p>

            <a
              href="#menu"
              className="inline-flex font-medium text-red-100 text-custom-sm rounded-md bg-red-600 py-3 px-9 ease-out duration-200 hover:bg-red-700 mt-10"
            >
              Order Today
            </a>
          </div>

          <div>
            <Image
              src="/images/hero/hero-01.png"
              alt="headphone"
              width={351}
              height={358}
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousal;
