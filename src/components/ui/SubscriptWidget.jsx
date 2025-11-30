import React, { useState } from "react";
import { Button } from "./button";

const SubscriptWidget = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); 

  const handleSubscribe = () => {
    if (email.trim().toLowerCase().endsWith(".com")) {
      setMessage("✅ البريد صحيح");
    } else {
      setMessage("❌ البريد غير صحيح، يجب أن ينتهي بـ .com");
    }
  };

  return (
    <section className="flex-col justify-center lg:p-0 p-4 md:p-0 gap-3 lg:flex">
      <h2 className="text-xl font-bold text-gray-800">
        اشترك الآن بالنشرة الإخبارية
      </h2>
      <p className="text-base text-gray-500 w-[90%]">
        نشرة إخبارية ترسل مباشرة لبريدك الإلكتروني يوميا من جريدة الأموال
      </p>
      <div className="flex flex-col gap-5 mt-5 md:mt-2">

      <input
        type="email"
        placeholder="أدخل بريدك الإلكتروني"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-3 py-2 text-sm bg-white rounded-md shadow-md focus:outline-none focus:border-green-500"
      />
      <Button
        onClick={handleSubscribe}
        className="text-lg text-white bg-green-600 rounded-md hover:bg-green-700"
      >
        إشترك
      </Button>
      </div>
      {message && (
        <p
          className={`text-sm mt-2 ${
            message.includes("✅") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </section>
  );
};

export default SubscriptWidget;
