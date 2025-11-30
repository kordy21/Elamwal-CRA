import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import MainTitle from "../../../../components/ui/MainTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
export const LatestNewsSection = ({
  TourismTransportationEnergy,
  TourismTransportationEnergyParentSlug,
  art,
  artParentSlug,
  technologyCommunications,
  technologyCommunicationsParentSlug,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const newsCategories = [
    {
      title: "سياحة ونقل وطاقة",
      linkCategory: "/tourism-transport-and-energy/tourism",
      article: TourismTransportationEnergy,
      parentSlug: TourismTransportationEnergyParentSlug,
    },
    {
      title: "فن",
      linkCategory: "/miscellaneous/art",
      article: art,
      parentSlug: artParentSlug,
    },
    {
      title: "تكنولوجيا واتصالات",
      linkCategory: "/more/technology-communications",
      article: technologyCommunications,
      parentSlug: technologyCommunicationsParentSlug,
    },
  ];
  // console.log(newsCategories);
  const category = newsCategories[activeTab];
  return (
    <section className="container w-full mb-12">
      {/* Mobile */}
      <div className="block md:hidden ">
        <div className="flex justify-center gap-2 mb-6 overflow-x-auto">
          {newsCategories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-1 whitespace-nowrap rounded-md font-semibold transition flex gap-1 items-center ${
                activeTab === index
                  ? " text-primary"
                  : " text-gray-700 hover:bg-gray-200"
              }`}
            >
              {activeTab === index && (
                <span className="">
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="w-2 text-primary"
                  />
                </span>
              )}
              {cat.title}
            </button>
          ))}
        </div>

        {newsCategories[activeTab] && (
          <div className="flex flex-col gap-4 md:gap-6">
            <MainTitle
              title={newsCategories[activeTab].title}
              onClick={() =>
                navigate(`${newsCategories[activeTab].linkCategory}`)
              }
            />

            <Card className="h-[236px]  relative rounded overflow-hidden border-0 shadow-none">
              <CardContent
                className="relative flex flex-col items-end justify-end w-full h-full p-0"
                style={{
                  backgroundImage: `linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.5) 55%), url(${newsCategories[activeTab]?.article[0]?.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "50% 50%",
                }}
              >
                <div className="absolute inset-0 flex flex-col justify-end px-5 py-9">
                  <h3
                    className="font-bold text-white duration-300 cursor-pointer lg:text-xl hover:text-primaryText"
                    onClick={() =>
                      navigate(
                        `/${newsCategories[activeTab]?.article[0]?.subCategory?.Category?.slug}/${newsCategories[activeTab]?.article[0]?.subCategory?.slug}/${newsCategories[activeTab]?.article[0]?.slug}`
                      )
                    }
                  >
                    {newsCategories[activeTab]?.article[0]?.title_AR}
                  </h3>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col w-full gap-4 md:gap-6">
              {newsCategories[activeTab]?.article?.slice(1).map((articl, i) => (
                <article
                  key={i}
                  className="lg:h-[110px] h-[80px] flex items-center gap-4 w-full relative group cursor-pointer"
                >
                  <img
                    className="w-[110px] lg:h-[110px] h-[80px] rounded object-cover"
                    alt="Image"
                    src={articl?.image}
                  />

                  <div
                    className="flex-1 text-lg font-medium leading-normal text-black duration-300 group-hover:text-primary lg:line-clamp-3 line-clamp-2"
                    onClick={() =>
                      // navigate(
                      //   `/${newsCategories[activeTab]?.parentSlug}/${articl?.manySubCategories[0]?.slug}/${articl?.slug}`
                      // )
                      navigate(
                        `/${
                          articl.parentSlug
                            ? articl.parentSlug
                            : articl?.subCategory?.Category?.slug
                        }/${
                          articl?.manySubCategories?.[0]?.slug
                            ? articl?.manySubCategories[0]?.slug
                            : articl?.subCategory?.slug
                        }/${articl?.slug}`
                      )
                    }
                  >
                    {articl?.title_AR}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Desktop */}
      <div className="hidden w-full grid-cols-1 gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
        {newsCategories.map((cat, i) => (
          <div key={i} className="flex flex-col gap-4 md:gap-6">
            <MainTitle
              title={cat?.title}
              threeItem={true}
              onClick={() => navigate(`${cat?.linkCategory}`)}
            />

            <Card className="h-[236px] relative rounded overflow-hidden border-0 shadow-none group cursor-pointer">
              <CardContent
                className="relative flex flex-col items-end justify-end w-full h-full p-0"
                style={{
                  backgroundImage: `linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.5) 55%), url(${cat.article[0]?.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "50% 50%",
                }}
              >
                <div className="absolute inset-0 flex flex-col justify-end px-5 py-9">
                  <h3
                    className="font-bold text-white duration-300 cursor-pointer lg:text-xl group-hover:text-primaryText line-clamp-2"
                    onClick={() =>
                      navigate(
                        `/${newsCategories[activeTab]?.article[0]?.subCategory?.Category?.slug}/${newsCategories[activeTab]?.article[0]?.subCategory?.slug}/${newsCategories[activeTab]?.article[0]?.slug}`
                      )
                    }
                  >
                    {cat.article[0]?.title_AR}
                  </h3>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col w-full gap-4 md:gap-6">
              {cat?.article?.slice(1).map((articl, j) => (
                <article
                  key={j}
                  className="lg:h-[110px] h-[80px] flex items-center gap-4 w-full relative group cursor-pointer"
                >
                  <img
                    className="w-[110px] lg:h-[110px] h-[80px] rounded object-cover"
                    alt="Image"
                    src={articl?.image}
                  />

                  <div
                    className="flex-1 text-lg font-medium leading-normal text-black duration-300 group-hover:text-primary lg:line-clamp-3 line-clamp-2"
                    onClick={() =>
                      navigate(
                        `/${
                          cat.parentSlug
                            ? cat.parentSlug
                            : articl?.subCategory?.Category?.slug
                        }/${
                          articl?.manySubCategories?.[0]?.slug
                            ? articl?.manySubCategories[0]?.slug
                            : articl?.subCategory?.slug
                        }/${articl?.slug}`
                      )
                    }
                  >
                    {articl?.title_AR}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
