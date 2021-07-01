import React, { useState } from "react";
import NavBar from "../Components/NavComponents/NavBar";
import SideBar from "../Components/NavComponents/SideBar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} handleClick={handleClick} />
      <NavBar handleClick={handleClick} />
    </>
  );
};

export default Home;
