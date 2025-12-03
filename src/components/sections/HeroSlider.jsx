import React from "react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "./HeroSlider.css";
import "swiper/css";
import "swiper/css/pagination";
import main_slide_1 from "../../assets/images/main_slide_1.webp";
import MainTitle from "../ui/MainTitle";
import GreenButton from "../ui/GreenButton";
import { CameraIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

export const HeroSlider = ({
  data,
  showButton = true,
  title = true,
  displayCategory,
  tags,
}) => {
  const navigate = useNavigate();

  // console.log(data);
  return (
    <section className="w-full">
      <div className="">
        <div className="flex flex-col items-start gap-4 md:gap-6 ">
          {title && <MainTitle title="الأخبار العاجلة" noMore={true} />}

          <div className="relative w-full">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              pagination={{
                clickable: true,
                el: ".hero-swiper-pagination",
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
              }}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="w-full hero-swiper"
            >
              {data?.map((news) => (
                <SwiperSlide key={news.id}>
                  <Card className="relative flex flex-col h-[300px] lg:h-[450px] items-end justify-between px-6 md:px-[52px] py-6 md:py-9 w-full lg:rounded-md rounded-lg border-0 overflow-hidden">
                    <img
                      src={news?.image}
                      alt={news?.title_AR}
                      className="absolute inset-0 object-cover w-full h-full"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.5)]"></div>

                    <CardContent className="relative z-10 flex flex-col items-start justify-between w-full h-full p-0">
                      <div className="flex items-center justify-between w-full gap-3">
                        {tags ? (
                          <></>
                        ) : (
                          <Badge
                            className={`flex items-center justify-center h-8 gap-2 px-3 py-0 rounded-md w-fit md:h-10 ${news?.parentSubCategory?.color}`}
                          >
                            <button
                              className="text-sm font-normal text-center text-white md:text-base"
                              onClick={() =>
                                navigate(
                                  `/${news?.parentSubCategory?.Category?.slug}/${news?.parentSubCategory?.slug}`
                                )
                              }
                            >
                              {displayCategory
                                ? news?.parentSubCategory?.name_AR
                                : news?.Tags[news?.Tags?.length - 1]?.name_AR}
                            </button>
                          </Badge>
                        )}

                        {showButton && (
                          <GreenButton
                            icon={CameraIcon}
                            number={news?.images_slider?.length}
                          />
                        )}
                      </div>

                      <div className="flex flex-col items-start justify-end w-full">
                        <h3
                          className="mb-6 text-lg font-bold leading-tight text-center text-white duration-300 cursor-pointer md:text-xl lg:text-2xl md:text-start line-clamp-2 hover:text-primary"
                          onClick={() =>
                            navigate(
                              `/${
                                news?.subCategory?.Category?.slug
                                  ? news?.subCategory?.Category?.slug
                                  : news?.parentSubCategory?.Category?.slug
                              }/${
                                news?.subCategory?.slug
                                  ? news?.subCategory?.slug
                                  : news?.parentSubCategory?.slug
                              }/${news?.slug}`
                            )
                          }
                        >
                          {news?.title_AR}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Enhanced Custom Pagination - Centered at bottom */}
            <div className="absolute z-20 hero-swiper-pagination bottom-4 lg:start-[50%] lg:w-[50%] w-full  text-center ">
              <style>{`
                .hero-swiper-pagination {
                  display: flex !important;
                  gap: 8px;
                  position: static !important;
                }
                span.swiper-pagination-bullet {
                  width: 48px;
                  height: 12px;
                  background: rgba(255, 255, 255, 0.4);
                  opacity: 1;
                  margin: 0;
                  border-radius: 50%;
                  transition: all 0.3s ease;
                  cursor: pointer;
                }
               
                .hero-swiper-pagination .swiper-pagination-bullet:hover {
                  background: rgba(255, 255, 255, 0.7);
                  transform: scale(1.1);
                }
                .hero-swiper-pagination .swiper-pagination-bullet-active {
                  background: #ffffff;
                  transform: scale(1.2);
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
