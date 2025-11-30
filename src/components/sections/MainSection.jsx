import React from "react";
import { Badge } from "../ui/badge";
import MainTitle from "../ui/MainTitle";

const MainSection = ({
  titleSection,
  title,
  image = null,
  categoryColor,
  category,
}) => {
  return (
    <section className="flex flex-col w-full gap-4">
      <MainTitle title={titleSection ? titleSection : title} noMore={true} />
      <div className="flex flex-col items-end gap-4 bg-white rounded-lg border border-[#f6f6f6] shadow-sm overflow-hidden hover:shadow-md transition group cursor-pointer w-full">
        <div className="relative overflow-hidden h-[250px] sm:h-[320px] lg:h-[450px] w-full">
          <img
            className="w-full h-[250px] sm:h-[320px] lg:h-[450px] object-cover group-hover:scale-110 duration-300"
            alt={title}
            src={image}
          />
        </div>

        <div className="flex flex-col items-start w-full gap-4 px-4 py-3">
          <div
            className={`h-[25px] px-3 py-0 rounded`}
            style={{
              backgroundColor: `${categoryColor}20`,
              color: categoryColor,
            }}
          >
            <span className="text-xs font-normal text-center">{category}</span>
          </div>

          <h3 className="w-full text-base font-bold leading-snug text-black duration-300 md:text-2xl lg:line-clamp-3 line-clamp-2 group-hover:text-primary">
            {title}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
