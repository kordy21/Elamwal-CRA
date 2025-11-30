import React from "react";
import { LatestNewss } from "./LatestNewss";
import AdSliderWidget from "../../../../components/sections/AdSliderWidget";

const AdvertisingSpace = ({
  egyptianRealEstatePosts,
  egyptianRealEstateParentSlug,
  sportsPosts,
  sportsParentSlug,
}) => {
  return (
    <section className="container flex-col hidden py-8 md:py-12 lg:flex-row md:flex">
      <div className="w-full lg:w-2/3 md:pe-3 ">
        <LatestNewss
          egyptianRealEstatePosts={egyptianRealEstatePosts}
          egyptianRealEstateParentSlug={egyptianRealEstateParentSlug}
          sportsPosts={sportsPosts}
          sportsParentSlug={sportsParentSlug}
        />
      </div>
      <div className="flex flex-col self-start w-full gap-4 lg:w-1/3 lg:sticky lg:top-48 h-fit md:ps-3 ">
        <AdSliderWidget sliderId="1" />
        <AdSliderWidget sliderId="2" />
      </div>
    </section>
  );
};

export default AdvertisingSpace;
