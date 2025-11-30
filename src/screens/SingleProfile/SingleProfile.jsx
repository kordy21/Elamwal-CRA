import React, { useEffect, useState } from "react";
import { Header } from "../../components/layout/Header";
import { Navbar } from "../../components/layout/Navbar";
import { UserProfile } from "../../components/layout/UserProfile";
import { Footer } from "../../components/layout/Footer";
import advertisement_2 from "../../assets/images/advertisement_2.webp";
import advertisement_3 from "../../assets/images/advertisement_3.webp";
import CurrencyWidget from "../../components/ui/CurrencyWidget";
import PriceWidget from "../../components/ui/PriceWidget";
import AppDownloadSection from "../Home/sections/AppDownloadSection/AppDownloadSection";
import CompanyWidgets from "../../components/sections/CompanyWidgets";
import AdSliderWidget from "../../components/sections/AdSliderWidget";
import MainTitle from "../../components/ui/MainTitle";
import CompanyChart from "./sections/CompanyChart";
import MainSection from "../../components/sections/MainSection";
import Main_Company from "../../assets/images/Main_Company.webp";
import CompetitorsComparison from "./sections/CompetitorsComparison";
import { useParams } from "react-router-dom";
import { getPosts } from "../../slices/4-post/thunk";
import { useDispatch, useSelector } from "react-redux";
import { getProfileBySlug } from "../../slices/6-profile/thunk";
import { BreadcrumbCategories } from "../../components/ui/BreadcrumbCategories";
import NewsContent from "../SingleNew/sections/NewsContent";
import SpotlightNews from "../../components/ui/SpotlightNews";
import LoadMoreButton from "../../components/ui/LoadMoreButton";

const ratesData = [
  { currency: "EGP", label: "الدولار الأمريكي", price: 47.45, change: -0.2 },
  { currency: "EGP", label: "اليورو", price: 55.03, change: 0.1 },
  { currency: "EGP", label: "الجنيه الإسترليني", price: 62.8, change: 0.3 },
];

