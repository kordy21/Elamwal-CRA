import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import MainTitle from "../../../../components/ui/MainTitle";
import { ClockIcon } from "@heroicons/react/24/outline";

import walk from "../../../../assets/images/walkcompany.png";
import money from "../../../../assets/images/money.png";
import cars from "../../../../assets/images/cars.png";
import mans from "../../../../assets/images/mmans.png";
import vape from "../../../../assets/images/vape.png";
import woman from "../../../../assets/images/womman.png";
import woman1 from "../../../../assets/images/woomaaan.png";
import SubscriptWidget from "../../../../components/ui/SubscriptWidget";
import VedioWidget from "../../../../components/ui/VedioWidget";
import NewsWidgets from "../../../../components/ui/NewsWidgets";
import AdSliderWidget from "../../../../components/sections/AdSliderWidget";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SidbarNewsSection } from "../../../../components/sections/SidbarNewsSection";
import { useNavigate } from "react-router-dom";
import { formatArabicDate } from "../../../../utils/formatArabicDate";

const articles = [
  { id: 1, image: walk, title_AR: "شركة «Najma Walk» تطلق المرحلة الأولى..." },
  {
    id: 2,
    image: money,
    title_AR: "زيادة 15% تنتظرك.. اعرف تفاصيل صرف معاشات...",
  },
  { id: 3, image: cars, title_AR: "الأرصاد تُحذر من طقس غير مستقر.." },
  { id: 4, image: mans, title_AR: "مصر تسرع برنامج الطروحات الحكومية..." },
  {
    id: 5,
    image: vape,
    title_AR: "التدخين الإلكتروني والتجارة غير المشروعة...",
  },
  { id: 6, image: woman, title_AR: "جيهان النجار المستشار الاعلامى السابق..." },
  { id: 7, image: woman1, title_AR: "حلا شيحة تثير التساؤلات مجددًا..." },
];

