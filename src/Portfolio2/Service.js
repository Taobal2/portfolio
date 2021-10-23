import React from "react";
import styled from "styled-components";
import data from "./data.json";

const Service = () => {
  return (
    <Container id="service">
      <Wrapper>
        {data.map((props) => (
          <Card>
            <Image src={props.image} />
            <Project>
              <Title>{props.title}</Title>
              <Desc>{props.Desc}</Desc>
            </Project>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Service;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
`;
const Title = styled.div`
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 7px;
`;
const Project = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
`;
const Card = styled.div`
  width: 400px;
  height: 570px;
  border-radius: 5px;
  border: 2px solid grey;
  background-color: teal;
  padding-bottom: 10px;
  margin: 10px;
  transition: all 400ms;
  transform: scale(1);

  :hover {
    cursor: pointer;
    transform: scale(1.03);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 61%;
  border-radius: 5px 5px 0 0;
  object-fit: cover;
`;
const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  height: 100%;
  color: white;
  background-image: url("newbg.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
