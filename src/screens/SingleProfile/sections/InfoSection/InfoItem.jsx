import React from "react";

const InfoItem = ({ label, value }) => (
  <div className="flex flex-col items-start justify-between gap-2 pb-2">
    <span className="text-lg font-semibold text-gray-800 ">{label}</span>
    <span className="text-gray-700 ">{value}</span>
  </div>
);

export default InfoItem;
