import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import MainTitle from "./MainTitle";

const GoldWidget = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="flex flex-col gap-4 ">
      <MainTitle title="أسعار الذهب" Sidbar={true} />
      <div className="w-full bg-white rounded-lg hover:shadow-md duration-300 overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            el: ".currency-pagination", // custom container
            bulletClass:
              "swiper-pagination-bullet w-2 h-2 rounded-full bg-green-600 opacity-50 mx-1",
            bulletActiveClass: "opacity-100 scale-125 bg-green-600",
          }}
          loop={true}
          className="w-full pb-4"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full p-4 rounded-lg ">
                <h3 className="mb-2 text-lg font-medium text-gray-800 text-start">
                  {item.label}
                </h3>
                <hr className="mb-3 border-black" />

                <div className="flex items-center justify-between px-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">السعر</span>
                    <span className="text-base font-bold text-gray-800">
                      {item.price} {item.currency}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">التغير</span>
                    <div
                      className={`flex items-center gap-1 text-sm font-medium ${
                        item.change >= 0 ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      {item.change >= 0 ? (
                        <ArrowUpRight size={14} />
                      ) : (
                        <ArrowDownRight size={14} />
                      )}
                      {item.change}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="flex justify-center currency-pagination" />
        </Swiper>
      </div>
    </div>
  );
};

export default GoldWidget;
