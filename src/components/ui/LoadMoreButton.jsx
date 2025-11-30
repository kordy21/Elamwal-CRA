import React from "react";

const LoadMoreButton = ({ text = "المزيد", onClick, loading = false }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 px-6 py-4 font-semibold underline transition-all duration-300 rounded-lg text-primary"
      disabled={loading}
    >
      {loading && (
        <svg
          className="w-5 h-5 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
          ></path>
        </svg>
      )}
      <span>{text}</span>
    </button>
  );
};

export default LoadMoreButton;
