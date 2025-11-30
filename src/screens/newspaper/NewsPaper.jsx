import React, { useState, useEffect } from "react";
import HeaderLayout from "../../components/layout/HeaderLayout";
import advertisement_2 from "../../assets/images/advertisement_2.webp";
import advertisement_3 from "../../assets/images/advertisement_3.webp";
import MainTitle from "../../components/ui/MainTitle";
import WeeklyHighlights from "./WeeklyHighlights";
import { Footer } from "../../components/layout/Footer";
import { getPostsBySubCategory } from "../../slices/4-post/thunk";
import { useDispatch, useSelector } from "react-redux";

const NewspaperComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const { postsBySubCategory } = useSelector((state) => state.Posts);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

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
  useEffect(() => {
    setLoading(true);
    dispatch(
      getPostsBySubCategory({ slug: "newspaper", type: "paper", limit: 4 })
    )
      .unwrap()
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[100vh]">
        <div className="w-12 h-12 border-t-2 border-b-2 rounded-full animate-spin border-primary"></div>
      </div>
    );
  }
  // console.log(postsBySubCategory["newspaper"]);
  return (
    <div className="bg-custom">
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
      <section className="container flex flex-col pt-6 ">
        <div className="flex flex-col flex-1 w-full gap-6 lg:gap-6 ">
          <MainTitle title=" المجلة" noMore={true} />
          {/* <SectionTags title="no" /> */}
          <WeeklyHighlights newspapers={postsBySubCategory["newspaper"]} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewspaperComponent;
