import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { cn } from "../../lib/utils";

const Dropdown = ({ trigger, items = [], className, onSelect, itemHref }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubIndex, setOpenSubIndex] = useState(null);
  const [subPosition, setSubPosition] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setOpenSubIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleItemClick = (item) => {
    if (item.subDropdownItems) return;

    if (onSelect) onSelect(item);

    if (item.href) window.location.href = item.href;

    setIsOpen(false);
  };

  const handleMouseEnter = (e, index, item) => {
    if (item.subDropdownItems) {
      const rect = e.currentTarget.getBoundingClientRect();
      setSubPosition({
        top: rect.top,
        left: rect.left - 256,
      });
      setOpenSubIndex(index);
    }
  };

  const subDropdown = (item) =>
    subPosition &&
    ReactDOM.createPortal(
      <div
        className="fixed z-50 w-64 overflow-y-auto bg-white border border-gray-200 rounded-md shadow-lg max-h-64"
        style={{ top: subPosition.top, left: subPosition.left }}
      >
        {item.subDropdownItems.map((sub, subIndex) => (
          <div
            key={subIndex}
            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 hover:text-primary"
          >
            {sub.emoji && <img src={sub.emoji} alt="" className="w-4 h-4" />}
            {sub.label || sub.title}
          </div>
        ))}
      </div>,
      document.body
    );

  return (
    <div
      ref={dropdownRef}
      className={cn("relative inline-block", className)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        setIsOpen(false);
        setOpenSubIndex(null);
      }}
    >
      {/* trigger */}
      <div
        className="cursor-pointer"
        onClick={() => {
          if (itemHref) window.location.href = itemHref;
        }}
      >
        {trigger}
      </div>

      {/* dropdown menu */}
      {isOpen && (
        <div className="absolute z-30 w-48 bg-white border border-gray-200 rounded-md shadow-lg top-full">
          <div className="overflow-y-auto max-h-64">
            {items.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={(e) => handleMouseEnter(e, index, item)}
                onMouseLeave={() => setOpenSubIndex(null)}
              >
                <button
                  className="flex items-center justify-between w-full gap-1 px-2 py-2 text-sm text-gray-700 duration-300 hover:bg-gray-100 text-start hover:text-primary"
                  onClick={() => handleItemClick(item)}
                >
                  <span className="flex items-center justify-between gap-1 font-medium">
                    {item.flag && (
                      <img src={item.flag} className="w-3 h-3 me-2" alt="" />
                    )}
                    {item.label}
                  </span>
                  {item.subDropdownItems && (
                    <span className=" text-primary">◀</span>
                  )}
                </button>

                {item.subDropdownItems && openSubIndex === index
                  ? subDropdown(item)
                  : null}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export { Dropdown };
