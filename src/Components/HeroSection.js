import React, { useState } from "react";
import styled from "styled-components";
import Video from "../Videos/Video.mp4";
import { IoIosArrowDown, IoMdArrowDown } from "react-icons/io";
import { Link as LinkS } from "react-scroll";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="hero">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="Video/mp4"></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Hello, I am Aru.</HeroH1>
        <HeroP>A full-stack web developer.</HeroP>
        <HeroBtnWrap>
          <Button
            to="projects"
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

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  /* :before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  } */
`;

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%auto;
  overflow: hidden;
`;

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

const HeroContent = styled.div`
  z-index: 2;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: ceenter;
`;
const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  @media screen and(max-width: 768px) {
    font-size: 40px;
  }
  @media screen and(max-width: 480px) {
    font-size: 32px;
  }
`;
const HeroP = styled.p`
  color: #fff;
  margin-top: 24px;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  @media screen and(max-width: 768px) {
    font-size: 24px;
  }
  @media screen and(max-width: 480px) {
    font-size: 18px;
  }
`;

const HeroBtnWrap = styled.div`
  margin-top: 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ArrowDown = styled(IoIosArrowDown)`
  margin-left: 8px;
  font-size: 20px;
`;
const ArrowDownActive = styled(IoMdArrowDown)`
  margin-left: 8px;
  font-size: 20px;
`;

const Button = styled(LinkS)`
  color: #fff;
  border-radius: 50px;
  background: darkblue;
  white-space: nowrap;
  font-size: 20px;
  padding: 14px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: purple;
  }
`;
