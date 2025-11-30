import React from "react";

const NewsContent = ({ title, content }) => {
  return (
    <section className="flex flex-col w-full gap-4 p-6 bg-white rounded-xl">
      {title && (
        <h2 className="text-xl font-bold leading-relaxed text-gray-800">
          {title}
        </h2>
      )}

      <div className="flex flex-col gap-3 leading-relaxed text-gray-700 ">
        {Array.isArray(content) ? (
          content.map((paragraph, index) => (
            <p key={index} className="text-base md:text-lg">
              {paragraph}
            </p>
          ))
        ) : (
          <p className="text-base md:text-lg">{content}</p>
        )}
      </div>
    </section>
  );
};

export default NewsContent;
