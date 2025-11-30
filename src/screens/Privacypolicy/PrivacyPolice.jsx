import React, { useEffect, useState } from "react";
import HeaderLayout from "../../components/layout/HeaderLayout";
import advertisement_2 from "../../assets/images/advertisement_2.webp";
import advertisement_3 from "../../assets/images/advertisement_3.webp";
import PageHeader from "../Privacypolicy/PageHeader";
import PrivacySection from "../../components/ui/PrivacySection";
import { Footer } from "../../components/layout/Footer";
import { Breadcrumb } from "../../components/ui/Breadcrumb";

const PrivacyPolicy = () => {
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
  const sections = [
    {
      number: 1,
      title: "المعلومات التي نجمعها",
      items: [
        "المعلومات الشخصية مثل الاسم أو البريد الإلكتروني إذا قمت بالتسجيل في النشرة الإدارية أو التواصل معنا.",
        "المعلومات غير الشخصية مثل نوع المتصفح، الجهاز، عنوان بروتوكول الإنترنت (IP)، وبيانات الاستخدام لأغراض إحصائية وتحسين الخدمة.",
      ],
    },
    {
      number: 2,
      title: "كيفية استخدام المعلومات",
      items: [
        "نستخدم البيانات لتحسين خدماتنا.",
        "نستخدم بيانات التواصل للرد على استفساراتك.",
        "الرد على استفسارات القراء.",
        "لأغراض تحليلية وإحصائية تساعدنا على تطوير خدماتنا.",
      ],
    },
    {
      number: 3,
      title: "ملفات تعريف الارتباط",
      items: [
        "يستخدم الموقع ملفات تعريف الارتباط لتحسين تجربة التصفح.",
        "يمكن للمستخدم ضبط إعدادات المتصفح لرفض الكوكيز، لكن قد يؤدي ذلك إلى تعطيل بعض وظائف الموقع.",
      ],
    },
    {
      number: 4,
      title: "مشاركة المعلومات",
      items: [
        "لا نقوم ببيع أو مشاركة المعلومات الشخصية مع أطراف ثالثة إلا في الحالات التي يتطلبها القانون أو لحماية حقوق الموقع.",
        "قد نشارك بيانات غير شخصية (إحصائية) مع شركاء لأغراض تحليلية.",
      ],
    },
    {
      number: 5,
      title: " حماية البيانات",
      items: [
        "نطبق إجراءات تقنية وأمنية مناسبة لحماية المعلومات من الوصول غير المصرح به أو التغيير أو الإفصاح.",
      ],
    },
    {
      number: 6,
      title: "  الروابط الخارجية",
      items: [
        "قد يحتوي الموقع على روابط لمواقع أخرى. نحن غير مسؤولين عن سياسات الخصوصية الخاصة بتلك المواقع..",
      ],
    },
    {
      number: 7,
      title: " تحديث سياسة الخصوصية",
      items: [
        "قد نقوم بتحديث هذه السياسة من وقت لآخر، وسيتم نشر أي تعديلات على هذه الصفحة.",
      ],
    },
    {
      number: 8,
      title: "التواصل معنا",
      items: [
        "لأي استفسارات بخصوص سياسة الخصوصية، يرجى التواصل عبر: بريد إلكتروني.",
      ],
    },
  ];

  return (
    <section className="bg-[#F8F8FA]">
      <HeaderLayout />
      <a href="/">
        <div
          className={`max-w-[1470px] relative mx-auto ${
            scrolled ? "top-32" : "top-8"
          } `}
        >
          <img
            className="hidden 3xl:block fixed w-32  left-[calc((100%-1470px)/2+30px)] rounded-md object-cover"
            src={advertisement_2}
            alt="Image"
          />
          <img
            className="hidden 3xl:block fixed w-32  right-[calc((100%-1470px)/2+30px)] rounded-md object-cover"
            src={advertisement_3}
            alt="Image"
          />
        </div>
      </a>
      <main className="container md:py-12 py-8">
        <Breadcrumb />
        <PageHeader
          title="سياسة الخصوصية"
          description="نحن في الأموال نقدر خصوصية زوارنا ونلتزم بحمايتها. توضح هذه السياسة كيفية جمعنا واستخدامنا وحمايتنا للمعلومات التي يتم جمعها عند استخدامك لموقعنا."
          noMore={true}
        />

        <div className="  flex flex-col gap-5 pt-2">
          {sections.map((section) => (
            <PrivacySection
              key={section.number}
              number={section.number}
              title={section.title}
              items={section.items}
            />
          ))}
        </div>
        <div className="flex justify-center mx-auto  lg:justify-start ">
          <a href="/contact-us">
            <button className="   mt-5 px-4 py-2 text-sm font-medium text-white transition bg-green-600 rounded-md hover:bg-green-700">
              تواصل معنا
            </button>
          </a>
        </div>
      </main>
      <Footer />
    </section>
  );
};

export default PrivacyPolicy;
