import React from "react";
import MainTitle from "./MainTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import LeftArrow from "../../assets/icons/LeftArrow.svg";
import RightArrow from "../../assets/icons/RightArrow.svg";
const videos = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "فيديو تجريبي 1",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
    title: "فيديو تجريبي 2",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
    title: "فيديو تجريبي 3",
  },
];
const VedioWidget = () => {
  return (
    <section className="flex flex-col gap-4 lg:gap-6">
      <MainTitle title="فيديو" Sidbar={true} />
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          nextEl: ".custom-swiper-next",
          prevEl: ".custom-swiper-prev",
        }}
        // pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
        // autoplay={{ delay: 3000 }}
        loop={true}
        className="relative rounded-lg overflow-hidden w-full h-[500px]"
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id}>
            <div className="relative w-full h-[500px]">
              <iframe
                width="100%"
                height="100%"
                src={video.videoUrl}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
              {/* <p className="absolute bottom-0 left-0 w-full p-3 text-sm font-semibold text-white bg-black/60">
                  {video.title}
                </p> */}
            </div>
          </SwiperSlide>
        ))}

        {/* arrows */}
        <div className="absolute z-20 -translate-y-1/2 cursor-pointer custom-swiper-prev top-1/2 left-2">
          <img src={LeftArrow} className="w-6 h-6" />
        </div>
        <div className="absolute z-20 -translate-y-1/2 cursor-pointer custom-swiper-next top-1/2 right-2">
          <img src={RightArrow} className="w-6 h-6" />
        </div>

        <div
          className="custom-swiper-pagination absolute bottom-3 left-1/2 -translate-x-1/2 
                  [&_.swiper-pagination-bullet]:bg-green-600 
                  [&_.swiper-pagination-bullet-active]:bg-green-700"
        ></div>
      </Swiper>
    </section>
  );
};

export default VedioWidget;
