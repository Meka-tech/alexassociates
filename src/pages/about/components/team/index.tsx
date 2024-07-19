import React from "react";
import styled from "styled-components";
import Typography from "../../../../components/typography";
import { TextSize, TextWeight } from "../../../../components/typography/enums";
import MemberItem from "../member-item";
import { data } from "../dummyData";
import { ReactComponent as Ornament } from "../../../../images/svg/ornaments/OrnamentInterior.svg";

const Team = () => {
  return (
    <Container>
      <OrnamentContainer>
        <Ornament />
      </OrnamentContainer>
      <Header>
        <Typography
          size={TextSize.DisplayMd}
          mb="2"
          weight={TextWeight.semibold}
          lh="4.4"
          m_size={TextSize.DisplaySm}
          m_lh="3.8"
          m_mb="1.6"
        >
          Meet our team
        </Typography>
        <Typography
          size={TextSize.xl}
          m_size={TextSize.lg}
          m_lh="2.8"
          lh="3"
          color="rgba(228, 228, 228, 1)"
        >
          Our philosophy is simple — hire a team of diverse, passionate people
          and foster a culture that empowers you to do your best work.
        </Typography>
      </Header>
      <TeamGrid>
        {data.map(({ name, imageUrl, description, role }, i) => {
          return (
            <MemberItem
              name={name}
              imageUrl={imageUrl}
              description={description}
              role={role}
              key={i}
            />
          );
        })}
      </TeamGrid>
    </Container>
  );
};

export default Team;

const Container = styled.div`
  padding: 9.6rem 8rem;
  border-bottom: 1px solid rgba(0, 10, 15, 1);
  color: rgba(250, 250, 250, 1);
  position: relative;
  @media only screen and (max-width: 769px) {
    padding: 6.5rem 1.6rem;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  margin-bottom: 6.4rem;
  @media only screen and (max-width: 769px) {
    width: 100%;
    margin-bottom: 4.8rem;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: 28rem 28rem 28rem 28rem;
  padding: 0rem 3.2rem;
  grid-row-gap: 6.4rem;
  grid-column-gap: 3.2rem;
  justify-content: space-between;
  @media only screen and (max-width: 769px) {
    grid-template-columns: 100%;
    grid-row-gap: 4rem;
  }
`;

const OrnamentContainer = styled.div`
  position: absolute;
  right: 5.5rem;
  top: 21.2rem;
  width: 11.4rem;
  height: 7.6rem;
  @media only screen and (max-width: 769px) {
    top: -9.8rem;
    right: -4rem;
  }
`;
