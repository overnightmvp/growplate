import React from "react";
import Image from "next/image";
import Link from "next/link";

const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-15 bg-gradient-to-r from-orange-50 to-red-50">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* Main Lunch Combo Banner */}
        <div className="relative z-1 overflow-hidden rounded-lg bg-gradient-to-r from-orange-400 to-red-500 py-12.5 lg:py-17.5 xl:py-22.5 px-4 sm:px-7.5 lg:px-14 xl:px-19 text-white">
          <div className="max-w-[550px] w-full">
            <span className="block font-medium text-xl mb-3 text-orange-100">
              🍛 LUNCH SPECIAL - Limited Time
            </span>

            <h2 className="font-bold text-xl lg:text-heading-4 xl:text-heading-3 mb-5">
              COMBO MEAL $15.90
            </h2>

            <p className="text-orange-100 mb-2">
              Any curry + basmati rice + fresh naan bread
            </p>
            <p className="text-sm text-orange-200 mb-5">
              Available Monday to Friday, 11:00am - 3:00pm only<br/>
              🕐 Ready in 8-12 minutes | 📍 Stall 23, Southern Cross Food Court
            </p>

            <Link
              href="#menu"
              className="inline-flex font-medium text-custom-sm text-orange-600 bg-white py-[11px] px-9.5 rounded-md ease-out duration-200 hover:bg-orange-50 shadow-lg"
            >
              Order Now
            </Link>
          </div>

          {/* Decorative curry bowl image placeholder */}
          <div className="absolute bottom-0 right-4 lg:right-26 -z-1 opacity-20">
            <div className="w-[274px] h-[350px] bg-white/10 rounded-full flex items-center justify-center">
              <span className="text-8xl">🍛</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
