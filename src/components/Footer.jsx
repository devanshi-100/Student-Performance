import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 mt-10">
      <div className="container mx-auto text-center">
        
        <h2 className="text-lg font-semibold">Student Perfomace Analyzer</h2>
        
        <p className="text-sm mt-2">
          Helping students analyze performance & improve skills 🚀
        </p>

        <p className="text-xs mt-3 text-gray-400">
          © {new Date().getFullYear()} All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;