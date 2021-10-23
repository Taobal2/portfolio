import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import image from "./Images/mylogo.png";

const Footer = () => {
  return (
    <Container id="footer">
      <Wrapper>
        <Image src={image} />
        <Last>
          <Social>
            <Facebook
              href="https://web.facebook.com/taoheed.balogun/about"
              rel=""
              target="_blank"
            >
              <FacebookIcon />
            </Facebook>

            <Instagram
              href="https://www.instagram.com/thaobal/"
              rel=""
              target="_blank"
            >
              <InstagramIcon />
            </Instagram>

            <Twitter href="https://web.facebook.com" rel="" target="blank">
              <TwitterIcon />
            </Twitter>
          </Social>
          <Text>Platform developed by Taoheed ©</Text>
        </Last>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Twitter = styled.a`
  .MuiSvgIcon-root {
    margin: 0 20px;
    font-size: 40px;
    transition: all 400ms;
    transform: scale(1);
    color: #00acee;

    :hover {
      cursor: pointer;
      transform: scale(1.3);
    }
  }
`;
const Instagram = styled.a`
  .MuiSvgIcon-root {
    margin: 0 20px;
    font-size: 40px;
    color: #bc2a8d;
    transition: all 400ms;
    transform: scale(1);

    :hover {
      cursor: pointer;
      transform: scale(1.3);
    }
  }
`;
const Facebook = styled.a`
  .MuiSvgIcon-root {
    margin: 0 20px;
    font-size: 40px;
    color: #1877f2;
    transition: all 400ms;
    transform: scale(1);

    :hover {
      cursor: pointer;
      transform: scale(1.3);
    }
  }
`;

const Image = styled.img`
  width: 200px;
  height: 120px;
  border-radius: 4px;
  margin-left: 20px;
  margin-right: 350px;
  object-fit: contain;
  background-color: white;
`;
const Text = styled.div`
  font-size: 18px;
  color: white;
  margin-top: 15px;
`;
const Social = styled.div`
  width: 250px;
  height: 60px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Last = styled.div`
  width: 400px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 150px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  background-image: url("newbg.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
