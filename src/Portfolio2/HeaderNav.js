import React, { useState } from "react";
import styled from "styled-components";
import image from "./Images/soloLogo.png";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { animateScroll as Scroll, Link } from "react-scroll";

const HeaderNav = ({ bg }) => {
  const [toggle, setToggle] = useState(false);

  const showScroll = () => {
    const height = window.scrollY;

    if (height >= 700) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  window.addEventListener("scroll", showScroll);
  return (
    <Container bg={bg}>
      <Wrapper>
        <Logo
          src={image}
          onClick={() => {
            Scroll.scrollToTop();
          }}
        />
        <Navigation>
          <NavIcon to="Home" smooth={true} offset={-100} duration={500}>
            <HomeIcon />
            <span>Home</span>
          </NavIcon>
          <NavIcon to="service" smooth={true} offset={-100} duration={500}>
            <AccountCircleIcon />
            <span>Service</span>
          </NavIcon>
          <NavIcon to="video" smooth={true} offset={-100} duration={500}>
            <OndemandVideoIcon />
            <span>Video</span>
          </NavIcon>
          <NavIcon to="contact" smooth={true} offset={-100} duration={500}>
            <ContactMailIcon />
            <span>Contact</span>
          </NavIcon>
        </Navigation>
        <Button
          op={toggle ? "op" : ""}
          onClick={() => {
            Scroll.scrollToTop();
          }}
        >
          <KeyboardArrowUpIcon />
        </Button>
      </Wrapper>
    </Container>
  );
};

export default HeaderNav;

const Button = styled.button`
  margin-right: 30px;
  height: 70px;
  width: 70px;
  outine: none;
  border: 0;
  color: #000000;
  font-size: 15px;
  font-weight: bold;
  background-color: antiquewhite;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  opacity: ${({ op }) => (op ? "1" : "0")};
  align-items: center;
  transform: scale(1);
  transition: all 400ms;
  position: absolute;
  bottom: -550px;
  right: -20px;

  :hover {
    cursor: pointer;
    background-color: teal;
    color: #ff0000;
    transform: scale(1.05);
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100px;
  color: #ffffff;
  background-color: ${({ bg }) =>
    bg ? "rgba( 28, 25, 36, 0.35 )" : "#1C1924"};
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: fixed;
  z-index: 10;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 130px;
  height: 80px;
  border-radius: 4px;
  margin: 0 30px;
  cursor: pointer;
  object-fit: contain;
`;
const Navigation = styled.div`
  display: flex;
  margin-left: 70px;
`;

const NavIcon = styled(Link)`
  display: flex;
  align-items: center;
  margin: 0 10px;

  .MuiSvgIcon-root {
    font-size: 26px;
    margin-right: 5px;
  }

  span {
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 2px;
    position: relative;

    :after {
      content: "";
      position: absolute;
      left: 0px;
      bottom: 0px;
      height: 2px;
      width: 100%;
      background-color: white;
      opacity: 0;
      transition: all 400ms;
      transform: scale(0);
      transform-origin: center right;
    }
  }

  :hover {
    .MuiSvgIcon-root {
    }

    span {
      cursor: pointer;
      color: grey;

      :after {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
`;
