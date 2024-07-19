import React from "react";
import styled from "styled-components";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Banner from "./components/banner";
import Intro from "./components/intro";
import OurStory from "./components/our-story";
import Team from "./components/team";
import Partners from "./components/partners";

const About = () => {
  return (
    <Container>
      <Navbar />
      <Banner />
      <Intro />
      <OurStory />
      <Team />
      <Partners />
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
