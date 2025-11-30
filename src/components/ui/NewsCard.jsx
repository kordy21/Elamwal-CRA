import React from "react";

export const NewsCard = ({ image, title, category, categoryColor }) => {
  return (
    <div className="flex gap-3 items-start bg-white rounded-lg p-2 shadow-sm cursor-pointer hover:shadow-md transition">
      <div className="w-[80px] h-[70px] flex-shrink-0 overflow-hidden rounded">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-1">
        {category && (
          <span
            className={`text-xs font-medium px-2 py-1 rounded w-[26] ${categoryColor}`}
          >
            {category}
          </span>
        )}
        <p className="text-sm font-medium text-gray-800">{title}</p>
      </div>
    </div>
  );
};
