import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { useSearchParams } from "react-router-dom";

import PortfolioEdit from "./components/portfolio-page";
import OurServicesEdit from "./components/ourServices-page";
import HomePageEdit from "./components/Home-page";
import AboutPageEdit from "./components/about-page";

const ManageWebsite = () => {
  const [searchParams] = useSearchParams();

  const activeparam = searchParams.get("key");
  const [active, setActive] = useState(activeparam ? activeparam : "home");

  useEffect(() => {
    setActive(activeparam ? activeparam : "home");
  }, [activeparam]);

  return (
    <Container>
      <Navbar />
      <Body>
        {active === "home" && <HomePageEdit />}
        {active === "about" && <AboutPageEdit />}
        {active === "portfolio" && <PortfolioEdit />}
        {active === "services" && <OurServicesEdit />}
      </Body>
      <Footer />
    </Container>
  );
};

export default ManageWebsite;

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  position: relative;
  padding-top: 8rem;
  overflow-x: hidden;
  @media only screen and (max-width: 769px) {
    padding-top: 8rem;
  }
`;

const Body = styled.div`
  width: 100%;
  padding-top: 8.2rem;
  @media only screen and (max-width: 769px) {
    padding-top: 8.5rem;
  }
`;
