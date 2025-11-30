import React from "react";

const SingleImage = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {images.map((src, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-md shadow-md bg-white"
        >
          <img
            src={src}
            alt={`Image ${index + 1}`}
            className="w-full h-64 object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default SingleImage;
