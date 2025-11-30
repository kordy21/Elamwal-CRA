import React from "react";
import MainTitle from "../ui/MainTitle";
import AdvistingSpaceWidget from "../ui/AdvistingSpaceWidget";
const Sidebar = () => {
  const priceData = [
    {
      title: "أسعار العملات",
      subtitle: "الدولار الأميركي مقابل الجنيه المصري",
      items: [
        { name: "أونصة الذهب", price: "2,657.22", unit: "$" },
        { name: "جرام الذهب", price: "85.42", unit: "$" },
      ],
    },
    {
      title: "أسعار السلع",
      subtitle: "البلاتين",

      items: [
        { name: "أونصة الفضة", price: "31.11", unit: "$" },
        { name: "جرام الفضة", price: "1.00", unit: "$" },
      ],
    },
    {
      title: "أسعار الذهب",
      subtitle: "عيار 24",

      items: [{ name: "برميل خام غرب تكساس", price: "74.07", unit: "$" }],
    },
  ];

  return (
    <aside className="w-full space-y-6">
      {/* First Ad Space */}
      <AdvistingSpaceWidget count={2} />
      {/* Price Sections */}
      <div className="hidden space-y-4 lg:block">
        {priceData.map((section, sectionIndex) => (
          <div key={sectionIndex} className="overflow-hidden">
            {/* Header */}
            <MainTitle title={section.title} Sidbar={true} />

            {/* Price Items */}
            {/* <div className="px-4 mt-4 bg-white divide-y divide-gray-100 rounded-lg">
              <h2 className="py-3 text-base font-bold">{section.subtitle}</h2>
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex items-center justify-between py-3 transition hover:bg-[#F8F8FA]"
                >
                  <div className="">
                    <span className="text-sm font-medium text-gray-700">
                      {item.name}
                    </span>
                  </div>
                  <div className="">
                    <span className="text-lg font-bold text-gray-800">
                      {item.price}
                    </span>
                    <span className="ml-1 text-sm text-gray-500">
                      {item.unit}
                    </span>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
