import React, { useState, useEffect } from "react";
import HeaderLayout from "../../components/layout/HeaderLayout";
import advertisement_2 from "../../assets/images/advertisement_2.webp";
import advertisement_3 from "../../assets/images/advertisement_3.webp";
import MainTitle from "../../components/ui/MainTitle";
import AdSliderWidget from "../../components/sections/AdSliderWidget";
import AuthorCard from "../Author/AuthorCard";
import { Footer } from "../../components/layout/Footer";
import SocialIcons from "./SocialIcons";
import LoadMoreButton from "../../components/ui/LoadMoreButton";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfileBySlug } from "../../slices/6-profile/thunk";
import { getPosts, getPostsByProfileId } from "../../slices/4-post/thunk";
import NewsContent from "../SingleNew/sections/NewsContent";
import SpotlightNews from "../../components/ui/SpotlightNews";

const Author = () => {
  const [scrolled, setScrolled] = useState(false);
  const { slugAuthor } = useParams();

  const [visibleCount, setVisibleCount] = useState(4);
  const [loadCount, setLoadCount] = useState(0);
  const { selectedProfile, loading, error } = useSelector((s) => s.Profiles);
  const [profileId, setProfileId] = useState(selectedProfile?.id);

  const dispatch = useDispatch();
  const { posts, loadingPosts, meta } = useSelector((state) => state.Posts);
  const maxLoads = 3;

  const handleLoadMore = () => {
    if (loadCount < maxLoads) {
      setVisibleCount((prev) => prev + 2);
      setLoadCount((prev) => prev + 1);
    }
  };

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

  const [postPage, setPostPage] = useState(1);
  const [allPosts, setAllPosts] = useState([]);
  const postLimit = 8;
  console.log("posts", selectedProfile);
  useEffect(() => {
    if (selectedProfile?.id) {
      setProfileId(selectedProfile.id);
    }
  }, [selectedProfile]);
  useEffect(() => {
    const fetchData = async () => {
      if (!slugAuthor) return;

      try {
        setProfileId(selectedProfile?.id);
        await dispatch(getProfileBySlug(slugAuthor));

        if (postPage === 1) {
          await dispatch(getProfileBySlug(slugAuthor));
        }

        if (profileId) {
          await dispatch(
            getPostsByProfileId({
              id: profileId,
              limit: postLimit,
              page: postPage,
              fields: "id,title_AR,image,createdAt,slug",
              // type: "default",
              // sort: "createdAt:DESC",
            })
          ).unwrap();
        }
      } catch (err) {
        console.error("Error fetching post or related posts", err);
      } finally {
      }
    };

    fetchData();
  }, [slugAuthor, dispatch, postPage, profileId]);

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
  if (loading || loadingPosts) {
    return (
      <div className="flex items-center justify-center h-[100vh]">
        <div className="w-12 h-12 border-t-2 border-b-2 rounded-full animate-spin border-primary"></div>
      </div>
    );
  }
  console.log("currentPage", meta);
  const bio = selectedProfile?.biography_AR || "";
  const cleanBio = bio.replace(/<[^>]*>/g, "").trim();

  return (
    <section className="bg-[#F8F8FA]">
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
      <main className="container flex flex-col py-8 lg:flex-row">
        <div className="flex flex-col flex-1 order-1 w-full gap-8 md:pe-3 lg:w-2/3 lg:order-1">
          <MainTitle title={selectedProfile?.name_AR} noMore={true} />
          <AuthorCard
            image={selectedProfile?.cover_image}
            name={selectedProfile?.name_AR}
            description={selectedProfile?.short_bio_AR}
            category={selectedProfile?.title_AR}
            link="#"
          />
          {cleanBio && (
            <>
              <MainTitle
                title={`تفاصيل عن ${selectedProfile?.name_AR}`}
                noMore={true}
              />
              <NewsContent content={selectedProfile?.biography_AR} />
            </>
          )}
          {/* <MainTitle title="تواصل مع الكاتب" noMore={true} /> */}
          <div className="block lg:hidden ">
            <AdSliderWidget sliderId="1" />
          </div>
          <SocialIcons links={selectedProfile?.socialMedia} />
          {allPosts && allPosts?.length > 0 && (
            <>
              <MainTitle title=" أخبار بقلم الكاتب " noMore={true} />
              <SpotlightNews articles={allPosts} />
              {/* {loadCount < maxLoads && <LoadMoreButton onClick={handleLoadMore} />} */}
              {/* <>{console.log(allPosts?.length === meta?.count)}</> */}
              {/* {meta?.count > allPosts.length > 0 && (
                <div className="flex justify-center mt-6">
                  <LoadMoreButton
                    onClick={handleLoadMorePosts}
                    text="عرض المزيد"
                  />
                </div>
              )} */}
            </>
          )}
          <div className="block lg:hidden ">
            <AdSliderWidget sliderId="1" />
          </div>
        </div>

        <aside className="flex flex-col self-start order-2 hidden w-full gap-4 lg:flex md:ps-3 lg:w-1/3 lg:sticky lg:top-48 h-fit lg:order-2">
          <AdSliderWidget sliderId="1" />
          <AdSliderWidget sliderId="2" />
          <AdSliderWidget sliderId="3" />
        </aside>
      </main>

      <Footer />
    </section>
  );
};

export default Author;
