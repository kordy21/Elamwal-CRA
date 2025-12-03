import React, { useState } from "react";
import {
  ArrowDownTrayIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import logo from "../../assets/images/logo.webp";
import USA from "../../assets/images/USA.png";
import { Search } from "../ui/search";
import CurrentDate from "../../utils/CurrentDate";

const MenuMobile = ({
  closeMobileMenu,
  navigationItems,
  expandedDropdown,
  toggleDropdown,
  expandedSubDropdown,
  toggleSubDropdown,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
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

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Background overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={closeMobileMenu}
      ></div>

      {/* Menu content */}
      <div className="fixed top-0 right-0 w-full h-full overflow-y-auto bg-white">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <img className="w-20" alt="Logo" src={logo} />
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
          <div className="flex items-center gap-3">
            <Search
              placeholder="البحث..."
              onSearch={setSearchQuery}
              results={searchResults}
            />
            <button onClick={closeMobileMenu}>
              <XMarkIcon className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex-1 ">
          {navigationItems.map((item, index) => {
            // 👇 نفس منطق الديسكتوب
            const extraItems =
              item?.label === "المزيد"
                ? [
                    {
                      label: "توظيف",
                      value: "employment",
                      href: "/employment",
                    },
                    { label: "من نحن", value: "about-us", href: "/about-us" },
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

            // 👇 نكمل نفس منطق العرض
            return (
              <div key={index}>
                {finalDropdownItems.length > 0 ? (
                  <div>
                    {/* Main Item */}
                    <button
                      className="flex items-center justify-between w-full px-4 py-2 text-right border-b-2 border-gray-100 group bg-gray-50"
                      onClick={() => toggleDropdown(index)}
                    >
                      <span
                        className={`text-lg font-medium ${
                          expandedDropdown === index
                            ? "text-primary"
                            : "text-gray-800 group-hover:text-primary duration-300"
                        }`}
                      >
                        {item.label}
                      </span>
                      {expandedDropdown === index ? (
                        <ChevronUpIcon className="w-5 h-5 text-primary" />
                      ) : (
                        <ChevronDownIcon className="w-5 h-5 text-gray-500 duration-300 group-hover:text-primary" />
                      )}
                    </button>

                    {/* Dropdown Items */}
                    {expandedDropdown === index && (
                      <div>
                        {finalDropdownItems.map((dropdownItem, dropIndex) => (
                          <div key={dropIndex}>
                            {dropdownItem.subDropdownItems ? (
                              <>
                                <button
                                  className="flex items-center justify-between w-full px-8 py-2 text-right border-b-2 border-gray-100 group bg-gray-50"
                                  onClick={() =>
                                    toggleSubDropdown(`${index}-${dropIndex}`)
                                  }
                                >
                                  <span
                                    className={`text-md font-medium ${
                                      expandedSubDropdown ===
                                      `${index}-${dropIndex}`
                                        ? "text-primary"
                                        : "text-gray-800 group-hover:text-primary duration-300"
                                    }`}
                                  >
                                    {dropdownItem.label}
                                  </span>
                                  {expandedSubDropdown ===
                                  `${index}-${dropIndex}` ? (
                                    <ChevronUpIcon className="w-5 h-5 text-primary" />
                                  ) : (
                                    <ChevronDownIcon className="w-5 h-5 text-gray-500 duration-300 group-hover:text-primary" />
                                  )}
                                </button>

                                {/* SubDropdown Items */}
                                {expandedSubDropdown ===
                                  `${index}-${dropIndex}` && (
                                  <div className="bg-gray-50">
                                    {dropdownItem.subDropdownItems.map(
                                      (sub, subIndex) => (
                                        <div
                                          key={subIndex}
                                          className="flex items-center gap-2 px-12 py-2 text-base font-medium text-gray-700 duration-300 border-b-2 border-gray-100 hover:text-primary"
                                        >
                                          {sub.label || sub.title}
                                        </div>
                                      )
                                    )}
                                  </div>
                                )}
                              </>
                            ) : (
                              <Link
                                to={dropdownItem.href}
                                className="block px-8 py-2 text-lg font-medium text-gray-800 duration-300 border-b-2 border-gray-100 hover:text-primary"
                                onClick={closeMobileMenu}
                              >
                                {dropdownItem.label}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href || "#"}
                    className="flex items-center justify-between w-full px-4 py-2 text-lg text-right duration-300 border-b-2 border-gray-100 hover:text-primary bg-gray-50"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}

          {/* <Link
            to="#"
            className="block px-4 py-2 text-lg font-medium text-gray-800 duration-300 border-b-2 border-gray-100 bg-gray-50 hover:text-primary"
            // onClick={closeMobileMenu}
          >
            تسجيل الدخول
          </Link> */}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-4 border-t border-gray-200">
          {/* PDF Button */}
          <Button className="relative group  flex items-center justify-center gap-3 xl:gap-5 bg-[#F14D4A] rounded-[10px] px-3 py-2 md:px-4 md:py-3 hover:bg-[#752524] transition-colors duration-300">
            <div className="text-sm font-normal text-center text-white md:text-base">
              <a href="/more/newspaper">
                <span className="font-medium">الجريدة</span>
              </a>
            </div>
            <ArrowDownTrayIcon className="w-4 text-white" />
            {/* message */}
            <span className="absolute px-2 py-1 text-xs text-white transition scale-0 -translate-x-[80%] bg-gray-800 rounded top-12 left-1/2 group-hover:scale-100 whitespace-nowrap">
              تصفح العدد الأسبوعي لجريدة الأموال
            </span>
          </Button>

          {/* Language Toggle */}
          {/* <div className="flex items-center gap-2 cursor-pointer">
            <img className="w-6 h-auto" alt="Arabic" src={USA} />
            <span className="text-base font-medium text-gray-600">English</span>
          </div> */}
        </div>
        <div className="mt-10 border-gray-100 bg-gray-50">
          <div className="p-5 text-xs text-center text-black md:text-sm">
            <CurrentDate />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
