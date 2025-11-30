import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import MainTitle from "../../../components/ui/MainTitle";

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-3 text-center bg-white border border-gray-200 rounded-lg shadow-lg">
        <p className="text-sm text-gray-900">
          {/* السعر:{" "} */}
          <span className="font-bold">${payload[0].value.toFixed(2)}</span>
        </p>
        <p className="text-sm text-gray-900">{`${label}`}</p>
      </div>
    );
  }
  return null;
};

const CompanyChart = ({
  titleSection,
  currentPrice,
  priceChange,
  changeAmount,
  stats,
  weeklyData,
  monthlyData,
  yearlyData,
  title,
  lastUpdated,
}) => {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");
  const isPositive = priceChange > 0;

  const getCurrentData = () => {
    switch (selectedPeriod) {
      case "weekly":
        return weeklyData;
      case "yearly":
        return yearlyData;
      default:
        return monthlyData;
    }
  };

  const handlePeriodChange = (event) => {
    setSelectedPeriod(event.target.value);
  };

  return (
    <div className="flex flex-col w-full gap-8 p-6 bg-white border rounded-lg shadow-sm">
      <MainTitle title={titleSection} noMore={true} />
      <div>
        {/* Header */}
        <div className="text-lg text-gray-500">{lastUpdated}</div>
        <div className="flex items-center gap-2 mt-2 mb-6">
          <h2 className="text-lg font-medium text-gray-800">{title}</h2>
          <ChevronLeftIcon className="w-5 h-5 text-gray-500" />
        </div>

        <div className="flex w-full">
          {/* Statistics Grid */}
          <div className="flex justify-between w-3/4 mb-6">
            <div className="">
              <div className="mb-1 text-sm text-gray-500">الافتتاح</div>
              <div className="font-semibold text-gray-900">{stats.opening}</div>
            </div>
            <div className="">
              <div className="mb-1 text-sm text-gray-500">الأعلى</div>
              <div className="font-semibold text-gray-900">{stats.high}</div>
            </div>
            <div className="">
              <div className="mb-1 text-sm text-gray-500">الأدنى</div>
              <div className="font-semibold text-gray-900">{stats.low}</div>
            </div>
            <div className="">
              <div className="mb-1 text-sm text-gray-500">الإغلاق</div>
              <div className="font-semibold text-gray-900">{stats.close}</div>
            </div>
          </div>
          {/* Current Price */}
          <div className="flex flex-col items-end justify-end w-1/4 mb-6">
            <div className="mb-2 text-3xl font-bold text-gray-900">
              ${currentPrice.toFixed(2)}
            </div>
            <div className="flex items-center text-sm">
              <span
                className={`ml-1 ${
                  isPositive ? "text-green-600" : "text-red-600"
                }`}
              >
                {isPositive ? "▲" : "▼"}
              </span>
              <span
                className={`ml-1 ${
                  isPositive ? "text-green-600" : "text-red-600"
                }`}
              >
                {Math.abs(priceChange)}%
              </span>
              <span className="mr-2">
                {isPositive ? "+" : ""}
                {changeAmount.toFixed(4)}
              </span>
            </div>
          </div>
        </div>

        {/* Time Period Selector */}
        <div className="flex items-center justify-between mb-4">
          {/* Additional Info */}
          <div className="">
            <span className="font-bold text-black ">إحصائية</span>
          </div>
          <select
            value={selectedPeriod}
            onChange={handlePeriodChange}
            className="px-3 py-1 text-sm bg-white border border-gray-300 rounded cursor-pointer"
          >
            <option value="weekly">أسبوعي</option>
            <option value="monthly">شهري</option>
            <option value="yearly">سنوي</option>
          </select>
        </div>

        {/* Debug info */}
        {/* <div className="mb-2 text-xs text-right text-gray-400">
        الفترة:{" "}
        {selectedPeriod === "weekly"
          ? "أسبوعي"
          : selectedPeriod === "monthly"
          ? "شهري"
          : "سنوي"}
        - النقاط: {getCurrentData().length}
      </div> */}

        {/* Chart */}
        <div className="p-4 rounded-lg bg-gray-50">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={getCurrentData()}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis
                  dataKey="period"
                  axisLine={true}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "black" }}
                  tickMargin={10}
                />
                <YAxis
                  domain={[0, 18]}
                  axisLine={true}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "black" }}
                  width={1}
                  tickMargin={10}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#10B981"
                  strokeWidth={2}
                  dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
                  activeDot={{
                    r: 6,
                    fill: "#10B981",
                    stroke: "#10B981",
                    strokeWidth: 2,
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Chart Stats */}
          {/* <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
          <span>0</span>
          <div className="flex items-center">
            <span className="ml-2">$2000</span>
            <span className="text-xs text-gray-400">(+1.0)</span>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};
export default CompanyChart;
// export default function App() {
//   const weeklyData = [
//     { period: "الأسبوع 1", price: 15.2 },
//     { period: "الأسبوع 2", price: 14.8 },
//     { period: "الأسبوع 3", price: 16.1 },
//     { period: "الأسبوع 4", price: 15.9 },
//   ];

//   const monthlyData = [
//     { period: "Jan", price: 8.5 },
//     { period: "Feb", price: 4.2 },
//     { period: "Mar", price: 8.8 },
//     { period: "Apr", price: 12.1 },
//     { period: "May", price: 8.3 },
//     { period: "Jun", price: 10.5 },
//     { period: "Jul", price: 9.2 },
//     { period: "Aug", price: 7.8 },
//     { period: "Sep", price: 9.5 },
//   ];

//   const yearlyData = [
//     { period: "2020", price: 3.5 },
//     { period: "2021", price: 5.2 },
//     { period: "2022", price: 8.5 },
//     { period: "2023", price: 6.8 },
//     { period: "2024", price: 10.0 },
//     { period: "2025", price: 12.0 },
//   ];

//   const stats = {
//     opening: 12.11,
//     high: 12.54,
//     low: 10.07,
//     close: 13.18,
//   };

//   return (
//     <div className="w-full min-h-screen p-8 bg-gray-100">
//       <CompanyChart
//         currentPrice={12.0}
//         priceChange={1.3}
//         changeAmount={0.0503}
//         stats={stats}
//         weeklyData={weeklyData}
//         monthlyData={monthlyData}
//         yearlyData={yearlyData}
//         title="الأسعار بالدولار الأمريكي"
//         lastUpdated="آخر تحديث: 21 أبريل 2025 - 05:10"
//       />
//     </div>
//   );
// }
