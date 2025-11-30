import React, { useState, useEffect, useRef } from "react";
import {
  UserIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import SignUp from "../../screens/signuppage/SignUp";
const UserMenu = ({ isLoggedIn, user }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const handleClick = () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      setOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Tooltip Wrapper */}
      <div className="relative cursor-pointer group" onClick={handleClick}>
        <UserIcon className="w-6 h-6 text-gray-500 duration-300 hover:text-primary" />
        {isLoggedIn && (
          <span className="absolute px-2 py-1 text-xs text-white transition scale-0 -translate-x-1/2 bg-gray-800 rounded top-10 left-1/2 group-hover:scale-100 whitespace-nowrap">
            الحساب الشخصي
          </span>
        )}
      </div>

      {/* Dropdown */}
      {isLoggedIn && open && (
        <div className="absolute z-50 w-56 mt-2 -translate-x-1/2 bg-white border rounded-lg shadow-lg left-1/2 top-9">
          {/* User info */}
          <div className="p-4 border-b">
            <div className="flex items-center gap-3">
              <img
                src={user?.avatar || "https://via.placeholder.com/40"}
                alt="user avatar"
                className="object-cover w-12 h-12 rounded-xl"
              />
              <div>
                <p className="font-bold text-gray-800">
                  {user?.name || "User"}
                </p>
                <button
                  // onClick={() => navigate("/profile/edit")}
                  className="text-xs text-gray-800 duration-300 hover:text-primary"
                >
                  تعديل الملف الشخصي
                </button>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <ul className="">
            <li
              className="px-3 py-2 duration-300 rounded cursor-pointer hover:bg-gray-100 hover:text-primary"
              onClick={() => navigate("/account")}
            >
              حساب
            </li>
            <li
              className="px-3 py-2 duration-300 rounded cursor-pointer hover:bg-gray-100 hover:text-primary"
              onClick={() => navigate("/account")}
            >
              المفضلة
            </li>
            <li
              className="px-3 py-2 duration-300 rounded cursor-pointer hover:bg-gray-100 hover:text-primary"
              onClick={() => navigate("/account")}
            >
              الإشتركات
            </li>
            <li
              className="flex items-center gap-2 px-3 py-2 duration-300 rounded cursor-pointer hover:bg-gray-100 hover:text-primary"
              onClick={() => navigate("/settings")}
            >
              {/* <Settings className="w-4 h-4" /> */}
              التعليقات
            </li>
            <li
              className="flex items-center gap-2 px-3 py-2 duration-300 rounded cursor-pointer hover:bg-gray-100 hover:text-primary"
              onClick={() => navigate("/help")}
            >
              {/* <HelpCircle className="w-4 h-4" /> */}
              مركز المساعدة
            </li>
          </ul>

          {/* Divider */}
          <hr />

          {/* Logout */}
          <button
            onClick={() => {
              navigate("/logout");
            }}
            className="flex items-center w-full gap-2 px-3 py-2 text-red-600 duration-300 hover:bg-red-50 hover:rounded-b-lg"
          >
            {/* <ArrowLeftStartOnRectangleIcon className="w-4 h-4" /> */}
            تسجيل الخروج
          </button>
        </div>
      )}

      {/* {!isLoggedIn && open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md mx-4">
            <SignUp />
          </div>
        </div>
      )} */}
    </div>
  );
};

export default UserMenu;
