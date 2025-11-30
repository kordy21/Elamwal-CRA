import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Carousel } from "../ui/carousel";
import { useCarousel } from "../../hooks/useCarousel";

export const CenterContent = () => {
  const profileData = [
    {
      image: "/image-12.png",
      name: "أ / شيرين أحمد",
    },
    {
      image: "/image-13.png",
      name: "أ / غدير خالد",
    },
    {
      image: "/image-14.png",
      name: "أ / عرفان صالح",
    },
    {
      image: "/image-15.png",
      name: "أ / محمود حاحا",
    },
    {
      image: "/image-16.png",
      name: "أ / هدى خليفه",
    },
  ];

  const { currentIndex, goToNext, goToPrevious, goToSlide } = useCarousel({
    itemsLength: profileData.length,
    autoPlayInterval: 4000,
    autoPlay: true,
  });

  return (
    <section className="flex flex-col w-full items-center justify-center gap-4 md:gap-6 px-4 md:px-8 py-6 md:py-8 border-t border-b border-[#f6f6f6] bg-[linear-gradient(0deg,rgba(30,30,30,1)_0%,rgba(30,30,30,1)_100%)] rounded-lg">
      <header className="h-[37px] justify-end gap-4 md:gap-6 w-full flex items-center">
        <h2 className=" font-bold text-custom-green text-2xl md:text-[32px] whitespace-nowrap">
          كتاب الرأي
        </h2>

        <img
          className="flex-1 object-cover h-px"
          alt="Line"
          src="/src/assets/icons/line-276.svg"
        />

        <Button
          variant="link"
          className="w-[34px] font-normal text-[#00A651] text-sm text-center underline h-auto  p-0 h-auto"
        >
          المزيد
        </Button>
      </header>

      <Carousel
        currentIndex={currentIndex}
        onNext={goToNext}
        onPrevious={goToPrevious}
        onDotClick={goToSlide}
        showArrows={false}
        showDots={true}
        className="w-full"
        dotsClassName="flex items-center justify-center gap-2 w-full"
      >
        {Array.from(
          { length: Math.ceil(profileData.length / 5) },
          (_, slideIndex) => (
            <div
              key={slideIndex}
              className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-10"
            >
              {profileData
                .slice(slideIndex * 5, (slideIndex + 1) * 5)
                .map((profile, index) => (
                  <Card
                    key={index}
                    className="flex flex-col items-start gap-4 bg-transparent border-none shadow-none"
                  >
                    <CardContent className="w-full p-0">
                      <img
                        className="w-full h-[150px] md:h-[210px] rounded object-cover"
                        alt="Profile"
                        src={`/src/assets/images${profile.image}`}
                      />

                      <div className="h-[37px]  font-medium text-white text-sm md:text-base text-center mt-4">
                        {profile.name}
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          )
        )}
      </Carousel>
    </section>
  );
};
