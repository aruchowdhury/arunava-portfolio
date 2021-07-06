import React, { useState } from "react";

import FooterSection from "./FooterSection";
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

      <ProjectsSection />

      <FooterSection />
    </>
  );
};

export default HomePage;
