import React, { useState, useEffect } from "react";
import advertisement_2 from "../../assets/images/advertisement_2.webp";
import advertisement_3 from "../../assets/images/advertisement_3.webp";
import HeaderLayout from "../../components/layout/HeaderLayout";
import AdSliderWidget from "../../components/sections/AdSliderWidget";
import MainTitle from "../../components/ui/MainTitle";
import AuthorCard from "../Author/AuthorCard";
import Nageb from "../../assets/images/Nageb.webp";
import CompanyWidgets from "../../components/sections/CompanyWidgets";
import NewsContent from "../SingleNew/sections/NewsContent";
import SpotlightNews from "../../components/ui/SpotlightNews";
import charac1 from "../../assets/images/charac1.webp";
import charac2 from "../../assets/images/charac2.webp";
import charac3 from "../../assets/images/charac3.webp";
import charac4 from "../../assets/images/charac4.webp";
import LoadMoreButton from "../../components/ui/LoadMoreButton";
import { Footer } from "../../components/layout/Footer";
import { Breadcrumb } from "../../components/ui/Breadcrumb";

const newsArticles = [
  { id: 1, image: charac1, category: "سياحة ونقل", categoryColor: "bg-[#2a3eb10d] text-[#b1592a]", title: "6 أوناش جديدة تنضم إلى قناة السويس للحاويات لتحسين الأداء" },
  { id: 2, image: charac2, category: "الاقتصاد المصري", categoryColor: "bg-[#4952870d] text-[#485186]", title: "الاقتصاد المصري يحتاج إلى مزيد من الاستثمارات الأجنبية" },
  { id: 3, image: charac3, category: "بنوك مصر", categoryColor: "bg-[#b12aa80d] text-[#b12aa8]", title: "مصر تترقب اجتماع البنك المركزي اليوم.. هل حان وقت التيسير النقدي؟" },
  { id: 4, image: charac4, category: "بترول و طاقة", categoryColor: "bg-[#4952870d] text-[#485186]", title: "بنك QNB مصر يوقع بروتوكول تعاون لدعم القطاع الزراعي" },
  { id: 6, image: charac3, category: "تكنولوجيا", categoryColor: "bg-[#b12aa80d] text-[#b12aa8]", title: "تطورات جديدة في قطاع التكنولوجيا" },
  { id: 7, image: charac4, category: "أسواق", categoryColor: "bg-[#4952870d] text-[#485186]", title: "تحليل أسبوعي لحركة الأسواق" },
  { id: 3, image: charac3, category: "بنوك مصر", categoryColor: "bg-[#b12aa80d] text-[#b12aa8]", title: "مصر تترقب اجتماع البنك المركزي اليوم.. هل حان وقت التيسير النقدي؟" },
  { id: 4, image: charac4, category: "بترول و طاقة", categoryColor: "bg-[#4952870d] text-[#485186]", title: "بنك QNB مصر يوقع بروتوكول تعاون لدعم القطاع الزراعي" },
  { id: 6, image: charac3, category: "تكنولوجيا", categoryColor: "bg-[#b12aa80d] text-[#b12aa8]", title: "تطورات جديدة في قطاع التكنولوجيا" },
  { id: 7, image: charac4, category: "أسواق", categoryColor: "bg-[#4952870d] text-[#485186]", title: "تحليل أسبوعي لحركة الأسواق" },
];

const CharacterSingle = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visibleArticles, setVisibleArticles] = useState(4); 
  const [clickCount, setClickCount] = useState(0); 
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 0);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLoadMore = () => {
    setVisibleArticles(prev => Math.min(prev + 2, newsArticles.length));
    setClickCount(prev => prev + 1);
  };

  return (
    <section className="overflow-x-hidden bg-custom">
      <HeaderLayout />
      <a href="/">
        <div
          className={`max-w-[1470px] relative mx-auto ${
            scrolled ? "top-32" : "top-8"
          } `}
        >
          <img
            className="hidden 3xl:block fixed w-32  left-[calc((100%-1470px)/2+30px)] rounded-md object-cover"
            src={advertisement_2}
            alt="Image"
          />
          <img
            className="hidden 3xl:block fixed w-32  right-[calc((100%-1470px)/2+30px)] rounded-md object-cover"
            src={advertisement_3}
            alt="Image"
          />
        </div>
      </a>

      <main className="container px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex flex-col w-full gap-6 lg:w-2/3">
            <Breadcrumb />

            <MainTitle title="نجيب ساويرس" noMore={true} />
            <AuthorCard
              image={Nageb}
              name="نجيب ساويرس"
              description="رجل أعمال ومستثمر"
              category="الاقتصاد والأعمال"
              link="#"
            />
            <div className="block md:hidden">
              <AdSliderWidget sliderId="2" />
            </div>

            <MainTitle title="تفاصيل عن نجيب ساويرس" noMore={true} />
            <NewsContent
              title="نبذة مختصرة عنه"
              content={[
                "نجيب ساويرس هو رجل أعمال مصري ومستثمر عالمي، يعد واحدًا من أبرز الشخصيات الاقتصادية في العالم العربي.",
                "ولد في 17 يونيو 1954 لعائلة ساويرس الشهيرة، وهو الابن الأكبر لأنسي ساويرس، مؤسس مجموعة أوراسكوم.",
                "بدأ نجيب حياته المهنية في الشركة العائلية، ثم توسع ليصبح من أهم المستثمرين في قطاع الاتصالات والتكنولوجيا.",
                "أدار أوراسكوم تيليكوم التي لعبت دورًا كبيرًا في تطوير قطاع الاتصالات في مصر والعالم، كما أنه مستثمر في مجالات العقارات والإعلام، ويمتلك حصصًا في شركات عالمية كبرى.",
              ]}
            />
            <div className="block md:hidden">
              <AdSliderWidget sliderId="1" />
            </div>

            <MainTitle title="أخر الأخبار" noMore={true} />
            <SpotlightNews articles={newsArticles.slice(0, visibleArticles)} />

            {clickCount < 3 && visibleArticles < newsArticles.length && (
              <div className="flex justify-center mt-4">
                <LoadMoreButton onClick={handleLoadMore} />
              </div>
            )}
          </div>

          <aside className="flex-col self-start hidden w-full gap-4 md:flex md:pl-3 lg:w-1/3 lg:sticky lg:top-48 h-fit">
            <AdSliderWidget sliderId="1" />
            <AdSliderWidget sliderId="2" />
            <AdSliderWidget sliderId="3" />
            {/* <CompanyWidgets /> */}
          </aside>
        </div>
      </main>

      <Footer />
    </section>
  );
};

export default CharacterSingle;
