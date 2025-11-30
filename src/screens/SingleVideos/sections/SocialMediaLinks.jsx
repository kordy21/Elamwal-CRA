import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

const SocialMediaLinks = ({ links = {}, onShare }) => {
  const icons = [
    { name: "facebook", icon: faFacebook },
    { name: "instagram", icon: faInstagram },
    { name: "twitter", icon: faXTwitter },
  ];

  return (
    <div className="flex items-center gap-4">
      {icons.map(
        (item) =>
          links[item.name] && (
            <a
              key={item.name}
              href={links[item.name]}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-500 text-xl transition duration-300 hover:text-primary`}
            >
              <FontAwesomeIcon icon={item.icon} />
            </a>
          )
      )}

      <button
        onClick={onShare}
        className="text-xl text-gray-500 transition hover:text-green-600"
      >
        <FontAwesomeIcon icon={faShareNodes} />
      </button>
    </div>
  );
};

export default SocialMediaLinks;
