import React, { useEffect, useState } from "react";
import { Footer } from "../../components/layout/Footer";
import BlogSection from "../../components/sections/BlogSection";
import advertisement_2 from "../../assets/images/advertisement_2.webp";
import advertisement_3 from "../../assets/images/advertisement_3.webp";
import hoda from "../../assets/images/hoda.webp";
import AdvistingSpaceWidget from "../../components/ui/AdvistingSpaceWidget";
import CurrencyWidget from "../../components/ui/CurrencyWidget";
import GoldWidget from "../../components/ui/GoldWidget";
import PriceWidget from "../../components/ui/PriceWidget";
import AppDownloadSection from "../Home/sections/AppDownloadSection/AppDownloadSection";
import { SectionTags } from "../../components/sections/BanksTags";
import NewsContent from "./sections/NewsContent";
import SocialMediaLinks from "./sections/SocialMediaLinks";
import { SidbarNewsSection } from "../../components/sections/SidbarNewsSection";
import NewsArticleCard from "./sections/NewsArticleCard";
import CommentsSection from "../../components/sections/CommentsSection";
import AdSliderWidget from "../../components/sections/AdSliderWidget";

import MainTitle from "../../components/ui/MainTitle";
import HeaderLayout from "../../components/layout/HeaderLayout";
import NameImage from "./sections/NameImage";
import ProfileCards from "../../components/ui/ProfileCards";

import ShortLink from "./sections/ShortLink";
import AdSlider from "../../screens/Home/sections/AdSlider/AdSlider";
import {
  getPostById,
  getPostBySlug,
  getPosts,
  getPostsBySubCategory,
} from "../../slices/4-post/thunk";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BreadcrumbCategories } from "../../components/ui/BreadcrumbCategories";
import { formatArabicDate } from "../../utils/formatArabicDate";

const ratesData = [
  { currency: "EGP", label: "الدولار الأمريكي", price: 47.45, change: -0.2 },
  { currency: "EGP", label: "اليورو", price: 55.03, change: 0.1 },
  { currency: "EGP", label: "الجنيه الإسترليني", price: 62.8, change: 0.3 },
];

