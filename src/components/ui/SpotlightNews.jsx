import React from "react";
import { useNavigate } from "react-router-dom";
import { formatArabicDate } from "../../utils/formatArabicDate";
import { ClockIcon } from "@heroicons/react/24/solid";

const SpotlightNews = ({ articles, categorey }) => {
  const navigate = useNavigate();
  // console.log(articles);
  return (
    <div className="flex flex-col gap-6 mt-0 md:mt-0 md:grid md:grid-cols-2 lg:grid-cols-2">
      {articles?.map((article) => (
        <div
          key={article?.id}
          className="overflow-hidden transition bg-white rounded-lg shadow-md hover:shadow-md"
        >
          <div className="overflow-hidden">
            <img
              src={article?.image}
              alt={article?.title_AR}
              className="object-cover w-full h-64 transition-transform duration-300 ease-in-out origin-center hover:scale-110"
            />
          </div>

          <div className="p-4 ">
            {categorey && (
              <div className="py-2">
                <span
                  className="px-2 py-1 text-sm rounded-lg bg-opacity-15 "
                  style={{
                    backgroundColor: `${article?.parentSubCategory?.color}20`,
                    color: article?.parentSubCategory?.color,
                  }}
                >
                  {article?.parentSubCategory?.name_AR}
                </span>
              </div>
            )}
            <h2
              className="text-lg font-bold text-gray-900 duration-300 cursor-pointer line-clamp-2 hover:text-primary"
              onClick={() =>
                navigate(
                  `/${article?.parentSubCategory?.Category?.slug}/${article?.parentSubCategory?.slug}/${article?.slug}`
                )
              }
            >
              {article?.title_AR}
            </h2>
            <div className="flex items-center gap-2 mt-3 text-sm text-gray-500 ">
              <ClockIcon className="w-4 h-4 text-gray-400" />
              <span>{formatArabicDate(article?.createdAt)}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpotlightNews;
