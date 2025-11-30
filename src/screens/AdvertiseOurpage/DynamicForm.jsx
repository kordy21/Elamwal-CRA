// DynamicForm.js
import React, { useState } from "react";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";

const DynamicForm = ({
  fields = [],
  onSubmit,
  title = "نموذج",
  submitText = "إرسال",
  columns = 2,
}) => {
  const initialFormData = {};
  fields.forEach((field) => {
    initialFormData[field.name] = field.value || "";
  });

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit ? onSubmit(formData) : console.log("Form Data:", formData);
  };

  const renderField = (field) => {
    if (field.type === "textarea") {
      return (
        <textarea
          name={field.name}
          placeholder={field.placeholder}
          value={formData[field.name]}
          onChange={handleChange}
          className="rounded p-2 w-full h-24 bg-white focus:outline-none focus:ring-2 focus:ring-primary"
        />
      );
    }

    if (field.type === "file") {
      return (
        <div className="relative w-full">
          <label className="block text-gray-700 mb-1">
            {field.placeholder}
          </label>
          <input
            type="file"
            name={field.name}
            onChange={handleChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="flex justify-between border rounded p-3 hover:shadow-md w-full h-12 items-center bg-white text-gray-700 text-center cursor-pointer hover:bg-gray-100 gap-2">
            إرفاق الملفات (إن وُجدت)
            <ArrowUpTrayIcon className="w-5 h-5 text-gray-600" />
          </div>
        </div>
      );
    }

    return (
      <input
        type={field.type}
        name={field.name}
        placeholder={field.placeholder}
        value={formData[field.name]}
        onChange={handleChange}
        className="rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
      />
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-0 lg:p-5 bg-custom rounded"
    >
      <div className={`grid gap-4 grid-cols-1 md:grid-cols-${columns}`}>
        {fields.map((field, idx) => {
          let colClass = "md:col-span-1";
          if (field.colSpan === 2) colClass = "md:col-span-2";
          if (field.colSpan === 3) colClass = "md:col-span-3";
          if (field.colSpan === 4) colClass = "md:col-span-4";

          return (
            <div key={idx} className={colClass}>
              {renderField(field)}
            </div>
          );
        })}
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white p-3 rounded font-medium hover:bg-green-700 transition"
      >
        {submitText}
      </button>
    </form>
  );
};

export default DynamicForm;
