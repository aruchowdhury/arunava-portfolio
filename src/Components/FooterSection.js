import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from "react-icons/fa";

const FooterSection = () => {
  return (
    <IconWrapper>
      <IconLink href="">
        <FaLinkedin size={50} />
      </IconLink>
      <IconLink href="">
        <FaGithubSquare size={50} />
      </IconLink>
      <IconLink href="">
        <FaTwitterSquare size={50} />
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
  opacity: 0.9;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
