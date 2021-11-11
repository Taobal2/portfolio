import React, { useState } from "react";
import styled from "styled-components";
import image from "./Images/soloLogo.png";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { animateScroll as Scroll, Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "./SideBar";

const HeaderNav = ({ bg }) => {
  const [toggle, setToggle] = useState(false);
  const [sideber, setSideber] = useState(false);

  const showScroll = () => {
    const height = window.scrollY;

    if (height >= 700) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  window.addEventListener("scroll", showScroll);

  const onHandle = () => {
    setSideber(!sideber);
  };
  return (
    <MenuContainer>
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
        <MediaScreen>
          <Logo src={image} />
          <Menu
            onClick={() => {
              onHandle();
              console.log(sideber);
            }}
          >
            <MenuIcon />
          </Menu>
          <Button
            op={toggle ? "op" : ""}
            onClick={() => {
              Scroll.scrollToTop();
            }}
          >
            <KeyboardArrowUpIcon />
          </Button>
        </MediaScreen>
      </Container>
      {sideber ? <SideBar sideber={sideber} setSideber={setSideber} /> : null}
    </MenuContainer>
  );
};

export default HeaderNav;

const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const MediaScreen = styled.div`
  display: none;

  @media screen and (max-width: 700px) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const Menu = styled.div`
  margin-right: 20px;

  .MuiSvgIcon-root {
    font-size: 30px;
  }

  :hover {
    cursor: pointer;
  }

  @media screen and (max-width: 700px) {
    margin-right: 10px;
  }
`;
const Button = styled.button`
  margin-right: 30px;
  height: 70px;
  width: 70px;
  outine: none;
  border: 0;
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
  right: 0px;

  .MuiSvgIcon-root {
    color: red;
  }

  :hover {
    cursor: pointer;
    background-color: teal;
    color: #ff0000;
    transform: scale(1.05);
  }

  @media screen and (max-width: 700px) {
    margin-right: 0px;
    height: 70px;
    width: 70px;
    font-size: 10px;
    border-radius: 50%;
    position: absolute;
    bottom: -520px;
    right: 10px;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100px;
  color: #ffffff;
  background-color: ${({ bg }) =>
    bg ? "rgba( 28, 25, 36, 0.35 )" : "#1C1924"};
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(7px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: fixed;
  z-index: 50;

  @media screen and (max-width: 700px) {
    height: 60px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const Logo = styled.img`
  width: 130px;
  height: 80px;
  border-radius: 4px;
  margin: 0 30px;
  cursor: pointer;
  object-fit: cover;

  @media screen and (max-width: 700px) {
    margin-left: 10px;
    width: 70px;
    height: 35px;
  }
`;
const Navigation = styled.div`
  display: flex;
  margin-left: 70px;

  @media screen and (max-width: 700px) {
    display: none;
  }
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
