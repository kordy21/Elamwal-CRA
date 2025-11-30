import React, { useState, useEffect } from "react";
import HeaderLayout from "../../components/layout/HeaderLayout";
import advertisement_2 from "../../assets/images/advertisement_2.webp";
import advertisement_3 from "../../assets/images/advertisement_3.webp";
import DynamicForm from "../AdvertiseOurpage/DynamicForm";
import MainTitle from "../../components/ui/MainTitle";
import { Footer } from "../../components/layout/Footer";
import ContactInfo from "./ContactInfo";
const Hiring = () => {
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
const fields = [
  { name: "firstName", type: "text", placeholder: "الاسم الأول" },
  { name: "lastName", type: "text", placeholder: "الاسم الأخير" },
  { name: "email", type: "email", placeholder: "البريد الإلكتروني" },
  { name: "phone", type: "text", placeholder: "رقم الهاتف" },,
  {
    name: "question",
    type: "textarea",
    placeholder: " هل لديك أي أسئلة أو استفسارات؟ تواصل معنا!",
  },
];

  const handleFormSubmit = (data) => {
    // console.log("تم الإرسال:", data);
  };
  return (
    <div className="bg-custom">
      <HeaderLayout />
      {/* Side Advertisement Images */}
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
      <section className="container flex flex-col py-6 ">
        <div className="flex flex-col flex-1 w-full gap-6    lg:gap-2 md:pe-3">
          <div className="my-3">
            <ContactInfo />
          </div>

          <MainTitle title="     اتصل بنا" noMore={true} />
          <DynamicForm
            fields={fields}
            onSubmit={handleFormSubmit}
            submitText="إرسال الطلب"
            firstRowCols={3}
          />
        </div>
      </section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27626.078478598676!2d31.198412799999993!3d30.0580864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1758536483810!5m2!1sar!2seg"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full relative z-10 "
      />

      <Footer />
    </div>
  );
};

export default Hiring;
