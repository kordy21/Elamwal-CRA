import React from "react";
import MainTitle from "../../components/ui/MainTitle"; 

const PageHeader = ({ title, description, ...props }) => {
  return (
    <section className="mb-6">
      <MainTitle title={title} {...props}  noMore={true} />

      {description && (
        <p className="mt-2 text-base text-gray-600">{description}</p>
      )}
    </section>
  );
};

export default PageHeader;
