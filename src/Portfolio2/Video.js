import React from "react";
import styled from "styled-components";
import video from "./Images/video.mp4";

const Video = () => {
  return (
    <Container id="video">
      <Wrapper>
        <Videos src={video} controls loops muted autoplay />
      </Wrapper>
    </Container>
  );
};

export default Video;

const Videos = styled.video`
  width: 80%;
  height: 100vh;
  border: 0;
  outline: none;
  border-radius: 10px;
  margin: 20px auto;
  object-fit: contain;
`;
const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  height: 100%;
  background-color: #000000;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
