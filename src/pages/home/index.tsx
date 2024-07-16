import React from "react";
import styled from "styled-components";
import Navbar from "../../components/navbar";
import HeroSection from "./components/heroSection";
import AssociateSection from "./components/associateSection";
import PortfolioSection from "./components/portfolioSection";
import ResultSection from "./components/resultSection";
import QuoteSection from "./components/quoteSection";
import ReviewSection from "./components/reviewSection";
import ContactUs from "../../components/contact-us";
import Footer from "../../components/footer";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <HeroSection />
      <AssociateSection />
      <PortfolioSection />
      <ResultSection />
      <QuoteSection />
      <ReviewSection />
      <ContactUs />
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  max-width: 100vw;
  min-height: 100vh;
  position: relative;
`;
