import React, { useEffect, useState } from "react";
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
import LoadingData from "../../components/loading-component";
import api from "../../services/axiosInstance";
import StickyWhatsapp from "../../components/sticky-whatsapp";

const Home = () => {
  const ContactRef = React.useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>();
  const [reviews, setReviews] = useState([]);

  const handleContact = () => {
    ContactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const GetData = async () => {
    try {
      setLoading(true);
      const { data } = await api.get("/home");
      const { data: reviewData } = await api.get(`/review?published=true`);
      setData(data.home);
      setReviews(reviewData.results);
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
          <HeroSection handleContact={handleContact} data={data?.heroSection} />
          <AssociateSection images={data?.workedWImages} />
          <PortfolioSection data={data?.portfolioSection} />
          <ResultSection data={data?.resultSection} />
          <QuoteSection data={data?.quoteSection} />
          {reviews.length > 0 && <ReviewSection Reviews={reviews} />}
          <ContactUs ref={ContactRef} />
          <Footer />
        </>
      )}
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
