import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import { Helmet } from "react-helmet"; // ✅ Important import
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
    <>
      {/* Helmet SEO */}
      {/* <Helmet>
        <title>About Me | Mahalakshmi</title>
        <meta
          name="description"
          content="Mahalakshmi - Frontend Developer Intern portfolio about page."
        />
        <meta
          name="keywords"
          content="Frontend Developer, React, Portfolio, Mahalakshmi"
        />
      </Helmet> */}

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
            Frontend Developer Intern
          </h3>

          {/* Description */}
          <p
            className="text-gray-300 leading-relaxed text-lg"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Hi, I’m <span className="font-semibold text-white">Mahalakshmi</span>, a
            passionate{" "}
            <span className="text-cyan-400">Frontend Developer Intern</span> at{" "}
            <span className="font-semibold">Digitaly Tech Solutions</span>. I enjoy
            creating responsive and user-friendly web applications with{" "}
            <span className="font-semibold">React.js</span>,{" "}
            <span className="font-semibold">JavaScript</span>, and{" "}
            <span className="font-semibold">Tailwind CSS</span>.
          </p>

          {/* Goal */}
          <p
            className="text-gray-400 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            My goal is to build clean, efficient, and modern web solutions while
            continuously learning and growing as a developer.
          </p>

          {/* Let's Connect Button */}
          <div data-aos="fade-up" data-aos-delay="500">
            <button
              onClick={scrollToContact}
              className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-full shadow-lg hover:scale-105 transform transition"
            >
              Let’s Connect
            </button>
          </div>

          {/* Divider */}
          {/* <div
            className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full animate-pulse"
            data-aos="fade-up"
            data-aos-delay="600"
          ></div> */}
        </div>
      </section>
    </>
  );
};

export default About;
















// import React, { useEffect } from "react";
// import photo from "../assets/maha.JPG";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const About = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });
//   }, []);

//   return (
//     <section
//       id="about"
//       className="flex flex-col lg:flex-row items-center justify-center bg-[#0a192f] text-white px-6 py-20 gap-14"
//     >
//       {/* Custom Style for Glow Animation */}
//       <style>
//         {`
//           @keyframes pulse-glow {
//             0%, 100% { transform: scale(1); filter: blur(20px); }
//             50% { transform: scale(1.1); filter: blur(30px); }
//           }
//           .animate-pulse-glow {
//             animation: pulse-glow 4s ease-in-out infinite;
//           }
//         `}
//       </style>

//       {/* Left Side - Image inside Glow */}
//       <div
//         className="relative flex justify-center"
//         data-aos="fade-right"
//         data-aos-delay="200"
//       >
//         <div className="absolute inset-0 w-56 h-56 lg:w-72 lg:h-72 rounded-full animate-pulse-glow bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur-lg"></div>

//         <img
//           src={photo}
//           alt="Mahalakshmi"
//           className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-white shadow-lg"
//         />
//       </div>

//       {/* Right Side - About Text */}
//       <div className="text-center lg:text-left max-w-2xl space-y-6">
//         <h2
//           className="text-4xl font-bold"
//           data-aos="fade-up"
//           data-aos-delay="100"
//         >
//           About <span className="text-cyan-400">Me</span>
//         </h2>

//         <h3
//           className="text-2xl text-cyan-400 font-semibold"
//           data-aos="fade-up"
//           data-aos-delay="200"
//         >
//           Frontend Developer
//         </h3>

//         <p
//           className="text-gray-300 leading-relaxed"
//           data-aos="fade-up"
//           data-aos-delay="300"
//         >
//           Hi, I am <span className="font-semibold text-white">Mahalakshmi</span>,  
//           a <span className="text-cyan-400">Frontend Developer Intern</span> at  
//           <span className="font-semibold"> Digitaly Tech Solution</span>.  
//           I have hands-on experience in building responsive and user-friendly web applications.
//         </p>

//         <p
//           className="text-gray-300 leading-relaxed"
//           data-aos="fade-up"
//           data-aos-delay="400"
//         >
//           I specialize in <span className="font-semibold">React.js</span>, 
//           <span className="font-semibold">JavaScript</span>, and 
//           <span className="font-semibold">Tailwind CSS</span>.  
//           My work focuses on writing clean and efficient code, improving web performance,  
//           and delivering accessible, responsive designs.
//         </p>

//         <p
//           className="text-gray-300 leading-relaxed"
//           data-aos="fade-up"
//           data-aos-delay="500"
//         >
//           I am eager to apply my skills in real-world projects, collaborate with teams,  
//           and grow as a professional <span className="text-cyan-400">Frontend Developer</span>.
//         </p>

//         <a
//           href="#hero"
//           className="inline-block px-8 py-3 rounded-full bg-cyan-400 text-black font-semibold shadow-lg shadow-cyan-400/50 transition duration-300 hover:bg-white hover:shadow-cyan-400/70"
//           data-aos="zoom-in"
//           data-aos-delay="600"
//         >
//           Back to Home
//         </a>
//       </div>
//     </section>
//   );
// };

// export default About;
