import React, { useEffect, useState } from "react";
import bankmarkazy from "../../assets/images/bankmarkazy.webp";
import bankahly from "../../assets/images/bankalahly.webp";
import bankmasr from "../../assets/images/bankmasr.webp";
import bankALASKAN from "../../assets/images/bankalaskan.webp";
import ALEX from "../../assets/images/bankalex.webp";
import SAIB from "../../assets/images/banksaib.webp";
import alaraby from "../../assets/images/bankalaraby.webp";
import Qnb from "../../assets/images/bankqnb.webp";
import Bankalzara3a from "../../assets/images/bankalzara3y.webp";
import MainTitle from "./MainTitle";
import LoadMoreButton from "./LoadMoreButton";
import { useDispatch, useSelector } from "react-redux";
import { getProfiles } from "../../slices/6-profile/thunk";

const BanksList = () => {
  const banks = [
    { logo: bankmarkazy, name: "بنك القاهرة" },
    { logo: bankahly, name: "بنك الأهلي المصري" },
    { logo: bankmasr, name: "البنك المركزي" },
    { logo: bankALASKAN, name: "البنك التعمير و الإسكان" },
    { logo: ALEX, name: "البنك الاسكندرية" },
    { logo: SAIB, name: "البنك سايب" },
    { logo: alaraby, name: "البنك العربي الإفريقي" },
    { logo: Qnb, name: "البنك Qnb" },
    { logo: Bankalzara3a, name: "بنك الزراعة" },
    { logo: bankmarkazy, name: "بنك القاهرة" },
    { logo: bankahly, name: "بنك الأهلي المصري" },
    { logo: bankmasr, name: "البنك المركزي" },
    { logo: bankALASKAN, name: "البنك التعمير و الإسكان" },
    { logo: ALEX, name: "البنك الاسكندرية" },
    { logo: SAIB, name: "البنك سايب" },
    { logo: alaraby, name: "البنك العربي الإفريقي" },
    { logo: Qnb, name: "البنك Qnb" },
    { logo: Bankalzara3a, name: "بنك الزراعة" },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const dispatch = useDispatch();
  const filteredBanks = banks.filter((bank) =>
    bank.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const { profiles } = useSelector((state) => state.Profiles);

  useEffect(() => {
    dispatch(getProfiles({ type: "bank" }));
  }, [dispatch]);
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };
  // console.log(profiles);
  // if (profiles) {
  //   return null
  // }
  return (
    <div className="flex flex-col gap-5">
      <MainTitle title="بنوك مصر" noMore={true} />

      <div className="flex items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="ابحث عن بنك..."
          className="flex-1 px-3 py-2 border rounded-lg border-primary focus:outline-none focus:ring focus:ring-primary-200"
        />
      </div>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
        {filteredBanks.slice(0, visibleCount).map((bank, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 text-center transition-shadow bg-white rounded-lg shadow hover:shadow-md"
          >
            <img
              src={bank.logo}
              alt={bank.name}
              className="object-contain w-20 h-20 mb-2"
            />
            <p className="text-sm font-semibold">{bank.name}</p>
          </div>
        ))}
        {filteredBanks.length === 0 && (
          <p className="text-center col-span-full">لا يوجد نتائج مطابقة</p>
        )}
      </div>

      {visibleCount < filteredBanks.length && (
        <div className="flex justify-center mt-4">
          <LoadMoreButton onClick={handleLoadMore} />
        </div>
      )}
    </div>
  );
};

export default BanksList;
