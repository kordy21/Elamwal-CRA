import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.webp";
import arrowFooter from "../../assets/icons/arrowFooter.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faWhatsapp,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../slices/4-post/thunk";
const footerLinks = [
  {
    title: "الأموال",
    isTransparent: false,
    links: [
      { text: "عن الأموال", icon: "/vector-4.svg", link: "/about-us" },
      {
        text: "كتاب الاموال",
        icon: "/vector-1.svg",
        link: "/more/money-columnists",
      },
      {
        text: "الشروط و الأحكام",
        icon: "/vector-1.svg",
        link: "/terms-condition",
      },
      {
        text: "سياسة الخصوصية",
        icon: "/vector-1.svg",
        link: "/privacy-police",
      },
      { text: "وظائف شاغرة", icon: "/vector-1.svg" },
      { text: "أعلن معنا", icon: "/vector-1.svg", link: "/advertise-with-us" },
      { text: "اتصل بنا", icon: "/vector-1.svg", link: "/contact-us" },
    ],
  },
  {
    title: "روابط هامة",
    isTransparent: false,
    links: [
      { text: "بنوك", icon: "/vector-4.svg", link: "/banks/banks" },
      { text: "تأمين", icon: "/vector-4.svg", link: "/banks/insurance" },
      {
        text: "بصمات مصرفية ",
        icon: "/vector-4.svg",
        link: "/banks/banking-footprints",
      },
      {
        text: "استثمار",
        icon: "/vector-1.svg",
        link: "/investment-and-stock-exchange/investment",
      },
      {
        text: "بورصة",
        icon: "/vector-1.svg",
        link: "/investment-and-stock-exchange/stock-exchange",
      },
      {
        text: "شركات",
        icon: "/vector-1.svg",
        link: "/investment-and-stock-exchange/companies",
      },
      {
        text: "رجال اعمال",
        icon: "/vector-1.svg",
        link: "/investment-and-stock-exchange/businessmen",
      },
      { text: "فن", icon: "/vector-1.svg", link: "/miscellaneous/art" },
    ],
  },
  {
    title: "روابط هامة",
    isTransparent: true,
    links: [
      { text: "رياضة", icon: "/vector-4.svg", link: "/miscellaneous/sports" },
      {
        text: "عقارات مصرية",
        icon: "/vector-1.svg",
        link: "/real-estate/egyptian-real-estate",
      },
      {
        text: "سياحة",
        icon: "/vector-1.svg",
        link: "/tourism-transport-and-energy/tourism",
      },
      {
        text: "نقل",
        icon: "/vector-1.svg",
        link: "/tourism-transport-and-energy/transport",
      },
      {
        text: "بترول وطاقة",
        icon: "/vector-1.svg",
        link: "/tourism-transport-and-energy/oil-energy",
      },
      { text: "فيديو", icon: "/vector-1.svg", link: "/video/video" },
      { text: "ريلز", icon: "/vector-1.svg", link: "/video/reels" },
      {
        text: "الأكثر مشاهدة",
        icon: "/vector-1.svg",
        link: "/video/most-viewed",
      },
    ],
  },
  {
    title: "روابط هامة",
    isTransparent: true,
    links: [
      { text: "دراسات", icon: "/vector-1.svg", link: "/more/studies" },
      {
        text: "مجتمع الأموال",
        icon: "/vector-1.svg",
        link: "/more/money-community",
      },
      {
        text: "تكنولوجيا واتصالات ",
        icon: "/vector-1.svg",
        link: "/more/technology-communications",
      },
      {
        text: "حوادث وقضايا",
        icon: "/vector-1.svg",
        link: "/more/accidents-issues",
      },
      {
        text: "عربي ودولي",
        icon: "/vector-1.svg",
        link: "/more/arab-international",
      },
      {
        text: "كتاب الأموال",
        icon: "/vector-1.svg",
        link: "/more/money-columnists",
      },
      {
        text: "خدمات المواطن",
        icon: "/vector-1.svg",
        link: "/more/citizen-services",
      },
      { text: "ألبوم الصور", icon: "/vector-1.svg", link: "/more/photo-album" },
    ],
  },
];
const footerLinksMob = [
  {
    title: "الأموال",
    isTransparent: false,
    links: [
      { text: "عن الأموال", icon: "/vector-4.svg", link: "/about-us" },
      {
        text: "كتاب الاموال",
        icon: "/vector-1.svg",
        link: "/more/money-columnists",
      },
      {
        text: "الشروط و الأحكام",
        icon: "/vector-1.svg",
        link: "/terms-condition",
      },
      {
        text: "سياسة الخصوصية",
        icon: "/vector-1.svg",
        link: "/privacy-police",
      },
      { text: "وظائف شاغرة", icon: "/vector-1.svg" },
      { text: "أعلن معنا", icon: "/vector-1.svg", link: "/advertise-with-us" },
      { text: "اتصل بنا", icon: "/vector-1.svg", link: "/contact-us" },
    ],
  },
  {
    title: "روابط هامة",
    isTransparent: false,
    links: [
      { text: "بنوك", icon: "/vector-4.svg", link: "/banks/banks" },
      { text: "تأمين", icon: "/vector-4.svg", link: "/banks/insurance" },
      {
        text: "بصمات مصرفية ",
        icon: "/vector-4.svg",
        link: "/banks/banking-footprints",
      },
      {
        text: "استثمار",
        icon: "/vector-1.svg",
        link: "/investment-and-stock-exchange/investment",
      },
      {
        text: "بورصة",
        icon: "/vector-1.svg",
        link: "/investment-and-stock-exchange/stock-exchange",
      },
      {
        text: "شركات",
        icon: "/vector-1.svg",
        link: "/investment-and-stock-exchange/companies",
      },
      {
        text: "رجال اعمال",
        icon: "/vector-1.svg",
        link: "/investment-and-stock-exchange/businessmen",
      },
      { text: "فن", icon: "/vector-1.svg", link: "/miscellaneous/art" },
      { text: "رياضة", icon: "/vector-4.svg", link: "/miscellaneous/sports" },
      {
        text: "عقارات مصرية",
        icon: "/vector-1.svg",
        link: "/real-estate/egyptian-real-estate",
      },
      {
        text: "سياحة",
        icon: "/vector-1.svg",
        link: "/tourism-transport-and-energy/tourism",
      },
      {
        text: "نقل",
        icon: "/vector-1.svg",
        link: "/tourism-transport-and-energy/transport",
      },
      {
        text: "بترول وطاقة",
        icon: "/vector-1.svg",
        link: "/tourism-transport-and-energy/oil-energy",
      },
      { text: "فيديو", icon: "/vector-1.svg", link: "/video/video" },
      { text: "ريلز", icon: "/vector-1.svg", link: "/video/reels" },
      {
        text: "الأكثر مشاهدة",
        icon: "/vector-1.svg",
        link: "/video/most-viewed",
      },
      { text: "دراسات", icon: "/vector-1.svg", link: "/more/studies" },
      {
        text: "مجتمع الأموال",
        icon: "/vector-1.svg",
        link: "/more/money-community",
      },
      {
        text: "تكنولوجيا واتصالات ",
        icon: "/vector-1.svg",
        link: "/more/technology-communications",
      },
      {
        text: "حوادث وقضايا",
        icon: "/vector-1.svg",
        link: "/more/accidents-issues",
      },
      {
        text: "عربي ودولي",
        icon: "/vector-1.svg",
        link: "/more/arab-international",
      },
      {
        text: "كتاب الأموال",
        icon: "/vector-1.svg",
        link: "/more/money-columnists",
      },
      {
        text: "خدمات المواطن",
        icon: "/vector-1.svg",
        link: "/more/citizen-services",
      },
      { text: "ألبوم الصور", icon: "/vector-1.svg", link: "/more/photo-album" },
    ],
  },
];
const news = [
  "البنك الأهلي يطلق خدمات مصرفية رقمية جديدة",
  "صعود قوي للبورصة المصرية في بداية الأسبوع",
  "ارتفاع أسعار الذهب عالمياً يؤثر على السوق المصرية",
  "شهادات استثمار جديدة بعائد مرتفع من بنك مصر",
  "تقرير: التضخم السنوي في مصر يسجل ارتفاعاً جديداً",
  "قرارات جديدة من البنك المركزي بشأن أسعار الفائدة",
  "الاستثمار الأجنبي المباشر يتضاعف في النصف الأول من العام",
  "انخفاض أسعار النفط عالميًا وسط مخاوف من الركود",
];
export const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { postsByParams } = useSelector((state) => state.Posts);

  useEffect(() => {
    setLoading(true);
    dispatch(getPosts({ is_featured: 1, type: "default", limit: 5 }))
      .unwrap()
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch]);

  const featuredPosts =
    postsByParams[
      JSON.stringify({ is_featured: 1, type: "default", limit: 5 })
    ];
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  console.log(featuredPosts);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="relative z-30 w-full bg-white ">
      {/* Columns */}
      <div className="container relative z-10 flex-col flex-wrap items-start hidden gap-8 px-4 py-8 mx-auto lg:flex md:flex-row md:justify-between">
        {footerLinks.map((column, columnIndex) => (
          <div
            key={columnIndex}
            className="flex flex-col items-start w-full gap-4 md:items-end sm:w-auto"
          >
            <h3
              className={`h-6 font-bold text-lg md:text-2xl mb-4  w-full whitespace-nowrap ${
                column.isTransparent ? "text-transparent" : "text-primary"
              }`}
            >
              {column.title}
            </h3>
            <nav className="flex flex-col items-end gap-2">
              {column.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.link || "#"}
                  className="flex items-center justify-end w-full gap-2"
                >
                  <img src={arrowFooter} className="w-2" />
                  <span className="w-full text-sm font-normal text-right text-black duration-300 md:text-base whitespace-nowrap hover:text-primary">
                    {link.text}
                  </span>
                </a>
              ))}
            </nav>
          </div>
        ))}
      </div>
      {/* Columns Mobile*/}
      <div className="container relative z-10 flex flex-col flex-wrap gap-4 px-4 py-8 mx-auto md:gap-6 lg:hidden lg:justify-between ">
        {footerLinksMob.map((column, columnIndex) => (
          <div
            key={columnIndex}
            className={`flex flex-col items-start w-full gap-2 md:items-end sm:w-auto
            ${column.title === "الروابط الهامة" ? "md:order-1" : ""}
            ${column.title === "الأموال" ? "md:order-2" : ""}
          `}
          >
            <h3
              className={`h-6 font-bold text-xl text-center md:text-3xl mb-2 w-full whitespace-nowrap ${
                column.isTransparent ? "text-transparent" : "text-primary"
              }`}
            >
              {column.title}
            </h3>
            <nav className="grid w-full grid-cols-2 gap-2">
              {column.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.link || "#"}
                  className="flex items-center justify-start w-full gap-2 transition-colors duration-300 hover:text-primary"
                >
                  <img src={arrowFooter} className="w-2" />
                  <span className="text-sm text-black md:text-xl whitespace-nowrap">
                    {link.text}
                  </span>
                </a>
              ))}
            </nav>
          </div>
        ))}
      </div>

      {/* Logo */}
      <div className="absolute bottom-1/2 left-4 w-[350px] h-auto opacity-25 lg:block hidden">
        <img className="object-contain w-full h-auto" alt="Logo" src={logo} />
      </div>

      {/* Bottom Footer */}
      <section className="bg-[#1E1E1E] py-4 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-0 px-4 h-auto md:h-[50px] relative z-20 container">
          {/* Social Icons */}
          <div className="flex gap-4 ">
            <a
              href="#"
              className="p-1 text-xl text-white duration-300 bg-neutral-800 hover:text-primary"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="#"
              className="p-1 text-xl text-white duration-300 bg-neutral-800 hover:text-primary"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="#"
              className="p-1 text-xl text-white duration-300 bg-neutral-800 hover:text-primary"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="#"
              className="p-1 text-xl text-white duration-300 bg-neutral-800 hover:text-primary"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a
              href="#"
              className="p-1 text-xl text-white duration-300 bg-neutral-800 hover:text-primary"
            >
              <FontAwesomeIcon icon={faTelegramPlane} />
            </a>
          </div>
          {/* Copyright */}
          <p className="hidden w-full text-sm font-normal text-center text-white md:block md:text-base md:text-left md:w-auto">
            ©2025 جميع الحقوق محفوظة لدى جريدة الأموال. تصميم و تطوير {"  "}
            <a
              href="https://target-group.org/"
              rel="noopener noreferrer"
              target="_blank"
              className="underline duration-300 hover:text-primary"
            >
              شركة تارجت للحلول الرقمية
            </a>
          </p>
          <div className="w-full text-sm font-normal text-center text-white md:hidden md:text-base md:text-left md:w-auto">
            <p>©2025 جميع الحقوق محفوظة لدى جريدة الأموال.</p>
            <p>
              تصميم و تطوير{" "}
              <a
                href="https://target-group.org/"
                rel="noopener noreferrer"
                target="_blank"
                className="underline duration-300 hover:text-primary"
              >
                شركة تارجت للحلول الرقمية
              </a>
            </p>
          </div>
        </div>
      </section>
      <div className="bg-[#1E1E1E] h-[49px]"></div>
      {/* Sticky Bottom Footer */}
      <div
        className={`fixed z-40 bottom-[55px] md:bottom-[20px] flex flex-col gap-3 md:end-5 end-2`}
      >
        {showScroll && (
          <button
            className="flex items-center justify-center w-12 h-12 transition duration-300 bg-white rounded-full shadow-lg hover:bg-primary hover:text-black group"
            onClick={scrollToTop}
          >
            <ChevronUpIcon className="w-6 h-6 duration-300 group-hover:text-white" />
          </button>
        )}
      </div>
      {/* Blogs Sticky Bottom Footer */}

      <section className="fixed z-30 flex gap-3 bottom-0 w-full  h-[50px] bg- items-center justify-center">
        {/* <section className="max-w-[1108px] px-4 flex items-center h-[50px]  bg-primary "> */}
        <section className="container ps-2 pe-0 mx-4 max-w-[1108px]  flex items-center h-[50px]  bg-primary ">
          <h1 className="text-white flex gap-1 items-center md:w-[5%] w-[25%]">
            <span>
              <FontAwesomeIcon icon={faCircle} className="w-2 text-[#D13232]" />
            </span>
            <span className="text-sm font-bold md:text-lg">عاجل</span>
          </h1>
          <div className="overflow-hidden group md:w-[95%] w-[75%]">
            <div className="animate-marquee flex gap-8 group-hover:[animation-play-state:paused]">
              {[...Array(2)]?.map((_, repeatIndex) => (
                <div key={repeatIndex} className="flex gap-8">
                  {featuredPosts?.map((item, index) => (
                    <div
                      key={`${repeatIndex}-${index}`}
                      className="flex items-center gap-2 min-w-max"
                    >
                      <FontAwesomeIcon
                        icon={faCircle}
                        className="w-2 text-[#D13232]"
                      />
                      <span className="text-white duration-300 cursor-pointer hover:text-black">
                        {item.title_AR}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </footer>
  );
};
