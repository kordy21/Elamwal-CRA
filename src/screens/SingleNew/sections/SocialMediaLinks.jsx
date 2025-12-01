import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faShareNodes, faPrint } from "@fortawesome/free-solid-svg-icons";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

const SocialMediaLinks = ({ links = {}, onShare }) => {
  return (
    <div className="flex items-center justify-center gap-4 md:justify-between">
      <button
        onClick={() =>
          alert(
            "اضغط Ctrl + D (أو Cmd + D على الماك) لإضافة الصفحة إلى المفضلة."
          )
        }
        className="text-xl text-gray-500 transition duration-300 hover:text-primary"
        title=" حفظ "
      >
        {/* <i class="fa-regular fa-bookmark */}
        <FontAwesomeIcon icon={faBookmark} />

        {/* <BookmarkIcon className="w-6 h-6 text-gray-500 duration-300 hover:text-primary" /> */}
      </button>
      {links.facebook && (
        <a
          href={links.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-gray-500 transition duration-300 hover:text-primary"
          title="شارك عبر الفيس بوك"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      )}

      {links.twitter && (
        <a
          href={links.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-gray-500 transition duration-300 hover:text-primary"
          title=" شارك عبر تويتر"
        >
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
      )}

      <button
        onClick={() => window.print()}
        className="text-xl text-gray-500 transition duration-300 hover:text-green-600"
        title=" اطبع الأن"
      >
        <FontAwesomeIcon icon={faPrint} />
      </button>

      <button
        onClick={onShare}
        className="text-xl text-gray-500 transition duration-300 hover:text-green-600"
        title=" شارك الأن  "
      >
        <FontAwesomeIcon icon={faShareNodes} />
      </button>
    </div>
  );
};

export default SocialMediaLinks;
