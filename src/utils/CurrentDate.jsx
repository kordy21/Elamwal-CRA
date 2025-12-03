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

  let gregorianDate = now.toLocaleString("ar-EG", gregorianOptions);


  gregorianDate = gregorianDate.replace(/^([^\d،]+)،/, "$1");

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
