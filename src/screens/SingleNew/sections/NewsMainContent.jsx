import React from "react";
import { Card, CardContent } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import MainTitle from "../../../components/ui/MainTitle";
import { ClockIcon } from "@heroicons/react/24/outline";
import OnTrend_1 from "../../../assets/images/OnTrend_1.webp";
import OnTrend_2 from "../../../assets/images/OnTrend_2.webp";
import OnTrend_3 from "../../../assets/images/OnTrend_3.webp";
import OnTrend_4 from "../../../assets/images/OnTrend_4.webp";
import Banks_insurance_1 from "../../../assets/images/Banks_insurance_1.webp";
import Banks_insurance_2 from "../../../assets/images/Banks_insurance_2.webp";

export const NewsMainContent = () => {
  const newsArticles = [
    {
      id: 1,
      category: "عاجل",
      categoryColor: "bg-[#d132320d] text-[#d13232]",
      title: "الحكومة تعلن عن حزمة إصلاحات اقتصادية جديدة",
      image: OnTrend_1,
      timeAgo: "12 يوليو 2024",
      excerpt: "أعلنت الحكومة المصرية عن حزمة شاملة من الإصلاحات الاقتصادية...",
    },
    {
      id: 2,
      category: "أخبار محلية",
      categoryColor: "bg-[#2a3eb10d] text-[#2a3eb1]",
      title: "افتتاح مشروع العاصمة الإدارية الجديدة رسمياً",
      image: OnTrend_2,
      timeAgo: "12 يوليو 2024",
      excerpt:
        "شهدت العاصمة الإدارية الجديدة حفل افتتاح رسمي بحضور كبار المسؤولين...",
    },
    {
      id: 3,
      category: "سياسة",
      categoryColor: "bg-[#00c1660d] text-[#00c166]",
      title: "اجتماع مجلس الوزراء يناقش ملف الاستثمار الأجنبي",
      image: OnTrend_3,
      timeAgo: "12 يوليو 2024",
      excerpt: "ناقش مجلس الوزراء في اجتماعه الأسبوعي ملف جذب الاستثمارات...",
    },
    {
      id: 4,
      category: "اقتصاد",
      categoryColor: "bg-[#b1592a0d] text-[#b1592a]",
      title: "ارتفاع معدلات النمو الاقتصادي إلى 5.2% في الربع الأول",
      image: OnTrend_4,
      timeAgo: "12 يوليو 2024",
      excerpt: "أظهرت البيانات الرسمية نمواً قوياً في الاقتصاد المصري...",
    },
    {
      id: 5,
      category: "أخبار عالمية",
      categoryColor: "bg-[#2a3eb10d] text-[#2a3eb1]",
      title: "قمة مصرية-فرنسية لتعزيز التعاون الاقتصادي",
      image: Banks_insurance_1,
      timeAgo: "12 يوليو 2024",
      excerpt: "تناولت القمة المصرية الفرنسية عدة ملفات اقتصادية مهمة...",
    },
    {
      id: 6,
      category: "تكنولوجيا",
      categoryColor: "bg-[#91b12a0d] text-[#91b12a]",
      title: "إطلاق منصة رقمية جديدة للخدمات الحكومية",
      image: Banks_insurance_2,
      timeAgo: "12 يوليو 2024",
      excerpt:
        "أطلقت الحكومة منصة رقمية متطورة لتسهيل الخدمات على المواطنين...",
    },
  ];

  const latestNews = [
    {
      id: 7,
      category: "عاجل",
      categoryColor: "bg-[#d132320d] text-[#d13232]",
      title: "وزير الخارجية يبحث مع نظيره الفرنسي العلاقات الثنائية",
      image: OnTrend_3,
      timeAgo: "12 يوليو 2024",
    },
    {
      id: 8,
      category: "أخبار محلية",
      categoryColor: "bg-[#2a3eb10d] text-[#2a3eb1]",
      title: "محافظ القاهرة يتفقد مشروعات التطوير في وسط البلد",
      image: OnTrend_4,
      timeAgo: "12 يوليو 2024",
    },
    {
      id: 9,
      category: "رياضة",
      categoryColor: "bg-[#2ab13e0d] text-[#2ab13e]",
      title: "المنتخب المصري يستعد لمواجهة مهمة في تصفيات كأس العالم",
      image: OnTrend_1,
      timeAgo: "12 يوليو 2024",
    },
  ];

  return (
    <div className="flex flex-col gap-8 mb-12">
      {/* Main Articles Grid */}
      <section>
        <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
          {newsArticles?.map((article) => (
            <Card
              key={article.id}
              className="flex flex-col gap-4 bg-white rounded-lg border border-[#f6f6f6] shadow-sm overflow-hidden hover:shadow-md transition group cursor-pointer"
            >
              <div className="overflow-hidden h-[200px] sm:h-[220px] lg:h-[240px]">
                <img
                  className="object-cover w-full h-full duration-300 group-hover:scale-110"
                  alt="Article image"
                  src={article.image}
                />
              </div>

              <CardContent className="flex flex-col gap-4 p-4">
                <Badge
                  className={`w-fit h-[25px] px-3 py-0 rounded ${article.categoryColor}`}
                >
                  <span className="text-xs font-normal text-center">
                    {article.category}
                  </span>
                </Badge>

                <h3 className="text-lg font-bold leading-snug text-black duration-300 group-hover:text-primary lg:line-clamp-3 line-clamp-2">
                  {article.title}
                </h3>

                {article.excerpt && (
                  <p className="text-sm text-gray-600 lg:line-clamp-3 line-clamp-2">
                    {article.excerpt}
                  </p>
                )}

                <div className="flex items-center justify-end gap-2">
                  <ClockIcon className="w-4 h-4 text-gray-500" />
                  <span className="text-xs font-medium text-gray-400 whitespace-nowrap">
                    {article.timeAgo}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Latest News List */}
      {/* <section>
        <MainTitle title="آخر الأخبار" />
        <div className="grid grid-cols-1 gap-4 mt-6">
          {latestNews.map((article) => (
            <Card
              key={article.id}
              className="flex items-center gap-4 bg-white rounded-lg border border-[#f6f6f6] shadow-sm overflow-hidden hover:shadow-md transition group cursor-pointer p-4"
            >
              <img
                className="w-[120px] h-[80px] rounded object-cover group-hover:scale-105 duration-300"
                alt="Article image"
                src={article.image}
              />
              
              <div className="flex flex-col flex-1 gap-2">
                <Badge className={`w-fit h-[20px] px-2 py-0 rounded text-xs ${article.categoryColor}`}>
                  {article.category}
                </Badge>
                
                <h3 className="text-base font-medium text-black duration-300 group-hover:text-primary lg:line-clamp-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <div className="flex items-center gap-2">
                  <ClockIcon className="w-4 h-4 text-gray-500" />
                  <span className="text-xs text-gray-400">
                    {article.timeAgo}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section> */}
    </div>
  );
};
