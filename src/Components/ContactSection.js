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
      <Form onSubmit={sendEmail}>
        <InputsDiv>
          <InputDiv>
            <Label name="name">Name</Label>
            <Input type="text" name="name" required></Input>
          </InputDiv>
          <InputDiv>
            <Label email="email">Email</Label>
            <Input type="email" name="email" required></Input>
          </InputDiv>
          <InputDiv>
            <Label subject="subject">Subject</Label>
            <Input type="text" name="subject" required></Input>
          </InputDiv>
          <InputDiv>
            <Label message="message">Message</Label>
            <Textarea type="text" name="message" required></Textarea>
          </InputDiv>
          <ButtonDiv>
            <Button type="submit" value="Send Message"></Button>
          </ButtonDiv>
        </InputsDiv>
      </Form>
    </ContactWrapper>
  );
};

export default ContactSection;

const ContactWrapper = styled.div`
  width: 100%;
  min-height: 90vh;
  background: #3e2f84;
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
  margin-top: 73px;
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const Button = styled.input`
  width: 200px;
  height: 50px;
  background: #8e7ed0;
  border-radius: 10px;
  color: #f2f1ef;
  border: none;
  font-size: 1.2rem;
  &:hover {
    background: purple;
    cursor: pointer;
  }
`;

const Textarea = styled.textarea`
  width: 500px;
  height: 100px;
  background: #8e7ed0;
  border-radius: 10px;
  padding: 10px;
  color: black;
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
  background: #8e7ed0;
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

const InputsDiv = styled.div``;

const Form = styled.form`
  max-width: 100%;
`;
