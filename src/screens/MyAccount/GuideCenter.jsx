import React, { useState } from "react";
import patrol from "../../assets/images/patrol.png";
import CommentCard from "./CommentCard";
import FaqList from "./FaqList";
import Favorate from "./Favorate";
import img1 from "../../assets/images/img1.webp";
import img2 from "../../assets/images/img2.webp";
import img3 from "../../assets/images/img3.webp";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline";
import ProfileForm from "../../components/ui/ProfileForm";
import MainTitle from "../../components/ui/MainTitle";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../slices/7-auth/1-login/reducer";

const faqsData = [
  {
    question: "كيف يمكنني إنشاء حساب جديد؟",
    answer:
      'اضغط على زر "تسجيل" في القائمة الرئيسية، ثم قم بإدخال البيانات المطلوبة.',
  },
  {
    question: "هل يمكنني تغيير خطة الاشتراك الخاصة بي؟",
    answer:
      'نعم، من خلال قسم "الاشتراكات" في لوحة التحكم يمكنك ترقية أو تجديد خطتك الحالية.',
  },
  {
    question: "لماذا لم يظهر تعليقي؟",
    answer:
      "جميع التعليقات تخضع للمراجعة. إذا كان التعليق مخالفاً لسياسة النشر فلن يتم اعتماده.",
  },
  {
    question: "كيف يمكنني استعادة كلمة المرور إذا فقدتها؟",
    answer:
      'اضغط على "نسيت كلمة المرور" في صفحة تسجيل الدخول، واتبع التعليمات لاستعادة حسابك.',
  },
  {
    question: "هل يمكنني إلغاء الاشتراك واسترداد المبلغ؟",
    answer:
      "نعم، يمكنك إلغاء الاشتراك من إعدادات الحساب، وسيتم تطبيق سياسة الاسترداد الموضحة في الشروط والأحكام.",
  },
  {
    question: "هل يمكنني تغيير البريد الإلكتروني المرتبط بحسابي؟",
    answer:
      'نعم، من قسم "الملف الشخصي" يمكنك تعديل البريد الإلكتروني بعد تأكيده.',
  },
  {
    question: "كيف أتواصل مع فريق التحرير لإرسال مقال أو خبر؟",
    answer: "يمكنك استخدام نموذج التواصل أو إرسال بريد إلكتروني إلى:",
  },
];
const itemsData = [
  {
    time: "12:02",
    date: "8 مارس",
    title:
      "تحليل شامل لأسواق المال اليوم: إكتشف أهم الفرص والتحديات التي نواجه...",
    image: img1,
  },
  {
    time: "12:15",
    date: "9 مارس",
    title: "توقعات السوق: كيف ستؤثر الأحداث السياسية على أسعار الأسهم",
    image: img2,
  },
  {
    time: "12:30",
    date: "10 مارس",
    title: "إستراتيجيات الاستثمار: أفضل الطرق لتنويع محفظتك المالية",
    image: img3,
  },
];
const GuideCenter = () => {
  const tabs = [
    { id: "profile", label: " اعدادات الحساب" },
    { id: "help", label: "مركز المساعدة" },
    { id: "Favorite", label: "المفضلة " },
    { id: "Subscriptions", label: "الاشتراكات " },
    { id: "comment", label: "التعليقات" },
  ];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const tabContent = {
    profile: (
      <div className="space-y-4">
        <MainTitle title="اعدادات الحساب" noMore={true} />
        <ProfileForm />
      </div>
    ),
    help: <FaqList faqs={faqsData} />,
    Favorite: (
      <div className="space-y-4">
        <Favorate items={itemsData} />
      </div>
    ),
    Subscriptions: (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">تسجيل الخروج</h2>
        <p>هنا تقوم بتسجيل الخروج أو تأكيد العملية...</p>
      </div>
    ),
    comment: (
      <div className="flex flex-col items-center gap-6 bg-white">
        <CommentCard
          img={patrol}
          title="تعليقك"
          date="12 يونيو"
          text="الخبر ده مهم جدًا، وبيوضح قد إيه السوق بيتأثر بسرعة بأي قرارات حكومية أو تغيّرات عالمية. لازم نتابع التطورات دي علشان نعرف نخطط صح للمرحلة الجاية."
        />
        <CommentCard
          img={patrol}
          title="تعليقك"
          date="12 يونيو"
          text="الخبر ده مهم جدًا، وبيوضح قد إيه السوق بيتأثر بسرعة بأي قرارات حكومية أو تغيّرات عالمية. لازم نتابع التطورات دي علشان نعرف نخطط صح للمرحلة الجاية."
        />
        <CommentCard
          img={patrol}
          title="تعليقك"
          date="12 يونيو"
          text="الخبر ده مهم جدًا، وبيوضح قد إيه السوق بيتأثر بسرعة بأي قرارات حكومية أو تغيّرات عالمية. لازم نتابع التطورات دي علشان نعرف نخطط صح للمرحلة الجاية."
        />
      </div>
    ),
  };

  const [activeTab, setActiveTab] = useState("help");

  return (
    <div className="flex flex-col min-h-screen gap-8 overflow-hidden rounded-lg md:flex-row">
      <div className="w-full bg-white border shadow-md md:w-1/4 ">
        <div className="p-5">
          <h2 className="text-2xl font-bold text-primary">الملف الشخصي</h2>
        </div>
        <ul className="flex flex-row md:flex-col">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`cursor-pointer p-4 text-center md:text-right border-b md:border-b-0 md:border-e 
              ${
                activeTab === tab.id
                  ? "bg-green-100 text-green-700 font-bold"
                  : "hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </li>
          ))}
        </ul>
        <div
          onClick={handleLogout}
          className="flex gap-3 p-5 transition cursor-pointer hover:bg-gray-100"
        >
          <ArrowRightEndOnRectangleIcon className="h-5 w-5 text-[#D13232]" />
          <h2 className="text-xl text-[#D13232]">تسجيل الخروج</h2>
        </div>
      </div>

      <div className="w-full p-6 md:w-3/4 ">{tabContent[activeTab]}</div>
    </div>
  );
};

export default GuideCenter;
