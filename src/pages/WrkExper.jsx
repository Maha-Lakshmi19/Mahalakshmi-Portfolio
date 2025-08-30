import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionHeading from "../Component/SectionHeading";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Digitaly Tech Solutions",
    period: "Jul 2025 – Present",
    details: [
      "Worked on live client projects using React.js and Tailwind CSS",
      "Developed responsive and user-friendly interfaces with AOS animations",
      "Collaborated with team using Git & GitHub for version control",
    ],
  },
];

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false});
  }, []);

  return (
    <section id="experience" className="bg-[#0a192f] text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
         <SectionHeading title="My" highlight="Experience" />

        {/* Timeline */}
        <div className="relative border-l-2 border-cyan-400 ml-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="relative mb-10 ml-6"
              data-aos="fade-up"
              data-aos-delay={i * 200}
            >
              {/* Dot */}
              <span className="absolute -left-3 top-2 w-6 h-6 bg-cyan-400 rounded-full border-2 border-[#0a192f]" />

              {/* Card */}
              <div className="bg-[#112240] p-6 rounded-xl shadow-lg hover:shadow-cyan-400/40 hover:-translate-y-1 transition duration-300">
                <h3 className="text-xl font-semibold text-cyan-400">
                  {exp.role}
                </h3>
                <p className="text-gray-400 mb-3">
                  {exp.company} | {exp.period}
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-300" role="list">
                  {exp.details.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
