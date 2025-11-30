import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


import Ad1 from "../../assets/images/advertisement_1.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const AdSliderNav = () => {
  const ads = [Ad1, Ad1, Ad1];

  return (
    <section className="relative ">
      {/* Custom Buttons */}
      <button className="custom-prev-nav absolute z-10 top-[40%] lg:top-[35%] left-2 lg:left-4  drop-shadow-xl">
        <FontAwesomeIcon icon={faCaretLeft} className="w-8 h-8 text-white" />
      </button>
      <button className="custom-next-nav absolute z-10 top-[40%] lg:top-[35%] right-2 lg:right-4   drop-shadow-xl">
        <FontAwesomeIcon icon={faCaretRight} className="w-8 h-8 text-white" />
      </button>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        allowTouchMove={true}
        navigation={{ nextEl: ".custom-next-nav", prevEl: ".custom-prev-nav" }}
      >
        {ads.map((ad, index) => (
          <SwiperSlide key={index}>
            <a href="/">

            <div className="flex items-center justify-center w-full transition-shadow border border-gray-100 rounded-md cursor-pointer hover:shadow-md">
              <img
                src={ad}
                alt={`إعلان ${index + 1}`}
                className="object-cover w-full rounded"
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
