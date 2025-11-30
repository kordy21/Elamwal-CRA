import React, { useState, useEffect } from "react";
import HeaderLayout from "../../components/layout/HeaderLayout";
import advertisement_2 from "../../assets/images/advertisement_2.webp";
import advertisement_3 from "../../assets/images/advertisement_3.webp";
import MainTitle from "../../components/ui/MainTitle";
import AdSliderWidget from "../../components/sections/AdSliderWidget";
import CurrencyWidget from "../../components/ui/CurrencyWidget";
import PriceWidget from "../../components/ui/PriceWidget";
import GoldWidget from "../../components/ui/GoldWidget";
import PdfButton from "../../components/ui/PdfButton";
import SpotlightNews from "../../components/ui/SpotlightNews";
import LoadMoreButton from "../../components/ui/LoadMoreButton";
import CommentsSection from "../../components/sections/CommentsSection";
import { Footer } from "../../components/layout/Footer";
import AdSliderNav from "../Home/sections/AdSlider/AdSlider";
import NewsContent from "../SingleNew/sections/NewsContent";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getPostById,
  getPostBySlug,
  getPosts,
} from "../../slices/4-post/thunk";

const commentsData = [
  { name: "خالد محمد", time: "12 يوليو 2024", text: "الخبر ده مهم جدًا..." },
  { name: "سارة علي", time: "12 يوليو 2024", text: "تم إصدار تقرير جديد..." },
];

  const ratesData = [
    { currency: "EGP", label: "الدولار الأمريكي", price: 47.45, change: -0.2 },
    { currency: "EGP", label: "اليورو", price: 55.03, change: 0.1 },
    { currency: "EGP", label: "الجنيه الإسترليني", price: 62.8, change: 0.3 },
  ];

const NewsPaperSingle = () => {
  const { postSlug } = useParams();
  const dispatch = useDispatch();
  const {
    selectedPost,
    posts,
    meta: postsMeta,
    loading,
  } = useSelector((state) => state.Posts);

  // Pagination states
  const [page, setPage] = useState(1);
  const [allPosts, setAllPosts] = useState([]);
  const limit = 6;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!postSlug) return;
      try {
        // Get single post (by slug or ID)
        if (!isNaN(postSlug)) {
          await dispatch(getPostById(postSlug)).unwrap();
        } else {
          await dispatch(getPostBySlug(decodeURIComponent(postSlug))).unwrap();
        }

        // Get related posts with pagination
        await dispatch(
          getPosts({
            type: "default",
            limit,
            page,
            fields: "id,title_AR,image,slug,createdAt",
          })
        ).unwrap();
      } catch (err) {
        console.error("Error fetching post or related posts", err);
      }
    };
    fetchData();
  }, [postSlug, page, dispatch]);

  useEffect(() => {
    if (posts?.length) {
      setAllPosts((prev) => {
        const existingIds = new Set(prev.map((p) => p.id));
        const newPosts = posts.filter((p) => !existingIds.has(p.id));
        return [...prev, ...newPosts];
      });
    }
  }, [posts]);

  // scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLoadMoreNews = () => {
    setPage((prev) => prev + 1);
  };

  if (loading && !selectedPost) {
    return (
      <div className="flex items-center justify-center h-[100vh]">
        <div className="w-12 h-12 border-t-2 border-b-2 rounded-full animate-spin border-primary"></div>
      </div>
    );
  }
  // console.log(selectedPost);
  return (
    <div className="bg-custom">
      <HeaderLayout />

      {/* Side Ads */}
      <a href="/">
        <div
          className={`max-w-[1470px] relative mx-auto ${
            scrolled ? "top-32" : "top-8"
          } `}
        >
          <img
            className="hidden 3xl:block fixed w-32 left-[calc((100%-1470px)/2+30px)] rounded-md object-cover"
            src={advertisement_2}
            alt="Ad Left"
          />
          <img
            className="hidden 3xl:block fixed w-32 right-[calc((100%-1470px)/2+30px)] rounded-md object-cover"
            src={advertisement_3}
            alt="Ad Right"
          />
        </div>
      </a>

      <section className="container flex flex-col py-8 md:flex-row ">
        <div className="flex flex-col flex-1 w-full gap-8 md:pe-3 lg:w-2/3 ">
          <MainTitle title={selectedPost?.title_AR} noMore={true} />

          <NewsContent content={selectedPost?.div_pdf} />
          <NewsContent content={selectedPost?.content_AR} />
          <PdfButton pdfUrl={selectedPost?.pdf} />

          <AdSliderNav noMargin={true} />

          <MainTitle title="أخر الأخبار" noMore={true} />

          <section>
            <SpotlightNews articles={allPosts} />

            {postsMeta?.filteredCount > allPosts?.length && (
              <div className="flex justify-center text-center">
                <LoadMoreButton
                  onClick={handleLoadMoreNews}
                  disabled={loading}
                />
              </div>
            )}
          </section>

          <AdSliderNav noMargin={true} />
          <CommentsSection comments={commentsData} />
        </div>

        {/* Sidebar */}
        <aside className="flex-col self-start hidden w-full gap-4 md:ps-3 lg:w-1/3 lg:sticky lg:top-48 h-fit md:flex">
          <AdSliderWidget sliderId="2" />
          <AdSliderWidget sliderId="3" />
          <CurrencyWidget rates={ratesData} />
          <PriceWidget
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
        </aside>
      </section>

      <Footer />
    </div>
  );
};

export default NewsPaperSingle;
