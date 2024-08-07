import React from "react";
import styled from "styled-components";
import Typography from "../../../../components/typography";
import { TextSize, TextWeight } from "../../../../components/typography/enums";
import MemberItem from "../member-item";
import { data } from "../dummyData";
import { ReactComponent as Ornament } from "../../../../images/svg/ornaments/OrnamentInterior.svg";
import { IimageType } from "../../../../utils/types/image";

interface IProps {
  data?: {
    headline: string;
    subheadline: string;
    partners: {
      fullname: string;
      role: string;
      description: string;
      image: IimageType;
    }[];
  };
}
const Partners = ({ data }: IProps) => {
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
          {data?.headline || "Partners"}
        </Typography>
        <Typography
          size={TextSize.xl}
          m_size={TextSize.lg}
          m_lh="2.8"
          lh="3"
          color="rgba(228, 228, 228, 1)"
        >
          {data?.subheadline ||
            `Our philosophy is simple — hire a team of diverse, passionate people
          and foster a culture that empowers you to do your best work.`}
        </Typography>
      </Header>
      <TeamGrid>
        {data?.partners.map(({ fullname, image, description, role }, i) => {
          return (
            <MemberItem
              name={fullname}
              image={image}
              description={description}
              role={role}
              key={i}
            />
          );
        })}
      </TeamGrid>
      <BackgroundGlowDiv />
    </Container>
  );
};

export default Partners;

const Container = styled.div`
  padding: 9.6rem 8rem;
  color: rgba(250, 250, 250, 1);
  position: relative;
  @media only screen and (max-width: 769px) {
    padding: 6.5rem 1.6rem;
    overflow: hidden;
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

const BackgroundGlowDiv = styled.div`
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  width: 3rem;
  height: 1rem;
  background-color: rgba(0, 131, 226, 0.4);
  -webkit-box-shadow: 0px 0px 300px 183px rgba(0, 132, 226, 0.7);
  -moz-box-shadow: 0px 0px 300px 183px rgba(0, 132, 226, 0.7);
  box-shadow: 0px 0px 300px 183px rgba(0, 132, 226, 0.7);
  border-radius: 50%;
  @media only screen and (max-width: 769px) {
    display: none;
  }
`;
