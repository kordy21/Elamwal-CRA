import React from "react";
import { useNavigate } from "react-router-dom";

const NewsWidgets = ({ data, count, row = false }) => {
  const limitedData = count ? data?.slice(0, count) : data;
  const navigate = useNavigate();
  return (
    <div
      className={
        row ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : "flex flex-col gap-3"
      }
    >
      {limitedData?.map((article) => (
        <div
          key={article.id}
          className="flex items-center gap-3 pb-3 border-b border-gray-200 cursor-pointer group last:border-0"
          onClick={() =>
            navigate(
              `/${article?.category?.slug}/${article?.subCategory?.slug}/${article?.slug}`
            )
          }
        >
          <div className="w-[100px] h-[70px] flex-shrink-0 overflow-hidden rounded">
            <img
              src={article.image}
              alt={article.title_AR}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-base font-medium leading-5 text-black duration-300 group-hover:text-primary line-clamp-2">
            {article.title_AR}
          </p>
        </div>
      ))}
    </div>
  );
};

export default NewsWidgets;
