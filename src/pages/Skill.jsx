import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiGithub } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import SectionHeading from "../Component/SectionHeading";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  // Frontend Skills
  const frontendSkills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" />, level: "Advanced" },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" />, level: "Advanced" },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-5xl" />, level: "Intermediate" },
    { name: "React.js", icon: <FaReact className="text-cyan-400 text-5xl" />, level: "Intermediate" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-5xl" />, level: "Advanced" },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500 text-5xl" />, level: "Intermediate" },
  ];

  // Tools
  const tools = [
    { name: "Git", icon: <FaGitAlt className="text-red-500 text-5xl" />, level: "Intermediate" },
    { name: "GitHub", icon: <SiGithub className="text-gray-300 text-5xl" />, level: "Intermediate" },
    { name: "VS Code", icon: <VscVscode className="text-blue-400 text-5xl" />, level: "Advanced" },
  ];

  // Reusable Card Component
  const SkillCard = ({ item, delay }) => (
    <motion.div
      className="flex flex-col items-center p-6 bg-[#112240] rounded-xl 
                 shadow-md transition-all duration-300 ease-in-out
                 hover:shadow-cyan-400/60 hover:shadow-xl hover:border 
                 hover:border-cyan-400/50"
      data-aos="zoom-in"
      data-aos-delay={delay}
      whileHover={{ scale: 1.08, rotateX: 4, rotateY: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
    >
      {item.icon}
      <h4 className="text-lg font-semibold mt-3">{item.name}</h4>
      <p className="text-gray-400 text-sm">{item.level}</p>
    </motion.div>
  );

  return (
    <section id="skills" className="bg-[#0a192f] text-white px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <SectionHeading title="My" highlight="Skills" />

        {/* Intro */}
        <p
          className="text-gray-400 max-w-2xl mx-auto mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Skilled in building responsive and modern web applications with
          <span className="text-cyan-400"> React.js, JavaScript (ES6+), Tailwind CSS</span>, and
          <span className="text-cyan-400"> Bootstrap</span>. Experienced in
          version control & collaboration using{" "}
          <span className="text-cyan-400">Git, GitHub, and VS Code</span>.
        </p>

        {/* Frontend Skills */}
        <h3
          className="text-2xl font-semibold mb-6 text-cyan-400"
          data-aos="fade-right"
        >
          Frontend Development
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {frontendSkills.map((skill, i) => (
            <SkillCard key={i} item={skill} delay={i * 100} />
          ))}
        </div>

        {/* Tools */}
        <h3
          className="text-2xl font-semibold mb-6 text-cyan-400"
          data-aos="fade-right"
        >
          Tools & Version Control
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {tools.map((tool, i) => (
            <SkillCard key={i} item={tool} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;











// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaGitAlt } from "react-icons/fa";
// import { SiJavascript, SiTailwindcss, SiGithub } from "react-icons/si";

// const Skills = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   const skills = [
//     { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" />, level: "90%" },
//     { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" />, level: "85%" },
//     { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-5xl" />, level: "80%" },
//     { name: "React.js", icon: <FaReact className="text-cyan-400 text-5xl" />, level: "75%" },
//     { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-5xl" />, level: "85%" },
//     { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500 text-5xl" />, level: "80%" },
//     { name: "Git", icon: <FaGitAlt className="text-red-500 text-5xl" />, level: "70%" },
//     { name: "GitHub", icon: <SiGithub className="text-gray-300 text-5xl" />, level: "70%" },
//   ];

//   return (
//     <section id="skills" className="bg-[#0a192f] text-white px-6 py-20">
//       <div className="max-w-5xl mx-auto text-center">
//         <h2
//           className="text-4xl font-bold mb-12"
//           data-aos="fade-up"
//         >
//           My <span className="text-cyan-400">Skills</span>
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
//           {skills.map((skill, i) => (
//             <div
//               key={i}
//               className="flex flex-col items-center space-y-3 p-6 bg-[#112240] rounded-xl shadow-md hover:shadow-cyan-400/30 transition"
//               data-aos="zoom-in"
//               data-aos-delay={i * 100}
//             >
//               {skill.icon}
//               <h4 className="text-lg font-semibold">{skill.name}</h4>
//               <p className="text-cyan-400">{skill.level}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;









// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGitAlt } from "react-icons/fa";
// import { SiTailwindcss, SiGithub } from "react-icons/si";

// const Skills = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   const categories = [
//     {
//       title: "Frontend",
//       skills: [
//         { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
//         { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
//         { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" /> },
//       ],
//     },
//     {
//       title: "Frameworks",
//       skills: [
//         { name: "React.js", icon: <FaReact className="text-cyan-400 text-4xl" /> },
//         { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-4xl" /> },
//         { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600 text-4xl" /> },
//       ],
//     },
//     {
//       title: "Tools",
//       skills: [
//         { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl" /> },
//         { name: "GitHub", icon: <SiGithub className="text-gray-300 text-4xl" /> },
//       ],
//     },
//   ];

//   return (
//     <section id="skills" className="bg-[#0a192f] text-white px-6 py-20">
//       <div className="max-w-5xl mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-12" data-aos="fade-up">
//           My <span className="text-cyan-400">Skills</span>
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {categories.map((category, i) => (
//             <div
//               key={i}
//               className="bg-[#112240] rounded-2xl shadow-lg p-6 space-y-6 hover:shadow-cyan-400/40 transition-all"
//               data-aos="fade-up"
//               data-aos-delay={i * 200}
//             >
//               <h3 className="text-2xl font-semibold text-cyan-400">{category.title}</h3>
//               <div className="grid grid-cols-2 gap-6">
//                 {category.skills.map((skill, j) => (
//                   <div key={j} className="flex flex-col items-center space-y-2">
//                     {skill.icon}
//                     <span className="text-sm font-medium">{skill.name}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

// option2

// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJsSquare,
//   FaReact,
//   FaGitAlt,
//   FaBootstrap,
// } from "react-icons/fa";
// import { SiTailwindcss, SiGithub } from "react-icons/si";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

// const Skills = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   const skills = [
//     { name: "HTML", level: 90, icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
//     { name: "CSS", level: 85, icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
//     { name: "JavaScript", level: 80, icon: <FaJsSquare className="text-yellow-400 text-4xl" /> },
//     { name: "React.js", level: 75, icon: <FaReact className="text-cyan-400 text-4xl" /> },
//     { name: "Tailwind", level: 85, icon: <SiTailwindcss className="text-sky-400 text-4xl" /> },
//     { name: "Bootstrap", level: 85, icon: <FaBootstrap className="text-purple-500 text-4xl" /> },
//     { name: "Git", level: 70, icon: <FaGitAlt className="text-red-500 text-4xl" /> },
//     { name: "GitHub", level: 70, icon: <SiGithub className="text-white text-4xl" /> },
//   ];

//   return (
//     <section id="skills" className="bg-[#0a192f] text-white px-6 py-20">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2
//           className="text-4xl font-bold mb-12"
//           data-aos="fade-up"
//         >
//           My <span className="text-cyan-400">Skills</span>
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
//           {skills.map((skill, i) => (
//             <div
//               key={i}
//               className="flex flex-col items-center space-y-4 p-6 bg-[#112240] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
//               data-aos="zoom-in"
//               data-aos-delay={i * 100}
//             >
//               {/* Icon */}
//               <div>{skill.icon}</div>

//               {/* Circular Progress */}
//               <div className="w-24 h-24">
//                 <CircularProgressbar
//                   value={skill.level}
//                   text={`${skill.level}%`}
//                   styles={buildStyles({
//                     textColor: "#fff",
//                     pathColor: "#06b6d4",
//                     trailColor: "#1e3a8a",
//                   })}
//                 />
//               </div>

//               {/* Skill Name */}
//               <h3 className="text-lg font-semibold">{skill.name}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

// option3 

// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import CountUp from "react-countup";

// // React Icons
// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
// import { SiTailwindcss, SiBootstrap, SiGithub } from "react-icons/si";

// const Skills = () => {
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });

//     const handleScroll = () => {
//       const section = document.getElementById("skills");
//       if (section) {
//         const rect = section.getBoundingClientRect();
//         if (rect.top < window.innerHeight - 100) {
//           setAnimate(true);
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const skills = [
//     { name: "HTML", level: 90, icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
//     { name: "CSS", level: 85, icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
//     { name: "JavaScript", level: 80, icon: <FaJs className="text-yellow-400 text-2xl" /> },
//     { name: "React.js", level: 75, icon: <FaReact className="text-cyan-400 text-2xl animate-spin-slow" /> },
//     { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss className="text-sky-400 text-2xl" /> },
//     { name: "Bootstrap", level: 85, icon: <SiBootstrap className="text-purple-600 text-2xl" /> },
//     { name: "Git & GitHub", level: 70, icon: <><FaGitAlt className="text-red-500 text-2xl" /> <SiGithub className="text-gray-300 text-2xl" /></> },
//   ];

//   return (
//     <section id="skills" className="bg-[#0a192f] text-white px-6 py-20">
//       <div className="max-w-4xl mx-auto text-center lg:text-left">
//         <h2 className="text-4xl font-bold mb-10 text-center" data-aos="fade-up">
//           My <span className="text-cyan-400">Skills</span>
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {skills.map((skill, i) => (
//             <div
//               key={i}
//               className="space-y-2"
//               data-aos="fade-up"
//               data-aos-delay={i * 100}
//             >
//               {/* Skill Name + Icon + Animated Percentage */}
//               <div className="flex justify-between items-center">
//                 <span className="flex items-center gap-2 font-medium">
//                   {skill.icon}
//                   {skill.name}
//                 </span>
//                 <span className="text-cyan-400 font-semibold">
//                   {animate ? (
//                     <CountUp start={0} end={skill.level} duration={2} suffix="%" />
//                   ) : (
//                     "0%"
//                   )}
//                 </span>
//               </div>

//               {/* Progress Bar with animation */}
//               <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
//                 <div
//                   className="bg-cyan-400 h-3 rounded-full transition-all duration-1000 ease-out"
//                   style={{ width: animate ? `${skill.level}%` : "0%" }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Small custom animation for React icon */}
//       <style>
//         {`
//           .animate-spin-slow {
//             animation: spin 6s linear infinite;
//           }
//           @keyframes spin {
//             from { transform: rotate(0deg); }
//             to { transform: rotate(360deg); }
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default Skills;

