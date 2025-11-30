import React from "react";

const AuthorCard = ({ image, name, description, category, link }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg overflow-hidden pb-5 w-full max-w-full hover:shadow-md duration-300">
      <div className="w-full md:w-full lg:w-full h-64 md:h-96">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-row justify-between w-full  items-center text-center gap-2  p-5">
        <div className="w-full flex gap-5 flex-col justify-start">
          <h2 className="text-2xl font-bold text-gray-900 text-start">
            {name}
          </h2>

          <p className="text-base text-gray-600 text-start">{description}</p>
        </div>
        <div className="bg-purple-300 text-purple-700  hover:text-white hover:bg-black duration-300 h-10 w-44 inline-flex items-center justify-center rounded-lg">
          {category && <span className="  text-sm ">{category}</span>}
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
