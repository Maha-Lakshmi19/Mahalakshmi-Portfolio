import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionHeading from "../Component/SectionHeading";

const experiences = [
  {
  role: "Frontend Developer Intern",
  company: "Digitaly Tech Solutions",
  period: "Mar 2025 – Present",
  details: [
    "Working on live client projects using React.js and Tailwind CSS.",
    "Developing responsive and user-friendly interfaces with AOS animations.",
    "Collaborating with team using Git & GitHub for version control.",
  ],
},

  // {
  //   role: "Web Developer Intern",
  //   company: "ABC Web Solutions",
  //   period: "May 2024 – Jul 2024",
  //   details: [
  //     "Built landing pages and dashboards using HTML, CSS, JavaScript, and React.",
  //     "Optimized page performance and improved Lighthouse score by 30%.",
  //     "Integrated third-party APIs for dynamic data rendering.",
  //   ],
  // },
  // {
  //   role: "Freelance Developer",
  //   company: "Self-employed",
  //   period: "Aug 2024 – Present",
  //   details: [
  //     "Developed custom portfolio websites for clients using React & Tailwind.",
  //     "Worked closely with clients to understand requirements and deliver solutions.",
  //     "Implemented contact forms with EmailJS and responsive UI design.",
  //   ],
  // },
];

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section id="experience" className="bg-[#0a192f] text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <SectionHeading title="My" highlight="Experience" />

        {/* Timeline */}
        <div className="relative border-l-2 border-cyan-400/50 ml-6 mt-12">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="relative mb-10 ml-6"
              data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={i * 200}
            >
              {/* Dot */}
              <span className="absolute -left-3 top-2 w-6 h-6 bg-cyan-400 border-4 border-[#0a192f] rounded-full shadow-md shadow-cyan-400/50" />

              {/* Card */}
              <div className="bg-[#112240] p-6 rounded-xl shadow-lg hover:shadow-cyan-400/40 hover:-translate-y-1 transition duration-300">
                <h3 className="text-xl font-semibold text-cyan-400">
                  {exp.role}
                </h3>
                <p className="text-gray-300 mb-3">
                  <span className="text-cyan-300 font-medium">{exp.company}</span> • {exp.period}
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
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
