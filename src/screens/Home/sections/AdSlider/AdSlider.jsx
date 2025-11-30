import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Ad1 from "../../../../assets/images/advertisement_1.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const AdSliderNav = ({ noMargin }) => {
  const ads = [Ad1, Ad1, Ad1];

  return (
    <section
      className={`container relative  ${
        noMargin ? "" : "lg:my-12  my-8"
      }  px-0  hover:shadow-md  duration-300`}
    >
      {/* Custom Buttons */}
      <button className="custom-prev absolute z-10 top-[40%] lg:top-[35%] left-6 lg:left-12  drop-shadow-xl">
        <FontAwesomeIcon
          icon={faCaretLeft}
          className="w-6 h-6 text-white md:h-12 md:w-12"
        />
      </button>
      <button className="custom-next absolute z-10 top-[40%] lg:top-[35%] right-6 lg:right-12  drop-shadow-xl ">
        <FontAwesomeIcon
          icon={faCaretRight}
          className="w-6 h-6 text-white md:h-12 md:w-12"
        />
      </button>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        allowTouchMove={true}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
      >
        {ads.map((ad, index) => (
          <SwiperSlide key={index}>
            <a href="/">

            <div className="flex items-center justify-center w-full p-3 transition-shadow bg-white border border-gray-100 rounded-md cursor-pointer md:p-8 hover:shadow-md">
              <img
                src={ad}
                alt={`إعلان ${index + 1}`}
                className="object-cover w-full h-20 md:h-auto rounded"
              />
            </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default AdSliderNav;
