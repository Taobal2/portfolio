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
`;
const Email = styled.div`
  margin-top: 90px;
  font-size: 20px;
  margin-bottom: 30px;

  :hover {
    cursor: pointer;
  }
`;
const Section1 = styled.div`
  display: flex;
  width: 600px;
  margin-bottom: 20px;
`;
const Content = styled.div`
  width: 300px;
`;
const Text = styled.div`
  font-size: 18px;
`;
const LnameInput = styled.input`
  width: 290px;
  height: 30px;
  border: 0;
  outline: none;
  margin-left: 10px;
  padding-left: 10px;
`;
const FnameInput = styled.input`
  width: 290px;
  height: 30px;
  border: 0;
  outline: none;
  margin-right: 10px;
  padding-left: 10px;
`;

const Section2 = styled.div`
  width: 600px;
  margin-bottom: 20px;
`;
const EmailInput = styled.input`
  width: 100%;
  height: 30px;
  border: 0;
  outline: none;
  padding-left: 10px;
`;
const Section3 = styled.div`
  width: 600px;
  margin-bottom: 30px;
`;
const MessageInput = styled.input`
  width: 100%;
  height: 60px;
  border: 0;
  outline: none;
  padding-left: 10px;
`;
const Title = styled.div`
  font-size: 40px;
  color: white;
  //   text-transform: uppercase;
  margin-bottom: 50px;
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
`;

const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  height: 100%;
  background-color: #400080;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Holder = styled.div`
  width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
`;
