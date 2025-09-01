import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0a192f] text-gray-400 py-4 text-center text-sm border-t border-gray-700">
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="text-cyan-400 font-semibold">Mahalakshmi</span>. All
        rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
