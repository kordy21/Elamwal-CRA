import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Footer } from "../../components/layout/Footer";
import advertisement_2 from "../../assets/images/advertisement_2.webp";
import advertisement_3 from "../../assets/images/advertisement_3.webp";
import PriceWidget from "../../components/ui/PriceWidget";
import GoldWidget from "../../components/ui/GoldWidget";
import CurrencyWidget from "../../components/ui/CurrencyWidget";
import AppDownloadSection from "../Home/sections/AppDownloadSection/AppDownloadSection";
import AdSliderWidget from "../../components/sections/AdSliderWidget";
// Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SectionTags } from "../../components/sections/BanksTags";
import { SidbarNewsSection } from "../../components/sections/SidbarNewsSection";
import { CategoreySlider } from "./sections/CategoreySlider";
import HeaderLayout from "../../components/layout/HeaderLayout";
import SpotlightNews from "../../components/ui/SpotlightNews";
import AdSliderNav from "../Home/sections/AdSlider/AdSlider";
import BanksList from "../../components/ui/BanksList";
import LoadMoreButton from "../../components/ui/LoadMoreButton";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BreadcrumbCategories } from "../../components/ui/BreadcrumbCategories";
import { getSubCategory } from "../../slices/3-subcategory/thunk";
import { getPosts, getPostsBySubCategory } from "../../slices/4-post/thunk";
import ComingSoon from "../CommingSoon/ComingSoon";

