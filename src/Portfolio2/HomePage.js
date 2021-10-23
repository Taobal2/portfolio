import React, { useState } from "react";
import styled from "styled-components";
import HeaderNav from "./HeaderNav";
import Hero from "./Hero";
import Contact from "./Contact";
import Video from "./Video";
import Service from "./Service";
import Footer from "./Footer";

const HomePage = () => {
  const [toggle, setToggle] = useState(false);

  const onHandle = () => {
    const check = window.scrollY;

    console.log(check);

    if (check >= 80) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  window.addEventListener("scroll", onHandle);

  return (
    <Container>
      <Wrapper>
        <HeaderNav bg={toggle ? "bg" : ""} />
        <Hero />
        <Service />
        <Video />
        <Contact />
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default HomePage;

const Container = styled.div``;
const Wrapper = styled.div``;
