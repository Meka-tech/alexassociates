import React, { useRef } from "react";
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
  const ContactRef = React.useRef<HTMLDivElement>(null);
  const handleContact = () => {
    ContactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Container>
      <Navbar />
      <HeroSection handleContact={handleContact} />
      <AssociateSection />
      <PortfolioSection />
      <ResultSection />
      <QuoteSection />
      <ReviewSection />
      <ContactUs ref={ContactRef} />
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  max-width: 100vw;
  min-height: 100vh;
  position: relative;
  padding-top: 8rem;

`;
