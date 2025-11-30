import React from "react";
import MainTitle from "../ui/MainTitle";

const CommentItem = ({ name, time, text, avatar, isLast }) => {
  return (
    <div className={`flex flex-col items-start gap-3 py-3 `}>
      {/* Avatar */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-10 h-10 overflow-hidden bg-gray-300 rounded-full">
            {avatar ? (
              <img
                src={avatar}
                alt={name}
                className="object-cover w-full h-full"
              />
            ) : null}
          </div>
          <span className="font-medium text-gray-900">{name}</span>
        </div>
        <div className="text-xs text-gray-500">{time}</div>
      </div>

      <div className="flex flex-col justify-between w-full">
        <div className="flex items-center justify-between gap-2"></div>
        <p className="text-sm leading-relaxed text-gray-700">{text}</p>
      </div>
    </div>
  );
};

const CommentsSection = ({ comments }) => {
  return (
    <section className="w-full rounded-lg ">
      <MainTitle title="تعليقات" noMore={true} />
      <div className="mt-6 mb-4 ">
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 overflow-hidden bg-gray-300 rounded-full">
            <img src={null} alt={null} className="object-cover w-full h-full" />
          </div>
          <textarea
            placeholder="اكتب تعليقك هنا"
            className="w-full h-32 p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="flex justify-end mt-2 ">
          <button className="px-4 py-2 text-sm font-medium text-white transition bg-green-600 rounded-md hover:bg-green-700">
            نشر التعليق
          </button>
        </div>
      </div>

      <div>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <CommentItem
              key={index}
              name={comment.name}
              time={comment.time}
              text={comment.text}
              avatar={comment.avatar}
            />
          ))
        ) : (
          <p className="text-sm text-gray-500">لا توجد تعليقات بعد.</p>
        )}
      </div>
    </section>
  );
};

export default CommentsSection;
