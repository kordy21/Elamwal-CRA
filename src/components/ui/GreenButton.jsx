import React from "react";

const GreenButton = ({ number, icon: Icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 text-white px-4 py-2 rounded-md cursor-pointer bg-primary"
    >
      {number}
      {Icon && <Icon style={{ width: "20px", height: "20px" }} />}
    </button>
  );
};

export default GreenButton;
