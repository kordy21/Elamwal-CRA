import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const AdvertisementSection = () => {
  const featuredArticles = [
    {
      id: 1,
      image: "/image-51.png",
      category: "سياحة ونقل",
      categoryColor: "#2aacb1",
      categoryBg: "#2aadb10d",
      title:
        "النقل الدولي واللوجستيات تتوقع 8 % زيادة في أسعار النقل البري بعد رفع...",
      timeAgo: "١٢ مايو ٢٠٢٤",
      timeIcon: "/group-5.png",
    },
    {
      id: 2,
      image: "/image-52.png",
      category: "عقارات",
      categoryColor: "#2a3eb1",
      categoryBg: "#2a3eb10d",
      title: "مزايا للتطوير العقارى تستعد لطرح مشروع عقاري جديد ضمن...",
      timeAgo: "١٢ مايو ٢٠٢٤",
      timeIcon: "/group-6.png",
    },
  ];

  const sideArticles = [
    [
      {
        id: 3,
        category: "فنون",
        categoryColor: "#b12aa8",
        categoryBg: "#b12aa80d",
        title:
          "السينما المصرية في عيد الأضحى.. 5 أفلام من العيار الثقيل تسيطر على شباك ...",
      },
      {
        id: 4,
        image: "/image-54.png",
        category: "ترند",
        categoryColor: "#91b12a",
        categoryBg: "#91b12a0d",
        title: "موعد اجازه شم النسيم 2025 في مصر",
      },
      {
        id: 5,
        image: "/image-55.png",
        category: "عالم الرياضة",
        categoryColor: "#2ab13e",
        categoryBg: "#2ab13e0d",
        title:
          "وزير الرياضة ينعي إبراهيم شيكا لاعب الزمالك السابق بعد وفاته متأثرا بالمرض",
      },
    ],
    [
      {
        id: 6,
        image: "/image-56.png",
        category: "أسواق",
        categoryColor: "#2a3eb1",
        categoryBg: "#2a3eb10d",
        title:
          "تراجع 34 قرشا..سعر الدولار اليوم مقابل الجنيه المصرى بالبنوك الخميس 10-4-2025",
      },
      {
        id: 7,
        image: "/image-57.png",
        category: "بنوك و تامين",
        categoryColor: "#2a3eb1",
        categoryBg: "#2a3eb10d",
        title:
          "هاني أبوالفتوح: مساران محتملان لأسعار الفائدة في مصر الخميس المقبل",
      },
      {
        id: 8,
        image: "/image-58.png",
        category: "عاجل",
        categoryColor: "#d13232",
        categoryBg: "#d132320d",
        title:
          "د. عبد العظيم : الاجتماع الثاني للجنة تسجيل السلالات الحيوانية يناقش عدد من ...",
      },
    ],
  ];

  return (
    <section className="relative flex flex-wrap items-start justify-between w-full pt-12 max-container">
      <header className="relative flex items-center justify-end w-full gap-4 mb-6 md:gap-6">
        <div className="w-[34px] h-[37px] mt-[-1.00px] [font-family:'Tajawal',Helvetica] font-normal text-[#00a651] text-sm text-center underline [direction:rtl] relative tracking-[0] leading-[normal]"></div>
        <div className="w-[34px] h-[37px]  font-normal text-[#00A651] text-sm text-center underline">
          المزيد
        </div>

        <img
          className="w-[552px] h-px relative object-cover"
          alt="Line"
          src="/src/assets/icons/line-276-15.svg"
        />

        <h2 className="w-[157px] h-[37px]  font-bold text-[#00A651] text-[32px] whitespace-nowrap">
          عربي ودولي
        </h2>
      </header>

      {featuredArticles?.map((article) => (
        <Card
          key={article.id}
          className="flex flex-col w-[376px] h-[438px] items-end gap-4 md:gap-6 pt-0 pb-6 px-0 relative bg-white rounded border border-solid border-[#f6f6f6]"
        >
          <CardContent className="flex flex-col w-full h-full gap-4 p-0 md:gap-6">
            <img
              className="relative self-stretch w-full h-[259px] rounded object-cover"
              alt="Image"
              src={`/src/assets/images${article.image}`}
            />

            <div className="flex flex-col items-end gap-5 px-4 py-0 relative self-stretch w-full flex-[0_0_auto]">
              <Badge
                className="w-[107px] h-[25px] flex items-center justify-center gap-2 px-3 py-0 relative rounded"
                style={{
                  backgroundColor: article.categoryBg,
                  color: article.categoryColor,
                  border: "none",
                }}
              >
                <span className="w-[69px]  font-normal text-xs text-center">
                  {article.category}
                </span>
              </Badge>

              <h3 className="self-stretch h-[50px]  font-bold text-black text-xl">
                {article.title}
              </h3>

              <div className="flex w-[73px] items-center justify-end gap-1 relative flex-[0_0_auto]">
                <span className="w-[51px] h-3.5  font-medium text-gray-400 text-xs whitespace-nowrap">
                  {article.timeAgo}
                </span>

                <img
                  className="relative w-[14.67px] h-4"
                  alt="Group"
                  src={`/src/assets/images${article.timeIcon}`}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      {sideArticles?.map((column, columnIndex) => (
        <div
          key={columnIndex}
          className="w-[376px] items-start flex flex-col gap-4 md:gap-6 relative"
        >
          {column.map((article) => (
            <article
              key={article.id}
              className="h-[114px] justify-end gap-4 self-stretch w-full flex items-center relative"
            >
              <div className="relative flex flex-col items-end justify-centergap-4">
                <Badge
                  className="h-[25px] rounded flex items-center justify-center gap-2 px-3 py-0 relative"
                  style={{
                    backgroundColor: article.categoryBg,
                    color: article.categoryColor,
                    border: "none",
                    width:
                      article.category === "عالم الرياضة" ? "107px" : "84px",
                  }}
                >
                  <span className="text-xs font-normal text-center ">
                    {article.category}
                  </span>
                </Badge>

                <h3 className="self-stretch h-[72px]  font-medium text-black text-xl">
                  {article.title}
                </h3>
              </div>

              <img
                className="relative w-[110px] h-[114px] rounded object-cover"
                alt="Image"
                src={`/src/assets/images${article.image}`}
              />
            </article>
          ))}
        </div>
      ))}
    </section>
  );
};
