import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Banner from "./components/banner";
import Intro from "./components/intro";
import OurStory from "./components/our-story";
import Team from "./components/team";
import Partners from "./components/partners";
import api from "../../utils/axiosInstance";
import LoadingData from "../../components/loading-component";
import StickyWhatsapp from "../../components/sticky-whatsapp";

const About = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>();

  const GetData = async () => {
    try {
      setLoading(true);
      const { data } = await api.get("/about");
      setData(data.about);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetData();
  }, []);
  return (
    <Container>
      {loading ? (
        <LoadingData />
      ) : (
        <>
          <Navbar />
          <StickyWhatsapp />
          <Banner />
          <Intro data={data?.sectionOne} />
          <OurStory data={data?.sectionTwo} />
          <Team data={data?.teamSection} />
          <Partners data={data?.partnerSection} />
          <Footer />
        </>
      )}
    </Container>
  );
};

export default About;

const Container = styled.main`
  max-width: 100vw;
  min-height: 100vh;
  position: relative;
  padding-top: 8rem;
  @media only screen and (max-width: 769px) {
    padding-top: 7.2rem;
  }
`;
