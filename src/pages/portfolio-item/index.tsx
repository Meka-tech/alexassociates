import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Carousel from "./components/carousel";
import Information from "./components/Information";
import { data } from "./components/dummydata";
import RelatedContent from "./components/related-content";
import { useNavigate, useParams } from "react-router-dom";

const PortfolioItem = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      window.scrollTo(0, 0);
      try {
      } catch (err) {
        navigate("/portfolio");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [id]);
  return (
    <Container>
      <Navbar />
      <Carousel images={data.images} />
      <Information
        service={data.service}
        name={data.name}
        description={data.description}
        title={data.title}
        date={data.date}
      />
      <RelatedContent service={data.service} />
      <Footer />
    </Container>
  );
};

export default PortfolioItem;

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  position: relative;
`;
