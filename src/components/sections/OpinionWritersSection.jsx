  import React, { useRef } from "react";
  import { Button } from "../ui/button";
  import { Card, CardContent } from "../ui/card";
  import { Swiper, SwiperSlide } from "swiper/react";
  import { Navigation, Pagination, Autoplay } from "swiper/modules";
  import MainTitle from "../ui/MainTitle";
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import LeftArrow from "../../assets/icons/LeftArrow.svg";
  import RightArrow from "../../assets/icons/RightArrow.svg";
  import Opinion_1 from "../../assets/images/Opinion_1.webp";
  import Opinion_2 from "../../assets/images/Opinion_2.webp";
  import Opinion_3 from "../../assets/images/Opinion_3.webp";
  import Opinion_4 from "../../assets/images/Opinion_4.webp";
  import Opinion_5 from "../../assets/images/Opinion_5.webp";

  export const OpinionWritersSection = () => {
    const swiperRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const profileData = [
      {
        image: Opinion_1,
        name: "أ / شيرين أحمد",
      },
      {
        image: Opinion_2,
        name: "أ / غدير خالد",
      },
      {
        image: Opinion_3,
        name: "أ / عرفان صالح",
      },
      {
        image: Opinion_4,
        name: "أ / شيرين أحمد",
      },
      {
        image: Opinion_5,
        name: "أ / هدى خليفه",
      },
      {
        image: Opinion_3,
        name: "أ / أحمد محمد",
      },
      {
        image: Opinion_2,
        name: "أ / محمود حاحا",
      },
    ];

    return (
      <section className="w-full md:py-12 py-8 bg-[#1E1E1E] opinion z-30 relative">
        <style>
          {`
            .opinion-swiper .swiper-pagination {
              display: flex !important;
              gap: 8px;
              position: static !important;
              justify-content: center;
              margin-top: 24px;
            }
            
            .opinion-swiper .swiper-pagination .swiper-pagination-bullet {
              width: 48px;
              height: 8px;
              background: rgba(255, 255, 255, 0.4);
              opacity: 1;
              margin: 0;
              border-radius: 25px;
              transition: all 0.3s ease;
              cursor: pointer;
            }
            
            .opinion-swiper .swiper-pagination .swiper-pagination-bullet:hover {
              background: rgba(255, 255, 255, 0.7);
              transform: scale(1.1);
            }
            
            .opinion-swiper .swiper-pagination .swiper-pagination-bullet-active {
              background: #00a651;
              transform: scale(1.1);
            }
          `}
        </style>

        <div className="container">
          <div className="flex flex-col gap-4 md:gap-6">
            <MainTitle title="كتاب الرأي" bgDark={true} />
            <div className="relative">
              <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={2}
                loop={true}
                loopFillGroupWithBlank={false}
                speed={600}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }}
                pagination={{
                  clickable: true,
                  type: "bullets",
                  dynamicBullets: false,
                  renderBullet: function (index, className) {
                    return (
                      '<span class="' +
                      className +
                      '" data-index="' +
                      index +
                      '"></span>'
                    );
                  },
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                  1280: { slidesPerView: 5 },
                }}
                className="opinion-swiper"
              >
                {profileData.map((profile, index) => (
                  <SwiperSlide key={index}>
                    <Card className="flex flex-col items-start gap-4 bg-transparent border-none shadow-none cursor-pointer group">
                      <CardContent className="w-full p-0">
                        <img
                          className="w-full h-[250px] md:h-[357px] rounded object-cover hover:scale-105 transition-transform duration-300"
                          alt="Profile image"
                          src={profile.image}
                        />
                        <p className="mt-4 text-sm font-medium leading-relaxed text-white duration-300 md:text-base group-hover:text-primaryText line-clamp-2">
                          {profile.name}
                        </p>
                      </CardContent>
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <button
                ref={prevRef}
                className="absolute left-[-50px] z-10 items-center justify-center hidden w-10 h-10 transition-all duration-300 -translate-y-1/2 rounded-full cursor-pointer top-1/2 hover:scale-110 xl:flex"
                aria-label="Previous slide"
              >
                <img src={LeftArrow} alt="prev" className="w-5 " />
              </button>
              <button
                ref={nextRef}
                className="absolute right-[-50px] z-10 items-center justify-center hidden w-10 h-10 transition-all duration-300 -translate-y-1/2 rounded-full cursor-pointer top-1/2 hover:scale-110 xl:flex"
                aria-label="Next slide"
              >
                <img src={RightArrow} alt="next" className="w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
