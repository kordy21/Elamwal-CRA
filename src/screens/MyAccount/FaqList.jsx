import React from "react";

const FaqList = ({ faqs }) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 rounded-lg">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-4 shadow hover:shadow-md duration-300 bg-white rounded-lg"
          >
            <h3 className="font-semibold">{faq.question}</h3>
            <p className="text-sm text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqList;
