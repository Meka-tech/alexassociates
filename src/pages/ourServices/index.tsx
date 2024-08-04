import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Banner from "./components/banner";
import ContactUs from "../../components/contact-us";
import Intro from "./components/intro";
import One from "./components/services/one";
import Two from "./components/services/two";
import Three from "./components/services/three";
import Four from "./components/services/four";
import api from "../../utils/axiosInstance";
import LoadingData from "../../components/loading-component";

const OurServices = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>();

  const GetData = async () => {
    try {
      setLoading(true);
      const { data } = await api.get("/services");
      setData(data.services);
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
          <Banner />
          <Intro data={data?.sectionOne} />
          <One data={data?.sectionTwo} />
          <Two data={data?.sectionThree} />
          <Three data={data?.sectionFour} />
          <Four data={data?.sectionFive} />
          <ContactUs />
          <Footer />
        </>
      )}
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
