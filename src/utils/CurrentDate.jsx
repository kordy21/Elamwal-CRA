import React from "react";

const CurrentDate = () => {
  const now = new Date();

  const gregorianOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const gregorianDate = now.toLocaleString("ar-EG", gregorianOptions);

  const islamicOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const islamicDate = new Intl.DateTimeFormat(
    "ar-EG-u-ca-islamic-umalqura",
    islamicOptions
  ).format(now);

  return (
    <span>
      {gregorianDate} - {islamicDate}
    </span>
  );
};

export default CurrentDate;
