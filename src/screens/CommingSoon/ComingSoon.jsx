import React, { useState, useEffect } from "react";
import HeaderLayout from "../../components/layout/HeaderLayout";
import advertisement_2 from "../../assets/images/advertisement_2.webp";
import advertisement_3 from "../../assets/images/advertisement_3.webp";
import AdSliderWidget from "../../components/sections/AdSliderWidget";
import CurrencyWidget from "../../components/ui/CurrencyWidget";
import GoldWidget from "../../components/ui/GoldWidget";
import PriceWidget from "../../components/ui/PriceWidget";
import { SidbarNewsSection } from "../../components/sections/SidbarNewsSection";
import AppDownloadSection from "../Home/sections/AppDownloadSection/AppDownloadSection";
import MainTitle from "../../components/ui/MainTitle";
import { Footer } from "../../components/layout/Footer";
const ComingSoon = ({ search }) => {
  const [scrolled, setScrolled] = useState(false);
  const ratesData = [
    { currency: "USD", label: "الدولار الأمريكي", price: 30.5, change: 0.2 },
    { currency: "EUR", label: "اليورو", price: 33.2, change: -0.1 },
    { currency: "GBP", label: "الجنيه الإسترليني", price: 38.0, change: 0.3 },
  ];
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full min-h-screen bg-white">
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
      <div className="container flex flex-col py-8 lg:flex-row">
        <main className="flex min-h-screen py-6 lg:w-2/3 md:pe-3 lg:sticky lg:top-60 h-fit ">
          <div className="w-full p-12 bg-white bg-gradient-to-r rounded-2xl ">
            <MainTitle title={search ? "البحث" : "قريبا"} noMore={true} />
            {search ? (
              <h1 className="mt-5 text-lg font-semibold leading-relaxed tracking-wide text-center text-gray-800 md:text-xl lg:text-2xl lg:mt-0">
                لا توجد نتائج مطابقة لبحثك
              </h1>
            ) : (
              <h1 className="mt-5 text-lg font-semibold leading-relaxed tracking-wide text-center text-gray-800 md:text-xl lg:text-2xl lg:mt-0">
                جاري العمل على هذا القسم، انتظرونا في تطبيق جريدة الأموال
              </h1>
            )}
          </div>
        </main>

        <aside className="flex flex-col self-start hidden w-full gap-6 lg:flex lg:w-1/3 ">
          <AdSliderWidget sliderId="1" />
          <AdSliderWidget sliderId="2" />
          <SidbarNewsSection title="اخترنا لكم" />
          <PriceWidget
            title="أسعار السلع"
            items={[
              { label: "الذهب", price: 5610, unit: "جنيه", change: +2 },
              { label: "الفضة", price: 75.16, unit: "جنيه", change: +2 },
            ]}
          />
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
          <CurrencyWidget rates={ratesData} />
          <AdSliderWidget sliderId="2" />
          <AdSliderWidget sliderId="3" />
          <AppDownloadSection layout="column" />
        </aside>
        <aside className="flex flex-col self-start w-full gap-6 lg:hidden lg:w-1/3 lg:sticky lg:top-48 h-fit ">
          <AdSliderWidget sliderId="1" />
          <AdSliderWidget sliderId="2" />
          <AppDownloadSection layout="column" />
        </aside>
      </div>
      <Footer />
    </section>
  );
};

export default ComingSoon;