const commentsData = [
  {
    name: "خالد محمد",
    time: "12 يوليو 2024",
    text: "الخبر ده مهم جدًا، وبيوضح قد إيه السوق بيتأثر بسرعة بأي قرارات حكومية أو تغيّرات عالمية. لازم نتابع التطورات دي علشان نعرف نخطط صح للمرحلة الجاية.",
    avatar: null,
  },
  {
    name: "سارة علي",
    time: "12 يوليو 2024",
    text: "تم إصدار تقرير جديد عن الأداء الاقتصادي للربع الثالث، والنتائج تشير إلى تحسن ملحوظ بالمقارنة مع الفترات السابقة. هذا يفتح الأفق أمام فرص استثمارية جديدة.",
    avatar: null,
  },
  {
    name: "أحمد حسن",
    time: "12 يوليو 2024",
    text: "اجتماع هام مع المستثمرين لمناقشة استراتيجيات التوسع الجديدة. يجب التحضير جيدًا لتقديم عرض قوي يبرز إمكانياتنا في السوق.",
    avatar: null,
  },
  {
    name: "فاطمة يوسف",
    time: "12 يوليو 2024",
    text: "سيتم الإعلان عن مشروع جديد يهدف إلى تعزيز الابتكار في قطاع التكنولوجيا. هذا المشروع يعد خطوة هامة نحو التطور الرقمي الذي يحتاجه السوق.",
    avatar: null,
  },
  {
    name: "علي رضا",
    time: "12 يوليو 2024",
    text: "سيتم تنظيم ورشة عمل حول القيادة الفعّالة في بيئة العمل. تهدف الورشة لتبادل الخبرات وتعزيز مهارات التواصل بين الفرق المختلفة.",
    avatar: null,
  },
];
export const SingleNew = () => {
  const { categorySlug, subcategorySlug, postSlug } = useParams();

  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { selectedPost } = useSelector((state) => state.Posts);
  const currentUrl = window.location.href;
  const baseUrl = currentUrl.substring(0, currentUrl.lastIndexOf("/"));
  const shortUrl = selectedPost?.id ? `${baseUrl}/${selectedPost.id}` : "";
  const { postsBySubCategory } = useSelector((state) => state.Posts);

  useEffect(() => {
    const fetchData = async () => {
      if (!postSlug) return;
      setLoading(true);

      try {
        let post;

        if (!isNaN(postSlug)) {
          post = await dispatch(getPostById(postSlug)).unwrap();
        } else {
          post = await dispatch(
            getPostBySlug(decodeURIComponent(postSlug))
          ).unwrap();
        }

        await dispatch(
          getPostsBySubCategory({
            slug: subcategorySlug,
            limit: 8,
          })
        ).unwrap();
      } catch (err) {
        console.error("Error fetching post or related posts", err);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [postSlug, dispatch]);

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
  // Profile
  const profiles = selectedPost?.Profiles || [];

  const persons = profiles.filter((p) => p?.type === "person");
  const companies = profiles.filter((p) => p?.type === "company");
  const banks = profiles.filter((p) => p?.type === "bank");
  const bankers = profiles.filter((p) => p?.type === "banker");

  const MorePosts = postsBySubCategory[subcategorySlug];
  // console.log(selectedPost);
  // console.log(MorePosts);

  return (
    <div className="w-full min-h-screen bg-[#F8F8FA]">
      <div className="relative w-full ">
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

        <section className="container flex flex-col py-6 mb-12 lg:flex-row">
          <main className="w-full lg:w-2/3 md:pe-3 ">
            <BreadcrumbCategories
              items={[
                {
                  name: selectedPost?.parentSubCategory?.Category?.name_AR,
                },
                {
                  name: selectedPost?.parentSubCategory?.name_AR,
                  // link: `${selectedPost?.parentSubCategory?.Category?.name_AR}/${selectedPost?.parentSubCategory?.name_AR}`,
                },
                {
                  name: selectedPost?.title_AR,
                },
              ]}
            />
            {/* <Breadcrumb /> */}
            <section className="flex flex-col items-end w-full gap-8 ">
              <NewsArticleCard
                title={selectedPost?.title_AR}
                author={selectedPost?.writer?.name_AR}
                subimage={selectedPost?.writer?.profile_image}
                date={
                  selectedPost?.createdAt &&
                  formatArabicDate(selectedPost?.createdAt)
                }
                image={selectedPost?.image}
                slug={selectedPost?.writer?.slug}
              />

              <div className="flex justify-between w-full gap-8 ">
                <NameImage name={selectedPost?.image_name || "صورة"} />
                <SocialMediaLinks
                  links={{
                    facebook: "https://facebook.com/yourpage",
                    twitter: "https://x.com/yourpage",
                  }}
                  onShare={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: "شوف الرابط ده",
                        url: window.location.href,
                      });
                    } else {
                      alert("المشاركة غير مدعومة في هذا المتصفح");
                    }
                  }}
                />
              </div>

              {/* <SectionTags title="no" /> */}
              <NewsContent content={selectedPost?.content_AR} />
              <SectionTags tags={selectedPost?.Tags} />

              <AdSlider noMargin={true} />

              {persons?.length > 0 && (
                <>
                  <MainTitle title="رجال أعمال" noMore={true} Sidbar={true} />
                  <ProfileCards
                    data={persons.map((p) => ({
                      logo: p?.profile_image,
                      title_AR: p?.name_AR,
                      title_EN: p?.name_EN,
                    }))}
                  />
                </>
              )}

              {companies?.length > 0 && (
                <>
                  <MainTitle title="شركات" noMore={true} Sidbar={true} />
                  <ProfileCards
                    data={companies.map((p) => ({
                      logo: p?.profile_image,
                      title_AR: p?.name_AR,
                      title_EN: p?.name_EN,
                    }))}
                  />
                </>
              )}

              {banks.length > 0 && (
                <>
                  <MainTitle title="بنوك مصر" noMore={true} Sidbar={true} />
                  <ProfileCards
                    data={banks.map((p) => ({
                      logo: p?.profile_image,
                      title_AR: p?.name_AR,
                      title_EN: p?.name_EN,
                    }))}
                  />
                </>
              )}

              {bankers.length > 0 && (
                <>
                  <MainTitle title="بصمات مصرفية" noMore={true} Sidbar={true} />
                  <ProfileCards
                    data={bankers.map((p) => ({
                      logo: p?.profile_image,
                      title_AR: p?.name_AR,
                      title_EN: p?.name_EN,
                    }))}
                  />
                </>
              )}

              <div className="flex flex-col w-full gap-4 md:flex-row md:items-center md:justify-between">
                <ShortLink shortUrlID={shortUrl} />

                <SocialMediaLinks
                  links={{
                    facebook: "https://facebook.com/yourpage",
                    instagram: "https://instagram.com/yourpage",
                    twitter: "https://x.com/yourpage",
                  }}
                  onShare={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: "شوف الرابط ده",
                        url: window.location.href,
                      });
                    } else {
                      alert("المشاركة غير مدعومة في هذا المتصفح");
                    }
                  }}
                />
              </div>

              <CommentsSection comments={commentsData} />
              <AdSlider noMargin={true} />

              <BlogSection
                data={MorePosts}
                title="  اقرأ أيضاً"
                noMore={true}
                shadow={false}
                // itemsURL={`/${selectedPost?.category?.slug}/${selectedPost?.subCategory?.slug}`}
              />
            </section>
          </main>

          {/* Sidebar */}
          <aside className="flex flex-col self-start hidden w-full gap-6 md:flex lg:w-1/3 lg:sticky lg:top-48 h-fit ps-4">
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
          <aside className="flex flex-col w-full gap-6 mt-8 lg:w-1/3 lg:sticky lg:top-48 h-fit md:hidden ">
            <AppDownloadSection />
          </aside>
        </section>

        <Footer />
      </div>
    </div>
  );
};
