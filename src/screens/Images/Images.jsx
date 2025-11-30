// Images.jsx
import React, { useState, useEffect } from "react";
import HeaderLayout from "../../components/layout/HeaderLayout";
import advertisement_2 from "../../assets/images/advertisement_2.webp";
import advertisement_3 from "../../assets/images/advertisement_3.webp";
import { SectionTags } from "../../components/sections/BanksTags";
import { HeroSlider } from "../../components/sections/HeroSlider";
import OnTrend_1 from "../../assets/images/OnTrend_2.webp";
import OnTrend_2 from "../../assets/images/OnTrend_2.webp";
import OnTrend_3 from "../../assets/images/OnTrend_3.webp";
import OnTrend_4 from "../../assets/images/OnTrend_4.webp";
import AdvistingSpaceWidget from "../../components/ui/AdvistingSpaceWidget";
import CurrencyWidget from "../../components/ui/CurrencyWidget";
import PriceWidget from "../../components/ui/PriceWidget";
import main_slide_1 from "../../assets/images/main_slide_1.webp";
import NewsSectionImage from "./NewsSectionImage";
import { ClockIcon } from "@heroicons/react/24/outline";
import Realmedrid from "../../assets/images/realmadrid.webp";
import moon from "../../assets/images/moon.webp";
import sun from "../../assets/images/sun.webp";
import ramadan from "../../assets/images/ramadan.webp";
import korya from "../../assets/images/koruya.webp";
import fakar from "../../assets/images/fakar.webp";
import metro from "../../assets/images/metro.webp";
import haga from "../../assets/images/haga.webp";
import walk from "../../assets/images/walkcompany.png";
import money from "../../assets/images/money.png";
import cars from "../../assets/images/cars.png";
import mans from "../../assets/images/mmans.png";
import vape from "../../assets/images/vape.png";
import woman from "../../assets/images/womman.png";
import woman1 from "../../assets/images/woomaaan.png";
import AdSliderWidget from "../../components/sections/AdSliderWidget";
import AppDownloadSection from "../Home/sections/AppDownloadSection/AppDownloadSection";
import { Footer } from "../../components/layout/Footer";
import MainTitle from "../../components/ui/MainTitle";
import NewsWidgets from "../../components/ui/NewsWidgets";
import { Breadcrumb } from "../../components/ui/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, getPostsBySubCategory } from "../../slices/4-post/thunk";
import { useParams } from "react-router-dom";
import { BreadcrumbCategories } from "../../components/ui/BreadcrumbCategories";
import { getSubCategory } from "../../slices/3-subcategory/thunk";
import ComingSoon from "../CommingSoon/ComingSoon";
  const ratesData = [
    { currency: "EGP", label: "الدولار الأمريكي", price: 47.45, change: -0.2 },
    { currency: "EGP", label: "اليورو", price: 55.03, change: 0.1 },
    { currency: "EGP", label: "الجنيه الإسترليني", price: 62.8, change: 0.3 },
  ];

const Images = () => {
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  // const { categorySlug, subcategorySlug } = useParams();
  const { postsBySubCategory } = useSelector((state) => state.Posts);
  const { postsByParams } = useSelector((state) => state.Posts);
  const { categoriesData } = useSelector((state) => state.SubCategories);

  const dispatch = useDispatch();
  const organizePostsBySection = (posts) => {
    if (!posts || posts?.length === 0) return null;

    return {
      mainAlbum: posts.slice(0, 5),
      secondSection: posts.slice(6, 21),
      // topSectionPart2: posts.slice(11, 20),
      // bottomSectionPart1: posts.slice(21, 30),
      // bottomSectionPart2: posts.slice(31, 40),
    };
  };

  const organizedPosts = organizePostsBySection(
    postsBySubCategory?.["photo-album"]
  );
  useEffect(() => {
    setLoading(true);
    // console.log(subcategorySlug);
    dispatch(getPostsBySubCategory({ slug: "photo-album", limit: 24 }));
    dispatch(getPosts({ type: "default", is_active: 1, limit: 8 }));
    dispatch(getSubCategory({ slug: "photo-album" }))
      // dispatch(getTags({ limit: 10, page: 1 }))
      .unwrap()
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch]);
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
  const activePosts =
    postsByParams[JSON.stringify({ type: "default", is_active: 1, limit: 8 })];
  // console.log(activePosts);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-[100vh]">
        <div className="w-12 h-12 border-t-2 border-b-2 rounded-full animate-spin border-primary"></div>
      </div>
    );
  }
  if (organizedPosts?.length === 0 || !organizedPosts) {
    return <ComingSoon />;
  }
  // console.log(organizedPosts?.mainAlbum);
  // console.log(categoriesData["photo-album"]?.[0]);
  return (
    <main className=" w-full min-h-screen bg-[#F8F8FA]">
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
      <section className="container pt-6">
        {/* <Breadcrumb /> */}
        <BreadcrumbCategories
          items={[
            { name: categoriesData["photo-album"]?.[0]?.Category?.name_AR },
            {
              name: categoriesData["photo-album"]?.[0]?.name_AR,
            },
          ]}
        />
        <SectionTags tags={categoriesData["photo-album"][0]?.tags} />
      </section>
      <section className="container flex flex-col pb-12 lg:flex-row">
        <main className="flex flex-col flex-1 w-full gap-8 lg:w-2/3 md:pe-3 ">
          <HeroSlider data={organizedPosts?.mainAlbum} title={false} />

          <section className="flex flex-col items-end w-full gap-5 pb-4 duration-300 md:border md:border-gray-100">
            <NewsSectionImage
              title="أحدث الصور"
              articles={organizedPosts?.secondSection}
            />
          </section>
        </main>

        <aside className="flex flex-col w-full gap-4 lg:w-1/3 md:ps-3 ">
          <AdSliderWidget sliderId="1" />
          <AdSliderWidget sliderId="3" />
          <MainTitle title="اختارنا لك" />
          <NewsWidgets data={activePosts} count={8} />
          <CurrencyWidget rates={ratesData} />
          <PriceWidget
            items={[
              { label: "الذهب", price: 5610, unit: "جنيه", change: +2 },
              { label: "الفضة", price: 75.16, unit: "جنيه", change: +2 },
            ]}
          />
          <AdSliderWidget sliderId="1" />
          <AdSliderWidget sliderId="2" />
          <AppDownloadSection layout="column" />
        </aside>
      </section>

      <Footer />
    </main>
  );
};

export default Images;
