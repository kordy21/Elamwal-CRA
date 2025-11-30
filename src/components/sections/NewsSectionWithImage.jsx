import React, { useState } from "react";
import MainTitle from "../../components/ui/MainTitle";

const NewsSectionWithImage = ({ slides = [], articles = [], repeat = 1 }) => {
  const repeatedArticles = Array.from({ length: repeat }).flatMap(() => articles);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="flex flex-col gap-4 md:gap-6">
      <MainTitle title="بنوك وتأمين" noMore={true} />

      <div className="flex flex-col gap-4 overflow-hidden bg-white rounded-lg shadow-md md:gap-6">
        {slides.length > 0 && (
          <div className="relative w-full overflow-hidden h-96">
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="object-cover w-full h-full transition-all duration-500"
            />

            <div className="absolute bottom-0 left-0 flex flex-col w-full gap-2 p-4 text-white bg-black/80">
              {slides[currentIndex].category && (
                <span className="px-2 py-1 text-xs font-semibold text-gray-300 rounded bg-black/50 w-fit">
                  {slides[currentIndex].category}
                </span>
              )}
              <h2 className="text-lg font-bold leading-snug md:text-xl">
                {slides[currentIndex].title}
              </h2>
              {slides[currentIndex].description && (
                <p className="text-sm text-gray-300">
                  {slides[currentIndex].description}
                </p>
              )}
            </div>

            {slides.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute p-2 text-white -translate-y-1/2 rounded-full top-1/2 left-2 bg-black/30"
                >
                  ‹
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute p-2 text-white -translate-y-1/2 rounded-full top-1/2 right-2 bg-black/30"
                >
                  ›
                </button>

                {/* Indicators */}
                <div className="absolute flex gap-2 -translate-x-1/2 bottom-2 left-1/2">
                  {slides.map((_, idx) => (
                    <span
                      key={idx}
                      className={`w-3 h-3 rounded-full ${
                        idx === currentIndex ? "bg-green-500" : "bg-green-200"
                      }`}
                    ></span>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {repeatedArticles.length > 0 && (
          <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
            {repeatedArticles?.map((article, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 overflow-hidden bg-white rounded-md shadow-sm"
              >
                {article.image && (
                  <div className="w-full h-40 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                <div className="flex flex-col gap-1 p-2">
                  {article.category && (
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded ${article.categoryColor}`}
                    >
                      {article.category}
                    </span>
                  )}
                  <h3 className="font-bold text-md">{article.title}</h3>
                  {article.description && (
                    <p className="text-sm text-gray-600">
                      {article.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSectionWithImage;
