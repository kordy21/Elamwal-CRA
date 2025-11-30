import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AdBox = ({ ads }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-slide functionality for mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % ads.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isMobile, ads.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % ads.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + ads.length) % ads.length);

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
  };

  return (
    <section className="hidden p-4 duration-300 bg-white border border-gray-100 rounded lg:block hover:shadow-md">
      {isMobile ? (
        <div className="relative w-full h-[310px] overflow-hidden rounded-lg shadow-sm">
          <div
            className="flex h-full transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {ads.map((ad) => (
              <div
                key={ad.id}
                className="flex items-center justify-center flex-shrink-0 w-full h-full bg-gray-100 border border-gray-200"
              >
                <div className="text-center">
                  <p className="mb-2 text-lg font-medium text-gray-500">
                    {ad.content}
                  </p>
                  <p className="text-sm text-gray-400">{ad.title}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-green-500 hover:bg-green-600 rounded-full p-1.5 shadow-md transition-all"
          >
            <ChevronLeft className="w-3 h-3 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 hover:bg-green-600 rounded-full p-1.5 shadow-md transition-all"
          >
            <ChevronRight className="w-3 h-3 text-white" />
          </button>
        </div>
      ) : (
        <div className="w-full h-[310px] bg-gray-100 border border-gray-200 flex items-center justify-center rounded-lg shadow-sm">
          <p className="text-lg font-medium text-gray-500">مساحة اعلانية</p>
        </div>
      )}
    </section>
  );
};

const AdvistingSpaceWidget = ({ count = 1 }) => {
  const ads = [
    { id: 1, title: "إعلان 1", content: "مساحة إعلانية رقم 1" },
    { id: 2, title: "إعلان 2", content: "مساحة إعلانية رقم 2" },
    { id: 3, title: "إعلان 3", content: "مساحة إعلانية رقم 3" },
    { id: 4, title: "إعلان 4", content: "مساحة إعلانية رقم 4" },
  ];

  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <AdBox key={i} ads={ads} />
      ))}
    </>
  );
};

export default AdvistingSpaceWidget;
