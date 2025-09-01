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
      once: true,
    });
  }, []);

  return (
    <>
      <div
        id="hero"
        className="flex flex-col-reverse md:flex-row items-center justify-center 
                   gap-10 md:gap-16 min-h-screen bg-[#0a192f] px-4 sm:px-6 md:px-10"
      >
        {/* Left Side - Text */}
        <div className="text-white w-full md:w-1/2 space-y-6 text-center md:text-left">
          <p
            className="text-lg md:text-xl"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Hello, It's Me
          </p>

          <h1
            className="text-3xl md:text-5xl font-bold"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Mahalakshmi
          </h1>

          <p
            className="text-xl md:text-2xl"
            data-aos="fade-right"
            data-aos-delay="300"
          >
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
            Crafting modern, responsive, and user-friendly websites with a focus on{" "}
            <span className="text-cyan-400 font-semibold">
              React & Frontend Development
            </span>. Turning ideas into interactive digital experiences.
          </p>

          {/* Social Icons */}
          <div
            className="flex justify-center md:justify-start space-x-3 sm:space-x-4 mt-6 text-lg md:text-xl"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <a
              href="https://www.facebook.com/profile.php?id=100015344566689&mibextid=LQQJ4d"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook Profile"
              className="p-3 bg-[#112240] rounded-full hover:bg-cyan-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/_maha_mahi_?igsh=NzdsYnIzZW4xejll&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram Profile"
              className="p-3 bg-[#112240] rounded-full hover:bg-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/Maha-Lakshmi19"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-3 bg-[#112240] rounded-full hover:bg-white hover:text-black transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/maha-lakshmi-82a2161b5/"
              target="_blank"
              rel="noreferrer"
              aria-label="Linkedin Profile"
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
              href="https://drive.google.com/file/d/1TcszbHFWXJz8j2issARs5tWOSA_1OzYM/view"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-4 sm:px-6 md:px-8 py-2 sm:py-3 
                         rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 
                         text-black font-semibold shadow-lg hover:shadow-cyan-400/80 
                         hover:scale-105 transition duration-300 text-sm md:text-base"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div
          className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 mb-8 md:mb-0"
          data-aos="fade-left"
          data-aos-delay="700"
        >
          {/* Soft Glow */}
          <div
            className="absolute inset-1 sm:inset-2 rounded-full 
                       bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 
                       blur-xl sm:blur-2xl opacity-70 
                       md:animate-[pulse_6s_ease-in-out_infinite]"
          ></div>

          {/* Main Image */}
          <img
            src={img}
            alt="Mahalakshmi Frontend Developer"
            className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 
                       object-cover rounded-full border-4 border-white 
                       shadow-xl z-10 animate-subtle-bounce"
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
 