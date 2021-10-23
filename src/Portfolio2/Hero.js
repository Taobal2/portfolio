import React from "react";
import styled from "styled-components";
import image from "../Portfolio2/Images/Solomon.jpeg";

const Hero = () => {
  return (
    <Container id="Home">
      <Wrapper>
        <Content>
          <Sub>hi there !</Sub>
          <Title>I'M Lawuyi Solomon</Title>
          <Description>
            Lawuyi Solomon is a Program manager, Data Analyst. He is a natural
            generalist and value adding specialist with a contineous desire to
            keep learning and getting better. he has a core knowledge of
            Agriculture with a Bachelor of Technology in Animal Production and
            health from Ladoke Akintola University of Technology. He is
            passionate about Growth, Business Growth, Personal Self Development
            and career Development.
          </Description>
          <Div>
            <Button>View Cv</Button>
            <Button>Contact</Button>
          </Div>
        </Content>
        <Image src={image} />
      </Wrapper>
    </Container>
  );
};

export default Hero;

const Sub = styled.div`
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 1px;
`;
const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  height: 100%;
  background-color: #213043;
  color: white;
  padding-top: 100px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 430px;
  height: 570px;
  border-radius: 8px;
  margin-left: 70px;
  object-fit: cover;
`;
const Content = styled.div`
  width: 650px;
  height: 500px;
  margin: 30px;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 26px;
  line-height: 40px;
  margin-bottom: 40px;
  font-family: poppins;
`;
const Div = styled.div``;
const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 20px;
  background-color: #38aaa4;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  border: 0;
  margin: 0 10px;
  color: white;
  transition: all 350ms;
  transform: scale(1);

  :hover {
    cursor: pointer;
    transform: scale(1.04);
    background-color: #8080c0;
  }
`;
