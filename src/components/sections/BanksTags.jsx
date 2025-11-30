// import React, { useEffect } from "react";
import { Badge } from "../ui/badge";
import MainTitle from "../ui/MainTitle";
import { useNavigate } from "react-router-dom";

export const SectionTags = ({ title = "الوسوم", tags, lengthTags }) => {
  const navigate = useNavigate();

  if (tags?.length === 0) {
    return null;
  }
  // console.log(tags);
  return (
    <section className="flex flex-col w-full gap-4 mb-6">
      {title !== "no" && <MainTitle title={title} noMore={true} />}

      <div className="flex flex-wrap gap-2">
        {tags?.map((tag, index) => (
          <Badge
            key={tag.id}
            className="px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-300 bg-white cursor-pointer hover:bg-primary hover:text-white "
            onClick={() =>
              navigate(
                `/tag/${tag?.slug}`
              )
            }
          >
            {tag?.name_AR}
          </Badge>
        ))}
      </div>
    </section>
  );
};
