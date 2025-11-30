import React from "react";

const CommentCard = ({ img, title, date, text }) => {
  return (
    <div className="flex items-center gap-3 bg-white rounded shadow">
      <div className="w-1/2">
        <img
          src={img}
          alt={title}
          className="w-full h-[200px] object-cover rounded"
        />
      </div>

      <div className="w-1/2 p-5">
        <div className="flex justify-between">
          <h1 className="text-black text-xl font-bold">{title}</h1>
          <p className="text-[#9A9AB0]">{date}</p>
        </div>

        <p className="text-gray-800 mt-2">{text}</p>
      </div>
    </div>
  );
};

export default CommentCard;
