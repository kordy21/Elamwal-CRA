import React from "react";
import { ShareIcon, BookmarkIcon } from "@heroicons/react/24/outline";

const Favorate = ({ items }) => {
  return (
    <div className="flex flex-col gap-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-start border-b px-5 py-8 gap-4 bg-white hover:shadow-md duration-300"
        >
          <div className=" flex flex-col gap-1 w-24 h-16 flex-shrink-0">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded-md"
            />
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <span>{item.time}</span>
              <span>•</span>
              <span>{item.date}</span>
            </div>
          </div>

          <div className="flex-1 pe-4">
            <h3 className="text-sm font-semibold mt-1">{item.title}</h3>

            <div className="flex justify-end items-end gap-3 mt-2 text-gray-500">
              <button className="hover:text-gray-700">
                <ShareIcon className="w-5 h-5" />
              </button>
              <button className="hover:text-gray-700">
                <BookmarkIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favorate;
