import React from "react";

const CardPersonCompany = () => {
  return (
    <div className="p-2 bg-[#FFFFFF] flex flex-col gap-2">
      <img src={image} className="w-full" alt={title.en} />
      <h2 className="font-medium">{title.en}</h2>
      <h2 className="font-thin">{title.ar}</h2>
    </div>
  );
};

export default CardPersonCompany;
