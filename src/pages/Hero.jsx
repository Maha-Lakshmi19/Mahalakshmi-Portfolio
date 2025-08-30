import React, { useEffect } from "react";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import img from "../assets/maha2.JPG";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./About";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";
import WrkExper from "./WrkExper";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once:false,
    });
  }, []);

  return (
    <>
      <div
        id="hero"
        className="flex flex-col-reverse md:flex-row items-center justify-center gap-16 min-h-screen bg-[#0a192f] px-6 md:px-10"
      >
        {/* Left Side - Text */}
        <div className="text-white w-full md:w-1/2 space-y-4 text-center md:text-left">
          <p className="text-lg md:text-xl" data-aos="fade-right" data-aos-delay="100">
            Hello, It's Me
          </p>

          <h2
            className="text-3xl md:text-5xl font-bold"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Mahalakshmi
          </h2>

          <p className="text-xl md:text-2xl" data-aos="fade-right" data-aos-delay="300">
            And I'm a{" "}
            <span className="text-cyan-400 font-semibold">
              <Typewriter
                words={["Frontend Developer"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </p>

          <p
            className="text-gray-300 max-w-lg mx-auto md:mx-0 text-sm md:text-base"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            I’m currently working as a{" "}
            <span className="text-cyan-400 font-semibold">
              Frontend Developer Intern
            </span>{" "}
            at Digitaly Tech Solutions. I enjoy learning new technologies and
            creating clean, responsive, and user-friendly websites.
          </p>

          {/* Social Icons */}
          <div
            className="flex justify-center md:justify-start space-x-4 mt-6 text-lg md:text-xl"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <a
              href="https://www.facebook.com/profile.php?id=100015344566689&mibextid=LQQJ4d"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-[#112240] rounded-full hover:bg-cyan-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/_maha_mahi_?igsh=NzdsYnIzZW4xejll&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-[#112240] rounded-full hover:bg-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/Maha-Lakshmi19"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-[#112240] rounded-full hover:bg-white hover:text-black transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-[#112240] rounded-full hover:bg-blue-600 transition"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Button */}
          <div
            className="mt-8 flex justify-center md:justify-start space-x-4"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <a
              href="/Mahalakshmi_Resume.pdf"
              download
              className="inline-block px-6 md:px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold shadow-lg hover:shadow-cyan-400/80 hover:scale-105 transition duration-300 text-sm md:text-base"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div
          className="relative w-56 h-56 md:w-80 md:h-80 mb-8 md:mb-0"
          data-aos="fade-left"
          data-aos-delay="700"
        >
          {/* Glow effect */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur-2xl animate-pulse"></div>

          <img
            src={img}
            alt="Mahalakshmi Profile"
            className="relative w-56 h-56 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-xl z-10"
          />
        </div>
      </div>

      {/* Sections */}
      <About />
      <Skill />
      <WrkExper />
      <Project />
      <Contact />
    </>
  );
};

export default Hero;
