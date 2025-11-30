import React from "react";
import { ChevronLeft } from "lucide-react";

export const Breadcrumb = () => {
  const path = window.location.pathname;
  const segments = path.split("/").filter(Boolean);

  const arabicNames = {
    // أخبار
    urgent: "عاجل",
    "on-trend": "ON TREND",
    "markets-and-prices": "أسواق وأسعار",

    "single-new": "الخبر",

    // بنوك
    banks: "بنوك",
    insurance: "تأمين",
    "banking-fingerprints": "بصمات مصرفية",

    // فيديو
    video: "فيديوهات",
    "single-video": "فيديو",

    // استثمار وبورصة
    investment: "استثمار",
    "stock-exchange": "بورصة",
    companies: "شركات",
    "economic-studies": "رجال أعمال",

    // منوعات
    art: "فن",
    sports: "رياضة",

    // عقارات
    realestate: "عقارات",

    // سياحة ونقل وطاقة
    tourism: "سياحة",
    transportation: "نقل",
    "petroleum-and-energy": "بترول وطاقة",

    // فيديو
    reels: "ريلز",
    "most-viewed": "الأكثر مشاهدة",
    "we-picked-for-you": "اخترنا لكم",

    // المزيد
    studies: "دراسات",
    "capital-society": "مجتمع الأموال",
    "technology-and-communications": "تكنولوجيا واتصالات",
    "accidents-and-cases": "حوادث وقضايا",
    "arab-and-international": "عربي ودولي",
    "money-writers": "كتاب الأموال",

    // خدمات المواطن (subDropdownItems)
    "legal-and-judicial": "الخدمات القانونية والقضائية",
    "housing-and-realestate": "الإسكان والعقارات",
    "education-services": "خدمات التعليم",
    "utilities-services": "خدمات الكهرباء والمياه والغاز",
    "newspaper-services": "خدمات الجريدة",
    "government-payments": "خدمات الدفع والتحويلات الحكومية",
    "entertainment-and-social": "الترفيه والأنشطة الاجتماعية",
    "hospitals-and-clinics": "المستشفيات والعيادات",
    "public-transport": "المواصلات والنقل العام",
    "documents-management": "استخراج وإدارة المستندات الرسمية",
    "transport-inquiry": "الاستعلام عن وسائل المواصلات العامة والتنقل",
    "charactersingle":"شخصيات",
    "character":"شخصيات",
    // إضافي
    images: "ألبوم الصور",
    aboutus: "من نحن",
    careers: "توظيف",
    advertise: "اعلن معنا",
    contact: "تواصل معنا",
    "terms-condition": "الشروط والأحكام",
    "privacy-police":"سياسة الخصوصية"
  };

  const translateSegment = (segment) => {
    if (arabicNames[segment]) return arabicNames[segment];

    const words = segment.split("-");
    const translatedWords = words.map((word) => arabicNames[word] || word);
    return translatedWords.join(" ");
  };

  const buildHref = (index) => {
    return "/" + segments.slice(0, index + 1).join("/");
  };

  return (
    <nav
      className="flex items-center pb-4 text-base text-gray-600"
      aria-label="Breadcrumb"
    >
      <a href="/" className="transition-colors hover:text-primary">
        الرئيسية
      </a>

      {segments.map((segment, index) => {
        const name = translateSegment(segment);

        return (
          <div key={index} className="flex items-center">
            <ChevronLeft className="w-4 h-4 mx-2 text-gray-400" />
            {index === segments.length - 1 ? (
              <span className="font-medium text-gray-900">{name}</span>
            ) : (
              <a
                href={buildHref(index)}
                className="transition-colors hover:text-primary"
              >
                {name}
              </a>
            )}
          </div>
        );
      })}
    </nav>
  );
};
