import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { IoIosArrowForward, IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroContent>
        <AboutContainer>
          <ProfileImg />
          <Description>
            <Heading1>Hi, I am Arunava Chowdhury</Heading1>
            <Heading2>Junior Full-stack Developer at BalloonBox Inc.</Heading2>
            <Text>
              I love responsive web applications and am experienced in creating
              modern front-end using React and JavaScript and robust backend
              using Node.js, Express.js, and MongoDB. My current learning stack is Typescript, GraphQL, Apollo Server, Prisma ORM, and PostgreSQL.
            </Text>
          </Description>
        </AboutContainer>
        <HeroBtnWrap>
          <Button
            to="/projects"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            View my projects {hover ? <ArrowDownActive /> : <ArrowDown />}
          </Button>
        </HeroBtnWrap>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const HeroContainer = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

const Animation = keyframes`
  0% { top: -3.125rem; }
  100% { top: 15rem;}
`;

const HeroContent = styled.div`
  position: relative;
  top: 0;
  animation: ${Animation};
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
  background: rgba(0, 212, 198, 0.2);
  border-radius: 20px;
  z-index: 2;
  position: absolute;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 12px 12px rgba(0, 0, 0, 0.12);
  &:hover {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25),
      0 4px 4px rgba(0, 0, 0, 0.25), 0 8px 8px rgba(0, 0, 0, 0.25),
      0 12px 12px rgba(0, 0, 0, 0.25);
    transition: 0.3s ease-in-out;
  }
  @media screen and (max-width: 768px) {
    margin-top: -135px;
    background: none;
  }
`;

const HeroBtnWrap = styled.div`
  margin-top: 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ArrowDown = styled(IoIosArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
const ArrowDownActive = styled(IoMdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

const Button = styled(Link)`
  color: rgba(0, 212, 198, 1);
  border-radius: 50px;
  background: #1f4894;
  white-space: nowrap;
  font-size: 20px;
  padding: 14px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: #2b64cf;
  }
`;

const Heading1 = styled.h1`
  color: #1f4894;
  font-size: 2.2rem;
  font-weight: 500;
  @media screen and (max-width: 768px) {
    font-size: 1.29rem;
  }
`;
const Heading2 = styled.h1`
  color: #1f4894;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 3.5rem;
  @media screen and (max-width: 768px) {
    font-size: 1.15rem;
  }
`;

const Text = styled.p`
  color: #1f4894;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 30px;
`;
const Description = styled.div`
  width: 600px;
  margin-left: 20px;
  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 30px;
    width: 80vw;
  }
`;

const ProfileImg = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 20px;
  border: none;
  margin: 10px;
  background: url("/images/img1.png") center no-repeat;
  background-size: 300px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 12px 12px rgba(0, 0, 0, 0.12);
  @media screen and (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;
