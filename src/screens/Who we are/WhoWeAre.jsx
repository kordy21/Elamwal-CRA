import React, { useState, useEffect } from "react";
import HeaderLayout from "../../components/layout/HeaderLayout";
import advertisement_2 from "../../assets/images/advertisement_2.webp";
import advertisement_3 from "../../assets/images/advertisement_3.webp";
import MainTitle from "../../components/ui/MainTitle";
import NewsContent from "../../components/ui/NewsContent";
import AdSliderWidget from "../../components/sections/AdSliderWidget";
import { Footer } from "../../components/layout/Footer";
const WhoWeAre = () => {
  const [scrolled, setScrolled] = useState(false);

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
      <main className="flex flex-col lg:flex-row container py-8">
        <div className="flex flex-col flex-1 w-full gap-8 md:pe-3   lg:w-2/3 order-1 lg:order-1">
          <MainTitle title="من نحن" noMore={true} />
          <NewsContent
            title="عن الأموال"
            content={[
              'منصة "الأموال" هي وجهتك الأولى للأخبار الاقتصادية والمالية الموثوقة والعميقة. نغطي بوضوح ومهنية أخبار البنوك والتأمين، الاستثمار والأسواق المالية، السياحة والنقل، العقارات، الطاقة، الرياضة، الفنون، وغيرها من الموضوعات ذات الصلة.',
              "نلتزم بدقة نقل الأخبار وتحليل السياق الاقتصادي، من خلال فريق صحفي متميز يسعى لتقديم محتوى يثري القارئ ويقدم رؤية شاملة للأحداث والمتغيرات.",
              'هدفنا هو تزويد جمهورنا بالمعلومات التي تمكن صناع القرار والمستثمرين والمهتمين بفهم ديناميكيات الأسواق واتخاذ قرارات مبنية على معرفة ووعي. منصة "الأموال" — حيث تتحول المعلومات إلى قيمة فعلية.',
            ]}
          />
        </div>

        <aside className="flex flex-col self-start w-full gap-4 pt-8 md:py-0  md:ps-3   lg:w-1/3 lg:sticky lg:top-48 h-fit order-2 lg:order-2">
          <AdSliderWidget sliderId="1" />
          <AdSliderWidget sliderId="2" />
        </aside>
      </main>

      <Footer />
    </section>
  );
};

export default WhoWeAre;