export const Categorey = ({ other }) => {
  const { categorySlug, subcategorySlug } = useParams();

  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isBanksPage = subcategorySlug === "banks";
  const dispatch = useDispatch();
  const { categoriesData } = useSelector((state) => state.SubCategories);
  const { postsByParams, meta } = useSelector((state) => state.Posts);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(25);
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      setLimit(9);
    } else {
      setLimit(25);
    }
  }, []);

  useEffect(() => {
    const fetchDataSequentially = async () => {
      try {
        setLoading(true);

        let response;
        // console.log("kordy");
        if (!other) {
          const subCategoryData = await dispatch(
            getSubCategory({ slug: subcategorySlug })
          ).unwrap();

          // console.log("🟢 subCategoryData:", subCategoryData);
          const parentId = subCategoryData?.[0]?.id;
          // console.log("🟢 parentId:", parentId);

          response = await dispatch(
            getPosts({
              // is_trending: 1,
              type: "default",
              page,
              limit,
              parentSubCategoryId: parentId,
            })
          ).unwrap();
        } else if (other === "breaking") {
          // console.log("here in breaking");
          response = await dispatch(
            getPosts({
              is_featured: 1,
              type: "default",
              page,
              limit,
            })
          ).unwrap();
        } else if (other === "on-trend") {
          // console.log("here in breaking");
          response = await dispatch(
            getPosts({
              is_trending: 1,
              type: "default",
              page,
              limit,
            })
          ).unwrap();
        }

        // console.log("✅ Posts fetched:", response);
        const newPosts = response.data || response;
        if (newPosts?.length === 0) {
          setHasMore(false);
        } else {
          setAllPosts((prev) =>
            page === 1 ? newPosts : [...prev, ...newPosts]
          );
        }
      } catch (error) {
        console.error("❌ Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataSequentially();
  }, [subcategorySlug, page, limit, other, dispatch]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
    // setLimit(limit);
  };
  // const posts = postsBySubCategory?.[subcategorySlug] || [];

  useEffect(() => {
    if (
      meta?.filteredCount &&
      allPosts?.length >= meta?.filteredCount &&
      (organizedPosts?.Section3?.length > 4 ||
        organizedPosts?.Section2.length > 4)
    ) {
      setHasMore(false);
    } else {
      setHasMore(true);
    }
  }, [meta]);

  // console.log(meta?.filteredCount);
  // console.log(allPosts?.length);
  const ratesData = [
    { currency: "EGP", label: "الدولار الأمريكي", price: 47.45, change: -0.2 },
    { currency: "EGP", label: "اليورو", price: 55.03, change: 0.1 },
    { currency: "EGP", label: "الجنيه الإسترليني", price: 62.8, change: 0.3 },
  ];

  const organizePostsBySection = (posts) => {
    if (!posts || posts.length === 0) return null;

    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      return {
        mainSlider: posts.slice(0, 5),
        Section1: posts.slice(5, 7),
        Section2: posts.slice(7),
      };
    } else {
      return {
        mainSlider: posts.slice(0, 5),
        Section1: posts.slice(5, 9),
        Section2: posts.slice(9, 13),
        Section3: posts.slice(13),
      };
    }
  };

  const postsToDisplay = allPosts;
  const organizedPosts = organizePostsBySection(postsToDisplay);

  if (loading && page === 1) {
    return (
      <div className="flex items-center justify-center h-[100vh]">
        <div className="w-12 h-12 border-t-2 border-b-2 rounded-full animate-spin border-primary"></div>
      </div>
    );
  }

  if (postsToDisplay?.length === 0 || !organizedPosts) {
    return <ComingSoon />;
  }
  // console.log(categoriesData[subcategorySlug]?.[0]?.id);
  return (
    <div className="w-full min-h-screen bg-[#F8F8FA]" dir="rtl">
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
        <div className="container pt-6">
          <BreadcrumbCategories
            items={[
              {
                name:
                  categoriesData[subcategorySlug]?.[0]?.Category?.name_AR ||
                  "أخبار",
              },
              {
                name: categoriesData[subcategorySlug]?.[0]?.name_AR
                  ? categoriesData[subcategorySlug]?.[0]?.name_AR
                  : other === "on-trend"
                  ? "On-Trend"
                  : other === "breaking"
                  ? "عاجل"
                  : "أخبار",
              },
            ]}
          />
          {!other && (
            <SectionTags tags={categoriesData[subcategorySlug]?.[0]?.tags} />
          )}

          <div className="flex flex-col mb-8 md:mb-12 lg:flex-row">
            <main className="flex-col flex-1 hidden gap-6 md:flex lg:w-2/3 lg:pe-3">
              {/* Slider first 5 */}
              <CategoreySlider
                sliderArticles={organizedPosts?.mainSlider}
                title={
                  categoriesData[subcategorySlug]?.[0]?.name_AR
                    ? categoriesData[subcategorySlug][0].name_AR
                    : other === "on-trend"
                    ? "On-Trend"
                    : other === "breaking"
                    ? "عاجل"
                    : "أخبار"
                }
              />

              <SpotlightNews
                articles={organizedPosts?.Section1}
                categorey={other}
              />
              {organizedPosts?.Section1 &&
                organizedPosts?.Section1.length > 0 && (
                  <AdSliderNav noMargin={true} />
                )}

              <SpotlightNews
                articles={organizedPosts?.Section2}
                categorey={other}
              />
              {organizedPosts?.Section2 &&
                organizedPosts?.Section2.length > 0 && (
                  <AdSliderNav noMargin={true} />
                )}
              {/* <AdSliderNav noMargin={true} /> */}
              <section>
                <SpotlightNews
                  articles={organizedPosts?.Section3}
                  categorey={other}
                />
                {/* Show More Button */}
                {hasMore ||
                  organizedPosts.Section1.length === 0 ||
                  organizedPosts.Section2.length === 0 ||
                  (organizedPosts.Section3.length === 0 && !loading && (
                    <div className="flex justify-center mt-6">
                      <LoadMoreButton
                        onClick={handleLoadMore}
                        text="عرض المزيد"
                      />
                    </div>
                  ))}
              </section>
            </main>

            <main className="flex flex-col flex-1 w-full gap-6 md:hidden">
              {/* Slider first 5 */}
              <CategoreySlider
                sliderArticles={organizedPosts?.mainSlider}
                title={
                  categoriesData[subcategorySlug]?.[0]?.name_AR
                    ? categoriesData[subcategorySlug][0].name_AR
                    : other === "on-trend"
                    ? "On-Trend"
                    : other === "breaking"
                    ? "عاجل"
                    : "أخبار"
                }
              />

              {/* First 12 articles + ads between them */}
              <SpotlightNews
                articles={organizedPosts?.Section1}
                categorey={other}
              />
              <AdSliderNav noMargin={true} />

              <section>
                <SpotlightNews
                  articles={organizedPosts?.Section2}
                  categorey={other}
                />

                {/* Show More Button */}
                {/* <>{console.log(hasMore)}</>
                <>{console.log(organizedPosts.Section2.length === 4)}</> */}
                {hasMore &&
                  !(allPosts?.length === meta?.filteredCount) &&
                  !loading && (
                    <div className="flex justify-center mt-6">
                      <LoadMoreButton
                        onClick={handleLoadMore}
                        text="عرض المزيد"
                      />
                    </div>
                  )}
              </section>

              {/* Extra sections for mobile */}
              {isBanksPage && <BanksList className="mt-5" />}

              <section className="mt-8">
                <PriceWidget
                  title="أسعار السلع"
                  items={[
                    { label: "الذهب", price: 5610, unit: "جنيه", change: +2 },
                    { label: "الفضة", price: 75.16, unit: "جنيه", change: +2 },
                  ]}
                />
              </section>

              <section className="mt-8">
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

              <div className="py-5">
                <AppDownloadSection layout="column" />
              </div>
            </main>

            {/* <main className="w-full md:hidden">
              <CategoreySlider
                sliderArticles={fakeselectedSubCategory.slice(0, 5)}
                title={selectedSubCategory?.name_AR}
              />

              {Array.from({ length: 3 }).map((_, index) => {
                const start = 5 + index * 4;
                const end = start + 4;
                if (start >= fakeselectedSubCategory.length) return null;

                return (
                  <React.Fragment key={`mobile-block-${index}`}>
                    <SpotlightNews
                      articles={fakeselectedSubCategory.slice(start, end)}
                      startIndex={0}
                      limit={4}
                    />

                    {index < 2 && <AdSliderNav noMargin={true} />}
                  </React.Fragment>
                );
              })}

              {Array.from({
                length: Math.ceil(
                  Math.max(0, visibleNews - 12) / 4 
                ),
              }).map((_, index) => {
                const start = 17 + index * 4; 
                const end = start + 4;
                if (start >= 5 + visibleNews) return null;

                return (
                  <SpotlightNews
                    key={`mobile-more-${index}`}
                    articles={fakeselectedSubCategory.slice(start, end)}
                    startIndex={0}
                    limit={4}
                  />
                );
              })}

              {5 + visibleNews < fakeselectedSubCategory.length && (
                <div className="flex justify-center mt-8 text-center">
                  <LoadMoreButton
                    onClick={() => setVisibleNews((prev) => prev + 4)}
                    text="عرض المزيد"
                  />
                </div>
              )}

              {isBanksPage && <BanksList className="mt-5" />}

              <section className="mt-8">
                <PriceWidget
                  title="أسعار السلع"
                  items={[
                    { label: "الذهب", price: 2500, unit: "جنيه", change: +15 },
                    { label: "الفضة", price: 35, unit: "جنيه", change: -2 },
                  ]}
                />
              </section>

              <section className="mt-8">
                <GoldWidget
                  items={[
                    {
                      label: "عيار 24",
                      price: "3200",
                      unit: "EGP",
                      change: -0.5,
                    },
                    {
                      label: "عيار 21",
                      price: "2800",
                      unit: "EGP",
                      change: +0.3,
                    },
                    {
                      label: "عيار 18",
                      price: "2400",
                      unit: "EGP",
                      change: +0.1,
                    },
                  ]}
                />
              </section>

              <div className="py-5">
                <AppDownloadSection layout="column" />
              </div>
            </main> */}

            {/* Sidebar */}
            <aside className="flex-col self-start hidden w-full gap-4 lg:w-1/3 lg:sticky lg:top-48 h-fit md:flex md:ps-3 ">
              {isBanksPage && <BanksList />}{" "}
              {/* <SidbarNewsSection title="الأكثر قراءة" /> */}
              <AdSliderWidget sliderId="1" />
              <AdSliderWidget sliderId="2" />
              <AdSliderWidget sliderId="3" />
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
              <AdSliderWidget sliderId="1" />
              <AppDownloadSection layout="column" />
            </aside>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};
