import React from "react";
import styled, { keyframes } from "styled-components";
import { projects } from "./Constants";

const ProjectsSection = () => (
  <ProjectWrapper>
    <LogoDiv>
      <Img src="/images/logo1.png" />
      <Img src="/images/logo2.png" />
      <Img src="/images/logo4.png" />
      <Img src="/images/logo3.png" />
      <Img src="/images/logo5.png" />
      <Img src="/images/logo6.png" />
      <Img src="/images/logo7.png" />
    </LogoDiv>

    <MenuGrid>
      {projects.map((project) => {
        return (
          <ItemWrapper>
            <ItemImg src={project.image} />
            <InfoWrap>
              <TitleDiv>{project.title}</TitleDiv>
              <TechDiv>{project.tags}</TechDiv>
              <InfoDiv>{project.description}</InfoDiv>
              <LinkWrap>
                <ExternalLinks href={project.visit}>Demo</ExternalLinks>
                <ExternalLinks href={project.source}>Source Code</ExternalLinks>
              </LinkWrap>
            </InfoWrap>
          </ItemWrapper>
        );
      })}
    </MenuGrid>
  </ProjectWrapper>
);

export default ProjectsSection;

const ProjectWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background: #fff;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: 60rem;
  justify-content: center;
  align-items: center;
  grid-gap: 2rem;

  @media (max-width: 675px) {
    grid-template-columns: 20rem;
  }
`;
const Animation = keyframes`
  0% { top: -4rem; }
  100% { top: 1.5rem;}
`;

const ItemWrapper = styled.div`
  position: relative;
  top: 0;
  animation: ${Animation};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: left;
  align-content: left;
  background: #1f4894;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 12px 12px rgba(0, 0, 0, 0.12);
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25),
      0 4px 4px rgba(0, 0, 0, 0.25), 0 8px 8px rgba(0, 0, 0, 0.25),
      0 12px 12px rgba(0, 0, 0, 0.25);
    transform: translateY(-0.5rem);
  }

  @media (max-width: 675px) {
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: left;
    align-content: left;
  }
`;

const InfoWrap = styled.div`
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 100%;
  height: 16rem;
  margin-bottom: 0.5rem;
  @media (max-width: 600px) {
    height: 20rem;
  }
`;

const ItemImg = styled.img`
  border-radius: 0.5rem 0 0 0.5rem;
  width: 30rem;
  height: 17.5rem;
  @media (max-width: 600px) {
    width: 100%;
    height: 12.5rem;
  }
`;

const InfoDiv = styled.div`
  color: #fff;
  font-style: italic;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  height: 8rem;
  padding: 0 1rem;
  @media (max-width: 600px) {
    height: 10rem;
  }
`;
const TitleDiv = styled.div`
  color: #fff;
  font-style: italic;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  height: 2rem;
  padding: 0 1rem;
  @media (max-width: 600px) {
    height: 2rem;
  }
`;
const TechDiv = styled.div`
  color: #fff;
  font-style: italic;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  height: 2rem;
  padding: 0 1rem;
  @media (max-width: 600px) {
    height: 3.5rem;
  }
`;
const LinkWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1rem;
  padding-right: 1rem;
  @media (max-width: 600px) {
  }
`;
const ExternalLinks = styled.a`
  text-decoration: none;
  color: #1f4894;
  font-size: 0.9rem;
  padding: 0.6rem 1rem;
  background: #fff;
  border-radius: 10px;
  transition: 0.5s;
  &:hover {
    opacity: 0.4;
  }
`;

const Img = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 10px;
  margin: 50px 40px 50px 0;
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 768px) {
    margin: 40px 5px 40px 8px;
    width: 35px;
    height: 35px;
  }
`;
const LogoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;
