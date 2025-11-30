import React from "react";
import MainTitle from "../../components/ui/MainTitle";
import { NewsCard } from "../ui/NewsCard";

export const NewsSection = ({ title, articles }) => {
  return (
    <section className="flex flex-col gap-4">
      <MainTitle title={title} />
      <div className="grid grid-cols-1 gap-4">
        {articles?.map((article) => (
          <NewsCard
            key={article.id}
            image={article.image}
            title={article.title}
            category={article.category}
            categoryColor={article.categoryColor}
          />
        ))}
      </div>
    </section>
  );
};
