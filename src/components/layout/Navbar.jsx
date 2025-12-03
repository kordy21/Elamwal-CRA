import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { Dropdown } from "../ui/dropdown";
import { Search } from "../ui/search";
import {
  ChevronDownIcon,
  ArrowDownTrayIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";

import EG from "../../assets/images/Egypt.webp";
import USA from "../../assets/images/USA.png";
import logo from "../../assets/images/logo.webp";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import sun from "../../assets/icons/Sun cloud angled rain.svg";
import MenuMobile from "./MenuMobile";
import { LanguageDropdown } from "./LanguageDropdown";
import UserMenu from "./UserMenu";
import User from "../../assets/images/User.png";
import { getCategories } from "../../slices/2-category/thunk";
import { getWeather } from "../../slices/8-externalFactorsSlice/thunk";

function mapCategoriesToNavigation(apiData) {
  // Sort categories by ID
  const sortedCategories = [...apiData].sort((a, b) => a.id - b.id);

  return sortedCategories.map((category, index) => {
    // If no SubCategories → return a normal link
    if (!category.SubCategories || category.SubCategories.length === 0) {
      return {
        label: category.name_AR,
        active: index === 0, // First item can be active by default
        value: category.slug,
        href: `/${category.slug}`, // Category only
      };
    }

    // If SubCategories exist → return dropdown items
    const sortedSubCategories = [...category.SubCategories].sort(
      (a, b) => a.id - b.id
    );

    return {
      label: category.name_AR,
      active: index === 0,
      dropdownItems: sortedSubCategories.map((sub) => ({
        label: sub.name_AR,
        value: sub.slug,
        href: `/${category.slug}/${sub.slug}`, // Category/SubCategory
      })),
    };
  });
}

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedDropdown, setExpandedDropdown] = useState(null);
  const [expandedSubDropdown, setExpandedSubDropdown] = useState(null);
  const location = useLocation();
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.Categories);
  const [navigationItems, setNavigationItems] = useState([]);

  const { weather, loading, error } = useSelector(
    (state) => state.externalFactors
  );

  useEffect(() => {}, [dispatch]);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        await dispatch(getWeather());
      } catch (err) {
        console.error("Unexpected error:", err);
      }
    };

    fetchWeather();
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if (categories && categories.length > 0) {
      const mapped = mapCategoriesToNavigation(categories);
      setNavigationItems(mapped);
    }
  }, [categories]);

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
  // console.log(navigationItems);
  // console.log(categories);
  // Close mobile menu when clicking outside
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const searchResults = [
    { id: "1", title: "أسعار الذهب اليوم", category: "أسواق" },
    { id: "2", title: "البورصة المصرية", category: "استثمار" },
    { id: "3", title: "أسعار العملات", category: "بنوك" },
    { id: "4", title: "النفط والطاقة", category: "طاقة" },
  ].filter(
    (result) =>
      searchQuery &&
      result.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleDropdown = (index) => {
    setExpandedDropdown(expandedDropdown === index ? null : index);
  };
  const toggleSubDropdown = (index) => {
    setExpandedSubDropdown(expandedSubDropdown === index ? null : index);
  };
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setExpandedDropdown(null);
  };

  // console.log(navigationItems);
  return (
    <>
      {!scrolled && (
        <nav className="w-full bg-white shadow-md lg:bg-gray-100">
          <div className="container relative flex items-center justify-between gap-3 py-0 h-[70px] lg:h-16 xl:gap-5">
            {/* Mobile menu button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <div className="flex flex-col items-center justify-center w-6 h-6">
                  <Bars3BottomRightIcon className="text-black h-7 w-7" />
                </div>
              </button>
              <a href="/">
                <img className="w-16 lg:hidden" alt="Frame" src={logo} />
              </a>
            </div>
            {/* Maged Ali */}
            <div className="flex items-center justify-center gap-4 lg:hidden">
              <div className="text-xs text-center text-primary ">
                <span>
                  رئيس مجلس الإدارة
                  <br />
                  ورئيس التحرير
                  <br />
                </span>
                <span className="text-xs font-bold ">ماجد علي</span>
              </div>
            </div>
            {/* Wether */}
            {loading ? (
              <div className="text-white"></div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-1 lg:hidden">
                <img
                  className="w-[21px] h-[21px]"
                  alt="Sun cloud angled"
                  src={weather?.logo}
                />
                <div className="text-sm text-primary md:text-base whitespace-nowrap">
                  {weather?.city_AR} {weather?.temp}C°
                </div>
              </div>
            )}
            {/* <div className="flex items-center justify-center gap-1 lg:hidden ">
              <img
                className="w-[21px] h-[21px]"
                alt="Sun cloud angled"
                src={sun}
              />
              <div className="text-sm text-primary md:text-base whitespace-nowrap">
                القاهرة 19C°
              </div>
            </div> */}

            {/* Right side  */}
            <div className="items-center hidden ap-3 lg:inline-flex xl:gap-4">
              {navigationItems?.map((item, index) => {
                const extraItems =
                  item?.label === "المزيد"
                    ? [
                        {
                          label: "توظيف",
                          value: "employment",
                          href: "/employment",
                        },
                        {
                          label: "من نحن",
                          value: "about-us",
                          href: "/about-us",
                        },
                        {
                          label: "اعلن",
                          value: "advertise",
                          href: "/advertise-with-us",
                        },
                        {
                          label: "تواصل معنا",
                          value: "contact",
                          href: "/contact-us",
                        },
                      ]
                    : [];

                const filteredDropdownItems = item?.dropdownItems
                  ? item.dropdownItems.filter(
                      (subItem) => subItem.label !== "جريدة"
                    )
                  : [];

                const newsItemsPrefix =
                  item?.label === "أخبار"
                    ? [
                        {
                          label: "عاجل",
                          value: "breaking",
                          href: "/news/breaking",
                        },
                        {
                          label: "On-Trend",
                          value: "on-trend",
                          href: "/news/on-trend",
                        },
                      ]
                    : [];

                const finalDropdownItems =
                  item?.label === "المزيد"
                    ? [...filteredDropdownItems, ...extraItems]
                    : item?.label === "أخبار"
                    ? [...newsItemsPrefix, ...(item?.dropdownItems || [])]
                    : item?.dropdownItems || [];

                return item?.dropdownItems ? (
                  <Dropdown
                    key={index}
                    trigger={
                      <Link
                        to={item?.href || "#"}
                        className={`inline-flex h-14 xl:h-16 items-center justify-center gap-2 px-0 py-2 group transition-colors ${
                          location.pathname === item.href
                            ? "border-b-[5px] border-primary"
                            : ""
                        }`}
                      >
                        <div className="text-base font-bold text-gray-600 duration-300 md:text-base group-hover:text-primary">
                          {item?.label}
                        </div>
                        <ChevronDownIcon className="w-3 text-gray-500 duration-300 group-hover:text-primary" />
                      </Link>
                    }
                    items={finalDropdownItems}
                    className="h-14 xl:h-16"
                  />
                ) : (
                  <div
                    key={index}
                    className={`inline-flex h-14 xl:h-16 items-center justify-center gap-2 px-0 py-2 duration-300 group cursor-pointer transition-colors ${
                      item?.active ? "border-b-[5px] border-primary" : ""
                    }`}
                  >
                    <div className="text-base font-bold text-gray-600 duration-300 md:text-base group-hover:text-primary">
                      {item?.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Left side  */}
            <div className="items-center hidden gap-3 jus xl:gap-5 lg:flex">
              <Button className="relative group hidden sm:flex items-center justify-center gap-3 xl:gap-5 bg-[#F14D4A] rounded-[10px] px-3 py-2 md:px-4 md:py-3 hover:bg-[#752524] transition-colors duration-300">
                <div className="text-sm font-normal text-center text-white md:text-base">
                  <a href="/more/newspaper">
                    <span className="font-medium">الجريدة</span>
                  </a>
                </div>
                <ArrowDownTrayIcon className="w-4 text-white" />
                {/* message */}
                <span className="absolute px-2 py-1 text-xs text-white transition scale-0 -translate-x-1/2 bg-gray-800 rounded top-12 left-1/2 group-hover:scale-100 whitespace-nowrap">
                  تصفح العدد الأسبوعي لجريدة الأموال
                </span>
              </Button>

              <Search
                placeholder="البحث..."
                onSearch={setSearchQuery}
                results={searchResults}
                className=""
              />

              <UserMenu
                isLoggedIn={false}
                user={{ name: "محمد خالد", avatar: User }}
              />

              {/* <LanguageDropdown
                trigger={
                  <div className="flex items-center justify-center gap-1 md:gap-2 px-0 py-2.5">
                    <img className="w-6 h-auto" alt="Vector" src={EG} />
                    <div className="text-base font-medium text-gray-600 md:text-sm">
                      عربي
                    </div>
                    <ChevronDownIcon className="w-3 text-gray-500" />
                  </div>
                }
                items={[
                  { label: "العربية", value: "ar", flag: EG },
                  { label: "English", value: "en", flag: USA },
                ]}
              /> */}
            </div>
          </div>
        </nav>
      )}

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <MenuMobile
          closeMobileMenu={closeMobileMenu}
          navigationItems={navigationItems}
          expandedDropdown={expandedDropdown}
          toggleDropdown={toggleDropdown}
          expandedSubDropdown={expandedSubDropdown}
          toggleSubDropdown={toggleSubDropdown}
        />
      )}

      {/* version Fixed */}
      {scrolled && (
        <nav className="fixed xl:top-[100px] top-0 left-0 z-40 w-full transition-all duration-500 bg-[#F8F8FA] shadow-md lg:block animate-slideDown">
          <div className="container relative flex items-center justify-between gap-3 py-0 h-[70px] xl:h-16 xl:gap-5">
            {/* Mobile menu button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <div className="flex flex-col items-center justify-center w-6 h-6">
                  <Bars3BottomRightIcon className="text-black h-7 w-7" />
                </div>
              </button>
              <a href="/">
                <img className="w-16 lg:hidden" alt="Frame" src={logo} />
              </a>
            </div>
            {/* Maged Ali */}
            <div className="flex items-center justify-center gap-4 lg:hidden">
              <div className="text-xs text-center text-primary ">
                <span>
                  رئيس مجلس الإدارة
                  <br />
                  ورئيس التحرير
                  <br />
                </span>
                <span className="text-xs font-bold ">ماجد علي</span>
              </div>
            </div>
            {/* Wether */}
            {loading ? (
              <div className="text-white"></div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-1 lg:hidden">
                <img
                  className="w-[21px] h-[21px]"
                  alt="Sun cloud angled"
                  src={weather?.logo}
                />
                <div className="text-sm text-primary md:text-base whitespace-nowrap">
                  {weather?.city_AR} {weather?.temp}C°
                </div>
              </div>
            )}
            {/* <div className="flex items-center justify-center gap-1 lg:hidden ">
              <img
                className="w-[21px] h-[21px]"
                alt="Sun cloud angled"
                src={sun}
              />
              <div className="text-sm text-primary md:text-base whitespace-nowrap">
                القاهرة 19C°
              </div> */}
              {/* <Search
                placeholder="البحث..."
                onSearch={setSearchQuery}
                results={searchResults}
              /> */}
            {/* </div> */}
            {/* Right side  */}
            <div className="items-center hidden ap-3 lg:inline-flex xl:gap-4">
              {navigationItems?.map((item, index) => {
                const extraItems =
                  item?.label === "المزيد"
                    ? [
                        {
                          label: "توظيف",
                          value: "employment",
                          href: "/employment",
                        },
                        {
                          label: "من نحن",
                          value: "about-us",
                          href: "/about-us",
                        },
                        {
                          label: "اعلن",
                          value: "advertise",
                          href: "/advertise-with-us",
                        },
                        {
                          label: "تواصل معنا",
                          value: "contact",
                          href: "/contact-us",
                        },
                      ]
                    : [];

                const filteredDropdownItems = item?.dropdownItems
                  ? item.dropdownItems.filter(
                      (subItem) => subItem.label !== "جريدة"
                    )
                  : [];

                const newsItemsPrefix =
                  item?.label === "أخبار"
                    ? [
                        {
                          label: "عاجل",
                          value: "breaking",
                          href: "/news/breaking",
                        },
                        {
                          label: "On-Trend",
                          value: "on-trend",
                          href: "/news/on-trend",
                        },
                      ]
                    : [];

                const finalDropdownItems =
                  item?.label === "المزيد"
                    ? [...filteredDropdownItems, ...extraItems]
                    : item?.label === "أخبار"
                    ? [...newsItemsPrefix, ...(item?.dropdownItems || [])]
                    : item?.dropdownItems || [];

                return item?.dropdownItems ? (
                  <Dropdown
                    key={index}
                    trigger={
                      <Link
                        to={item?.href || "#"}
                        className={`inline-flex h-14 xl:h-16 items-center justify-center gap-2 px-0 py-2 group transition-colors ${
                          location.pathname === item.href
                            ? "border-b-[5px] border-primary"
                            : ""
                        }`}
                      >
                        <div className="text-base font-bold text-gray-600 duration-300 md:text-base group-hover:text-primary">
                          {item?.label}
                        </div>
                        <ChevronDownIcon className="w-3 text-gray-500 duration-300 group-hover:text-primary" />
                      </Link>
                    }
                    items={finalDropdownItems}
                    className="h-14 xl:h-16"
                  />
                ) : (
                  <div
                    key={index}
                    className={`inline-flex h-14 xl:h-16 items-center justify-center gap-2 px-0 py-2 duration-300 group cursor-pointer transition-colors ${
                      item?.active ? "border-b-[5px] border-primary" : ""
                    }`}
                  >
                    <div className="text-base font-bold text-gray-600 duration-300 md:text-base group-hover:text-primary">
                      {item?.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Left side  */}
            <div className="items-center hidden gap-3 jus xl:gap-5 lg:flex">
              <Button className="relative group hidden sm:flex items-center justify-center gap-3 xl:gap-5 bg-[#F14D4A] rounded-[10px] px-3 py-2 md:px-4 md:py-3 hover:bg-[#752524] transition-colors duration-300">
                <div className="text-sm font-normal text-center text-white md:text-base">
                  <a href="/more/newspaper">
                    <span className="font-medium">الجريدة</span>
                  </a>
                </div>
                <ArrowDownTrayIcon className="w-4 text-white" />
                {/* message */}
                <span className="absolute px-2 py-1 text-xs text-white transition scale-0 -translate-x-1/2 bg-gray-800 rounded top-12 left-1/2 group-hover:scale-100 whitespace-nowrap">
                  تصفح العدد الأسبوعي لجريدة الأموال
                </span>
              </Button>
              <Search
                placeholder="البحث..."
                onSearch={setSearchQuery}
                results={searchResults}
                className=""
              />
              {/* <div className="cursor-pointer">
                <UserIcon className="w-6 h-6 text-gray-500 duration-300 hover:text-primary" />
              </div> */}
              <UserMenu
                isLoggedIn={true}
                user={{ name: "محمد خالد", avatar: User }}
              />

              {/* <LanguageDropdown
                trigger={
                  <div className="flex items-center justify-center gap-1 md:gap-2 px-0 py-2.5">
                    <img className="w-6 h-auto" alt="Vector" src={EG} />
                    <div className="text-base font-medium text-gray-600 md:text-sm">
                      عربي
                    </div>
                    <ChevronDownIcon className="w-3 text-gray-500" />
                  </div>
                }
                items={[
                  { label: "العربية", value: "ar", flag: EG },
                  { label: "English", value: "en", flag: USA },
                ]}
              /> */}
              {/* <Dropdown
                trigger={
                  <div className="flex items-center justify-center gap-1 md:gap-2 px-0 py-2.5">
                    <img className="w-6 h-auto" alt="Vector" src={EG} />
                    <div className="text-base font-medium text-gray-600 md:text-sm">
                      عربي
                    </div>
                    <ChevronDownIcon className="w-3 text-gray-500" />
                  </div>
                }
                items={[
                  { label: "العربية", value: "ar", flag: EG },
                  { label: "English", value: "en", flag: USA },
                ]}
              /> */}
            </div>
          </div>
        </nav>
      )}
    </>
  );
};
