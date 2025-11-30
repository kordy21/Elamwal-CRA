import React, { useState, useEffect } from "react";
import HeaderLayout from "../../components/layout/HeaderLayout";
import advertisement_2 from "../../assets/images/advertisement_2.webp";
import advertisement_3 from "../../assets/images/advertisement_3.webp";
import MainTitle from "../../components/ui/MainTitle";
import AdSliderWidget from "../../components/sections/AdSliderWidget";
import { SectionTags } from "../../components/sections/BanksTags";
import ProfileCards from "../../components/ui/ProfileCards";
import bankalhly from "../../assets/images/bankalahly.webp";
import al3arby from "../../assets/images/bankalaraby.webp";
import bankalex from "../../assets/images/bankalex.webp";
import bankalaskan from "../../assets/images/bankalaskan.webp";
import LoadMoreButton from "../../components/ui/LoadMoreButton";
import SpotlightNews from "../../components/ui/SpotlightNews";
import man from "../../assets/images/lol1.webp";
import man2 from "../../assets/images/astsharyaktsad.webp";
import banlmasr from "../../assets/images/astrategy.webp";
import { ClockIcon } from "@heroicons/react/24/outline";
import { Footer } from "../../components/layout/Footer";
import CompanyWidgets from "../../components/sections/CompanyWidgets";
import { Breadcrumb } from "../../components/ui/Breadcrumb";

const MansDATA = [
  { logo: bankalhly, title: "NBE", description: "بنك الاهلى المصرى   " },
  {
    logo: al3arby,
    title: "Arab African International Bank ",
    description: "  بنك العربى الافريقى     ",
  },
  {
    logo: bankalex,
    title: "Bank of Alexandria ",
    description: "  بنك الاسكندرية",
  },
  {
    logo: bankalaskan,
    title: "Housing and Construction Bank ",
    description: "    بنك الاسكان والتعمير",
  },
  { logo: bankalhly, title: "NBE", description: "بنك الاهلى المصرى   " },
  {
    logo: al3arby,
    title: "Arab African International Bank ",
    description: "  بنك العربى الافريقى     ",
  },
  {
    logo: bankalex,
    title: "Bank of Alexandria ",
    description: "  بنك الاسكندرية",
  },
  {
    logo: bankalaskan,
    title: "Housing and Construction Bank ",
    description: "    بنك الاسكان والتعمير",
  },
  { logo: bankalhly, title: "NBE", description: "بنك الاهلى المصرى   " },
  {
    logo: al3arby,
    title: "Arab African International Bank ",
    description: "  بنك العربى الافريقى     ",
  },
  {
    logo: bankalex,
    title: "Bank of Alexandria ",
    description: "  بنك الاسكندرية",
  },
  {
    logo: bankalaskan,
    title: "Housing and Construction Bank ",
    description: "    بنك الاسكان والتعمير",
  },
];

const newsArticles = [
  {
    id: 1,
    image: man,
    category: "مركز الاموال",
    categoryColor: "bg-[#2a3eb10d] text-[#b1592a]",
    title: "اجتماع فريق عمل مؤسسة شباب القادة...",
  },
  {
    id: 2,
    image: man2,
    category: "بترول و طاقة",
    categoryColor: "bg-[#4952870d] text-[#485186]",
    title:
      "    خبير اقتصادي: تخفيض الفائدة يسهم في تقليص أعباء الدين العام بنحو 93... ",
  },
  {
    id: 3,
    image: banlmasr,
    category: "الاقتصاد المصري",
    categoryColor: "bg-[#b12aa80d] text-[#b12aa8]",
    title: "استراتيجيات متقدمة.. وزير البترول يكشف مستقبل قطاع الطاقة",
  },
  {
    id: 4,
    image: banlmasr,
    category: "بترول و طاقة",
    categoryColor: "bg-[#4952870d] text-[#485186]",
    title: "مصر ترفع أسعار البنزين والسولار...",
  },
  {
    id: 3,
    image: banlmasr,
    category: "الاقتصاد المصري",
    categoryColor: "bg-[#b12aa80d] text-[#b12aa8]",
    title: "استراتيجيات متقدمة.. وزير البترول يكشف مستقبل قطاع الطاقة",
  },
  {
    id: 1,
    image: man,
    category: "مركز الاموال",
    categoryColor: "bg-[#2a3eb10d] text-[#b1592a]",
    title: "اجتماع فريق عمل مؤسسة شباب القادة...",
  },
  {
    id: 4,
    image: banlmasr,
    category: "  الاقتصاد المصري",
    categoryColor: "bg-[#4952870d] text-[#485186]",
    title: "استراتيجيات متقدمة.. وزير البترول يكشف مستقبل قطاع الطاقة",
  },

  {
    id: 3,
    image: banlmasr,
    category: "الاقتصاد المصري",
    categoryColor: "bg-[#b12aa80d] text-[#b12aa8]",
    title: "استراتيجيات متقدمة.. وزير البترول يكشف مستقبل قطاع الطاقة.",
  },
];

const FinancialFootprint = () => {
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
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#F8F8FA]">
      <div className="relative w-full bg-[#F8F8FA]">
        <HeaderLayout />
        {/* Side Advertisement Images */}
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

        <section className="container flex flex-col py-6">
          <div className="flex flex-col lg:flex-row">
            <main className="flex flex-col flex-1 w-full gap-6 lg:gap-8 md:pe-3 lg:w-2/3">
              <Breadcrumb />
              <MainTitle title="  بصمات مصرفية" noMore={true} />
              <SectionTags title="no" />

              <ProfileCards data={MansDATA.slice(0, visibleCompanies)} />

              {visibleCompanies < MansDATA.length && (
                <div className="flex justify-center text-center">
                  <LoadMoreButton onClick={handleLoadMoreCompanies} />
                </div>
              )}

              <MainTitle title="أخر الأخبار" noMore={true} />
              <SpotlightNews articles={newsArticles.slice(0, visibleNews)} />

              {visibleNews < newsArticles.length && (
                <div className="flex justify-center text-center">
                  <LoadMoreButton onClick={handleLoadMoreNews} />
                </div>
              )}
            </main>

            {/* Sidebar */}
            <aside className="flex flex-col w-full gap-6 px-0 mt-8 lg:w-1/3 lg:sticky lg:top-48 h-fit lg:px-3 md:flex">
              <AdSliderWidget sliderId="1" />
              <AdSliderWidget sliderId="2" />
              {/* <CompanyWidgets /> */}
              <AdSliderWidget sliderId="3" />
            </aside>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default FinancialFootprint;