export const SingleProfile = () => {
  const [scrolled, setScrolled] = useState(false);
  const { profileSlug } = useParams();
  const [postPage, setPostPage] = useState(1);
  const [allPosts, setAllPosts] = useState([]);
  const postLimit = 8;

  const { selectedProfile, loading, error } = useSelector((s) => s.Profiles);
  const dispatch = useDispatch();
  const { posts, meta: postsMeta } = useSelector((state) => state.Posts);

  useEffect(() => {
    const fetchData = async () => {
      if (!profileSlug) return;

      try {
        if (postPage === 1) {
          await dispatch(getProfileBySlug(profileSlug)).unwrap();
        }
        await dispatch(
          getPosts({
            type: "default",
            limit: postLimit,
            page: postPage,
            fields: "id,title_AR,image,createdAt,slug",
          })
        ).unwrap();
      } catch (err) {
        console.error("Error fetching post or related posts", err);
      } finally {
      }
    };

    fetchData();
  }, [profileSlug, dispatch, postPage]);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (posts?.length) {
      setAllPosts((prev) => {
        const existingIds = new Set(prev.map((p) => p.id));
        const newPosts = posts.filter((p) => !existingIds.has(p.id));
        return [...prev, ...newPosts];
      });
    }
  }, [posts]);
  const handleLoadMorePosts = () => {
    setPostPage((prev) => prev + 1);
    // console.log("kordy");
  };
  if (loading) {
    return (
      <div className="flex items-center justify-center h-[100vh]">
        <div className="w-12 h-12 border-t-2 border-b-2 rounded-full animate-spin border-primary"></div>
      </div>
    );
  }
  // console.log(posts);
  return (
    <div className="w-full min-h-screen bg-[#F8F8FA]">
      <div className="relative w-full ">
        <Header />
        <UserProfile />
        <Navbar />
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

        {/* Main Section */}
        <section className="container flex flex-col py-6 lg:flex-row">
          <main className="flex flex-col items-start w-full lg:w-2/3 md:pe-3 ">
            <BreadcrumbCategories
              items={[
                {
                  name: selectedProfile?.Category?.name_AR,
                },
                {
                  name: selectedProfile?.subCategory?.name_AR,
                },
                {
                  name: selectedProfile?.name_AR,
                },
              ]}
            />
            {/* <CompanyChart
              titleSection="TMG"
              currentPrice={12.0}
              priceChange={1.3}
              changeAmount={0.0503}
              stats={{
                opening: 12.11,
                high: 12.54,
                low: 10.07,
                close: 13.18,
              }}
              weeklyData={[
                { period: "الأسبوع 1", price: 15.2 },
                { period: "الأسبوع 2", price: 14.8 },
                { period: "الأسبوع 3", price: 16.1 },
                { period: "الأسبوع 4", price: 15.9 },
              ]}
              monthlyData={[
                { period: "Jan", price: 8.5 },
                { period: "Feb", price: 4.2 },
                { period: "Mar", price: 8.8 },
                { period: "Apr", price: 12.1 },
                { period: "May", price: 8.3 },
                { period: "Jun", price: 10.5 },
                { period: "Jul", price: 9.2 },
                { period: "Aug", price: 7.8 },
                { period: "Sep", price: 9.5 },
              ]}
              yearlyData={[
                { period: "2020", price: 3.5 },
                { period: "2021", price: 5.2 },
                { period: "2022", price: 8.5 },
                { period: "2023", price: 6.8 },
                { period: "2024", price: 10.0 },
                { period: "2025", price: 12.0 },
              ]}
              title="الأسعار بالدولار الأمريكي"
              lastUpdated="آخر تحديث: 21 أبريل 2025 - 05:10"
            /> */}
            <section className="flex flex-col items-end w-full gap-4 lg:gap-6 ">
              <MainSection
                titleSection={
                  selectedProfile?.type === "company"
                    ? "آخر الأخبار عن الشركة"
                    : ""
                }
                image={selectedProfile?.cover_image}
                categoryColor={`${selectedProfile?.subCategory.color}`}
                category={selectedProfile?.subCategory?.name_AR}
                title={selectedProfile?.name_AR}
              />
              {/* <CompanyInfo biography={selectedProfile?.biography_AR} /> */}
              <NewsContent content={selectedProfile?.biography_AR} />
              {/* <CompetitorsComparison data={CompetitorsComparisonData} /> */}
              <MainTitle title="أخر الأخبار" noMore={true} />
              <section>
                <SpotlightNews articles={allPosts} />
                {postsMeta?.filteredCount > allPosts?.length && (
                  <div className="flex justify-center text-center">
                    <LoadMoreButton
                      onClick={handleLoadMorePosts}
                      disabled={loading}
                    />
                  </div>
                )}
              </section>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="flex-col self-start hidden w-full gap-4 lg:w-1/3 lg:sticky lg:top-48 h-fit md:flex md:ps-3 ">
            <AdSliderWidget sliderId="1" />
            <AdSliderWidget sliderId="2" />
            {/* <CompanyWidgets /> */}
            {/* <AdvistingSpaceWidget count={2} /> */}
            {/* <SidbarNewsSection title="اخترنا لكم" /> */}
            {/* <SidbarVideoSection title="الأكثر مشاهدة" /> */}
            {/* <GoldWidget
              items={[
                { label: "عيار 24", price: "3200", unit: "EGP", change: -0.5 },
                { label: "عيار 21", price: "2800", unit: "EGP", change: +0.3 },
                { label: "عيار 18", price: "2400", unit: "EGP", change: +0.1 },
              ]}
            /> */}
            <CurrencyWidget rates={ratesData} />
            <PriceWidget
              title="أسعار السلع"
              items={[
                { label: "الذهب", price: 5610, unit: "جنيه", change: +2 },
                { label: "الفضة", price: 75.16, unit: "جنيه", change: +2 },
              ]}
            />{" "}
            <AdSliderWidget sliderId="1" />
            {/* <AdvistingSpaceWidget count={2} /> */}
            <AppDownloadSection layout="column" />
          </aside>
        </section>

        <Footer />
      </div>
    </div>
  );
};
