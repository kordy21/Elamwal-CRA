import React from "react";
// import Banks_insurance_1 from "../../../assets/images/Banks_insurance_1.webp";
import Banks_insurance_1 from "../../assets/images/Banks_insurance_1.webp";
import Banks_insurance_2 from "../../assets/images/Banks_insurance_2.webp";
import Banks_insurance_3 from "../../assets/images/Banks_insurance_3.webp";
import Banks_insurance_4 from "../../assets/images/Banks_insurance_4.webp";
import MainTitle from "../ui/MainTitle";
import VideoWidgets from "../ui/VideoWidgets";

export const SidbarVideoSection = ({ title }) => {
  const mostViewArticles = [
    {
      id: 1,
      category: "بنوك و تأمين",
      categoryColor: "bg-[#2a3eb10d] text-[#2a3eb1]",
      title: "البنك الأهلي يطلق خدمات مصرفية رقمية جديدة",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      videoId: "dQw4w9WgXcQ",
      timeAgo: "12 يوليو 2024",
      readCount: "15,420",
    },
    {
      id: 2,
      category: "استثمار و بورصة",
      categoryColor: "bg-[#00c1660d] text-[#00c166]",
      title: "صعود قوي للبورصة المصرية في بداية الأسبوع",
      video: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
      videoId: "3JZ_D3ELwOQ",
      timeAgo: "12 يوليو 2024",
      readCount: "12,850",
    },
    {
      id: 3,
      category: "بنوك و تأمين",
      categoryColor: "bg-[#2a3eb10d] text-[#2a3eb1]",
      title: "قرارات جديدة من البنك المركزي بشأن القروض العقارية",
      video: "https://www.youtube.com/embed/tgbNymZ7vqY",
      videoId: "tgbNymZ7vqY",
      timeAgo: "12 يوليو 2024",
      readCount: "11,200",
    },
    {
      id: 4,
      category: "استثمار و بورصة",
      categoryColor: "bg-[#00c1660d] text-[#00c166]",
      title: "ارتفاع أسعار الذهب عالمياً يؤثر على السوق المصرية",
      video: "https://www.youtube.com/embed/L_jWHffIx5E",
      videoId: "L_jWHffIx5E",
      timeAgo: "12 يوليو 2024",
      readCount: "9,750",
    },
    {
      id: 5,
      category: "بنوك و تأمين",
      categoryColor: "bg-[#2a3eb10d] text-[#2a3eb1]",
      title: "شهادات استثمار جديدة بعائد مرتفع من بنك مصر",
      video: "https://www.youtube.com/embed/aqz-KE-bpKQ",
      videoId: "aqz-KE-bpKQ",
      timeAgo: "12 يوليو 2024",
      readCount: "8,900",
    },
    {
      id: 6,
      category: "استثمار و بورصة",
      categoryColor: "bg-[#00c1660d] text-[#00c166]",
      title: "تحليل: توقعات أداء البورصة المصرية في الربع الثاني",
      video: "https://www.youtube.com/embed/ScMzIvxBSi4",
      videoId: "ScMzIvxBSi4",
      timeAgo: "12 يوليو 2024",
      readCount: "7,650",
    },
  ];

  return (
    <section className="w-full">
      <div className="flex flex-col gap-4 md:gap-6">
        <MainTitle title={title} Sidbar={true} />

        <div className="flex flex-col gap-4">
          <VideoWidgets data={mostViewArticles} />
        </div>
      </div>
    </section>
  );
};
