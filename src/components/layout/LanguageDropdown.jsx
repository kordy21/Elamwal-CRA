import React, { useState, useRef, useEffect } from "react";
import { cn } from "../../lib/utils";

const LanguageDropdown = ({
  trigger,
  items = [],
  className,
  onSelect,
  itemHref,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleItemClick = (item) => {
    if (onSelect) {
      onSelect(item);
    }

    if (item.href) {
      window.location.href = item.href; 
    }

    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className={cn("relative inline-block", className)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* trigger */}
      <div
        className="cursor-pointer"
        onClick={() => {
          if (itemHref) {
            window.location.href = itemHref;
          }
        }}
      >
        {trigger}
      </div>

      {/* dropdown menu */}
      {isOpen && (
        <div className="absolute z-30 w-36 bg-white border border-gray-200 rounded-md shadow-lg end-0 top-full max-h-[300px] overflow-y-auto">
          <div>
            {items.map((item, index) => (
              <button
                key={index}
                className="flex items-center w-full gap-1 px-2 py-2 text-sm text-gray-700 duration-300 hover:bg-gray-100 text-start hover:text-primary"
                onClick={() => handleItemClick(item)}
              >
                {item.flag && (
                  <img src={item.flag} className="w-6 h-4 me-2" alt="" />
                )}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export { LanguageDropdown };
