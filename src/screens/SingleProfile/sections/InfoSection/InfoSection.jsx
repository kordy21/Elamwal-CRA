import React from "react";

const InfoSection = ({ title, children }) => (
  <div className="">
    <h3 className="pb-2 mt-4 text-2xl font-bold text-gray-800 ">
      {title}
    </h3>
    <div className="leading-relaxed text-gray-700">{children}</div>
  </div>
);

export default InfoSection;
