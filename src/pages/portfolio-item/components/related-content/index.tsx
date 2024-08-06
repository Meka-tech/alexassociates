import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Typography from "../../../../components/typography";
import { TextSize, TextWeight } from "../../../../components/typography/enums";
import ProjectItem from "../../../portfolio/components/portfolio-projects/project-item";
import api from "../../../../utils/axiosInstance";
import { IProject } from "../../../../utils/types/project";
import LoadingData from "../../../../components/loading-component";
import { ReactComponent as Glow } from "../../../../images/svg/glow/rect-glow.svg";

const RelatedContent = ({ id, category }: { id: string; category: string }) => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const GetRelatedProject = async () => {
      try {
        setLoading(true);
        const { data } = await api.get(`/project/related-projects/${id}`);
        setProjects(data.data.projects);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };

    GetRelatedProject();
  }, []);
  return (
    <>
      {loading ? (
        <LoadingData />
      ) : projects.length > 0 ? (
        <>
          <Container>
            <Header>
              <Typography
                mb="6.4"
                m_mb="4.8"
                weight={TextWeight.medium}
                size={TextSize.DisplaySm}
                m_size={TextSize.DisplayXs}
                lh="3.8"
                m_lh="3.2"
              >
                More on {category}
              </Typography>
            </Header>
            <ProjectGrid>
              {projects.map((project, i) => {
                return <ProjectItem {...project} key={i} />;
              })}
              <RectContainer>
                <Glow />
              </RectContainer>
            </ProjectGrid>
          </Container>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default RelatedContent;

const Container = styled.div`
  padding: 0 11.2rem;
  margin-bottom: 9.6rem;
  color: white;
  @media only screen and (max-width: 769px) {
    padding: 0 1.6rem;
    margin-bottom: 6.4rem;
  }
`;

const Header = styled.div`
  @media only screen and (max-width: 769px) {
    text-align: center;
  }
`;

const ProjectGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  align-items: center;
  justify-content: space-between;
  grid-column-gap: 3.2rem;
  grid-row-gap: 6.4rem;
  margin-bottom: 6.4rem;
  @media only screen and (max-width: 769px) {
    grid-template-columns: 100%;
    grid-row-gap: 4.8rem;
    margin-bottom: 4.8rem;
  }
`;

const RectContainer = styled.div`
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;

  transform: translate(-50%, -50%);
  @media only screen and (max-width: 769px) {
    display: none;
  }
`;
