import React from "react";
import styled from "styled-components";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Banner from "./components/banner";
import ContactUs from "../../components/contact-us";
import Intro from "./components/intro";
import Services from "./components/services";

const OurServices = () => {
  return (
    <Container>
      <Navbar />
      <Banner />
      <Intro />
      <Services />
      <ContactUs />
      <Footer />
    </Container>
  );
};

export default OurServices;

const Container = styled.main`
  max-width: 100vw;
  min-height: 100vh;
  position: relative;
  padding-top: 8rem;
  @media only screen and (max-width: 769px) {
    padding-top: 7.2rem;
  }
`;
