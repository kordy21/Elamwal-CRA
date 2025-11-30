import React from "react";
import { Button } from "../../../../components/ui/button";
import AAmwal from "../../../../assets/images/Ammwaall three.webp";
import apple from "../../../../assets/icons/apple.svg";
import andirod from "../../../../assets/icons/andirod.svg";

const AppDownloadSection = ({ layout = "row" }) => {
  const containerClass =
    layout === "column"
      ? "flex flex-col items-center gap-8"
      : "flex flex-col items-center gap-8 lg:flex-row-reverse";

  const buttonsClass =
    layout === "column"
      ? "flex flex-col items-center w-full gap-4"
      : "flex flex-col items-center w-full gap-4 sm:flex-row sm:gap-8";

  return (
    <section className="relative w-full md:p-5 bg-white hover:shadow-md">
      <div
        className={`container ${containerClass} ${
          layout === "column" ? "py-6" : "md:py-12 py-8"
        } `}
      >
        <img
          className={` h-auto object-contain drop-shadow-2xl img-shadow ${
            layout === "column" ? "w-[80%]" : "w-full md:w-max-[582px]"
          }`}
          alt="Group"
          src={AAmwal}
        />
        <style>{`.img-shadow{
          filter: drop-shadow(2px 4px 6px black) !important
        }`}</style>

        <div className="flex flex-col items-start w-full gap-8">
          <div className="flex flex-col items-start w-full gap-4">
            <h2
              className={`mt-5  font-bold text-center text-black  w-full ${
                layout === "column"
                  ? "md:text-3xl text-2xl"
                  : "md:text-5xl text-2xl"
              } lg:mt-0 `}
            >
              احصل على التطبيق الآن
            </h2>
            <p className="w-full text-base font-medium text-center text-black md:text-lg ">
              حمل التطبيق الآن وتمتع بإمكانية الوصول السريع لكل ما تحتاجه في أي
              وقت، ومن أي مكان.
            </p>
          </div>

          <div className="flex flex-col items-start w-full gap-4">
            <p className="w-full text-center text-base font-normal text-gray-600 ">
              حمل التطبيق من
            </p>

            <div className={buttonsClass}>
              <Button className="w-full h-[78px] bg-[#1c1b1e] rounded-lg p-0">
                <div className="flex items-center gap-3 px-4 py-3">
                  <div className="flex flex-col">
                    <span className="text-xs text-white">
                      تحميل التطبيق من{" "}
                    </span>
                    <span className="text-lg text-white sm:text-xl">
                      اب استور
                    </span>
                  </div>
                  <img className="w-10 h-10" alt="Apple Store" src={apple} />
                </div>
              </Button>

              <Button className="w-full h-[78px] bg-[#1c1b1e] rounded-lg p-0">
                <div className="flex items-center gap-3 px-4 py-3">
                  <div className="flex flex-col">
                    <span className="text-xs text-white">
                      تحميل التطبيق من{" "}
                    </span>
                    <span className="text-lg text-white sm:text-xl">
                      متجر الألعاب
                    </span>
                  </div>
                  <img className="w-10 h-10" alt="Google Play" src={andirod} />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
