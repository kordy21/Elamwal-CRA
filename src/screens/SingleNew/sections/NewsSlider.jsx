import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Badge } from "../../../components/ui/badge";
import { Card, CardContent } from "../../../components/ui/card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import main_slide_1 from "../../../assets/images/main_slide_1.webp";
import OnTrend_1 from "../../../assets/images/OnTrend_1.webp";
import OnTrend_2 from "../../../assets/images/OnTrend_2.webp";
import OnTrend_3 from "../../../assets/images/OnTrend_3.webp";
import OnTrend_4 from "../../../assets/images/OnTrend_4.webp";
import { ClockIcon } from "@heroicons/react/24/outline";

export const NewsSlider = () => {
  const sliderArticles = [
    {
      id: 1,
      category: "عاجل",
      title:
        "الرئيس السيسي يستقبل وفداً رفيع المستوى من الاتحاد الأوروبي لبحث التعاون الاقتصادي والاستثماري",
      backgroundImage: main_slide_1,
    },
    {
      id: 2,
      category: "أخبار محلية",
      title:
        "افتتاح مشروعات تنموية جديدة في محافظات الصعيد بتكلفة 15 مليار جنيه",
      backgroundImage: OnTrend_1,
    },
    {
      id: 3,
      category: "اقتصاد",
      title: "نمو الاقتصاد المصري يحقق أرقاماً قياسية في الربع الأول من 2025",
      backgroundImage: OnTrend_2,
    },
  ];

  const sideArticles = [
    {
      id: 5,
      category: "سياسة",
      categoryColor: "bg-[#2a3eb10d] text-[#2a3eb1]",
      title: "وزير الخارجية يبحث مع نظيره الفرنسي تعزيز العلاقات الثنائية",
      image: OnTrend_4,
      timeAgo: "12 يوليو 2024",
    },
    {
      id: 6,
      category: "تكنولوجيا",
      categoryColor: "bg-[#91b12a0d] text-[#91b12a]",
      title: "إطلاق منصة رقمية جديدة للخدمات الحكومية المتطورة",
      image: OnTrend_1,
      timeAgo: "12 يوليو 2024",
    },
    {
      id: 7,
      category: "صحة",
      categoryColor: "bg-[#b12aa80d] text-[#b12aa8]",
      title: "وزارة الصحة تعلن عن حملة تطعيم شاملة في جميع المحافظات",
      image: OnTrend_2,
      timeAgo: "12 يوليو 2024",
    },
    {
      id: 8,
      category: "تعليم",
      categoryColor: "bg-[#2ab13e0d] text-[#2ab13e]",
      title: "وزير التعليم يعلن عن خطة تطوير المناهج للعام الدراسي الجديد",
      image: OnTrend_3,
      timeAgo: "12 يوليو 2024",
    },
  ];

  return (
    <section className="w-full mb-8">
      <div className="flex flex-col gap-4 md:gap-6 lg:flex-row">
        {/* Main Slider - 2/3 */}
        <div className="w-full lg:w-2/3">
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              pagination={{
                clickable: true,
                el: ".news-swiper-pagination",
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
              }}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="w-full news-swiper"
            >
              {sliderArticles?.map((article) => (
                <SwiperSlide key={article.id}>
                  <Card
                    className="relative flex flex-col h-[350px] lg:h-[450px] items-end justify-between px-6 md:px-[52px] py-6 md:py-9 w-full lg:rounded-md rounded-lg border-0 overflow-hidden"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%), url(${article.backgroundImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <CardContent className="relative z-10 flex flex-col items-start justify-between w-full h-full p-0">
                      <Badge className="flex items-center justify-center h-8 gap-2 px-4 py-0 bg-red-600 rounded-md w-fit md:h-10 hover:bg-red-600">
                        <span className="text-sm font-normal text-center text-white md:text-base">
                          {article.category}
                        </span>
                      </Badge>

                      <div className="flex flex-col items-start justify-end w-full">
                        <h3 className="mb-6 text-xl font-bold leading-tight text-white duration-300 cursor-pointer lg:text-2xl text-start">
                          {article.title}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination */}
            <div className="absolute z-20 news-swiper-pagination bottom-4 lg:start-[70%] lg:w-[30%] w-full text-center">
              <style>{`
                .news-swiper-pagination {
                  display: flex !important;
                  gap: 8px;
                  position: static !important;
                }
                .news-swiper-pagination .swiper-pagination-bullet {
                  width: 48px;
                  height: 12px;
                  background: rgba(255, 255, 255, 0.4);
                  opacity: 1;
                  margin: 0;
                  border-radius: 50%;
                  transition: all 0.3s ease;
                  cursor: pointer;
                }
                .news-swiper-pagination .swiper-pagination-bullet:hover {
                  background: rgba(255, 255, 255, 0.7);
                  transform: scale(1.1);
                }
                .news-swiper-pagination .swiper-pagination-bullet-active {
                  background: #ffffff;
                  transform: scale(1.2);
                }
              `}</style>
            </div>
          </div>
        </div>

        {/* Side Articles - 1/3 */}
        <div className="w-full lg:w-1/3">
          <div className="flex flex-col gap-4">
            {sideArticles?.map((article) => (
              <Card
                key={article.id}
                className="flex items-center gap-4 bg-white rounded-lg border border-[#f6f6f6] shadow-sm overflow-hidden hover:shadow-md transition group cursor-pointer p-4"
              >
                <img
                  className="w-[80px] h-[60px] rounded object-cover group-hover:scale-105 duration-300"
                  alt="Article image"
                  src={article.image}
                />

                <div className="flex flex-col flex-1 gap-2">
                  <Badge
                    className={`w-fit h-[20px] px-2 py-0 rounded text-xs ${article.categoryColor}`}
                  >
                    {article.category}
                  </Badge>

                  <h3 className="text-sm font-medium text-black duration-300 group-hover:text-primary lg:line-clamp-3 line-clamp-2">
                    {article.title}
                  </h3>

                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-3 h-3 text-gray-500" />
                    <span className="text-xs text-gray-400">
                      {article.timeAgo}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
