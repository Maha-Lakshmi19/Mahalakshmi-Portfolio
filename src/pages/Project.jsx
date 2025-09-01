import React, { useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import SectionHeading from "../Component/SectionHeading";

// Import your screenshots (replace with real paths)
import portfolioImg from "../assets/portfoilo.png";
import ArchitectureImg from "../assets/architecture.png";
import MukeshImg from "../assets/mukeshortho.png";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Built a responsive personal portfolio using React.js, Tailwind CSS, and AOS animations.",
    tech: ["React.js", "Tailwind CSS", "AOS"],
    live: "https://maha-portfolio19.netlify.app/",
    github: "https://github.com/Maha-Lakshmi19/Maha-Portfolio",
    image: portfolioImg,
  },
  {
    title: "Clinic Website (Mukesh Ortho)",
    description:
      "Developed a clinic website using React.js and Tailwind CSS with form validation and a responsive UI.",
    tech: ["React.js", "Tailwind CSS"],
    live: "https://mukeshortho.digitaly.live/",
    github: "https://github.com/DigitalyAiTech/mukesh_ortho",
    image: MukeshImg,
  },
  {
    title: "Static Landing Page",
    description:
      "Created a modern landing page for an architecture site using React.js and Tailwind CSS.",
    tech: ["React.js", "Tailwind CSS"],
    live: "https://myarchitecture-11999.netlify.app/",
    github: "https://github.com/Maha-Lakshmi19/architecture.git",
    image: ArchitectureImg,
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section id="projects" className="bg-[#0a192f] text-white px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <SectionHeading title="My" highlight="Projects" />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              data-aos={i % 2 === 0 ? "fade-up" : "zoom-in"}
              data-aos-delay={i * 150}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-[#112240] rounded-xl shadow-lg hover:shadow-cyan-400/50 transition duration-300 flex flex-col overflow-hidden"
            >
              {/* Screenshot */}
              <div className="relative w-full aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-center transform transition duration-500 hover:scale-105"
                />

                {/* Overlay title on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 flex items-center justify-center transition">
                  <h3 className="text-xl font-bold text-cyan-400">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 text-sm bg-gray-800 rounded-full text-cyan-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-4 justify-center">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-cyan-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-white hover:scale-105 transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-600 hover:scale-105 transition"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
