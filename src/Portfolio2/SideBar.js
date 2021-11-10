import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import { Link } from "react-scroll";

const SideBar = ({ setSideber, sideber }) => {
  return (
    <Container>
      <Wrapper>
        <Navigation>
          <NavIcon
            onClick={() => {
              console.log(sideber);
              setSideber(false);
            }}
            to="Home"
            smooth={true}
            offset={-100}
            duration={500}
          >
            <HomeIcon />
            <span>Home</span>
          </NavIcon>
          <NavIcon
            onClick={() => {
              console.log(sideber);
              setSideber(false);
            }}
            to="service"
            smooth={true}
            offset={-100}
            duration={500}
          >
            <AccountCircleIcon />
            <span>Service</span>
          </NavIcon>
          <NavIcon
            onClick={() => {
              console.log(sideber);
              setSideber(false);
            }}
            to="video"
            smooth={true}
            offset={-100}
            duration={500}
          >
            <OndemandVideoIcon />
            <span>Video</span>
          </NavIcon>
          <NavIcon
            onClick={() => {
              console.log(sideber);
              setSideber(false);
            }}
            to="contact"
            smooth={true}
            offset={-100}
            duration={500}
          >
            <ContactMailIcon />
            <span>Contact</span>
          </NavIcon>
        </Navigation>
      </Wrapper>
    </Container>
  );
};

export default SideBar;

const Navigation = styled.div`
  margin-top: 20px;
`;

const NavIcon = styled(Link)`
  display: flex;
  align-items: center;
  margin: 20px 10px;

  .MuiSvgIcon-root {
    font-size: 20px;
    margin-right: 15px;
  }

  span {
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 2px;
  }

  :hover {
    .MuiSvgIcon-root {
    }

    span {
      cursor: pointer;
      color: grey;
    }
  }

  @media screen and (max-width: 700px) {
  }
`;

const Container = styled.div`
  display: none;
  z-index: 10;

  @media screen and (max-width: 700px) {
    display: flex;
    width: 100%;
    height: 250px;
    background-color: #1c1924;
    color: white;
    padding-top: 100px;
    position: fixed;
  }
`;
const Wrapper = styled.div`
  width: 100%;
`;
