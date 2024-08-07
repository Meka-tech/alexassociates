import React, { useState } from "react";
import styled from "styled-components";
import Banner from "./components/banner";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import PortfolioProjects from "./components/portfolio-projects";
import StickyWhatsapp from "../../components/sticky-whatsapp";

const Portfolio = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  return (
    <Container>
      <Navbar />
      <StickyWhatsapp />
      <Banner
        setInputValue={(value) => {
          setSearchInputValue(value);
        }}
        inputValue={searchInputValue}
      />
      <PortfolioProjects inputValue={searchInputValue} />
      <Footer />
    </Container>
  );
};

export default Portfolio;

const Container = styled.main`
  max-width: 100vw;
  min-height: 100vh;
  position: relative;
  padding-top: 8rem;
  @media only screen and (max-width: 769px) {
    padding-top: 7.2rem;
  }
`;
