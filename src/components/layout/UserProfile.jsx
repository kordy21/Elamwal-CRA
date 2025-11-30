import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.webp";
import advertisement_1 from "../../assets/images/advertisement_1.webp";
import AdSliderNav from "./AdSliderNav";

export const UserProfile = () => {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <>
      {/* version base*/}
      {!scrolled && (
        <section className="hidden w-full transition-all duration-500 bg-white lg:block">
          <div className="container flex items-center justify-between py-4">
            {/* Right side */}
            <div className="hidden gap-4 md:flex">
              {/* Center logo */}
              <a href="/">
                <img
                  className="object-cover w-32 h-auto lg:w-40"
                  alt="logo"
                  src={logo}
                />
              </a>
              <div className="flex items-center justify-center gap-4">
                <div className="text-sm text-center text-primary md:text-base">
                  <span>
                    رئيس مجلس الإدارة
                    <br />
                    ورئيس التحرير
                    <br />
                  </span>
                  <span className="text-lg font-bold md:text-xl">ماجد علي</span>
                </div>
              </div>
            </div>
            {/* Left side */}
            <div className="flex-1 max-w-[752px]">
              <AdSliderNav />
            </div>
          </div>
        </section>
      )}

      {/* version Fixed */}
      {scrolled && (
        <section className="fixed top-0 left-0 z-40 hidden w-full transition-all duration-500 bg-white shadow-md lg:block animate-slideDown">
          <div className="container flex items-center justify-between py-2">
            {/* Right side */}
            <div className="hidden gap-4 md:flex">
              {/* Center logo */}
              <a href="/">
                <img
                  className="object-cover w-32 h-auto lg:w-40"
                  alt="logo"
                  src={logo}
                />
              </a>
              <div className="flex items-center justify-center gap-4">
                <div className="text-sm text-center text-primary md:text-base">
                  <span>
                    رئيس مجلس الإدارة
                    <br />
                    ورئيس التحرير
                    <br />
                  </span>
                  <span className="text-lg font-bold md:text-xl">ماجد علي</span>
                </div>
              </div>
            </div>
            {/* Left side */}
            <div className="flex-1 max-w-[690px]">
              <AdSliderNav />
            </div>
          </div>
        </section>
      )}
    </>
  );
};
