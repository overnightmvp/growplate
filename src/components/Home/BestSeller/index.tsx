"use client";
import React from "react";
import SingleItem from "./SingleItem";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import indianMenuData from "@/data/indianMenuData";

const BestSeller = () => {
  // Get popular menu items (highest rated)
  const popularItems = indianMenuData
    .sort((a, b) => b.reviews - a.reviews)
    .slice(0, 8);

  return (
    <section className="overflow-hidden py-15">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* Section title */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <span className="flex items-center gap-2.5 font-medium text-orange-800 mb-1.5">
              <Image
                src="/images/icons/icon-07.svg"
                alt="icon"
                width={17}
                height={17}
              />
              🍛 Chef&apos;s Specials
            </span>
            <h2 className="font-semibold text-xl xl:text-heading-5 text-orange-900">
              Most Loved Indian Dishes
            </h2>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex items-center gap-2">
            <button className="swiper-button-prev-custom w-10 h-10 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center hover:bg-orange-600 hover:text-orange-100 hover:border-orange-600 transition-all">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="swiper-button-next-custom w-10 h-10 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center hover:bg-orange-600 hover:text-orange-100 hover:border-orange-600 transition-all">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Indian Menu Items Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            autoplay={false} // Disabled auto-slide as requested
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 }, // 5 items visible on larger screens
            }}
            className="menu-items-slider"
          >
            {popularItems.map((item, key) => (
              <SwiperSlide key={key} className="!w-[75vw] sm:!w-auto"> {/* 3/4vw on mobile */}
                <SingleItem item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-center mt-12.5">
          <Link
            href="/menu"
            className="inline-flex font-medium text-custom-sm py-3 px-7 sm:px-12.5 rounded-md border-gray-3 border bg-gray-1 text-dark ease-out duration-200 hover:bg-dark hover:text-white hover:border-transparent"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
