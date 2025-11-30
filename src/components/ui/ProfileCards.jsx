import React from "react";
import MainTitle from "./MainTitle";
import { useNavigate } from "react-router-dom";

const ProfileCards = ({ data, title }) => {
  const navigate = useNavigate();

  // console.log(data);
  return (
    <>
      <MainTitle title={title} noMore={true} />
      <div className="grid w-full grid-cols-2 gap-3 mt-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-3 text-center transition-shadow bg-white rounded shadow cursor-pointer hover:shadow-md group"
            onClick={() =>
              navigate(
                `/${item?.Category?.slug}/${item?.subCategory?.slug}/${item?.slug}`
              )
            }
          >
            <img
              src={item?.profile_image}
              alt={item?.name_AR}
              className="object-cover w-40 h-40 mb-3 rounded shadow"
            />

            <h3 className="font-bold text-gray-900 duration-300 group-hover:text-primary">
              {item?.name_AR}
            </h3>
            {/* {item.title_AR && (
              <span className="text-sm text-gray-500">{item.title_AR}</span>
            )} */}
            {/* <p className="mt-2 text-sm text-gray-600">{item.title_EN}</p> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProfileCards;
