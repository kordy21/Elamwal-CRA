import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import mezan from "../../../../assets/icons/mezan.svg";
import home from "../../../../assets/icons/home.svg";
import congra from "../../../../assets/icons/congra.svg";
import Falsh from "../../../../assets/icons/Falsh.svg";
import money from "../../../../assets/icons/money.svg";
import paper from "../../../../assets/icons/paper.svg";
import face from "../../../../assets/icons/face.svg";
import Hospital from "../../../../assets/icons/Hospital.svg";
import train from "../../../../assets/icons/train.svg";
import reciept from "../../../../assets/icons/reciept.svg";
import bus from "../../../../assets/icons/bus.svg";
import plus from "../../../../assets/icons/plus.svg";

import "./CitizenServicesSection.css";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";

const CitizenServicesSection = () => {
  const serviceCards = [
    { emoji: mezan, title: "الخدمات القانونية والقضائية" },
    { emoji: home, title: "الإسكان والعقارات" },
    { emoji: congra, title: "خدمات التعليم" },
    { emoji: Falsh, title: "خدمات الكهرباء والمياه والغاز" },
    { emoji: paper, title: "خدمات الجريدة" },
    { emoji: money, title: "خدمات الدفع والتحويلات الحكومية" },
    { emoji: face, title: "الترفيه والأنشطة الاجتماعية" },
    { emoji: Hospital, title: "المستشفيات و العيادات" },
    { emoji: train, title: "المواصلات والنقل العام" },
    { emoji: reciept, title: "استخراج وإدارة المستندات الرسمية" },
    { emoji: bus, title: "الاستعلام عن وسائل المواصلات العامة والتنقل" },
    { emoji: plus, title: "المزيد", isMore: true },
  ];

  return (
    <section className="container flex flex-col items-end w-full gap-6 md:py-12 py-8 ">
      <div className="flex items-center justify-end w-full gap-6">
        <h2 className="font-bold text-primary text-2xl md:text-[32px] whitespace-nowrap">
          خدمات المواطن
        </h2>
        <Separator className="flex-1 h-px bg-gray-300" />
      </div>

      {/* Grid for desktop */}
      <div className="hidden w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-6 sm:gap-4 justify-items-center">
        {serviceCards.map((service, index) => (
          <Card
            key={index}
            className="w-full bg-white rounded-lg border border-solid border-[#f6f6f6]"
          >
            <CardContent className="flex flex-col items-center justify-center h-full gap-2 p-4">
              <img src={service.emoji} className="w-12" />
              <p
                className={`text-sm md:text-base text-center font-medium mt-4 ${
                  service.isMore ? "text-primary" : "text-black"
                }`}
              >
                {service.title}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Carousel for mobile */}
      {/* Grid for desktop */}
      <div className="hidden w-full grid-cols-2 lg:grid sm:grid-cols-3 md:grid-cols-6 lg:gap-4 justify-items-center">
        {serviceCards.map((service, index) => (
          <Card
            key={index}
            className="w-full bg-white rounded-lg border border-solid border-[#f6f6f6] hover:shadow-md group duration-300"
          >
            <CardContent className="flex flex-col items-center justify-center h-full gap-2 p-4">
              <img src={service.emoji} className="w-12" />
              <p
                className={`text-sm md:text-base text-center font-medium mt-4 group-hover:text-primary cursor-pointer duration-300 ${
                  service.isMore ? "text-primary" : "text-black"
                }`}
              >
                {service.title}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Carousel for mobile + tablet */}
      <div className="w-full lg:hidden">
        <Swiper
          spaceBetween={10}
          freeMode={true}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
          }}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }}
        >
          {serviceCards.map((service, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <Card className="w-[180px] h-[180px] bg-white rounded-lg border border-solid border-[#f6f6f6] hover:shadow-md group duration-300">
                <CardContent className="flex flex-col items-center justify-center h-full gap-2 p-4">
                  <img src={service.emoji} className="w-20" />
                  <p
                    className={`text-sm md:text-base text-center font-medium mt-4 group-hover:text-primary cursor-pointer duration-300 ${
                      service.isMore ? "text-primary" : "text-black"
                    }`}
                  >
                    {service.title}
                  </p>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CitizenServicesSection;
