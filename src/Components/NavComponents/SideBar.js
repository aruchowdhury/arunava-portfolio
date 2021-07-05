import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const SideBar = ({ isOpen, handleClick }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={handleClick}>
      <Icon onClick={handleClick}>
        <CloseIcon />
      </Icon>
      <SideItemWrapper>
        <SideBarMenu>
          <SideBarLink to="projects" onClick={handleClick}>
            Projects
          </SideBarLink>
          <SideBarLink to="about" onClick={handleClick}>
            About
          </SideBarLink>
          <SideBarLink to="contacts" onClick={handleClick}>
            Contact
          </SideBarLink>
          <IconLink href="">
            <FaLinkedin size={30} />
          </IconLink>
          <IconLink href="">
            <FaGithubSquare size={30} />
          </IconLink>
        </SideBarMenu>
      </SideItemWrapper>
    </SideBarContainer>
  );
};

export default SideBar;

const SideBarContainer = styled.aside`
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 100%;
  background: #351e76;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const CloseIcon = styled(FaTimes)`
  color: #fff;
`;
const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const SideItemWrapper = styled.div`
  color: #fff;
`;

const SideBarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
const SideBarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;
const IconLink = styled.a`
  padding: 10px;
  color: #fff;
`;
