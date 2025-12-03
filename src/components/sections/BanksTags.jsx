import React from "react";
import { Badge } from "../ui/badge";
import MainTitle from "../ui/MainTitle";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export const SectionTags = ({ title = "الوسوم", tags }) => {
  const navigate = useNavigate();

  if (!tags || tags.length === 0) return null;

  return (
    <section className="flex flex-col w-full gap-4 mb-6 overflow-hidden ">
      {title !== "no" && <MainTitle title={title} noMore={true} />}

      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView="auto"
        autoplay={false}
        grabCursor={true}
        className="justify-start ms-0"
      >
        {tags?.map((tag) => (
          <SwiperSlide key={tag.id} className="!w-auto">
            <Badge
              className="px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-300 bg-white cursor-pointer hover:bg-primary hover:text-white"
              onClick={() => navigate(`/tag/${tag.slug}`)}
            >
              {tag.name_AR}
            </Badge>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
