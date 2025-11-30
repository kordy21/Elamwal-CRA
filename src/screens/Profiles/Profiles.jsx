import React, { useState, useEffect } from "react";
import HeaderLayout from "../../components/layout/HeaderLayout";
import advertisement_2 from "../../assets/images/advertisement_2.webp";
import advertisement_3 from "../../assets/images/advertisement_3.webp";
import MainTitle from "../../components/ui/MainTitle";
import AdSliderWidget from "../../components/sections/AdSliderWidget";
import { SectionTags } from "../../components/sections/BanksTags";
import ProfileCards from "../../components/ui/ProfileCards";

import LoadMoreButton from "../../components/ui/LoadMoreButton";
import SpotlightNews from "../../components/ui/SpotlightNews";
import { Footer } from "../../components/layout/Footer";
import CompanyWidgets from "../../components/sections/CompanyWidgets";
import { useDispatch, useSelector } from "react-redux";
import { getSubCategory } from "../../slices/3-subcategory/thunk";
import { getProfiles } from "../../slices/6-profile/thunk";
import { BreadcrumbCategories } from "../../components/ui/BreadcrumbCategories";
import { getPosts } from "../../slices/4-post/thunk";
import { useLocation } from "react-router-dom";
import ComingSoon from "../CommingSoon/ComingSoon";

const Profiles = ({ typeProfile }) => {
  const location = useLocation();
  const lastSegment = location.pathname.split("/").filter(Boolean).pop();
  const [scrolled, setScrolled] = useState(false);
  // profiles
  const [page, setPage] = useState(1);
  const [allProfiles, setAllProfiles] = useState([]);
  const limit = 12;
  // posts
  const [postPage, setPostPage] = useState(1);
  const [allPosts, setAllPosts] = useState([]);
  const postLimit = 8;
  const { categoriesData } = useSelector((state) => state.SubCategories);
  const { profiles, meta, loading } = useSelector((state) => state.Profiles);
  const { posts, meta: postsMeta } = useSelector((state) => state.Posts);

  const dispatch = useDispatch();
  // console.log(meta);
  const totalCount = meta?.filteredCount || 0;

  const handleLoadMoreCompanies = () => {
    setPage((prev) => prev + 1);
  };

  const handleLoadMorePosts = () => {
    setPostPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (profiles?.length) {
      setAllProfiles((prev) => {
        const existingIds = new Set(prev.map((p) => p.id));
        const newProfiles = profiles.filter((p) => !existingIds.has(p.id));
        return [...prev, ...newProfiles];
      });
    }
  }, [profiles]);

  // console.log(lastSegment);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(
          getProfiles({
            type: typeProfile,
            limit,
            page,
            // fields: "id,name_AR,title_AR,profile_image,slug",
          })
        ).unwrap();

        if (page === 1) {
          await dispatch(getSubCategory({ slug: lastSegment })).unwrap();
        }

        await dispatch(
          getPosts({
            type: "default",
            limit: postLimit,
            page: postPage,
            fields: "id,title_AR,image,createdAt,slug",
            // sort: "createdAt:DESC",
          })
        ).unwrap();
      } catch (err) {
        console.error("Error fetching profiles:", err);
      }
    };

    fetchData();
  }, [dispatch, page, postPage]);

  useEffect(() => {
    if (posts?.length) {
      setAllPosts((prev) => {
        const existingIds = new Set(prev.map((p) => p.id));
        const newPosts = posts.filter((p) => !existingIds.has(p.id));
        return [...prev, ...newPosts];
      });
    }
  }, [posts]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading && allProfiles?.length === 0) {
    return (
      <div className="flex items-center justify-center h-[100vh]">
        <div className="w-12 h-12 border-t-2 border-b-2 rounded-full animate-spin border-primary"></div>
      </div>
    );
  }
  if (profiles?.length === 0) {
    return <ComingSoon />;
  }
  // const Posts = postsByParams[JSON.stringify({ type: "default", limit: 8 })];
  // console.log(allProfiles);
  // console.log(profiles);
  // console.log(lastSegment);

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
              className="hidden 3xl:block fixed w-32 left-[calc((100%-1470px)/2+30px)] rounded-md object-cover"
              src={advertisement_2}
              alt="Image"
            />
            <img
              className="hidden 3xl:block fixed w-32 right-[calc((100%-1470px)/2+30px)] rounded-md object-cover"
              src={advertisement_3}
              alt="Image"
            />
          </div>
        </a>

        <section className="container flex flex-col py-6">
          <BreadcrumbCategories
            items={[
              {
                name: categoriesData[lastSegment]?.[0]?.Category?.name_AR,
              },
              {
                name: categoriesData[lastSegment]?.[0]?.name_AR,
              },
            ]}
          />

          <div className="flex flex-col lg:flex-row">
            <main className="flex flex-col flex-1 w-full gap-4 lg:gap-6 md:pe-3 lg:w-2/3">
              {/* Companies */}
              <section>
                <ProfileCards
                  data={allProfiles}
                  title={
                    lastSegment === "companies"
                      ? "شركات هامة"
                      : lastSegment === "businessmen"
                      ? "شخصيات هامة"
                      : "بصمات مصرفية"
                  }
                />

                {/* Button More */}
                {totalCount > allProfiles?.length && (
                  <div className="flex justify-center ">
                    <LoadMoreButton
                      onClick={handleLoadMoreCompanies}
                      disabled={loading}
                    />
                  </div>
                )}
              </section>

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
            </main>

            {/* Sidebar */}
            <aside className="flex flex-col w-full gap-6 px-0 mt-4 lg:w-1/3 lg:sticky lg:top-48 h-fit lg:px-3 md:flex">
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

export default Profiles;
