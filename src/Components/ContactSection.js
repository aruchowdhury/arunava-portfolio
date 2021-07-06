import React from "react";
import styled, { keyframes } from "styled-components";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_doozs4e",
        e.target,
        "user_mMZXoPDyiESPgqzGMRJvd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <Wrap>
      <Heading>Contact Me</Heading>
      <RegistrationForm>
        <InputDivWrapper>
          <label name="name"> Full Name:</label>
          <Input
            type="text"
            name="name"
            placeholder="full name"
            required="true"
          />
        </InputDivWrapper>
        <InputDivWrapper>
          <label email="email"> Email:</label>
          <Input
            type="email"
            name="email"
            placeholder="email"
            required="true"
          />
        </InputDivWrapper>
        <InputDivWrapper>
          <label subject="subject"> Subject:</label>
          <Input
            type="text"
            name="subject"
            placeholder="subject"
            required="true"
          />
        </InputDivWrapper>
        <InputDivWrapper>
          <label message="message"> Message:</label>
          <MessageInput
            type="text"
            placeholder="message"
            name="message"
            required="true"
          />
        </InputDivWrapper>

        <InputDivWrapper>
          <Button onClick={sendEmail}> Send Message </Button>
        </InputDivWrapper>
      </RegistrationForm>
    </Wrap>
  );
};

export default ContactSection;

const Animation = keyframes`
  0% { top: -3.125rem; }
  100% { top: 7rem;}
`;

const Wrap = styled.div`
  position: relative;
  top: 0;
  animation: ${Animation};
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
  margin: 2% 25%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  align-content: center;
  background: rgba(0, 212, 198, 0.2);
  color: #1f4894;
  border-radius: 1rem;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 12px 12px rgba(0, 0, 0, 0.12);
  &:hover {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25),
      0 4px 4px rgba(0, 0, 0, 0.25), 0 8px 8px rgba(0, 0, 0, 0.25),
      0 12px 12px rgba(0, 0, 0, 0.25);
    transition: 0.3s ease-in-out;
  }
  @media (max-width: 600px) {
    margin: 5% 1.5%;
  }
`;

const RegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: left;
  padding: 2rem;
  @media (max-width: 600px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const Input = styled.input`
  width: 24rem;
  height: 2rem;
  padding: 0.3rem;
  border-radius: 0.3rem;
  margin: 0.2rem 0.2rem 0.2rem 0;
  border: none;
  outline: none;
  background: rgba(0, 212, 198, 0.3);
  @media (max-width: 600px) {
    width: 17rem;
    margin: 0.5rem 0;
  }
`;
const MessageInput = styled.input`
  width: 24rem;
  height: 6rem;
  padding: 0.3rem;
  border-radius: 0.3rem;
  margin: 0.2rem 0.2rem 0.2rem 0;
  border: none;
  outline: none;
  background: rgba(0, 212, 198, 0.3);
  @media (max-width: 600px) {
    width: 17rem;
    margin: 0.5rem 0;
  }
`;

const Button = styled.button`
  height: 2.6rem;
  width: 25rem;
  margin: 0.5rem 0 0 9.6rem;
  background: #1f4894;
  border: 0.1rem solid #1f4894;
  border-radius: 0.4rem;
  color: rgba(0, 212, 198, 1);
  cursor: pointer;

  &:hover {
    background: rgba(0, 212, 198, 0.3);
    border: 0.1rem solid #1f4894;
    border-radius: 0.4rem;
    color: #1f4894;
    transition: 0.3s ease-in-out;
  }
  @media (max-width: 600px) {
    width: 17rem;
    margin: 0.5rem 0 0 0;
  }
`;
const InputDivWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  label {
    margin-right: 1rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;

    label {
      margin: 0 0;
    }
  }
`;

const Heading = styled.div`
  font-size: 1.5rem;
`;