export const CenterQuestionsSection = ({
  studiesPosts,
  studiesParentSlug,
  arabInternationalPosts,
  arabInternationalParentSlug,
}) => {
  // console.log(arabInternationalPosts);
  const navigate = useNavigate();

  return (
    <section className="container flex flex-col py-8 md:py-12 lg:flex-row">
      <main className="flex flex-col flex-1 w-full gap-8 lg:w-2/3 md:pe-3 ">
        {studiesPosts?.length > 0 && (
          <section className="flex flex-col items-start w-full gap-4 md:gap-6">
            <MainTitle
              title="مركز الأموال و الدراسات"
              onClick={() => navigate(`more/studies`)}
            />
            <div className="block w-full sm:hidden">
              <Swiper
                spaceBetween={16}
                loop={true}
                modules={[Pagination]}
                pagination={{
                  clickable: true,
                  renderBullet: (index, className) => {
                    return `<span class="${className} custom-bullet"></span>`;
                  },
                }}
              >
                {studiesPosts?.map((article) => (
                  <SwiperSlide key={article.id}>
                    <card className="flex flex-col items-end gap-2 overflow-hidden cursor-pointer group">
                      <div className="overflow-hidden h-[200px] sm:h-[220px] lg:h-[240px] w-full rounded-lg">
                        <img
                          className="object-cover w-full h-full duration-300 group-hover:scale-110"
                          alt="Article image"
                          src={article?.image}
                        />
                      </div>
                      <main className="flex flex-col items-start w-full gap-4 py-3">
                        <h3
                          className="w-full text-base font-bold leading-snug text-black duration-300 sm:text-lg lg:line-clamp-3 line-clamp-2 group-hover:text-primary"
                          onClick={() =>
                            navigate(
                              `/${article?.subCategory?.Category?.slug}/${article?.subCategory.slug}/${article?.slug}`
                            )
                          }
                        >
                          {article?.title_AR}
                        </h3>
                      </main>
                    </card>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="hidden w-full grid-cols-1 gap-4 md:gap-6 sm:grid sm:grid-cols-2">
              {studiesPosts?.map((article) => (
                <Card
                  key={article?.id}
                  className="flex flex-col items-end gap-4 bg-white rounded-lg border border-[#f6f6f6] shadow-sm overflow-hidden hover:shadow-md transition group cursor-pointer"
                >
                  <div className="overflow-hidden h-[200px] sm:h-[220px] lg:h-[240px] w-full">
                    <img
                      className="object-cover w-full h-full duration-300 group-hover:scale-110"
                      alt="Article image"
                      src={article?.image}
                    />
                  </div>
                  <CardContent className="flex flex-col items-start w-full gap-4 px-4 py-3">
                    {/* <Badge
                    className={`h-[25px] px-3 py-0 rounded ${article.categoryColor}`}
                  >
                    <span className="text-xs font-normal text-center">
                      {article.category}
                    </span>
                  </Badge> */}
                    <h3
                      className="w-full text-base font-bold leading-snug text-black duration-300 sm:text-lg lg:line-clamp-3 line-clamp-2 group-hover:text-primary"
                      onClick={() =>
                        navigate(
                          `/${article?.subCategory?.Category?.slug}/${article?.subCategory.slug}/${article?.slug}`
                        )
                      }
                    >
                      {article?.title_AR}
                    </h3>
                    <div className="flex items-center justify-end gap-2">
                      <ClockIcon className="w-4 text-gray-400" />
                      <span className="text-xs font-medium text-gray-400 sm:text-sm whitespace-nowrap">
                        {formatArabicDate(article?.createdAt)}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
        {arabInternationalPosts?.length > 0 && (
          <section className="flex-col items-start hidden w-full gap-4 md:gap-6 md:flex">
            <MainTitle
              title="عربي ودولي"
              onClick={() => navigate(`/more/arab-international`)}
            />
            <div className="grid w-full grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2">
              {arabInternationalPosts?.map((article) => (
                <Card
                  key={article?.id}
                  className="flex flex-col items-end gap-4 bg-white rounded-lg border border-[#f6f6f6] shadow-sm overflow-hidden hover:shadow-md transition group cursor-pointer"
                >
                  <div className="overflow-hidden h-[200px] sm:h-[220px] lg:h-[240px] w-full">
                    <img
                      className="w-full h-[200px] sm:h-[220px] lg:h-[240px] object-cover group-hover:scale-110 duration-300"
                      alt="Article image"
                      src={article?.image}
                    />
                  </div>
                  <CardContent className="flex flex-col items-start w-full gap-4 px-4 py-3">
                    {/* <Badge
                    className={`h-[25px] px-3 py-0 rounded ${article.categoryColor}`}
                  >
                    <span className="text-xs font-normal text-center">
                      {article.category}
                    </span>
                  </Badge> */}
                    <h3
                      className="w-full text-base font-bold leading-snug text-black duration-300 sm:text-lg lg:line-clamp-3 line-clamp-2 group-hover:text-primary"
                      onClick={() =>
                        navigate(
                          `/${article?.subCategory?.Category?.slug}/${article?.subCategory?.slug}/${article?.slug}`
                        )
                      }
                    >
                      {article?.title_AR}
                    </h3>
                    <div className="flex items-center justify-end gap-2">
                      <ClockIcon className="w-4 text-gray-400" />
                      <span className="text-xs font-medium text-gray-400 sm:text-sm whitespace-nowrap">
                        {formatArabicDate(article?.createdAt)}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
        <section className="md:hidden">
          <VedioWidget />
        </section>
        {arabInternationalPosts?.length > 0 && (
          <section className="flex flex-col w-full gap-4 md:hidden">
            <MainTitle
              title="عربي ودولي"
              onClick={() => navigate(`/more/arab-international`)}
            />
            <div>
              <Swiper
                spaceBetween={16}
                loop={true}
                modules={[Pagination]}
                pagination={{
                  clickable: true,
                  renderBullet: (index, className) => {
                    return `<span class="${className} custom-bullet"></span>`;
                  },
                }}
              >
                {arabInternationalPosts?.map((article) => (
                  <SwiperSlide key={article?.id}>
                    <card className="flex flex-col items-end gap-2 overflow-hidden cursor-pointer group">
                      <div className="overflow-hidden h-[200px] sm:h-[220px] lg:h-[240px] w-full rounded-lg">
                        <img
                          className="object-cover w-full h-full duration-300 group-hover:scale-110"
                          alt="Article image"
                          src={article?.image}
                        />
                      </div>
                      <main className="flex flex-col items-start w-full gap-4 py-3">
                        <h3
                          className="w-full text-base font-bold leading-snug text-black duration-300 sm:text-lg lg:line-clamp-3 line-clamp-2 group-hover:text-primary"
                          onClick={() =>
                            navigate(
                              `/${arabInternationalParentSlug}/${article?.manySubCategories?.[0]?.slug}/${article?.slug}`
                            )
                          }
                        >
                          {article?.title_AR}
                        </h3>
                      </main>
                    </card>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
        )}
      </main>

      <aside className="flex-col self-start hidden w-full gap-4 lg:w-1/3 lg:sticky lg:top-48 h-fit lg:flex md:ps-3 ">
        <VedioWidget />

        <div className="grid grid-cols-1 gap-3 mt-4 lg:hidden ">
          <NewsWidgets data={articles} count={3} />
        </div>
        <section className="flex-col hidden gap-4 lg:gap-4 md:gap-6 lg:flex">
          {/* <MainTitle title="اخترنا لكم" Sidbar={true} noMore={true} /> */}
          {/* <div className="flex flex-col gap-4 p-2 duration-300 bg-white border border-gray-100 rounded-lg hover:shadow-md">
            <NewsWidgets data={articles} count={6} />
          </div> */}
          <SidbarNewsSection title="اخترنا لكم" />
        </section>

        <AdSliderWidget sliderId="3" />
        <SubscriptWidget />
      </aside>
    </section>
  );
};
