import React, { useState } from "react";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";
import NavBar from "./NavComponents/NavBar";
import SideBar from "./NavComponents/SideBar";
import ProjectsSection from "./ProjectsSection";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} handleClick={handleClick} />
      <NavBar handleClick={handleClick} />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
