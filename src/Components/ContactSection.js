import React from "react";
import styled from "styled-components";
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
    <ContactWrapper id="contact">
      <Heading>Contact Me</Heading>
      <StyledForm>
        <InputDiv>
          <Label name="name">Name</Label>
          <Input type="text" name="name" required="true"></Input>
        </InputDiv>
        <InputDiv>
          <Label email="email">Email</Label>
          <Input type="email" name="email" required="true"></Input>
        </InputDiv>
        <InputDiv>
          <Label subject="subject">Subject</Label>
          <Input type="text" name="subject" required="true"></Input>
        </InputDiv>
        <InputDiv>
          <Label message="message">Message</Label>
          <StyledTextArea
            type="text"
            name="message"
            required="true"
          ></StyledTextArea>
        </InputDiv>
        <ButtonDiv>
          <StyledButton onClick={sendEmail}>Send </StyledButton>
        </ButtonDiv>
      </StyledForm>
    </ContactWrapper>
  );
};

export default ContactSection;

const ContactWrapper = styled.div`
  width: 100%;
  min-height: 90vh;
  background: #1c1755;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
`;
const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  color: #fff;
  margin-bottom: 50px;
  margin-top: 80px;
`;
const StyledForm = styled.form`
  max-width: 100%;
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  background: #656097;
  border-radius: 10px;
  color: #f2f1ef;
  border: none;
  font-size: 1.2rem;
  transition: all ease-in-out 0.3s;
  &:hover {
    background: purple;
    opacity: 0.7;
    cursor: pointer;
  }
`;

const StyledTextArea = styled.textarea`
  width: 500px;
  height: 100px;
  background: #656097;
  border-radius: 10px;
  padding: 10px;
  color: #fff;
  border: none;
  outline: none;
  font-size: 1rem;
  @media screen and (max-width: 450px) {
    width: 80vw;
  }
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 500px;
  height: 25px;
  background: #656097;
  border-radius: 10px;
  padding: 10px;
  color: #fff;
  border: none;
  outline: none;
  font-size: 1rem;
  @media screen and (max-width: 450px) {
    width: 80vw;
  }
`;
