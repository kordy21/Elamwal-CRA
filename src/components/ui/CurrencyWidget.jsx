import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import MainTitle from "./MainTitle";

const CurrencyWidget = ({ rates }) => {
  if (!rates || rates.length === 0) return null;

  return (
    <div className="flex flex-col w-full gap-4 ">
      <MainTitle title=" أسعار العملات" Sidbar={true} />
      <div className="w-full overflow-hidden duration-300 bg-white rounded-lg hover:shadow-md">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            el: ".currency-pagination", 
            bulletClass:
              "swiper-pagination-bullet w-2 h-2 rounded-full bg-green-600 opacity-50 mx-1",
            bulletActiveClass: "opacity-100 scale-125 bg-green-600",
          }}
          loop={true}
          className="w-full pb-4"
        >
          {rates.map((rate, index) => (
            <SwiperSlide key={index}>
              <div className="w-full p-4 ">
                <h3 className="mb-2 text-lg font-medium text-gray-800 text-start">
                  {rate.label}
                </h3>
                <hr className="mb-3 border-black" />

                <div className="flex items-center justify-between px-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">السعر</span>
                    <span className="text-base font-bold text-gray-800">
                      {rate.price} {rate.currency}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">التغير</span>
                    <div
                      className={`flex items-center gap-1 text-sm font-medium ${
                        rate.change >= 0 ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      {rate.change >= 0 ? (
                        <ArrowUpRight size={14} />
                      ) : (
                        <ArrowDownRight size={14} />
                      )}
                      {rate.change}
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

export default CurrencyWidget;
