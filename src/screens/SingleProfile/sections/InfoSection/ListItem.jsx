import React from "react";

const ListItem = ({ children }) => (
  <li className="flex gap-2 mb-3 leading-relaxed text-gray-700">
    <span className="mr-2 font-bold text-gray-500">•</span>
    <span className="flex-1">{children}</span>
  </li>
);

export default ListItem;
