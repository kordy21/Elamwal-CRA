import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormChanged =
    formData.firstName ||
    formData.lastName ||
    formData.username ||
    formData.email ||
    formData.password ||
    formData.confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Saving changes:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container p-8 mx-auto space-y-8 bg-white rounded-lg shadow"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <input
          type="text"
          name="firstName"
          placeholder="الاسم الأول"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500"
        />

        <input
          type="text"
          name="lastName"
          placeholder="الاسم الأخير"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <input
          type="text"
          name="username"
          placeholder="اسم المستخدم"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500"
        />
        <input
          type="email"
          name="email"
          placeholder="البريد الإلكتروني"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="كلمة المرور"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500 "
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute left-2 top-2.5 text-gray-400 hover:text-gray-600"
        >
          {showPassword ? (
            <EyeIcon className="w-5 h-5" />
          ) : (
            <EyeSlashIcon className="w-5 h-5" />
          )}
        </button>
      </div>

      <div className="relative">
        <input
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="تأكيد كلمة المرور"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500"
        />
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="absolute left-2 top-2.5 text-gray-400 hover:text-gray-600"
        >
          {showConfirmPassword ? (
            <EyeIcon className="w-5 h-5" />
          ) : (
            <EyeSlashIcon className="w-5 h-5" />
          )}
        </button>
      </div>

      <button
        type="submit"
        disabled={!isFormChanged}
        className={`w-full py-3 rounded-md text-white text-lg ${
          isFormChanged
            ? "bg-green-500 hover:bg-green-600"
            : "bg-green-300 cursor-not-allowed"
        }`}
      >
        حفظ التغييرات
      </button>
    </form>
  );
};

export default ProfileForm;
