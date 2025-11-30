import React from "react";
import TMG from "../../assets/images/TMG.webp";
import SODIC from "../../assets/images/SODIC.webp";
import HDFC from "../../assets/images/HDFC.webp";
import Emaar from "../../assets/images/Emaar.webp";
import CIB from "../../assets/images/CIB.webp";
import EGB from "../../assets/images/EGB.webp";
import Orascom from "../../assets/images/Orascom.webp";
import Palm_Hills from "../../assets/images/Palm Hills.webp";
import Marakez from "../../assets/images/Marakez.webp";
import Masa from "../../assets/images/Masa.webp";

import MainTitle from "../ui/MainTitle";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import UP from "../../assets/icons/UP.svg";
import Down from "../../assets/icons/Down.svg";
const CompanyWidgets = () => {
  const generateRandomData = () => {
    let base = 100;
    return Array.from({ length: 7 }, (_, i) => {
      const change = base * (Math.random() * 0.2 - 0.1);
      base = Math.max(10, base + change);
      return {
        name: `Day ${i + 1}`,
        uv: parseFloat(base.toFixed(1)),
      };
    });
  };

  const data = [
    {
      id: 1,
      name: {
        en: "TMG",
        ar: "مجموعة طلعت ",
      },
      image: TMG,
    },
    {
      id: 2,
      name: {
        en: "SODIC",
        ar: "سوديك",
      },
      image: SODIC,
    },
    {
      id: 3,
      name: {
        en: "HDFC",
        ar: "مجموعة اتش دي اف ",
      },
      image: HDFC,
    },
    {
      id: 4,
      name: {
        en: "Emaar",
        ar: "إعمار العقارية",
      },
      image: Emaar,
    },
    {
      id: 5,
      name: {
        en: "CIB",
        ar: "البنك التجاري الدولي",
      },
      image: CIB,
    },
    {
      id: 6,
      name: {
        en: "EGB",
        ar: "المصرية الخليجية ",
      },
      image: EGB,
    },
    {
      id: 7,
      name: {
        en: "Orascom",
        ar: "أوراسكوم للتشييد",
      },
      image: Orascom,
    },
    {
      id: 8,
      name: {
        en: "Palm Hills",
        ar: "بالما هيلز",
      },
      image: Palm_Hills,
    },
    {
      id: 9,
      name: {
        en: "Marakez",
        ar: "ماركز",
      },
      image: Marakez,
    },
    {
      id: 10,
      name: {
        en: "Masa",
        ar: "مجموعة مسا",
      },
      image: Masa,
    },
  ];

  return (
    <>
      <MainTitle title="أسعار اسهم الشركات" noMore={true} Sidbar={true} />
      <div className="flex flex-col gap-2 bg-white  hover:shadow-md duration-300">
        {data.map((company, index) => {
          const chartData = generateRandomData();
          const firstValue = chartData[0].uv;
          const lastValue = chartData[chartData.length - 1].uv;
          const trendUp = lastValue > firstValue;

          let percentageChange = ((lastValue - firstValue) / firstValue) * 100;

          if (percentageChange > 10) percentageChange = 10;
          if (percentageChange < -10) percentageChange = -10;

          percentageChange = percentageChange.toFixed(1);

          return (
            <div
              key={company.id}
              className="flex items-center gap-2 py-2 mx-2 border-b "
            >
              {/* Company Image */}
              <main className="flex items-center w-1/2 gap-2">
                <img
                  src={company.image}
                  alt={company.name?.en}
                  className="object-cover w-12 h-12 border rounded-full"
                />
                <div className="flex flex-col justify-between ">
                  <h2 className="text-sm font-bold">{company.name?.en}</h2>
                  <h2 className="text-xs font-bold">{company.name?.ar}</h2>
                </div>
              </main>

              <div className="flex items-center w-1/2 gap-2">
                {/* name + graph */}
                <div className="flex-1">
                  <div className="w-full h-16">
                    <ResponsiveContainer>
                      <AreaChart data={chartData}>
                        <Tooltip />
                        <Area
                          type="monotone"
                          dataKey="uv"
                          stroke={trendUp ? "#289BF6" : "#049C6B"}
                          fill={trendUp ? "#289bf69c" : "#00c16633"}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Share + % Change */}
                <div className="flex flex-col items-center">
                  <div>
                    <p className="font-bold text-end">12$</p>
                    <div className="flex items-center justify-center gap-2">
                      <span
                        className={`mt-1 font-medium text-sm ${
                          trendUp ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {percentageChange}%
                      </span>
                      {trendUp ? (
                        <img src={UP} className="w-3 " />
                      ) : (
                        <img src={Down} className="w-3 " />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CompanyWidgets;
