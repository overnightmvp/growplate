"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const CounDown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [mounted, setMounted] = useState(false);

  const deadline = "December, 31, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    setMounted(true);
    
    if (mounted) {
      getTime();
      const interval = setInterval(getTime, 1000);
      return () => clearInterval(interval);
    }
  }, [mounted]);

  return (
    <section className="overflow-hidden py-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="relative overflow-hidden z-1 rounded-lg bg-gradient-to-r from-amber-100 to-orange-100 p-4 sm:p-7.5 lg:p-10 xl:p-15">
          <div className="max-w-[422px] w-full">
            <span className="block font-medium text-custom-1 text-orange-600 mb-2.5">
              🪔 Limited Time Festival Special!
            </span>

            <h2 className="font-bold text-orange-900 text-xl lg:text-heading-4 xl:text-heading-3 mb-3">
              Diwali Feast Menu Available Now
            </h2>

            <p className="text-orange-800">Traditional festival sweets, premium thali, and celebratory dishes crafted with authentic recipes.</p>

            {/* <!-- Countdown timer --> */}
            <div
              className="flex flex-wrap gap-6 mt-6"
              x-data="timer()"
              x-init="countdown()"
            >
              {/* <!-- timer day --> */}
              <div>
                <span
                  className="min-w-[64px] h-14.5 font-semibold text-xl lg:text-3xl text-orange-900 rounded-lg flex items-center justify-center bg-orange-50 shadow-2 px-4 mb-2"
                  x-text="days"
                >
                  {" "}
                  {mounted ? (days < 10 ? "0" + days : days) : "00"}{" "}
                </span>
                <span className="block text-custom-sm text-orange-800 text-center">
                  Days
                </span>
              </div>

              {/* <!-- timer hours --> */}
              <div>
                <span
                  className="min-w-[64px] h-14.5 font-semibold text-xl lg:text-3xl text-orange-900 rounded-lg flex items-center justify-center bg-orange-50 shadow-2 px-4 mb-2"
                  x-text="hours"
                >
                  {" "}
                  {mounted ? (hours < 10 ? "0" + hours : hours) : "00"}{" "}
                </span>
                <span className="block text-custom-sm text-orange-800 text-center">
                  Hours
                </span>
              </div>

              {/* <!-- timer minutes --> */}
              <div>
                <span
                  className="min-w-[64px] h-14.5 font-semibold text-xl lg:text-3xl text-orange-900 rounded-lg flex items-center justify-center bg-orange-50 shadow-2 px-4 mb-2"
                  x-text="minutes"
                >
                  {mounted ? (minutes < 10 ? "0" + minutes : minutes) : "00"}{" "}
                </span>
                <span className="block text-custom-sm text-orange-800 text-center">
                  Minutes
                </span>
              </div>

              {/* <!-- timer seconds --> */}
              <div>
                <span
                  className="min-w-[64px] h-14.5 font-semibold text-xl lg:text-3xl text-orange-900 rounded-lg flex items-center justify-center bg-orange-50 shadow-2 px-4 mb-2"
                  x-text="seconds"
                >
                  {mounted ? (seconds < 10 ? "0" + seconds : seconds) : "00"}{" "}
                </span>
                <span className="block text-custom-sm text-orange-800 text-center">
                  Seconds
                </span>
              </div>
            </div>
            {/* <!-- Countdown timer ends --> */}

            <a
              href="#festival-menu"
              className="inline-flex font-medium text-custom-sm text-orange-100 bg-orange-600 py-3 px-9.5 rounded-md ease-out duration-200 hover:bg-orange-700 mt-7.5"
            >
              Order Festival Special
            </a>
          </div>

          {/* <!-- bg shapes --> */}
          <Image
            src="/images/countdown/countdown-bg.png"
            alt="bg shapes"
            className="hidden sm:block absolute right-0 bottom-0 -z-1"
            width={737}
            height={482}
          />
          <Image
            src="/images/countdown/countdown-01.png"
            alt="product"
            className="hidden lg:block absolute right-4 xl:right-33 bottom-4 xl:bottom-10 -z-1"
            width={411}
            height={376}
          />
        </div>
      </div>
    </section>
  );
};

export default CounDown;
