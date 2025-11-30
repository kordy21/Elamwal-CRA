import React from "react";
import { Link } from "react-router-dom";
import newspaper from "../../assets/images/News.webp";


const WeeklyHighlights = ({ newspapers }) => {
  // const newspapers = [
  //   { image: newspaper1, title: "الأسبوع الأول", link: "/newspapersingle" },
  //   { image: newspaper2, title: "الأسبوع الثاني", link: "/newspapersingle" },
  //   { image: newspaper3, title: "الأسبوع الثالث", link: "/newspapersingle" },
  //   { image: newspaper4, title: "الأسبوع الرابع", link: "/newspapersingle" },
  // ];

  return (
    <div className="grid grid-cols-1 gap-6 pb-8 sm:grid-cols-2 lg:grid-cols-2">
      {newspapers.map((paper, index) => (
        <Link
          key={index}
          to={paper?.slug || "#"}
          className="flex flex-col items-center p-4 duration-300 bg-white rounded shadow hover:shadow-md"
        >
          <img
            src={newspaper}
            alt={paper?.title_AR}
            className="object-contain mb-2 w-25 h-25"
          />
          <span className="text-center">{paper?.title_AR}</span>
        </Link>
      ))}
    </div>
  );
};

export default WeeklyHighlights;
