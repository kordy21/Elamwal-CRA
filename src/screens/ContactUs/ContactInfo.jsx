import React from "react";
import mobile from "../../assets/images/phone.webp";
import map from "../../assets/images/maap.webp";
import mail from "../../assets/images/mail.webp";

const ContactInfo = () => {
  const info = [
    {
      icon: map,
      title: "موقع",
      value: "القاهرة، مصر",
      link: "https://maps.google.com/?q=القاهرة، مصر",
    },
    {
      icon: mail,
      title: "بريد إلكتروني",
      value: "info@elalmwal.com",
      link: "mailto:info@elalmwal.com",
    },
    {
      icon: mobile,
      title: "رقم الهاتف",
      value: "01065699427",
      link: "tel:01065699427",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-3">
      {info.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-3 p-6 bg-white rounded-xl shadow hover:shadow-md transition"
        >
          <img src={item.icon} alt={item.title} className="w-20 h-20" />
          <h3 className="text-lg font-bold">{item.title}</h3>

          {item.link ? (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="break-words text-center"
            >
              {item.value}
            </a>
          ) : (
            <p className="text-gray-600 text-center">{item.value}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
