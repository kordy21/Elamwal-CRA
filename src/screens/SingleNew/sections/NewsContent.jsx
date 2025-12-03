import React from "react";
import "./NewsContent.css";
const NewsContent = ({ content }) => {
  return (
    <section className="flex flex-col w-full gap-4 p-6 overflow-hidden bg-white hover:shadow-md rounded-xl">
      <div
        className="content-ar"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
  );
};

export default NewsContent;
