// NewsSectionImage.jsx
import React, { useState } from "react";
import { Badge } from "../../components/ui/badge";
import MainTitle from "../../components/ui/MainTitle";
import GreenButton from "../../components/ui/GreenButton";
import { CameraIcon, ClockIcon } from "@heroicons/react/24/outline";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { formatArabicDate } from "../../utils/formatArabicDate";
import { useNavigate } from "react-router-dom";

const NewsSectionImage = ({ title, articles, showButton = true }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const evenArticles =
    articles?.length % 2 === 0 ? articles : articles?.slice(0, -1);
  // console.log(articles);
  return (
    <section className="flex-col items-start w-full gap-4 md:gap-6">
      <div className="my-5 ">
        <MainTitle title={title} noMore={true}/>
      </div>

      <div className="w-full sm:hidden">
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {evenArticles?.map((article) => (
            <SwiperSlide key={article?.id}>
              <div className="flex flex-col items-end gap-4 bg-white rounded-lg border border-[#f6f6f6] shadow-sm overflow-hidden hover:shadow-md transition group cursor-pointer">
                <div className="relative overflow-hidden h-[200px] w-full">
                  <img
                    className="w-full h-[200px] object-cover group-hover:scale-110 duration-300"
                    alt={article?.title_AR}
                    src={article?.image}
                  />

                  {showButton && (
                    <div className="absolute top-2 left-2">
                      <GreenButton
                        icon={CameraIcon}
                        number={article?.images_slider?.length}
                      />
                    </div>
                  )}
                </div>

                <div className="flex flex-col items-start w-full gap-4 px-4 py-3">
                  <Badge
                    className={`h-[25px] px-3 py-0 rounded ${article.categoryColor} bg-opacity-10`}
                  >
                    <span className="text-xs font-normal text-center text-primary">
                      {article?.Tags[article?.Tags?.length - 1]?.name_AR}
                    </span>
                  </Badge>

                  <h3
                    className="w-full text-base font-bold leading-snug text-black duration-300 line-clamp-2 group-hover:text-primary"
                    onClick={() =>
                      navigate(
                        `/${article?.subCategory?.Category?.slug}/${article?.subCategory?.slug}/${article?.slug}`
                      )
                    }
                  >
                    {article?.title_AR}
                  </h3>

                  <div className="flex items-center justify-end gap-2">
                    <ClockIcon className="w-5 h-5 text-gray-500" />
                    <span className="text-xs font-medium text-gray-400 whitespace-nowrap">
                      {formatArabicDate(article?.createdAt)}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-center gap-2 mt-3">
          {evenArticles?.map((_, index) => (
            <div
              key={index}
              className="relative flex-1 h-1 overflow-hidden bg-gray-200 rounded"
            >
              <div
                className={`absolute left-0 top-0 h-full bg-green-500 transition-all duration-500`}
                style={{
                  width: index === activeIndex ? "100%" : "0%",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden w-full gap-4 sm:grid sm:grid-cols-2 md:gap-6">
        {evenArticles?.map((article) => (
          <div
            key={article?.id}
            className="flex flex-col items-end gap-4 bg-white rounded-lg border border-[#f6f6f6] shadow-sm overflow-hidden hover:shadow-md transition group cursor-pointer"
          >
            <div className="relative overflow-hidden h-[200px] sm:h-[220px] lg:h-[240px] w-full">
              <img
                className="object-cover w-full h-full duration-300 group-hover:scale-110"
                alt={article?.title_AR}
                src={article?.image}
              />

              {showButton && (
                <div className="absolute top-2 left-2">
                  <GreenButton
                    icon={CameraIcon}
                    number={article?.images_slider?.length}
                  />
                </div>
              )}
            </div>

            <div className="flex flex-col items-start w-full gap-4 px-4 py-3">
              <Badge
                className={`h-[25px] px-3 py-0 rounded ${article.categoryColor} bg-opacity-10`}
              >
                <span className="text-xs font-normal text-center text-primary">
                  {article?.Tags[article?.Tags?.length - 1]?.name_AR}
                </span>
              </Badge>

              <h3
                className="w-full text-base font-bold leading-snug text-black duration-300 sm:text-lg lg:line-clamp-2 line-clamp-2 group-hover:text-primary"
                onClick={() =>
                  navigate(
                    `/${article?.subCategory?.Category?.slug}/${article?.subCategory?.slug}/${article?.slug}`
                  )
                }
              >
                {article?.title_AR}
              </h3>

              <div className="flex items-center justify-end gap-2">
                <ClockIcon className="w-5 h-5 text-gray-500" />
                <span className="text-xs font-medium text-gray-400 sm:text-sm whitespace-nowrap">
                  {formatArabicDate(article?.createdAt)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSectionImage;
