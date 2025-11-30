import React from "react";

const PrivacySection = ({ number, title, items }) => {
  return (
    <div className="bg-white p-4 rounded-md">
      <h3 className="font-bold text-xl mb-2">
        {number}. {title}
      </h3>

      <ul className="list-disc list-inside text-lg text-[#00000099]">
        {items.map((item, idx) => (
          <li key={idx} className="leading-6">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrivacySection;
