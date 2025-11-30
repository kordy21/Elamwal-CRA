import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import MainTitle from "../ui/MainTitle";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate, useParams } from "react-router-dom";

const BlogSection = ({
  data,
  title,
  noMore = false,
  shadow = true,
  parentSlug,
  linkCategory,
  itemsURL,
}) => {
  const swiperRef = useRef(null);
  const navigate = useNavigate();
  // const { slug } = useParams();
  if (!data || data.length === 0) return null;
  // console.log(data);
  return (
    <div className="flex flex-col items-start w-full gap-4 duration-300 rounded-lg md:gap-6">
      <MainTitle
        title={title}
        noMore={noMore}
        onClick={() => navigate(`${linkCategory}`)}
      />

      <div
        className={`hidden w-full bg-white p-3 rounded grid-cols-1 gap-4 lg:grid lg:grid-cols-2 
        ${shadow ? "hover:shadow-md" : ""}`}
      >
        {data?.map((article) => (
          <Card
            key={article?.id}
            className={`flex items-center justify-start gap-4 bg-transparent border-none  group 
              ${
                shadow
                  ? "shadow-none hover:shadow-md"
                  : "shadow-none hover:shadow-none"
              }`}
            // navigate(`/:categorySlug/:subcategorySlug/${article.slug}`)
          >
            <img
              className="object-cover w-1/3 h-full rounded min-h-[90px]"
              alt="Article image"
              src={`${article?.image}`}
            />
            <CardContent className="flex flex-col items-start justify-center w-2/3 gap-4 p-0">
              {title === "On Trend" && article?.parentSubCategory && (
                <div
                  className="flex items-center justify-center gap-2 px-3 py-0 rounded w-fit bg-opacity-20"
                  style={{
                    backgroundColor: `${article?.parentSubCategory?.color}20`,
                  }}
                >
                  <button
                    className={`text-xs font-normal text-center `}
                    style={{
                      color: article?.parentSubCategory?.color,
                    }}
                    onClick={() =>
                      navigate(
                        `/${article?.parentSubCategory?.Category?.slug}/${article?.parentSubCategory?.slug}`
                      )
                    }
                  >
                    {article?.parentSubCategory?.Category?.name_AR}
                  </button>
                </div>
              )}

              <h3
                className="font-medium text-black duration-300 cursor-pointer lg:text-lg group-hover:text-primary lg:line-clamp-3 line-clamp-2"
                onClick={() =>
                  article?.subCategory
                    ? navigate(
                        `/${article?.subCategory?.Category?.slug}/${article?.subCategory.slug}/${article?.slug}`
                      )
                    : navigate(
                        `/${article?.parentSubCategory?.Category?.slug}/${article?.parentSubCategory?.slug}/${article?.slug}`
                      )
                }
              >
                {article?.title_AR}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="w-full h-full lg:hidden">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{
            el: ".swiper-pagination-custom",
            clickable: true,
            dynamicBullets: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={data.length > 1}
          grabCursor={true}
          touchRatio={1}
          threshold={10}
          className="blog-swiper"
        >
          {data?.map((article) => (
            <SwiperSlide key={article?.id}>
              <Card
                className={`flex flex-col items-center justify-start gap-4 bg-transparent border-none cursor-pointer group 
                  ${
                    shadow
                      ? "shadow-none hover:shadow-md"
                      : "shadow-none hover:shadow-none"
                  }`}
              >
                <img
                  className="object-cover w-full h-[200px] rounded-md"
                  alt="Article image"
                  src={`${article?.image}`}
                />
                <CardContent className="flex flex-col items-start justify-center w-full gap-3 p-0">
                  {title === "On Trend" && article?.parentSubCategory && (
                    <div
                      className="flex items-center justify-center gap-2 px-3 py-0 rounded w-fit bg-opacity-20"
                      style={{
                        backgroundColor: `${article?.parentSubCategory?.color}20`,
                      }}
                    >
                      <button
                        className={`text-xs font-normal text-center `}
                        style={{
                          color: article?.parentSubCategory?.color,
                        }}
                        onClick={() =>
                          navigate(
                            `/${article?.parentSubCategory?.Category?.slug}/${article?.parentSubCategory?.slug}`
                          )
                        }
                      >
                        {article?.parentSubCategory?.Category?.name_AR}
                      </button>
                    </div>
                  )}
                  <h3
                    className="text-sm font-medium text-black duration-300 cursor-pointer sm:text-base hover:text-primary"
                    onClick={() =>
                      article?.subCategory
                        ? navigate(
                            `/${article?.subCategory?.Category?.slug}/${article?.subCategory.slug}/${article?.slug}`
                          )
                        : navigate(
                            `/${article?.parentSubCategory?.Category?.slug}/${article?.parentSubCategory?.slug}/${article?.slug}`
                          )
                    }
                  >
                    {article.title_AR}
                  </h3>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}

          <div className="flex justify-center gap-2 mt-4 -translate-x-1 swiper-pagination-custom"></div>
        </Swiper>

        <style jsx>{`
          .blog-swiper {
            position: relative;
          }

          .swiper-pagination-custom {
            position: relative !important;
            bottom: 0 !important;
            left: 0 !important;
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
            gap: 8px !important;
            margin-top: 20px !important;
          }

          .swiper-pagination-custom .swiper-pagination-bullet {
            width: 12px !important;
            height: 12px !important;
            background: #ccefdb !important;
            border-radius: 50% !important;
            transition: all 0.3s ease !important;
            cursor: pointer !important;
            opacity: 1 !important;
            margin: 0 !important;
          }

          .swiper-pagination-custom .swiper-pagination-bullet-active {
            background: #00a651 !important;
            width: 32px !important;
            border-radius: 6px !important;
            transform: scale(1.1);
          }

          .swiper-pagination-custom .swiper-pagination-bullet:hover {
            background: #9ca3af !important;
            transform: scale(1.1);
          }

          .swiper-pagination-custom .swiper-pagination-bullet-active:hover {
            background: #33bf6f !important;
          }

          @media (max-width: 640px) {
            .swiper-pagination-custom .swiper-pagination-bullet {
              width: 10px !important;
              height: 10px !important;
            }

            .swiper-pagination-custom .swiper-pagination-bullet-active {
              width: 28px !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default BlogSection;
