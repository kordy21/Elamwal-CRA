import React from "react";
import { ChevronLeft } from "lucide-react";
export const BreadcrumbCategories = ({ items = [] }) => {
  return (
    <nav
      className="flex items-center pb-4 text-base text-gray-600"
      aria-label="Breadcrumb"
    >
      <a href="/" className="transition-colors hover:text-primary">
        الرئيسية
      </a>

      {items.map((item, index) => {
        return (
          <div key={index} className="flex items-center">
            <ChevronLeft className="w-4 h-4 mx-2 text-gray-400" />
            {item?.link ? (
              <a
                href={item.link}
                className="font-medium text-gray-600 transition-colors hover:text-primary"
              >
                {item.name?.split(" ").slice(-4).join(" ")}
              </a>
            ) : (
              <span className={true ? "font-medium text-gray-600 " : ""}>
                {item.name?.split(" ").slice(-4).join(" ")}
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
};
