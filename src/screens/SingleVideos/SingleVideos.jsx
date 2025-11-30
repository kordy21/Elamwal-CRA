import React, { useEffect, useState } from "react";
import { Header } from "../../components/layout/Header";
import { Navbar } from "../../components/layout/Navbar";
import { UserProfile } from "../../components/layout/UserProfile";
import { Footer } from "../../components/layout/Footer";
import advertisement_2 from "../../assets/images/advertisement_2.webp";
import advertisement_3 from "../../assets/images/advertisement_3.webp";
import hoda from "../../assets/images/hoda.webp";
import AdvistingSpaceWidget from "../../components/ui/AdvistingSpaceWidget";
import CurrencyWidget from "../../components/ui/CurrencyWidget";
import GoldWidget from "../../components/ui/GoldWidget";
import PriceWidget from "../../components/ui/PriceWidget";
import AppDownloadSection from "../Home/sections/AppDownloadSection/AppDownloadSection";
import { SectionTags } from "../../components/sections/BanksTags";
import SocialMediaLinks from "./sections/SocialMediaLinks";
import VideoArticleCard from "./sections/VideoArticleCard";
import { VideoSection } from "../Videos/sections/VideoSection";
import { SidbarVideoSection } from "../../components/sections/SidbarVideoSection";
import CommentsSection from "../../components/sections/CommentsSection";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BreadcrumbCategories } from "../../components/ui/BreadcrumbCategories";
import {
  getPostById,
  getPostBySlug,
  getPosts,
  getPostsBySubCategory,
} from "../../slices/4-post/thunk";
import NewsContent from "../SingleNew/sections/NewsContent";
import MainTitle from "../../components/ui/MainTitle";
import { formatArabicDate } from "../../utils/formatArabicDate";
import ProfileCards from "../../components/ui/ProfileCards";
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
export const SingleVideos = () => {
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const { categorySlug, subcategorySlug, postSlug } = useParams();
  const { selectedPost } = useSelector((state) => state.Posts);
  const { postsBySubCategory } = useSelector((state) => state.Posts);
  const dispatch = useDispatch();

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
          getPostsBySubCategory({ slug: "video", type: "video", limit: 16 })
        ).unwrap();
      } catch (err) {
        console.error("Error fetching post or related posts", err);
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

  const filteredPosts = postsBySubCategory?.["video"]?.filter(
    (post) => post?.id !== selectedPost?.id
  );
  const postsPart1 = filteredPosts?.slice(0, 8);
  const postsPart2 = filteredPosts?.slice(8, 16);

  const profiles = selectedPost?.Profiles || [];

  const persons = profiles.filter((p) => p?.type === "person");
  const companies = profiles.filter((p) => p?.type === "company");
  const banks = profiles.filter((p) => p?.type === "bank");
  const bankers = profiles.filter((p) => p?.type === "banker");
  // console.log("Selected Post:", selectedPost);
  // console.log("Posts by Params:", postsByParams[JSON.stringify({ limit: 16 })]);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-[100vh]">
        <div className="w-12 h-12 border-t-2 border-b-2 rounded-full animate-spin border-primary"></div>
      </div>
    );
  }
  // console.log(selectedPost);
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

        {/* Main Video Section */}
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
            <section className="flex flex-col items-end w-full gap-8 ">
              <VideoArticleCard
                title={selectedPost?.title_AR}
                author="هدى خليفة"
                ArticleImage={hoda}
                date={
                  selectedPost?.createdAt &&
                  formatArabicDate(selectedPost?.createdAt)
                }
                video={selectedPost?.video}
                // category="اقتصاد"
                imageCover={selectedPost?.image}
              />
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
              <SectionTags tags={selectedPost?.Tags} title="no" />

              <NewsContent content={selectedPost?.content_AR} />

              <CommentsSection comments={commentsData} />

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
              <section className="w-full ">
                <MainTitle title="شاهد أيضا" />
                <div className="flex flex-col gap-4 mt-6 md:flex-row">
                  <VideoSection data={postsPart1} />

                  <VideoSection data={postsPart2} />
                </div>
              </section>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="flex-col self-start hidden w-full gap-4 lg:w-1/3 lg:sticky lg:top-48 h-fit md:flex md:ps-3 ">
            <AdvistingSpaceWidget count={2} />
            {/* <SidbarVideoSection title="الأكثر مشاهدة" /> */}
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
            <PriceWidget
              title="أسعار السلع"
              items={[
                { label: "الذهب", price: 5610, unit: "جنيه", change: +2 },
                { label: "الفضة", price: 75.16, unit: "جنيه", change: +2 },
              ]}
            />
            <AdvistingSpaceWidget count={2} />
            <AppDownloadSection layout="column" />
          </aside>
        </section>

        <Footer />
      </div>
    </div>
  );
};
