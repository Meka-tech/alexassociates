import React from "react";
import styled from "styled-components";
import Typography from "../../../../components/typography";
import { TextSize, TextWeight } from "../../../../components/typography/enums";
import ProjectItem from "../../../portfolio/components/portfolio-projects/project-item";
import { DummyData } from "../../../portfolio/components/portfolio-projects/dummyData";

const RelatedContent = ({ service }: { service: string }) => {
  return (
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
          More on {service}
        </Typography>
      </Header>
      <ProjectGrid>
        {DummyData.map(
          ({ service, title, description, author, date, image }, i) => {
            if (i >= 3) {
              return null;
            }
            return (
              <ProjectItem
                id={`${i}`}
                service={service}
                title={title}
                description={description}
                author={author}
                // date={date}
                image={image}
                key={i}
              />
            );
          }
        )}
      </ProjectGrid>
    </Container>
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
    grid-template-columns: auto;
    grid-row-gap: 4.8rem;
    margin-bottom: 4.8rem;
  }
`;
