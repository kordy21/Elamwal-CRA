// src/utils/formatArabicDate.js

export const formatArabicDate = (dateString) => {
  const date = new Date(dateString);

  const formattedDate = new Intl.DateTimeFormat("ar-EG", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);

  const formattedTime = new Intl.DateTimeFormat("ar-EG", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(date);

  return `${formattedDate} | ${formattedTime}`;
};
