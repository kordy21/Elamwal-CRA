import React, { useEffect, useState } from "react";
import { HeroSlider } from "../../components/sections/HeroSlider";
import { StoriesSection } from "../../components/sections/StoriesSection";
import { OpinionWritersSection } from "../../components/sections/OpinionWritersSection";
import advertisement_2 from "../../assets/images/advertisement_2.webp";
import advertisement_3 from "../../assets/images/advertisement_3.webp";
import { CenterQuestionsSection } from "./sections/CenterQuestionsSection/CenterQuestionsSection";
import { LatestNewsSection } from "./sections/LatestNewsSection/LatestNewsSection";
import CitizenServicesSection from "./sections/CitizenServicesSection/CitizenServicesSection";
import AppDownloadSection from "./sections/AppDownloadSection/AppDownloadSection";
import AdvertisingSpace from "./sections/LatestNewsSection/Advertisingspace";
import BlogSection from "../../components/sections/BlogSection";

import { Footer } from "../../components/layout/Footer";
import PriceWidget from "../../components/ui/PriceWidget";
import GoldWidget from "../../components/ui/GoldWidget";
import CurrencyWidget from "../../components/ui/CurrencyWidget";
import HeaderLayout from "../../components/layout/HeaderLayout";
import CurrencyTagsCaursoul from "../../components/sections/CurrencyTagsCaursoul";
import AdSliderWidget from "../../components/sections/AdSliderWidget";
import { BankingFootprints } from "../../components/sections/BankingFootprints";
import { XMarkIcon } from "@heroicons/react/24/solid";
import SubscriptWidget from "../../components/ui/SubscriptWidget";
import { LatestNewss } from "./sections/LatestNewsSection/LatestNewss";
import AdSliderNav from "./sections/AdSlider/AdSlider";
import { CompanyBanks } from "../../components/sections/CompanyBanks";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, getPostsBySubCategory } from "../../slices/4-post/thunk";
import { getProfiles } from "../../slices/6-profile/thunk";

