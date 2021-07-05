import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from "react-icons/fa";

const FooterSection = () => {
  return (
    <IconWrapper>
      <IconLink href="https://www.linkedin.com/in/arunavachowdhury/">
        <FaLinkedin size={45} />
      </IconLink>
      <IconLink href="https://github.com/aruchowdhury">
        <FaGithubSquare size={45} />
      </IconLink>
      <IconLink href="https://twitter.com/aru_pavel">
        <FaTwitterSquare size={45} />
      </IconLink>
    </IconWrapper>
  );
};

export default FooterSection;

const IconLink = styled.a`
  color: #fff;
  transition: 0.3s all ease-in-out;
  padding: 0 20px;
  &:hover {
    color: purple;
  }
`;

const IconWrapper = styled.div`
  width: 100%;
  background: #351e76;

  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
