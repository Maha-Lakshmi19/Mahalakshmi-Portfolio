import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Component/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import Fooder from "./Component/Fooder";
import WrkExper from "./pages/WrkExper";

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
            {/* <Route index element={<Hero />} /> */}

        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/experience" element={<WrkExper />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Fooder/>
      </BrowserRouter>
    </div>
  );
}

export default App;
