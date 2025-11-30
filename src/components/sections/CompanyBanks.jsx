import React, { useRef } from "react";
import { Card, CardContent } from "../ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MainTitle from "../ui/MainTitle";
import HDFC from "../../assets/images/HDFC.webp";
import Masa from "../../assets/images/Masa.webp";
import TMG from "../../assets/images/TMG.webp";
import LeftArrow from "../../assets/icons/LeftArrow.svg";
import RightArrow from "../../assets/icons/RightArrow.svg";
import { useNavigate } from "react-router-dom";

export const CompanyBanks = ({ data }) => {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const navigate = useNavigate();

  // const stories = [
  //   {
  //     image: HDFC,
  //     title: "HDFC ",
  //     TitleJob: "مجموعة اتش دي اف ",
  //   },
  //   {
  //     image: Masa,
  //     title: "Masa ",
  //     TitleJob: "مجموعة مسا  ",
  //   },
  //   {
  //     image: TMG,
  //     title: "TMG ",
  //     TitleJob: " مجموعة طلعت مصطفى   ",
  //   },
  //   {
  //     image: HDFC,
  //     title: "HDFC ",
  //     TitleJob: "مجموعة اتش دي اف ",
  //   },
  //   {
  //     image: Masa,
  //     title: "Masa ",
  //     TitleJob: "مجموعة مسا  ",
  //   },
  //   {
  //     image: TMG,
  //     title: "TMG ",
  //     TitleJob: " مجموعة طلعت مصطفى   ",
  //   },
  //   {
  //     image: HDFC,
  //     title: "HDFC ",
  //     TitleJob: "مجموعة اتش دي اف ",
  //   },
  //   {
  //     image: Masa,
  //     title: "Masa ",
  //     TitleJob: "مجموعة مسا  ",
  //   },
  //   {
  //     image: TMG,
  //     title: "TMG ",
  //     TitleJob: " مجموعة طلعت مصطفى   ",
  //   },
  //   {
  //     image: HDFC,
  //     title: "HDFC ",
  //     TitleJob: "مجموعة اتش دي اف ",
  //   },
  // ];
  return (
    <section
      className="w-full md:pb-12 py-8 bg-[#1E1E1E] store  z-30 relative"
      style={{
        // backgroundImage: "url('/path-to-your-image.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "25px 25px",
      }}
    >
      <style>
        {`
          .stories-swiper .swiper-pagination {
            display: flex !important;
            gap: 8px;
            position: static !important;
            justify-content: center;
            margin-top: 24px;
          }
          
          .stories-swiper .swiper-pagination .swiper-pagination-bullet {
            width: 48px;
            height: 8px;
            background: rgba(255, 255, 255, 0.4);
            opacity: 1;
            margin: 0;
            border-radius: 25px;
            transition: all 0.3s ease;
            cursor: pointer;
          }
          
          .stories-swiper .swiper-pagination .swiper-pagination-bullet:hover {
            background: rgba(255, 255, 255, 0.7);
            transform: scale(1.1);
          }
          
          .stories-swiper .swiper-pagination .swiper-pagination-bullet-active {
            background: #00a651;
            transform: scale(1.1);
          }
        `}
      </style>

      <div className="container">
        <div className="flex flex-col gap-4 md:gap-6">
          <MainTitle title=" شركات و بنوك" bgDark={true} noMore={true} />
          <div className="relative">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={2}
              loop={true}
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
              className="stories-swiper"
            >
              {data?.map((story, index) => (
                <SwiperSlide key={index}>
                  <Card className="flex flex-col items-start gap-4 bg-transparent border-none shadow-none cursor-pointer group">
                    <CardContent
                      className="w-full p-0"
                      onClick={() =>
                        navigate(
                          `/${story?.Category?.slug}/${story?.subCategory?.slug}/${story?.slug}`
                        )
                      }
                    >
                      <img
                        className="w-full h-[250px] md:h-[250px] rounded object-cover hover:scale-105 transition-transform duration-300"
                        alt="Story image"
                        src={story?.profile_image}
                      />
                      <p className="mt-4 text-sm font-medium leading-relaxed text-center text-white duration-300 md:text-base group-hover:text-primaryText line-clamp-2">
                        {story?.title_AR}
                      </p>
                      <p className="mt-4 text-sm font-medium leading-relaxed text-center text-white duration-300 md:text-base group-hover:text-primaryText line-clamp-2">
                        {story?.short_bio_AR}
                      </p>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom Navigation Buttons */}
            <button
              ref={prevRef}
              className="absolute left-[-50px]  z-10 items-center justify-center hidden w-10 h-10 transition-all duration-300 -translate-y-1/2 rounded-full cursor-pointer top-[150px] hover:scale-110 xl:flex"
              aria-label="Previous slide"
            >
              <img src={LeftArrow} alt="prev" className="w-5 " />
            </button>
            <button
              ref={nextRef}
              className="absolute right-[-50px] z-10 items-center justify-center hidden w-10 h-10 transition-all duration-300 -translate-y-1/2 rounded-full cursor-pointer  top-[150px] hover:scale-110 xl:flex"
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
