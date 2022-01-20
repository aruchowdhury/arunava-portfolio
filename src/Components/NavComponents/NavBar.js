import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";

const NavBar = ({ handleClick }) => {
  return (
    <Nav>
      <NavItemWrapper>
        <Logo to="/">
          <Span>{"{"}</Span>ARU<Span>{"}"}</Span>
        </Logo>

        <NavMenu>
          <NavItem>
            <NavLink to="/projects">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact">Contact</NavLink>
          </NavItem>
        </NavMenu>

        <Hamburgaer onClick={handleClick}>
          <FaBars />
        </Hamburgaer>
        <NavMenu>
          <IconLink href="https://www.linkedin.com/in/arunavachowdhury/">
            <FaLinkedin size={30} />
          </IconLink>
          <IconLink href="https://github.com/aruchowdhury">
            <FaGithubSquare size={30} />
          </IconLink>
          <IconLink href="https://drive.google.com/file/d/1IZx0q2lZNqEw9RdELfwY3bn1DqgL2kGz/view?usp=sharing">
            <RiPagesLine size={30} />
          </IconLink>
        </NavMenu>
      </NavItemWrapper>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.nav`
  background: rgba(0, 212, 198, 1);
  height: 80px;
  margin-top: -90px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
const NavItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;
const Logo = styled(Link)`
  color: #1f4894;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  transition: all ease-in-out 0.3s;
  &:hover {
    opacity: 0.4;
  }
`;

const Hamburgaer = styled.div`
  display: none;
  color: #1f4894;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 80px;
  font-size: 1.2rem;
  color: #214c9c;
  transition: all ease-in-out 0.3s;
  &:hover {
    color: purple;
  }
`;
const NavLink = styled(Link)`
  color: #1f4894;
  font-weight: 600;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all ease-in-out 0.3s;
  &:hover {
    opacity: 0.4;
  }
`;

const IconLink = styled.a`
  padding: 0 5px;
  color: #1f4894;
  transition: all ease-in-out 0.3s;
  &:hover {
    opacity: 0.4;
  }
`;

const Span = styled.span`
  font-weight: 50;
`;
