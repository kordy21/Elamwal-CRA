import React from "react";
import { ClockIcon } from "@heroicons/react/24/solid";

const NewsSmallCard = ({ image, category, title, timeAgo }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-md transition max-w-sm">
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}

      <div className="p-4 flex flex-col gap-2">
        {category && (
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded self-start">
            {category}
          </span>
        )}
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>

        {timeAgo && (
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <ClockIcon className="w-4 h-4 text-gray-400" /> {timeAgo}
          </span>
        )}
      </div>
    </div>
  );
};

export default NewsSmallCard;
