import { PlayCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

const VideoWidgets = ({ data, count }) => {
  const limitedData = count ? data?.slice(0, count) : data;
  return (
    <>
      {limitedData.map((article) => (
        <div
          key={article.id}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-[100px] h-[70px] flex-shrink-0 overflow-hidden rounded">
            <img
              src={`https://img.youtube.com/vi/${article.videoId}/hqdefault.jpg`}
              alt={article.title_AR}
              className="w-[125px] h-[85px] rounded object-cover"
            />
            {/* <iframe
              src={article.video}
              title={`featured-${i}`}
              className="w-full h-full"
              frameBorder="0"
              allowFullScreen
            ></iframe> */}
          </div>
          <div className="flex flex-col gap-2 ">
            <div className="flex gap-2 ">
              <div className="flex items-center gap-2">
                <PlayCircleIcon className="w-5 h-5 text-gray-500" />
                <p>12:02</p>
              </div>
            </div>
            <p className="text-base font-medium leading-5 text-black duration-300 group-hover:text-primary">
              {article.title_AR}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default VideoWidgets;
