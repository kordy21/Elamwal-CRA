import React, { useEffect, useState } from "react";
import HeaderLayout from "../../components/layout/HeaderLayout";
import advertisement_2 from "../../assets/images/advertisement_2.webp";
import advertisement_3 from "../../assets/images/advertisement_3.webp";
import PageHeader from "../Privacypolicy/PageHeader";
import PrivacySection from "../../components/ui/PrivacySection";
import { Footer } from "../../components/layout/Footer";
import { Breadcrumb } from "../../components/ui/Breadcrumb";

const TermsConditions = () => {
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
      title: "قبول الشروط",
      items: [
        "يُعد دخولك إلى الموقع أو استخدامك للخدمات موافقة صريحة على الالتزام بهذه الشروط والأحكام، وأي تحديثات مستقبلية قد يتم إدخالها عليها..",
      ],
    },
    {
      number: 2,
      title: "المحتوى  ",
      items: [
        "جميع المواد المنشورة في الموقع (أخبار، مقالات، صور، مقاطع فيديو...) محمية بموجب حقوق الملكية الفكرية.",
        "يُسمح باستخدام المحتوى لأغراض شخصية وغير تجارية فقط، مع الإشارة للمصدر.",
        "لا يجوز إعادة نشر أو نسخ أو توزيع أي محتوى دون إذن خطي مسبق من إدارة الجريدة.",
      ],
    },
    {
      number: 3,
      title: "المسؤولية",
      items: [
        "الموقع يحرص على دقة وصحة الأخبار والمحتوى المنشور، لكنه لا يتحمل أي مسؤولية قانونية أو تبعات ناتجة عن أخطاء غير مقصودة أو اعتماد المستخدمين على المعلومات الواردة.",
        "كل المقالات المنشورة باسم كاتبها تعبّر عن رأيه الشخصي ولا تعكس بالضرورة رأي الجريدة.",
      ],
    },
    {
      number: 4,
      title: " التعليقات والمشاركة",
      items: [
        "يلتزم المستخدم بعدم نشر أي محتوى مسيء، أو مخالف للقانون، أو ينتهك حقوق الآخرين.",
        "تحتفظ إدارة الموقع بحق حذف أو تعديل أي تعليق أو محتوى مخالف دون إشعار مسبق.",
      ],
    },
    {
      number: 5,
      title: " الروابط الخارجية ",
      items: [
        "قد يحتوي الموقع على روابط لمواقع خارجية، ولا تتحمل الجريدة أي مسؤولية عن محتوى أو سياسات تلك المواقع.",
      ],
    },
    {
      number: 6,
      title: "  التعديلات ",
      items: [
        "تحتفظ إدارة الموقع بحق تعديل هذه الشروط والأحكام في أي وقت، ويُعتبر استمرار استخدام الموقع موافقة على التعديلات.",
      ],
    },
    {
      number: 7,
      title: " القانون الواجب التطبيق  ",
      items: [
        "تخضع هذه الشروط والأحكام للقوانين المعمول بها في [اسم الدولة]، وتكون المحاكم المحلية هي المختصة بأي نزاع قد ينشأ.",
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
          title="الشروط والأحكام"
          description="مرحبًا بكم في الأمول. باستخدامكم لموقعنا الإلكتروني أو أي من خدماتنا، فإنكم توافقون على الالتزام بالشروط والأحكام التالية. يرجى قراءة هذه الشروط بعناية قبل تصفح الموقع أو استخدام أي محتوى."
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
      </main>
      <Footer />
    </section>
  );
};

export default TermsConditions;
