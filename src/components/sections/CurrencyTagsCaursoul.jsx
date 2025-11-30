import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const CurrencyTagsCaursoul = ({ items }) => {
  return (
    <section className="w-full overflow-hidden md:hidden">
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={12}
        loop={true}
        allowTouchMove={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        className="currency-tags-swiper"
      >
        {items.map((item, index) => {
          const labelColor = index % 2 === 0 ? "#A3D67A" : "#2A3EB1";

          return (
            <SwiperSlide key={index} className="w-auto">
              <div className="flex items-center justify-between gap-4 px-4 py-2 bg-gray-100 rounded-full">
                <span style={{ color: labelColor }} className="font-medium">
                  {item.label}
                </span>
                <span
                  className={`flex justify-between items-center gap-1 text-sm font-medium ${
                    item.change >= 0 ? "text-green-600" : "text-red-500"
                  }`}
                >
                  %{item.percentage}
                  {item.change >= 0 ? (
                    <ArrowUpRight size={14} />
                  ) : (
                    <ArrowDownRight size={14} />
                  )}
                </span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default CurrencyTagsCaursoul;
