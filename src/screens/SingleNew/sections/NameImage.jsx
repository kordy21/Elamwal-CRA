import React from "react";

const NameImage = ({ name,  }) => {
  return (
    <div className="flex flex-col bg-white  hover:shadow-md px-4 py-2 rounded-lg duration-300 items-center gap-2">

      <p className="text-base font-semibold text-gray-800">{name}</p>
    </div>
  );
};

export default NameImage;
