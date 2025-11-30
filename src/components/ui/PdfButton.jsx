import React from "react";

const PdfButton = ({ pdfUrl }) => {
  const handleDownload = () => {
    if (!pdfUrl) {
      alert("لم يتم تحديد رابط ملف PDF");
      return;
    }

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `${pdfUrl}.pdf`; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
    >
      تحميل PDF
    </button>
  );
};

export default PdfButton;
