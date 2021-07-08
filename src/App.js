import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProjectsSection from "./Components/ProjectsSection";
import React, { useState } from "react";
import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/NavComponents/NavBar";
import SideBar from "./Components/NavComponents/SideBar";
import ContactSection from "./Components/ContactSection";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Router basename={"/subdirectory"}>
        <SideBar isOpen={isOpen} handleClick={handleClick} />
        <NavBar handleClick={handleClick} />
        <Switch>
          <Route exact path="/">
            <HeroSection />
          </Route>
          <Route exact path="/projects">
            <ProjectsSection />
          </Route>
          <Route exact path="/contact">
            <ContactSection />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
