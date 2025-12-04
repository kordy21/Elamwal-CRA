import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import ad1 from "../../assets/images/ad1.webp";
import ad2 from "../../assets/images/ad2.webp";
import ad3 from "../../assets/images/ad3.webp";
import ad4 from "../../assets/images/ad4.webp";
import ad2_1 from "../../assets/images/ad2_1.webp";
import ad2_2 from "../../assets/images/ad2_2.webp";
import ad2_3 from "../../assets/images/ad2_3.webp";
import ad2_4 from "../../assets/images/ad2_4.webp";
import ad2_5 from "../../assets/images/ad2_5.webp";
import ad3_1 from "../../assets/images/ad3_1.webp";

const AdSliderWidget = ({ sliderId }) => {
  const sliderImages = {
    // 1: [ad1, ad2, ad3, ad4],
    // 2: [ad2_1, ad2_2, ad2_3, ad2_4],
    // 3: [ad3_1, ad2, ad3, ad4],
    1: [ad1, ad2, ad3],
    2: [ad4, ad2_1, ad2_2, ad2_5],
    3: [ad3_1, ad2_3, ad2_4],
  };

  const ads = sliderImages[sliderId] || [];

  return (
    <section id={`slider-${sliderId}`} className="relative w-full">
      <button
        className={`prev absolute z-10 top-[40%] lg:top-[47%] left-2 lg:left-2 drop-shadow-xl`}
      >
        <FontAwesomeIcon icon={faCaretLeft} className="w-10 h-10 text-white" />
      </button>
      <button
        className={`next absolute z-10 top-[40%] lg:top-[47%] right-2 lg:right-2 drop-shadow-xl`}
      >
        <FontAwesomeIcon icon={faCaretRight} className="w-10 h-10 text-white" />
      </button>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation={{
          nextEl: `#slider-${sliderId} .next`,
          prevEl: `#slider-${sliderId} .prev`,
        }}
        className="duration-300 rounded-md hover:shadow-xl"
      >
        {ads.map((ad, index) => (
          <SwiperSlide key={index}>
            <a href="/">

            <div className="flex items-center justify-center w-full h-[310px] rounded-md overflow-hidden cursor-pointer transition-shadow">
              <img
                src={ad}
                alt={`إعلان ${index + 1}`}
                className="object-cover w-full h-full rounded"
              />
            </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default AdSliderWidget;
