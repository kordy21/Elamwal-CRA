import React from "react";
import MainTitle from "../../../components/ui/MainTitle";

const CompetitorsComparison = ({ data }) => {
  return (
    <>
      <MainTitle
        title="مقارنة مع الشركات المنافسة"
        noMore={true}
        threeItem={true}
      />
      <section className="container flex flex-col gap-6 p-4 duration-300 bg-white rounded-lg hover:shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="">
                <th className="p-3 font-medium text-start">الشركة</th>
                <th className="p-3 font-medium text-start">السعر الحالي</th>
                <th className="p-3 font-medium text-start">التغير اليومي</th>
                <th className="p-3 font-medium text-start">القيمة السوقية</th>
              </tr>
            </thead>
            <tbody>
              {data.map((company, index) => (
                <tr
                  key={index}
                  className="border-b last:border-none hover:bg-gray-50"
                >
                  <td className="p-3">{company.name}</td>
                  <td className="p-3">{company.price}</td>
                  {/* <td
                    className={`p-3 font-semibold ${
                      company.change.startsWith("+")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  > */}
                  <td className={`p-3 `}>{company.change}</td>
                  <td className="p-3">{company.marketCap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default CompetitorsComparison;
