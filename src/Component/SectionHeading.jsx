import React from "react";

const SectionHeading = ({ title, highlight }) => {
  return (
    <div className="text-center mb-12" data-aos="fade-up">
      <h2
        className="text-4xl font-extrabold 
        bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 
        bg-clip-text text-transparent"
      >
        {title} <span className="text-cyan-400">{highlight}</span>
      </h2>

      {/* Divider */}
      <div
        className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 
        rounded-full mt-6"
        data-aos="zoom-in"
        data-aos-delay="150"
      ></div>
    </div>
  );
};

export default SectionHeading;
