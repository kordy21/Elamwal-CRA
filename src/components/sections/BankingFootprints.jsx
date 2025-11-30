import React, { useRef } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MainTitle from "../../components/ui/MainTitle";
import hesham from "../../assets/images/hesham.jpg";
import alatraby from "../../assets/images/alatraby.webp";
import hussien from "../../assets/images/Hussein-Abaza-CIB.webp";
import LeftArrow from "../../assets/icons/LeftArrow.svg";
import RightArrow from "../../assets/icons/RightArrow.svg";
import { useNavigate } from "react-router-dom";

export const BankingFootprints = ({ data }) => {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const navigate = useNavigate();

  // console.log(data);
  // const stories = [
  //   {
  //     image: hesham,
  //     title: "هشام عكاشة",
  //     TitleJob: "الرئيس التنفيذي لبنك مصر",
  //   },
  //   {
  //     image: alatraby,
  //     title: "محمد الإتربي",
  //     TitleJob: "رئيس مجلس إدارة بنك مصر سابقًا",
  //   },
  //   {
  //     image: hussien,
  //     title: "حسين أباظة",
  //     TitleJob: "الرئيس التنفيذي للبنك cib منذ سبتمبر 2024",
  //   },
  //   {
  //     image: hesham,
  //     title: "هشام عكاشة",
  //     TitleJob: "الرئيس التنفيذي لبنك مصر",
  //   },
  //   {
  //     image: alatraby,
  //     title: "محمد الإتربي",
  //     TitleJob: "رئيس مجلس إدارة بنك مصر سابقًا",
  //   },
  //   {
  //     image: hussien,
  //     title: "حسين أباظة",
  //     TitleJob: "الرئيس التنفيذي للبنك cib منذ سبتمبر 2024",
  //   },
  // ];
  // console.log(data);
  return (
    <section className="relative z-30 w-full py-6 duration-300 bg-white rounded-lg hover:shadow-md">
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
          height: 6px;
          background: #d1d5db !important; 
          opacity: 1;
          margin: 0;
          border-radius: 25px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .stories-swiper .swiper-pagination .swiper-pagination-bullet-active {
          background: #00a651 !important; 
          transform: scale(1.05);
        }
        .stories-swiper .swiper-pagination .swiper-pagination-bullet:hover {
          background: #00c76b !important;
        }
      `}
      </style>

      <div className="container">
        <div className="flex flex-col gap-6 md:gap-6 ">
          <MainTitle title="بصمات مصرفية" bgDark={false} />
          <div className="relative">
            <Swiper
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
                640: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 2 },
                1280: { slidesPerView: 3 },
              }}
              className="stories-swiper"
            >
              {data.map((story, index) => (
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
                        className="w-full h-[250px] md:h-[357px] rounded object-cover hover:scale-105 transition-transform duration-300"
                        alt={story?.title_AR}
                        src={story?.profile_image}
                      />
                      <p className="mt-4 text-sm font-medium leading-relaxed text-black duration-300 md:text-base group-hover:text-primary line-clamp-2">
                        {story?.title_AR}
                      </p>
                      <p className="mt-2 text-xs font-normal leading-relaxed text-gray-600 duration-300 md:text-sm group-hover:text-primary line-clamp-2">
                        {story?.short_bio_AR}
                      </p>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              ref={prevRef}
              className="absolute left-[-10px] z-10 items-center justify-center hidden w-10 h-10 transition-all duration-300 -translate-y-1/2 rounded-full cursor-pointer top-1/2 hover:scale-110 xl:flex"
              aria-label="Previous slide"
            >
              <img src={LeftArrow} alt="prev" className="w-5 " />
            </button>
            <button
              ref={nextRef}
              className="absolute right-[-10px] z-10 items-center justify-center hidden w-10 h-10 transition-all duration-300 -translate-y-1/2 rounded-full cursor-pointer top-1/2 hover:scale-110 xl:flex"
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
