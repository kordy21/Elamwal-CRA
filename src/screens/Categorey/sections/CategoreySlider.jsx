import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Card, CardContent } from "../../../components/ui/card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../index.css";
import MainTitle from "../../../components/ui/MainTitle";
import { useNavigate, useParams } from "react-router-dom";

export const CategoreySlider = ({ sliderArticles, title, other }) => {
  const navigate = useNavigate();
  const params = useParams();
  // console.log(sliderArticles);
  return (
    <section className="flex flex-col w-full gap-6">
      <MainTitle title={title} noMore={true} />

      <div className="relative w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full banks-swiper"
        >
          {sliderArticles?.map((article) => (
            <SwiperSlide key={article?.id}>
              <>
                <Card
                  className="relative flex flex-col h-[300px] lg:h-[400px] items-end justify-between px-6 md:px-[52px] py-6 md:py-9 w-full lg:rounded-t-md rounded-t-lg border-0 overflow-hidden"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%), url(${article?.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></Card>

                <CardContent className="relative z-10 flex flex-col items-start justify-between w-full h-full gap-4 p-6 bg-black rounded-b-md">
                  <div className="flex flex-col items-start justify-end w-full">
                    <h3
                      className="text-xl font-bold leading-tight text-white duration-300 cursor-pointer lg:text-2xl text-start hover:text-primary line-clamp-1"
                      onClick={() =>
                        navigate(
                          `/${
                            params?.categorySlug
                              ? params?.categorySlug
                              : article?.parentSubCategory?.slug
                          }/${
                            params?.subcategorySlug
                              ? params?.subcategorySlug
                              : article?.parentSubCategory?.Category?.slug
                          }/${article?.slug}`
                        )
                      }
                    >
                      {article?.title_AR}
                    </h3>
                  </div>
                </CardContent>
              </>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style>
        {`
        .banks-swiper .swiper-pagination {
          position: absolute;
          bottom: 6.5rem;
          left: 25%;
          transform: translateX(-50%);
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          width: auto;
          z-index: 20;
        }

        /* bullets */
        .banks-swiper .swiper-pagination-bullet {
          width: 40px;
          height: 8px;
          background: rgba(255, 255, 255, 0.4);
          opacity: 1;
          border-radius: 25px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .banks-swiper .swiper-pagination-bullet:hover {
          background: rgba(255, 255, 255, 0.7);
          transform: scale(1.1);
        }

        .banks-swiper .swiper-pagination-bullet-active {
          background: #00a651;
          transform: scale(1.1);
        }

        /* mobile */
        @media (max-width: 768px) {
          .banks-swiper .swiper-pagination-bullet {
            width: 24px;
            height: 8px;
            border-radius: 4px;
          }
            .banks-swiper .swiper-pagination{
              transform: translateX(0%) !important;
            }
        }
    `}
      </style>
    </section>
  );
};
