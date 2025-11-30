import React, { useState, useEffect } from "react";
import HeaderLayout from "../../components/layout/HeaderLayout";
import advertisement_2 from "../../assets/images/advertisement_2.webp";
import advertisement_3 from "../../assets/images/advertisement_3.webp";
import hoda from "../../assets/images/hoda.webp";
import NewsArticleCard from "../SingleNew/sections/NewsArticleCard";
import SocialMediaLinks from "../SingleNew/sections/SocialMediaLinks";
import { Navbar } from "../../components/layout/Navbar";
import { UserProfile } from "../../components/layout/UserProfile";
import { SectionTags } from "../../components/sections/BanksTags";
import SingleImage from "./SingleImage";
import AdSliderWidget from "../../components/sections/AdSliderWidget";
import CommentsSection from "../../components/sections/CommentsSection";
import NewsSectionImage from "../Images/NewsSectionImage";
import { ClockIcon } from "@heroicons/react/24/outline";
import MainTitle from "../../components/ui/MainTitle";
import { Footer } from "../../components/layout/Footer";
import { Breadcrumb } from "../../components/ui/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BreadcrumbCategories } from "../../components/ui/BreadcrumbCategories";
import {
  getPostById,
  getPostBySlug,
  getPosts,
  getPostsBySubCategory,
} from "../../slices/4-post/thunk";
import { formatArabicDate } from "../../utils/formatArabicDate";
import ProfileCards from "../../components/ui/ProfileCards";

const SingleImages = () => {
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const { categorySlug, subcategorySlug, postSlug } = useParams();
  const { selectedPost } = useSelector((state) => state.Posts);
  const { postsBySubCategory } = useSelector((state) => state.Posts);
  const dispatch = useDispatch();
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

  const profiles = selectedPost?.Profiles || [];

  const persons = profiles.filter((p) => p.type === "person");
  const companies = profiles.filter((p) => p.type === "company");
  const banks = profiles.filter((p) => p.type === "bank");
  const bankers = profiles.filter((p) => p.type === "banker");

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

        // if (post?.data?.[0]?.subCategory?.id) {
        await dispatch(
          getPostsBySubCategory({ slug: "photo-album", limit: 8 })
        ).unwrap();
        // }
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
  const filteredPosts = postsBySubCategory?.["photo-album"]?.filter(
    (post) => post?.id !== selectedPost?.id
  );
  // console.log("Selected Post:", filteredPosts);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[100vh]">
        <div className="w-12 h-12 border-t-2 border-b-2 rounded-full animate-spin border-primary"></div>
      </div>
    );
  }
  return (
    <div className="w-full min-h-screen bg-[#F8F8FA]">
      <div className="relative w-full bg-[#F8F8FA]">
        {/* Side Advertisement Images */}
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
        <section className="container flex py-8 md:py-12">
          <main className="flex flex-col flex-1 w-full gap-8 md:pe-3 lg:w-2/3">
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
            <section className="flex flex-col items-end w-full gap-8 duration-300 m ">
              <NewsArticleCard
                title={selectedPost?.title_AR}
                author="هدى خليفة"
                subimage={hoda}
                date={
                  selectedPost?.createdAt &&
                  formatArabicDate(selectedPost?.createdAt)
                }
                image={selectedPost?.image}
                category="اقتصاد"
                link="https://example.com/news-details"
              />
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
            </section>
            <SectionTags title="no" tags={selectedPost?.Tags} />
            <SingleImage images={selectedPost?.images_slider} />
            {persons?.length > 0 && (
              <>
                <MainTitle title="رجال أعمال" noMore={true} Sidbar={true} />
                <ProfileCards
                  data={persons.map((p) => ({
                    logo: p?.profile_image,
                    title: p?.name_AR || p?.name_EN,
                    description: p?.short_bio_AR || p?.short_bio_EN,
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
                    title: p?.name_AR || p?.name_EN,
                    description: p?.short_bio_AR || p?.short_bio_EN,
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
                    title: p?.name_AR || p?.name_EN,
                    description: p?.short_bio_AR || p?.short_bio_EN,
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
                    title: p?.name_AR || p?.name_EN,
                    description: p?.short_bio_AR || p?.short_bio_EN,
                  }))}
                />
              </>
            )}
            <CommentsSection comments={commentsData} />
            {filteredPosts.length > 0 && (
              <NewsSectionImage title="شاهد أيضا" articles={filteredPosts} />
            )}
          </main>
          {/* Sidebar */}
          <aside className="flex-col self-start hidden w-full gap-4 md:ps-3 lg:w-1/3 lg:sticky lg:top-48 h-fit md:flex">
            <AdSliderWidget sliderId="1" />
            <AdSliderWidget sliderId="2" />
          </aside>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default SingleImages;
