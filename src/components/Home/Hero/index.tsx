import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroFeature from "./HeroFeature";
import Image from "next/image";

const Hero = () => {
  return (
    <section 
      className="overflow-hidden pb-10 lg:pb-12.5 xl:pb-15 pt-57.5 sm:pt-45 lg:pt-30 xl:pt-51.5 bg-gradient-to-br from-orange-50 to-primary-50"
      role="banner"
      aria-label="Featured Indian dishes and special offers"
    >
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-wrap gap-5">
          <div className="xl:max-w-[757px] w-full">
            <div className="relative z-1 rounded-[10px] bg-white overflow-hidden shadow-lg">
              {/* <!-- bg shapes --> */}
              <Image
                src="/images/hero/hero-bg.png"
                alt="Decorative background pattern"
                className="absolute right-0 bottom-0 -z-1 opacity-10"
                width={534}
                height={520}
                priority
              />

              <HeroCarousel />
            </div>
          </div>

          <div className="xl:max-w-[393px] w-full">
            <div className="flex flex-col sm:flex-row xl:flex-col gap-5">
              <div className="w-full relative rounded-[10px] bg-white p-4 sm:p-7.5">
                <div className="flex items-center gap-4 lg:gap-8">
                  <div className="flex-1">
                    <h2 className="font-semibold text-dark text-lg lg:text-xl mb-4 leading-tight">
                      <a href="#menu" className="hover:text-orange transition-colors"> Butter Chicken & Basmati Rice </a>
                    </h2>

                    <div>
                      <p className="font-medium text-dark-4 text-custom-sm mb-1.5">
                        chef's special combo
                      </p>
                      <span className="flex items-center gap-3">
                        <span className="font-medium text-lg lg:text-heading-5 text-red">
                          $18.90
                        </span>
                        <span className="font-medium text-lg text-dark-4 line-through">
                          $24.90
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl lg:text-3xl">🍛</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full relative rounded-[10px] bg-white p-4 sm:p-7.5">
                <div className="flex items-center gap-4 lg:gap-8">
                  <div className="flex-1">
                    <h2 className="font-semibold text-dark text-lg lg:text-xl mb-4 leading-tight">
                      <a href="#menu" className="hover:text-orange transition-colors"> Tandoori Mixed Platter </a>
                    </h2>

                    <div>
                      <p className="font-medium text-dark-4 text-custom-sm mb-1.5">
                        fresh from tandoor
                      </p>
                      <span className="flex items-center gap-3">
                        <span className="font-medium text-lg lg:text-heading-5 text-red">
                          $22.90
                        </span>
                        <span className="font-medium text-lg text-dark-4 line-through">
                          $28.90
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl lg:text-3xl">🥘</span>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Hero features --> */}
      <HeroFeature />
    </section>
  );
};

export default Hero;
