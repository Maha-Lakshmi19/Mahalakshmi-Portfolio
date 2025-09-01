import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionHeading from "../Component/SectionHeading";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="bg-[#0a192f] text-white px-6 py-20 flex justify-center"
    >
      <div className="max-w-3xl w-full text-center space-y-8">
        {/* Heading */}
        <SectionHeading title="About" highlight="Me" />

        {/* Role */}
        <h3
          className="text-xl sm:text-2xl text-cyan-400 font-semibold tracking-wide"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Frontend Developer
        </h3>

        {/* Intro */}
        <p
  className="text-gray-300 leading-relaxed text-lg"
  data-aos="fade-up"
  data-aos-delay="300"
>
  Hi, I’m <span className="font-semibold text-white">Mahalakshmi</span>, a 
  passionate <span className="text-cyan-400 font-semibold">Frontend Developer </span> 
   with internship experience at <span className="font-semibold">Digitaly Tech Solutions</span>.  
  I enjoy building responsive and user-friendly web applications using 
  <span className="font-semibold"> React.js</span>, 
  <span className="font-semibold"> JavaScript</span>, and 
  <span className="font-semibold"> Tailwind CSS</span>.  
  My focus is on writing clean, efficient code and continuously improving my skills.
</p>

<p
  className="text-gray-400 leading-relaxed"
  data-aos="fade-up"
  data-aos-delay="400"
>
  My goal is to work on real-world projects, collaborate with teams, and grow 
  into a strong professional frontend developer.
</p>


        {/* CTA */}
        <div data-aos="fade-up" data-aos-delay="500">
          <button
            onClick={scrollToContact}
            className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-full shadow-lg hover:scale-105 transform transition"
          >
            Let’s Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
