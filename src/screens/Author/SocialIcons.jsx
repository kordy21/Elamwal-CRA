import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const SocialIcons = ({ links }) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {links?.facebook && (
        <a
          href={links?.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-white duration-300 bg-gray-200 rounded hover:bg-primary group"
        >
          <FontAwesomeIcon
            icon={faFacebookF}
            className="w-5 h-5 text-black duration-300 group-hover:text-white"
          />
        </a>
      )}

      {links?.instagram && (
        <a
          href={links?.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-white duration-300 bg-gray-200 rounded hover:bg-primary group"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="w-5 h-5 text-black duration-300 group-hover:text-white"
          />
        </a>
      )}

      {links?.twitter && (
        <a
          href={links?.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-white duration-300 bg-gray-200 rounded hover:bg-primary group"
        >
          <FontAwesomeIcon
            icon={faXTwitter}
            className="w-5 h-5 text-black duration-300 group-hover:text-white"
          />
        </a>
      )}

      {links?.telegram && (
        <a
          href={links?.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-white duration-300 bg-gray-200 rounded hover:bg-primary group"
        >
          <FontAwesomeIcon
            icon={faTelegram}
            className="w-5 h-5 text-black duration-300 group-hover:text-white"
          />
        </a>
      )}

      {links?.whatsapp && (
        <a
          href={`https://wa.me/${links.whatsapp.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-white duration-300 bg-gray-200 rounded hover:bg-primary group"
        >
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="w-5 h-5 text-black duration-300 group-hover:text-white"
          />
        </a>
      )}
    </div>
  );
};

export default SocialIcons;
