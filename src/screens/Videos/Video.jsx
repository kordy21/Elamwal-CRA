import React, { useEffect, useState } from "react";
import { Header } from "../../components/layout/Header";
import { Navbar } from "../../components/layout/Navbar";
import { UserProfile } from "../../components/layout/UserProfile";
import { Footer } from "../../components/layout/Footer";

import advertisement_2 from "../../assets/images/advertisement_2.webp";
import advertisement_3 from "../../assets/images/advertisement_3.webp";
import { SectionTags } from "../../components/sections/BanksTags";
import VideoCard from "./sections/VideoCard";
import { VideoSection } from "./sections/VideoSection";
import { StoriesSection } from "../../components/sections/StoriesSection";
import AppDownloadSection from "../Home/sections/AppDownloadSection/AppDownloadSection";
import MainTitle from "../../components/ui/MainTitle";
import AdSliderWidget from "../../components/sections/AdSliderWidget";
import { useDispatch, useSelector } from "react-redux";
import { getTags } from "../../slices/1-tags/thunk";
import { useParams } from "react-router-dom";
import { getPostsBySubCategory } from "../../slices/4-post/thunk";
import { BreadcrumbCategories } from "../../components/ui/BreadcrumbCategories";
import { getSubCategory } from "../../slices/3-subcategory/thunk";
import ComingSoon from "../CommingSoon/ComingSoon";

export const Video = () => {
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { categorySlug, subcategorySlug } = useParams();
  const { categoriesData } = useSelector((state) => state.SubCategories);
  const { postsBySubCategory } = useSelector((state) => state.Posts);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(25);
  const [allPosts, setAllPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      setLimit(9);
    } else {
      setLimit(25);
    }
  }, [subcategorySlug]);

  const organizePostsBySection = (posts) => {
    if (!posts || posts.length === 0) return null;

    return {
      mainVideo: posts[0],
      topSectionPart1: posts.slice(1, 10),
      topSectionPart2: posts.slice(11, 20),
      bottomSectionPart1: posts.slice(21, 30),
      bottomSectionPart2: posts.slice(31, 40),
      // sidebar: posts.slice(18, 24),
    };
  };

  const organizedPosts = organizePostsBySection(postsBySubCategory?.video);

  useEffect(() => {
    setLoading(true);
    dispatch(
      getPostsBySubCategory({ slug: subcategorySlug, type: "video", limit: 50 })
    );
    dispatch(getSubCategory({ slug: subcategorySlug }))
      .unwrap()
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch, subcategorySlug]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
  // console.log(categoriesData[subcategorySlug]);
  return (
    <div className="w-full min-h-screen bg-[#F8F8FA]">
      <div className="relative w-full bg-[#F8F8FA]">
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

        <section className="container pt-6">
          <BreadcrumbCategories
            items={[
              { name: categoriesData[subcategorySlug]?.[0]?.Category?.name_AR },
              {
                name: categoriesData[subcategorySlug]?.[0]?.name_AR,
              },
            ]}
          />
          <SectionTags
            lengthTags={categoriesData[subcategorySlug]?.[0]?.tags?.length || 0}
            tags={categoriesData[subcategorySlug]?.[0]?.tags}
          />
        </section>
        {/* Main News Section */}
        <section className="container flex flex-col mb-12 lg:flex-row">
          <main className="w-full lg:w-2/3 md:pe-3 ">
            {/* Main Section */}

            <section className="flex flex-col items-end w-full gap-8 mb-12">
              <MainTitle title="فيديو" noMore={true} />
              {organizedPosts?.mainVideo && (
                <VideoCard
                  videoUrl={organizedPosts?.mainVideo?.video}
                  imageCover={organizedPosts?.mainVideo?.image}
                  title={organizedPosts?.mainVideo?.title_AR}
                  slug={organizedPosts?.mainVideo?.slug}
                />
              )}
            </section>
            {/* <SectionTags title="no" /> */}
            <section className="flex flex-col gap-4 md:flex-row">
              <div className="md:w-1/2">
                <VideoSection title="" data={organizedPosts?.topSectionPart1} />
              </div>
              <div className="md:w-1/2">
                <VideoSection title="" data={organizedPosts?.topSectionPart2} />
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="flex-col self-start hidden w-full gap-4 lg:w-1/3 lg:sticky lg:top-48 h-fit md:flex md:ps-3 ">
            <AdSliderWidget sliderId="1" />
            {/* <SidbarVideoSection title="الأكثر مشاهدة" /> */}
            <AdSliderWidget sliderId="2" />
            <AdSliderWidget sliderId="3" />
          </aside>
        </section>
        {/* <StoriesSection /> */}
        <section className="container flex flex-col =pt-6 mb-12 = lg:flex-row">
          <main className="w-full mt-8 lg:w-2/3 md:pe-3">
            {/* Main Section */}
            <section className="flex flex-col gap-4 md:flex-row">
              <div className="md:w-1/2">
                <VideoSection
                  title=""
                  data={organizedPosts?.bottomSectionPart1}
                />
              </div>
              <div className="md:w-1/2">
                <VideoSection
                  title=""
                  data={organizedPosts?.bottomSectionPart2}
                />
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="flex-col self-start hidden w-full gap-4 lg:w-1/3 lg:sticky lg:top-48 h-fit md:flex md:ps-3 ">
            <AdSliderWidget sliderId="2" />
            <AppDownloadSection layout="column" />
          </aside>
        </section>
        <Footer />
      </div>
    </div>
  );
};
