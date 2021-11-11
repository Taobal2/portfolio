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

  @media screen and (max-width: 700px) {
    font-size: 12px;
    margin-left: 10px;
  }
`;
const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  height: 100%;
  background-color: #213043;
  color: white;
  padding-top: 100px;

  @media screen and (max-width: 700px) {
    width: 100%;
    height: 100%;
    padding-top: 30px;
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
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 430px;
  height: 570px;
  border-radius: 8px;
  margin-left: 70px;
  object-fit: cover;

  @media screen and (max-width: 700px) {
    width: 90%;
    height: 410px;
    margin-left: 0;
    margin: 8px 0;
  }
`;
const Content = styled.div`
  width: 650px;
  height: 500px;
  margin: 30px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 700px) {
    width: 90%;
    height: 420px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    margin-top: 15px;
  }
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;

  @media screen and (max-width: 700px) {
    font-size: 20px;
    margin-left: 10px;
    margin-bottom: 15px;
  }
`;
const Description = styled.div`
  font-size: 26px;
  line-height: 40px;
  margin-bottom: 40px;
  font-family: poppins;

  @media screen and (max-width: 700px) {
    font-size: 16px;
    line-height: 21px;
    margin-bottom: 20px;
    margin-left: 10px;
    letter-spacing: 1px;
  }
`;
const Div = styled.div`
  @media screen and (max-width: 700px) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
`;
const Button = styled.button`
  width: 120px;
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

  @media screen and (max-width: 700px) {
    width: 100px;
    height: 30px;
    font-size: 15px;
    margin: 0 5px;
  }
`;
