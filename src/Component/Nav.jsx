import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { to: "hero", label: "Home" },
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "experience", label: "Experience" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  // ✅ Scroll Hide/Show Navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false); // down → hide
      } else {
        setShowNav(true); // up → show
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`flex justify-between items-center px-10 py-4 
      fixed top-0 left-0 w-full z-50 shadow-md 
      bg-[#0a192f]/80 backdrop-blur-md text-white 
      transform transition-transform duration-500 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo */}
      <div
        className="text-3xl font-extrabold font-mono tracking-wide 
        bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent
        animate-[fadeIn_1s_ease-in-out]"
      >
        Maha<span className="text-cyan-400">.</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 text-lg font-semibold font-sans">
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.to}
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            activeClass="text-cyan-400 font-bold"
            className="relative cursor-pointer transition-all duration-300 hover:text-cyan-400 
            after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 
            after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300
            animate-[slideIn_0.8s_ease-in-out]"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <FaTimes
            size={26}
            className="text-cyan-400 animate-[spin_0.5s_linear]"
          />
        ) : (
          <FaBars size={26} className="animate-[pulse_1.5s_infinite]" />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-[#0a192f]/95 backdrop-blur-md 
        flex flex-col items-center space-y-6 py-6 text-lg font-semibold md:hidden 
        transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 animate-[fadeIn_0.8s_ease-in-out]"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.to}
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            activeClass="text-cyan-400 font-bold"
            className="relative cursor-pointer transition-all duration-300 hover:text-cyan-400 
            after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 
            after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300
            animate-[slideIn_0.8s_ease-in-out]"
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nav;
