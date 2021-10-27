import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Container id="contact">
      <Wrapper>
        <Holder>
          <Title>Wants to get the latest Updates ?</Title>
          <Section1>
            <Content>
              <Text>Name</Text>
              <FnameInput placeholder="Your name" />
            </Content>
            <Content>
              <Text>Last name</Text>
              <LnameInput placeholder="Your last name" />
            </Content>
          </Section1>
          <Section2>
            <Text>your email</Text>
            <EmailInput placeholder="Your email address" />
          </Section2>
          <Section3>
            <Text>Message</Text>
            <MessageInput />
          </Section3>
          <Button>Subscribe</Button>
          <Email>Dlawuyi@gmail.com</Email>
          <Number>08037380028</Number>
        </Holder>
      </Wrapper>
    </Container>
  );
};

export default Contact;

const Number = styled.div`
  font-size: 20px;

  @media screen and (max-width: 700px) {
    font-size: 15px;
    margin-bottom: 10px;
  }
`;
const Email = styled.div`
  margin-top: 90px;
  font-size: 20px;
  margin-bottom: 30px;

  :hover {
    cursor: pointer;
  }

  @media screen and (max-width: 700px) {
    margin-bottom: 20px;
    margin-top: 50px;

    font-size: 15px;
  }
`;
const Section1 = styled.div`
  display: flex;
  width: 600px;
  margin-bottom: 20px;

  @media screen and (max-width: 700px) {
    width: 100%;
    margin-bottom: 15px;
  }
`;
const Content = styled.div`
  width: 300px;

  @media screen and (max-width: 700px) {
    width: 50%;
  }
`;
const Text = styled.div`
  font-size: 18px;

  @media screen and (max-width: 700px) {
    font-size: 14px;
  }
`;
const LnameInput = styled.input`
  width: 290px;
  height: 30px;
  border: 0;
  outline: none;
  margin-left: 10px;
  padding-left: 10px;

  @media screen and (max-width: 700px) {
    width: 95%;
    height: 25px;
    margin-left: 0px;
    padding-left: 5px;
  }
`;
const FnameInput = styled.input`
  width: 290px;
  height: 30px;
  border: 0;
  outline: none;
  padding-left: 10px;

  @media screen and (max-width: 700px) {
    width: 92%;
    height: 25px;
    padding-left: 5px;
  }
`;

const Section2 = styled.div`
  width: 600px;
  margin-bottom: 20px;

  @media screen and (max-width: 700px) {
    width: 100%;
    height: 100%;
  }
`;
const EmailInput = styled.input`
  width: 100%;
  height: 30px;
  border: 0;
  outline: none;
  padding-left: 10px;

  @media screen and (max-width: 700px) {
    width: 96%;
    height: 25px;
  }
`;
const Section3 = styled.div`
  width: 600px;
  margin-bottom: 30px;

  @media screen and (max-width: 700px) {
    width: 100%;
    height: 100%;
  }
`;
const MessageInput = styled.input`
  width: 100%;
  height: 60px;
  border: 0;
  outline: none;
  padding-left: 10px;

  @media screen and (max-width: 700px) {
    width: 96%;
    height: 35px;
  }
`;
const Title = styled.div`
  font-size: 40px;
  color: white;
  margin-bottom: 50px;

  @media screen and (max-width: 700px) {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;
const Button = styled.button`
  width: 150px;
  height: 40px;
  outline: none;
  border: 0;
  font-size: 17px;
  font-weight: bold;
  color: black;
  border-radius: 40px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;
  transform: scale(1);

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  @media screen and (max-width: 700px) {
    width: 45%;
    height: 27px;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  height: 100%;
  background-color: #400080;

  @media screen and (max-width: 700px) {
    width: 100%;
    height: 100%;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 700px) {
    width: 100%;
    height: 100%;
  }
`;

const Holder = styled.div`
  width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;

  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;
