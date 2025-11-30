import React, { useState } from "react";
import { Copy, Check } from "lucide-react"; // أيقونات (لو بتستخدم lucide-react)

const ShortLink = ({ shortUrlID }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrlID).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="flex flex-wrap items-center gap-3 rounded-lg ">
      <label className="font-semibold text-gray-700 whitespace-nowrap">
        رابط مختصر :
      </label>

      <div className="relative flex-1 min-w-[280px]">
        <input
          type="url"
          value={shortUrlID}
          readOnly
          className="w-full px-3 py-2 pr-10 border rounded-lg bg-gray-50 focus:outline-primary-500"
        />

        <button
          onClick={handleCopy}
          className="absolute text-gray-500 transform -translate-y-1/2 right-2 top-1/2 hover:text-green-600"
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
        </button>
      </div>
    </div>
  );
};

export default ShortLink;
