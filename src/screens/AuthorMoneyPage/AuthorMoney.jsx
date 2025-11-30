import React, { useState, useEffect } from "react";
import HeaderLayout from "../../components/layout/HeaderLayout";
import advertisement_2 from "../../assets/images/advertisement_2.webp";
import advertisement_3 from "../../assets/images/advertisement_3.webp";
import AdSliderWidget from "../../components/sections/AdSliderWidget";
import MainTitle from "../../components/ui/MainTitle";
import { SectionTags } from "../../components/sections/BanksTags";
import ProfileCards from "../../components/ui/ProfileCards";
import LoadMoreButton from "../../components/ui/LoadMoreButton";
import katab1 from "../../assets/images/katab1.webp";
import katab2 from "../../assets/images/katab2.webp";
import katab3 from "../../assets/images/katab3.webp";
import katab4 from "../../assets/images/katab4.webp";
import katab5 from "../../assets/images/katab5.webp";
import katab6 from "../../assets/images/katab6.webp";
import katab7 from "../../assets/images/katab7.webp";
import katab8 from "../../assets/images/hoda.webp";
const MansDATA = [
  { logo: katab1, title: " فارس البدر", description: " رياضية " },
  {
    logo: katab2,
    title: "سميرة الجندي ",
    description: "ثقافة وفنون",
  },
  { logo: katab3, title: "علي الشافعي ", description: "  تكنولوجيا" },
  { logo: katab4, title: " محمود القيسي", description: "بيئة وتغير مناخي" },
  { logo: katab5, title: " ليلى المعمري", description: "  تعليم وتدريب" },
  {
    logo: katab6,
    title: " يوسف الرفاعي",
    description: "سياحة و سفر",
  },
  { logo: katab7, title: "نورا سعيد ", description: "  صحة و جمال" },
  { logo: katab8, title: "هدى خليفة", description: "  سياسة و اقتصاد" },
  { logo: katab4, title: "نجيب ساويرس", description: "رجل أعمال ومستثمر" },
  { logo: katab3, title: "علي الشافعي ", description: "  تكنولوجيا" },

  {
    logo: katab2,
    title: "سميرة الجندي ",
    description: "ثقافة وفنون",
  },
  { logo: katab1, title: " فارس البدر", description: " رياضية " },
];
const AuthorMoney = () => {
  const [scrolled, setScrolled] = useState(false);

  const [visibleCompanies, setVisibleCompanies] = useState(8);
  const [visibleNews, setVisibleNews] = useState(4);
  const [newsClickCount, setNewsClickCount] = useState(0); 


  const handleLoadMoreCompanies = () =>
    setVisibleCompanies((prev) => prev + 4);
  const handleLoadMoreNews = () => {
    setVisibleNews((prev) => prev + 2);
    setNewsClickCount((prev) => prev + 1);
  };
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
      <div className="container flex flex-col gap-6 py-8 lg:flex-row">
        <main className="flex flex-col flex-1 w-full gap-6 lg:gap-8 md:pe-3 lg:w-2/3">
          <MainTitle title="كتاب الاموال" noMore={true} />
          <SectionTags title="no" />
          <ProfileCards data={MansDATA.slice(0, visibleCompanies)} />

          {visibleCompanies < MansDATA.length && (
            <div className="flex justify-center text-center">
              <LoadMoreButton onClick={handleLoadMoreCompanies} />
            </div>
          )}
        </main>

        <aside className="flex flex-col w-full gap-6 px-0 mt-8 lg:w-1/3 lg:sticky lg:top-48 h-fit lg:px-3 md:flex">
          <AdSliderWidget sliderId="1" />
          <AdSliderWidget sliderId="3" />
        </aside>
      </div>
    </section>
  );
};

export default AuthorMoney;
