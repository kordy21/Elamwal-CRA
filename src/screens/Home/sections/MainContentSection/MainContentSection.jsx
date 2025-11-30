import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Carousel } from "../../../../components/ui/carousel";
import { useCarousel } from "../../../../hooks/useCarousel";

export const MainContentSection = () => {
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
    <section className="flex flex-col w-full items-center justify-center gap-4 md:gap-6 px-[260px] py-0 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-[#f6f6f6] ">
      <header className="h-[37px] justify-end gap-4 md:gap-6 self-stretch w-full flex items-center relative">
        <Button
          variant="link"
          className="w-[34px] font-normal text-[#00A651] text-sm text-center underline h-[37px] p-0 h-auto"
        >
          المزيد
        </Button>

        <img
          className="w-[977px] h-px relative object-cover"
          alt="Line"
          src="/line-276.svg"
        />

        <h2 className="w-[149px] h-[37px]  font-bold text-[#00A651] text-[32px] whitespace-nowrap">
          كتاب الرأي
        </h2>
      </header>

      <Carousel
        currentIndex={currentIndex}
        onNext={goToNext}
        onPrevious={goToPrevious}
        onDotClick={goToSlide}
        showArrows={false}
        showDots={true}
        className="relative self-stretch w-full flex-[0_0_auto]"
        dotsClassName="flex items-center justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]"
      >
        {Array.from(
          { length: Math.ceil(profileData.length / 5) },
          (_, slideIndex) => (
            <div
              key={slideIndex}
              className="flex items-center justify-center gap-10 relative self-stretch w-full flex-[0_0_auto]"
            >
              {profileData
                .slice(slideIndex * 5, (slideIndex + 1) * 5)
                .map((profile, index) => (
                  <Card
                    key={index}
                    className="flex flex-col w-[210px] items-start gap-4 relative bg-transparent border-none shadow-none"
                  >
                    <CardContent className="w-full p-0">
                      <img
                        className="relative self-stretch w-full h-[210px] rounded object-cover"
                        alt="Profile"
                        src={profile.image}
                      />

                      <div className="relative self-stretch h-[37px]  font-medium text-white text-base text-center mt-4">
                        {profile.name}
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          )
        )}
      </Carousel>

      <img
        className="absolute w-full h-11 top-[202px] left-0"
        alt="Frame"
      />
    </section>
  );
};
