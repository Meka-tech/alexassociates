import React, { useState } from "react";
import styled from "styled-components";
import Banner from "./components/banner";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import PortfolioProjects from "./components/portfolio-projects";

const Portfolio = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  return (
    <Container>
      <Navbar />
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
`;
