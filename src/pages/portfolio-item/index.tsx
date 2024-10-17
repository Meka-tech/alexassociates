import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Carousel from "./components/carousel";
import Information from "./components/Information";
import RelatedContent from "./components/related-content";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/axiosInstance";
import { IProject } from "../../types/project";
import LoadingData from "../../components/loading-component";
import StickyWhatsapp from "../../components/sticky-whatsapp";

const PortfolioItem = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState<IProject>();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const { data } = await api.get(`/project/${id}`);

        setProject(data.data.project);
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
      <StickyWhatsapp />

      {loading ? (
        <LoadingData />
      ) : project ? (
        <>
          <Carousel images={project.images} />
          <Information {...project} />
          <RelatedContent id={project?._id} category={project?.category} />
        </>
      ) : null}

      <Footer />
    </Container>
  );
};

export default PortfolioItem;

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  position: relative;
  padding-top: 8rem;
  @media only screen and (max-width: 769px) {
    padding-top: 7.2rem;
  }
`;
