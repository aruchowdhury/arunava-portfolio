import React from "react";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <Wrapper id="about">
      <LogoDiv>
        <Img src="/images/logo1.png" />
        <Img src="/images/logo2.png" />
        <Img src="/images/logo4.png" />
        <Img src="/images/logo3.png" />
        <Img src="/images/logo5.png" />
        <Img src="/images/logo6.png" />
        <Img src="/images/logo7.png" />
      </LogoDiv>
      <AboutContainer>
        <ImageConatainer>
          <ProfileImg></ProfileImg>
        </ImageConatainer>
        <TextContent>
          <Name>Arunava Chowdhury</Name>
          <Para>
            I love responsive web applications and am experienced in creating
            modern front-end using React and JavaScript and robust backend using
            Node.js, Express.js, and MongoDB. <br />
            As a Physics and Web Development graduate, I am always inclined to
            coherent solutions to any coding problem, which helps me write
            quickly understandable code and a more accessible web interface for
            all. <br />I am currently learning more about React and UI/UX design
            to bridge the gap between complex code and dynamic user experience.{" "}
          </Para>
        </TextContent>
      </AboutContainer>
    </Wrapper>
  );
};

export default AboutSection;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 1fr;
  gap: 0px 0px;
  width: 100%;
  min-height: 100vh;
  background: #3e2f84;
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 120px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 50px 0 0 0;
    align-items: center;
  }
`;
const LogoDiv = styled.div`
  grid-column: 1/3;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const Name = styled.h1`
  color: #fff;
  font-size: 2.2rem;
  font-weight: 500;
`;

const Para = styled.p`
  color: #fff;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 30px;
`;
const TextContent = styled.div`
  width: 500px;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 30px;
    width: 80vw;
  }
`;

const ImageConatainer = styled.div`
  width: 400px;
  @media screen and (max-width: 768px) {
    width: 82vw;
  }
`;
const ProfileImg = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 2px solid #fff;
  background: url("/images/img1.jpg") center no-repeat;
  background-size: 300px;
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 768px) {
    width: 80vw;
    height: 80vw;
  }
`;

const Img = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 10px;
  margin: 150px 30px 30px 0;
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 768px) {
    margin: 150px 30px 30px 0;
  }
`;