export const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const dispatch = useDispatch();
  const { postsBySubCategory } = useSelector((state) => state.Posts);
  const { postsByParams } = useSelector((state) => state.Posts);
  const [loading, setLoading] = useState(true);
  const { profiles } = useSelector((state) => state.Profiles);
  const persons = profiles?.filter((p) => p?.type === "person");
  const companies = profiles?.filter((p) => p?.type === "company");
  const banks = profiles?.filter((p) => p?.type === "bank");
  const bankers = profiles?.filter((p) => p?.type === "banker");

  useEffect(() => {
    setLoading(true);
    dispatch(getProfiles({ limit: 100000000 }));
    dispatch(
      getPostsBySubCategory({ slug: "banks", type: "default", limit: 3 })
    );
    dispatch(
      getPostsBySubCategory({ slug: "insurance", type: "default", limit: 3 })
    );
    dispatch(
      getPostsBySubCategory({ slug: "tourism", type: "default", limit: 1 })
    );
    dispatch(
      getPostsBySubCategory({ slug: "transport", type: "default", limit: 1 })
    );
    dispatch(
      getPostsBySubCategory({ slug: "oil-energy", type: "default", limit: 2 })
    );
    dispatch(getPostsBySubCategory({ slug: "art", type: "default", limit: 4 }));
    dispatch(
      getPostsBySubCategory({
        slug: "technology-communications",
        type: "default",
        limit: 4,
      })
    );
    dispatch(
      getPostsBySubCategory({ slug: "studies", type: "default", limit: 4 })
    );
    dispatch(
      getPostsBySubCategory({
        slug: "arab-international",
        type: "default",
        limit: 4,
      })
    );
    dispatch(
      getPostsBySubCategory({
        slug: "egyptian-real-estate",
        type: "default",
        limit: 3,
      })
    );
    dispatch(getPostsBySubCategory({ slug: "sports", limit: 3 }));
    dispatch(getPosts({ is_featured: 1, type: "default", limit: 5 }));
    dispatch(getPosts({ is_active: 1, type: "default", limit: 6 }));
    dispatch(getPosts({ is_trending: 1, type: "default", limit: 6 }))
      .unwrap()
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch]);

  // console.log(postsByParams);
  const featuredPosts =
    postsByParams[
      JSON.stringify({ is_featured: 1, type: "default", limit: 5 })
    ];
  const trendingPosts =
    postsByParams[
      JSON.stringify({ is_trending: 1, type: "default", limit: 6 })
    ];

  const bankPosts = postsBySubCategory["banks"] || [];
  const insurancePosts = postsBySubCategory["insurance"] || [];

  const tourismPosts = postsBySubCategory["tourism"] || [];
  const transportationPosts = postsBySubCategory["transport"] || [];
  const OilEnergyPosts = postsBySubCategory["oil-energy"] || [];

  const artPosts = postsBySubCategory["art"] || [];

  const technologyCommunicationsPosts =
    postsBySubCategory["technology-communications"] || [];

  const studiesPosts = postsBySubCategory["studies"] || [];
  const arabInternationalPosts = postsBySubCategory["arab-international"] || [];

  const egyptianRealEstatePosts =
    postsBySubCategory["egyptian-real-estate"] || [];

  const sportsPosts = postsBySubCategory["sports"] || [];

  const bankPosts_insurancePosts = [...bankPosts, ...insurancePosts].filter(
    (post, index, self) => index === self.findIndex((p) => p.id === post.id)
  );
  const tourismPosts_transportationPosts_OilEnergyPosts = [
    ...tourismPosts,
    ...transportationPosts,
    ...OilEnergyPosts,
  ].filter(
    (post, index, self) => index === self.findIndex((p) => p.id === post.id)
  );

  // console.log(tourismPosts_transportationPosts_OilEnergyPosts);
  // console.log(postsBySubCategory);
  useEffect(() => {
    const popupShown = localStorage.getItem("popupShown");
    if (!popupShown) {
      setShowPopup(true);
      localStorage.setItem("popupShown", "true");
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
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

  const ratesData = [
    { currency: "EGP", label: "الدولار الأمريكي", price: 47.45, change: -0.2 },
    { currency: "EGP", label: "اليورو", price: 55.03, change: 0.1 },
    { currency: "EGP", label: "الجنيه الإسترليني", price: 62.8, change: 0.3 },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[100vh]">
        <div className="w-12 h-12 border-t-2 border-b-2 rounded-full animate-spin border-primary"></div>
      </div>
    );
  }
  // console.log(profiles);
  // console.log(banks);
  // console.log(companies);
  // console.log(persons);

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

        {/* Hero Slider - Full width */}
        <section className="container flex flex-col pt-6 ">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-0 ">
            {/* Main content */}
            <CurrencyTagsCaursoul
              items={[
                { label: "ريال سعودي", change: +0.5, percentage: 0.5 },
                { label: "درهم اماراتي", change: +1.2, percentage: 1.2 },
                { label: "دينار كويتي", change: -1.2, percentage: 1.2 },
                { label: "اليورو", change: -0.3, percentage: 0.3 },
                { label: "ريال سعودي", change: +0.5, percentage: 0.5 },
                { label: "درهم اماراتي", change: +1.2, percentage: 1.2 },
                { label: "دينار كويتي", change: -1.2, percentage: 1.2 },
                { label: "اليورو", change: -0.3, percentage: 0.3 },
              ]}
            />
            <main className="flex flex-col flex-1 w-full gap-8 md:pe-3 lg:w-2/3">
              <HeroSlider
                data={featuredPosts}
                showButton={false}
                displayCategory={true}
              />

              <section className="flex flex-col items-end w-full gap-8 py-4 duration-300 md:border md:border-gray-100 md:bg-white md:py-6 lg:px-4 md:hover:shadow-md">
                <BlogSection
                  data={trendingPosts}
                  title="On Trend"
                  shadow={false}
                  linkCategory="/news/on-trend"
                />
                <BlogSection
                  data={bankPosts_insurancePosts}
                  parentSlug="banks"
                  title="بنوك و تأمين"
                  shadow={false}
                  linkCategory="/banks/banks"
                />
              </section>
              {bankers.length > 0 && <BankingFootprints data={bankers} />}
            </main>
            {/* Sidebar */}
            <aside className="flex-col self-start hidden w-full gap-4 md:ps-3 lg:w-1/3 lg:sticky lg:top-48 h-fit md:flex">
              {/* <AdvistingSpaceWidget count={2} /> */}
              <AdSliderWidget sliderId="2" />
              <AdSliderWidget sliderId="3" />
              <CurrencyWidget rates={ratesData} />

              <PriceWidget
                items={[
                  { label: "الذهب", price: 5610, unit: "جنيه", change: +2 },
                  { label: "الفضة", price: 75.16, unit: "جنيه", change: +2 },
                ]}
              />
              <section className="hidden md:block">
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
            </aside>
            <section className="md:hidden">
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
          </div>
        </section>
        <div className="container ">
          <AdSliderNav />
        </div>

        <LatestNewsSection
          TourismTransportationEnergy={
            tourismPosts_transportationPosts_OilEnergyPosts
          }
          TourismTransportationEnergyParentSlug="tourism-transport-and-energy"
          art={artPosts}
          artParentSlug="miscellaneous"
          technologyCommunications={technologyCommunicationsPosts}
          technologyCommunicationsParentSlug="more"
        />
        {persons.length > 0 && <StoriesSection data={persons} />}
        {companies.length > 0 && <CompanyBanks data={companies} />}

        <section className="container mt-8 md:mt-12 md:hidden">
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

        <CenterQuestionsSection
          studiesPosts={studiesPosts}
          studiesParentSlug="studies"
          arabInternationalPosts={arabInternationalPosts}
          arabInternationalParentSlug="arab-international"
        />

        <OpinionWritersSection />

        <AdvertisingSpace
          egyptianRealEstatePosts={egyptianRealEstatePosts}
          egyptianRealEstateParentSlug="real-estate"
          sportsPosts={sportsPosts}
          sportsParentSlug="miscellaneous"
        />
        <div className="flex flex-col mb-8 md:hidden md:mb-0">
          <LatestNewss
            egyptianRealEstatePosts={egyptianRealEstatePosts}
            egyptianRealEstateParentSlug="real-estate"
            sportsPosts={sportsPosts}
            sportsParentSlug="miscellaneous"
          />
          <section className="px-4 mb-8 md:my-0 ">
            <PriceWidget
              items={[
                { label: "الذهب", price: 5610, unit: "جنيه", change: +2 },
                { label: "الفضة", price: 75.16, unit: "جنيه", change: +2 },
              ]}
            />
          </section>
          <SubscriptWidget />
        </div>

        <AppDownloadSection />

        <CitizenServicesSection />

        <Footer />
      </div>

      {/* Popup Overlay */}
      {showPopup && (
        <section
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleClose}
        >
          <div
            className="relative p-4 rounded-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-[-40px] right-1 text-white hover:text-black duration-300"
            >
              <XMarkIcon className="w-8 h-8" />
            </button>

            <img
              src="https://media.target-group.org/uploads/images/WhatsApp_Image_2025-09-21_at_5.21.36_PM_1758464609883_0mmju9.webp"
              alt="Popup"
              className="max-w-full h-auto rounded-sm lg:min-w-[500px]"
            />

            <p className="mt-4 text-sm font-bold text-center text-white lg:text-lg">
              مساحة إعلانية
            </p>
          </div>
        </section>
      )}
    </div>
  );
};
