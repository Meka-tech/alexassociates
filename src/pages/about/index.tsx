import React from "react";
import styled from "styled-components";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Banner from "./components/banner";
import Intro from "./components/intro";

const About = () => {
  return (
    <Container>
      <Navbar />
      <Banner />
      <Intro />
      <Footer />
    </Container>
  );
};

export default About;

const Container = styled.main`
  max-width: 100vw;
  min-height: 100vh;
  position: relative;
`;
