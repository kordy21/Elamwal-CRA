// src/components/ui/Tags.jsx
import React, { useEffect, useState } from "react";
import advertisement_2 from "../../assets/images/advertisement_2.webp";
import advertisement_3 from "../../assets/images/advertisement_3.webp";
import man from "../../assets/images/lol1.webp";
import man2 from "../../assets/images/lol2.webp";
import banlmasr from "../../assets/images/Banks_insurance_2.webp";
import HeaderLayout from "../../components/layout/HeaderLayout";
import { HeroSlider } from "../../components/sections/HeroSlider";
import main_slide_1 from "../../assets/images/salah.webp";
import main_slide_2 from "../../assets/images/salah2.webp";
import MainTitle from "../../components/ui/MainTitle";
import SpotlightNews from "../../components/ui/SpotlightNews";
import LoadMoreButton from "../../components/ui/LoadMoreButton";
import AdSliderWidget from "../../components/sections/AdSliderWidget";
import CurrencyWidget from "../../components/ui/CurrencyWidget";
import PriceWidget from "../../components/ui/PriceWidget";
import GoldWidget from "../../components/ui/GoldWidget";
import { Footer } from "../../components/layout/Footer";
import AdSliderNav from "../Home/sections/AdSlider/AdSlider";
// PriceWidget;
const breakingNews = [
  {
    id: 1,
    category: "كرة القدم",
    title: "محمد صلاح يحتل المركز الرابع في الكرة الذهبية 2025",
    backgroundImage: main_slide_1,
  },
  {
    id: 2,
    category: "كرة القدم",
    title: "عثمان ديمبيلي يفوز بالكرة الذهبية 2025 لأول مرة في مسيرته",
    backgroundImage: main_slide_2,
  },
  {
    id: 3,
    category: "كرة القدم",
    title: "صلاح يواصل التألق مع ليفربول ويرفع آمال الجماهير المصرية",
    backgroundImage: main_slide_1,
  },
  {
    id: 4,
    category: "كرة القدم",
    title: "نقاش واسع حول ترتيب محمد صلاح في الكرة الذهبية 2025",
    backgroundImage: main_slide_2,
  },
  {
    id: 5,
    category: "كرة القدم",
    title: "نقاش واسع حول ترتيب محمد صلاح في الكرة الذهبية 2025",
    backgroundImage: main_slide_2,
  },
];

const newsArticles = [
  {
    id: 1,
    image: main_slide_2,
    category: "كرة القدم",
    categoryColor: "bg-[#2a3eb10d] text-[#b1592a]",
    title: "محمد صلاح يحقق إنجازاً تاريخياً في الكرة الذهبية 2025",
  },
  {
    id: 2,
    image: main_slide_1,
    category: "كرة القدم",
    categoryColor: "bg-[#4952870d] text-[#485186]",
    title: "ديمبيلي يفوز بالكرة الذهبية لأول مرة",
  },
  {
    id: 3,
    image: main_slide_2,
    category: "كرة القدم",
    categoryColor: "bg-[#b12aa80d] text-[#b12aa8]",
    title: "صلاح يتصدر قائمة الهدافين في الدوري الإنجليزي",
  },
  {
    id: 4,
    image: main_slide_1,
    category: "كرة القدم",
    categoryColor: "bg-[#4952870d] text-[#485186]",
    title: "نقاش واسع حول ترتيب صلاح في الكرة الذهبية 2025",
  },
  {
    id: 5,
    image: main_slide_2,
    category: "كرة القدم",
    categoryColor: "bg-[#b12aa80d] text-[#b12aa8]",
    title: "ليفربول يمدد عقد محمد صلاح حتى 2027",
  },
  {
    id: 6,
    image: main_slide_2,
    category: "كرة القدم",
    categoryColor: "bg-[#2a3eb10d] text-[#b1592a]",
    title: "محمد صلاح يقترب من تحطيم رقم قياسي جديد",
  },
  {
    id: 7,
    image: main_slide_1,
    category: "كرة القدم",
    categoryColor: "bg-[#4952870d] text-[#485186]",
    title: "إشادة عالمية بأداء صلاح في دوري الأبطال",
  },
  {
    id: 8,
    image: main_slide_2,
    category: "كرة القدم",
    categoryColor: "bg-[#b12aa80d] text-[#b12aa8]",
    title: "محمد صلاح مرشح لجائزة أفضل لاعب في إنجلترا",
  },
];
  const ratesData = [
    { currency: "EGP", label: "الدولار الأمريكي", price: 47.45, change: -0.2 },
    { currency: "EGP", label: "اليورو", price: 55.03, change: 0.1 },
    { currency: "EGP", label: "الجنيه الإسترليني", price: 62.8, change: 0.3 },
  ];
const News = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visibleCompanies, setVisibleCompanies] = useState(8);
  const [visibleNews, setVisibleNews] = useState(4);
  const [newsClickCount, setNewsClickCount] = useState(0);

  const handleLoadMoreCompanies = () => setVisibleCompanies((prev) => prev + 4);
  const handleLoadMoreNews = () => {
    setVisibleNews((prev) => prev + 2);
    setNewsClickCount((prev) => prev + 1);
  };
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
  return (
    <section>
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
      <div className="container flex flex-col py-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-0">
          <main className="flex flex-col flex-1 w-full gap-8 md:pe-3 lg:w-2/3">
            <MainTitle title="   صلاح يحصل علي الكره الذهبية " noMore={true} />
            <HeroSlider
              breakingNews={breakingNews}
              showButton={false}
              title={false}
            />
            <AdSliderNav noMargin={true} />
            <SpotlightNews articles={newsArticles.slice(0, visibleNews)} />

            {visibleNews < newsArticles.length && (
              <div className="flex justify-center text-center">
                <LoadMoreButton onClick={handleLoadMoreNews} />
              </div>
            )}
          </main>
          <aside className="flex-col self-start hidden w-full gap-4 md:ps-3 lg:w-1/3 lg:sticky lg:top-48 h-fit md:flex">
            {/* <AdvistingSpaceWidget count={2} /> */}
            <AdSliderWidget sliderId="2" />
            <AdSliderWidget sliderId="3" />
            <CurrencyWidget rates={ratesData} />

            <PriceWidget
              items={[
                { label: "الذهب", price: 5610, unit: "جنيه", change: +2 },
                { label: "الفضة", price: 75.16, unit: "جنيه", change: +2 },
              ]}
            />
            <section className="hidden md:block">
              <GoldWidget
            items={[
                    {
                      label: "عيار 24",
                      price: "6411.5",
                      unit: "EGP",
                      change: +0.1,
                    },
                    {
                      label: "عيار 21",
                      price: "5610",
                      unit: "EGP",
                      change: +0.1,
                    },
                    {
                      label: "عيار 18",
                      price: "4808.5",
                      unit: "EGP",
                      change: +0.1,
                    },
                  ]}
              />
            </section>
          </aside>
          <aside className="flex-col self-start w-full gap-4 md:ps-3 lg:hidden lg:sticky lg:top-48 h-fit md:hidden">
            {/* <AdvistingSpaceWidget count={2} /> */}
            <div className="pb-5">
              <AdSliderWidget sliderId="2" />
            </div>
            <div className="pb-5">
              <AdSliderWidget sliderId="2" />
            </div>{" "}
            <div className="pb-5">
              <CurrencyWidget rates={ratesData} />
            </div>
            <PriceWidget
              items={[
                { label: "الذهب", price: 5610, unit: "جنيه", change: +2 },
                { label: "الفضة", price: 75.16, unit: "جنيه", change: +2 },
              ]}
            />
          </aside>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default News;
