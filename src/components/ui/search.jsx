import React, { useState, useRef, useEffect } from "react";
import { cn } from "../../lib/utils";
import { Search as SearchIcon, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Search = ({
  placeholder = "البحث...",
  onSearch,
  results = [],
  className = "",
}) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showSearchField, setShowSearchField] = useState(false);
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
        setShowSearchField(false);
        setQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Focus on input when search field appears
  useEffect(() => {
    if (showSearchField && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearchField]);

  const handleIconClick = () => {
    setShowSearchField(true);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) {
      onSearch(value);
    }
    setIsOpen(value.length > 0 && results.length > 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setIsOpen(false);
      setShowSearchField(false);
    }
  };

  const handleResultClick = (result) => {
    setQuery(result.title);
    setIsOpen(false);
    setShowSearchField(false);
    // Handle navigation or selection
  };

  return (
    <div className={cn("", className)} ref={searchRef}>
      <div className="">
        <SearchIcon
          className="w-5 h-5 text-gray-500 cursor-pointer hover:text-[#00a651] transition-colors"
          onClick={handleIconClick}
        />
        {showSearchField && (
          // Show the search field when expanded
          <form
            onSubmit={handleSubmit}
            className="absolute z-30 w-[300px] end-3  top-16"
          >
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder={placeholder}
              className=" w-full px-3 py-2 pl-10 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a651] focus:border-transparent [direction:rtl]"
              onFocus={() => setIsOpen(query.length > 0 && results.length > 0)}
            />
            <button
              type="submit"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#00a651] transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>

      {isOpen && results.length > 0 && showSearchField && (
        <div className="absolute left-0 right-0 z-30 mt-1 overflow-y-auto bg-white border border-gray-200 rounded-md shadow-lg top-full max-h-60">
          {results.map((result) => (
            <div
              key={result.id}
              className="px-4 py-2 border-b border-gray-100 cursor-pointer hover:bg-gray-100 last:border-b-0"
              onClick={() => handleResultClick(result)}
            >
              <div className="text-sm font-medium text-gray-900 [direction:rtl]">
                {result.title}
              </div>
              <div className="text-xs text-gray-500 [direction:rtl]">
                {result.category}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
