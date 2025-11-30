import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import MainTitle from "../../../../components/ui/MainTitle";
import { useNavigate } from "react-router-dom";

export const LatestNewss = ({
  egyptianRealEstatePosts,
  egyptianRealEstateParentSlug,
  sportsPosts,
  sportsParentSlug,
}) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const newsCategories = [
    {
      title: "عقارات",
      articles: egyptianRealEstatePosts,
      parentSlug: egyptianRealEstateParentSlug,
    },
    {
      // title: "العدد الورقي",
      title: "الرياضة",
      articles: sportsPosts,
      parentSlug: sportsParentSlug,
    },
  ];

  const category = newsCategories[activeTab];
  // console.log(newsCategories);

  return (
    <section className="w-full px-4 mt-8 mb-8 md:mb-12 md:px-0 md:mt-0">
      {/* mobile */}
      <div className="block md:hidden">
        <div className="flex justify-start gap-4 mb-6 overflow-x-auto">
          {newsCategories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 whitespace-nowrap rounded-md font-semibold transition ${
                activeTab === index
                  ? "bg-white text-primary"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4 md:gap-6">
          <MainTitle title={category.title} noMore={true} />

          {/* Featured Article */}
          {category?.articles?.length > 0 && (
            <Card className="h-[236px] relative rounded overflow-hidden border-0 shadow-none">
              <CardContent
                className="relative flex flex-col items-end justify-end w-full h-full p-0"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 55%), url(${category.articles[0].image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "50% 50%",
                }}
              >
                <div className="absolute inset-0 flex flex-col justify-end px-5 py-9">
                  <h3
                    className="w-full text-base font-bold leading-snug text-white duration-300 cursor-pointer lg:text-xl lg:line-clamp-3 line-clamp-2 hover:text-primaryText"
                    onClick={() =>
                      navigate(
                        `/${category?.parentSlug}/${category?.articles[0]?.manySubCategories[0]?.slug}/${category?.articles[0]?.slug}`
                      )
                    }
                  >
                    {category.articles[0].title_AR}
                  </h3>
                </div>
              </CardContent>
            </Card>
          )}

          {/* news */}
          <div className="flex flex-col w-full gap-4 md:gap-6">
            {category?.articles?.slice(1).map((article, i) => (
              <article
                key={i}
                className="lg:h-[110px] h-[80px] flex items-center gap-4 w-full relative group cursor-pointer"
              >
                <img
                  className="w-[110px] lg:h-[110px] h-[80px] rounded object-cover"
                  alt="Image"
                  src={article.image}
                />
                <div
                  className="flex-1 text-lg font-medium leading-normal text-black duration-300 group-hover:text-primary lg:line-clamp-3 line-clamp-2"
                  onClick={() =>
                    // navigate(
                    //   `/${category?.parentSlug}/${article?.manySubCategories[0]?.slug}/${article?.slug}`
                    // )
                    navigate(
                      `/${
                        article.parentSlug
                          ? article.parentSlug
                          : article?.subCategory?.Category?.slug
                      }/${
                        article?.manySubCategories?.[0]?.slug
                          ? article?.manySubCategories[0]?.slug
                          : article?.subCategory?.slug
                      }/${article?.slug}`
                    )
                  }
                >
                  {article.title_AR}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* desktop */}
      <div className="hidden w-full gap-8 md:grid md:grid-cols-2 lg:grid-cols-2">
        {newsCategories.map((cat, categoryIndex) => (
          <div key={categoryIndex} className="flex flex-col gap-4 md:gap-6">
            <MainTitle title={cat?.title} noMore={true} />

            {/* {console.log(cat.articles)} */}
            {/* Featured Article */}
            <Card className="h-[236px] relative rounded overflow-hidden border-0 shadow-none">
              <CardContent
                className="relative flex flex-col items-end justify-end w-full h-full p-0"
                style={{
                  backgroundImage: `linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.5) 55%), url(${cat?.articles[0]?.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "50% 50%",
                }}
              >
                <div className="absolute inset-0 flex flex-col justify-end px-5 py-9">
                  <h3
                    className="w-full text-base font-bold leading-snug text-white duration-300 cursor-pointer sm:text-lg lg:line-clamp-3 line-clamp-2 hover:text-primaryText"
                    onClick={() =>
                      navigate(
                        `/${cat?.parentSlug}/${cat?.articles[0]?.manySubCategories[0]?.slug}/${cat?.articles[0]?.slug}`
                      )
                    }
                  >
                    {cat?.articles[0]?.title_AR}
                  </h3>
                </div>
              </CardContent>
            </Card>

            {/* news */}
            {cat?.articles && cat.articles.length > 1 && (
              <div className="flex flex-col w-full gap-4 md:gap-6">
                {cat?.articles && cat.articles.length > 1 && (
                  <div className="flex flex-col w-full gap-4 md:gap-6">
                    {cat.articles.slice(1).map((article, articleIndex) => (
                      <article
                        key={articleIndex}
                        className="lg:h-[110px] h-[80px] flex items-center gap-4 w-full relative group cursor-pointer"
                      >
                        <img
                          className="w-[110px] lg:h-[110px] h-[80px] rounded object-cover"
                          alt="Image"
                          src={article?.image}
                        />
                        <div
                          className="flex-1 text-lg font-medium leading-normal text-black duration-300 group-hover:text-primary lg:line-clamp-3 line-clamp-2"
                          onClick={() =>
                            // navigate(
                            //   `/${cat?.parentSlug}/${article?.manySubCategories[0]?.slug}/${article?.slug}`
                            // )
                            navigate(
                              `/${
                                cat.parentSlug
                                  ? cat.parentSlug
                                  : article?.subCategory?.Category?.slug
                              }/${
                                article?.manySubCategories?.[0]?.slug
                                  ? article?.manySubCategories[0]?.slug
                                  : article?.subCategory?.slug
                              }/${article?.slug}`
                            )
                          }
                        >
                          {article?.title_AR}
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
