import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";

const SideBar = ({ isOpen, handleClick }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={handleClick}>
      <Icon onClick={handleClick}>
        <CloseIcon />
      </Icon>
      <SideItemWrapper>
        <SideBarMenu>
          <SideBarLink to="/projects" onClick={handleClick}>
            Projects
          </SideBarLink>
          <SideBarLink to="/contact" onClick={handleClick}>
            Contact
          </SideBarLink>
          <IconLink href="https://www.linkedin.com/in/arunavachowdhury/">
            <FaLinkedin size={30} />
          </IconLink>
          <IconLink href="https://github.com/aruchowdhury">
            <FaGithubSquare size={30} />
          </IconLink>
          <IconLink href="https://docs.google.com/document/d/1H8dD2On8zAFBMw68Y9iSk07KENQgxrUi58GS1vlEuVg/edit#heading=h.so36goe92rz4">
            <RiPagesLine size={30} />
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
  background: rgba(0, 212, 198, 1);
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const CloseIcon = styled(FaTimes)`
  color: #1f4894; ;
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
const SideBarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #1f4894;
  cursor: pointer;
  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;
const IconLink = styled.a`
  padding: 10px;
  color: #1f4894;
`;
