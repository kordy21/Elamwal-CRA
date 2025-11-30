// src/components/ui/Tags.jsx
import React, { useEffect, useState } from "react";
import advertisement_2 from "../../assets/images/advertisement_2.webp";
import advertisement_3 from "../../assets/images/advertisement_3.webp";
import man from "../../assets/images/lol1.webp";
import man2 from "../../assets/images/lol2.webp";
import banlmasr from "../../assets/images/Banks_insurance_2.webp";
import HeaderLayout from "../../components/layout/HeaderLayout";
import { HeroSlider } from "../../components/sections/HeroSlider";
import main_slide_1 from "../../assets/images/main_slide_1.webp";
import MainTitle from "../../components/ui/MainTitle";
import SpotlightNews from "../../components/ui/SpotlightNews";
import LoadMoreButton from "../../components/ui/LoadMoreButton";
import AdSliderWidget from "../../components/sections/AdSliderWidget";
import CurrencyWidget from "../../components/ui/CurrencyWidget";
import PriceWidget from "../../components/ui/PriceWidget";
import GoldWidget from "../../components/ui/GoldWidget";
import { Footer } from "../../components/layout/Footer";
import { getTags, getTagsBySlug } from "../../slices/1-tags/thunk";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BreadcrumbCategories } from "../../components/ui/BreadcrumbCategories";

const breakingNews = [
  {
    id: 1,
    category: "البورصة المصرية",
    title: "زيارة «ماكرون» تحد من خسائر البورصة المصرية بختام اليوم الاثنين",
    backgroundImage: main_slide_1,
  },
  {
    id: 2,
    category: "الاقتصاد",
    title: "ارتفاع معدلات النمو الاقتصادي في مصر خلال الربع الأول من العام",
    backgroundImage: main_slide_1,
  },
  {
    id: 3,
    category: "الاستثمار",
    title: "توقيع اتفاقيات استثمارية جديدة بقيمة 5 مليارات دولار",
    backgroundImage: main_slide_1,
  },
  {
    id: 4,
    category: "الاقتصاد",
    title: "ارتفاع معدلات النمو الاقتصادي في مصر خلال الربع الأول من العام",
    backgroundImage: main_slide_1,
  },
  {
    id: 5,
    category: "الاستثمار",
    title: "توقيع اتفاقيات استثمارية جديدة بقيمة 5 مليارات دولار",
    backgroundImage: main_slide_1,
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
    title: "انخفاض أسعار النفط لادنى مستوى في 4 سنوات",
  },
  {
    id: 3,
    image: banlmasr,
    category: "فنون",
    categoryColor: "bg-[#b12aa80d] text-[#b12aa8]",
    title: "جلسة تصوير تتحول لوصلة رقص.. تارا و أحمد مالك...",
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
    category: "فنون",
    categoryColor: "bg-[#b12aa80d] text-[#b12aa8]",
    title: "جلسة تصوير تتحول لوصلة رقص.. تارا و أحمد مالك...",
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
    category: "بترول و طاقة",
    categoryColor: "bg-[#4952870d] text-[#485186]",
    title: "مصر ترفع أسعار البنزين والسولار...",
  },

  {
    id: 3,
    image: banlmasr,
    category: "فنون",
    categoryColor: "bg-[#b12aa80d] text-[#b12aa8]",
    title: "جلسة تصوير تتحول لوصلة رقص.. تارا و أحمد مالك...",
  },
];

const ratesData = [
  { currency: "EGP", label: "الدولار الأمريكي", price: 47.45, change: -0.2 },
  { currency: "EGP", label: "اليورو", price: 55.03, change: 0.1 },
  { currency: "EGP", label: "الجنيه الإسترليني", price: 62.8, change: 0.3 },
];

const Tags = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visibleCompanies, setVisibleCompanies] = useState(8);
  const [visibleNews, setVisibleNews] = useState(18);
  const [newsClickCount, setNewsClickCount] = useState(0);
  const { tagSlug } = useParams();
  // const { tags, } = useSelector((state) => state.Tags);
  const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState([]);
  // const [limit, setLimit] = useState(25);

  const dispatch = useDispatch();

  const handleLoadMoreCompanies = () => setVisibleCompanies((prev) => prev + 4);
  const handleLoadMoreNews = () => {
    setVisibleNews((prev) => prev + 2);
    setNewsClickCount((prev) => prev + 1);
  };

  // useEffect(() => {
  //   const isMobile = window.innerWidth < 768;

  //   if (isMobile) {
  //     setLimit(9);
  //   } else {
  //     setLimit(25);
  //   }
  // }, []);

  useEffect(() => {
    const fetchDataSequentially = async () => {
      try {
        setLoading(true);

        let response;
        // console.log(tagSlug);
        response = await dispatch(
          getTagsBySlug(decodeURIComponent(tagSlug))
        ).unwrap();

        // console.log("✅ Posts fetched:", response?.data?.[0]);
        const newPosts = response?.data?.[0] || response;
        if (newPosts?.length === 0) {
          // setHasMore(false);
          setTag(newPosts);
        }
        setTag(newPosts);
      } catch (error) {
        console.error("❌ Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataSequentially();
  }, [dispatch]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //   };
  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // console.log("Tags:", tags);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[100vh]">
        <div className="w-12 h-12 border-t-2 border-b-2 rounded-full animate-spin border-primary"></div>
      </div>
    );
  }

  // if (tags?.[0]?.Posts?.length === 0) {
  //   return <ComingSoon />;
  // }
  // console.log("Tags:", tag);
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
      <div className="container flex flex-col pt-6">
        <BreadcrumbCategories
          items={[
            {
              name: "الوسوم",
            },
            {
              name: tag?.name_AR || "",
            },
          ]}
        />

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-0">
          <main className="flex flex-col flex-1 w-full gap-8 md:pe-3 lg:w-2/3">
            <MainTitle title={tag?.name_AR} noMore={true} />
            <HeroSlider
              data={tag?.Posts?.slice(0, 5)}
              showButton={false}
              title={false}
              tags={true}
            />
            <SpotlightNews articles={tag?.Posts?.slice(0, visibleNews)} />

            {visibleNews < tag?.Posts?.length && (
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

export default Tags;
