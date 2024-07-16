import React from "react";
import styled from "styled-components";
import { FlexBox } from "../../../../components/container-styles/styles";
import Typography from "../../../../components/typography";
import { TextSize, TextWeight } from "../../../../components/typography/enums";
import Image from "../../../../images/png/furnishing.png";
import { ReactComponent as Ornament } from "../../../../images/svg/ornaments/OrnamentFurnish.svg";

const Three = () => {
  return (
    <Container>
      <OrnamentContainer>
        <Ornament />
      </OrnamentContainer>
      <FlexHeader>
        <HeaderTextArea>
          <Typography
            color="rgba(0, 131, 226, 1)"
            weight={TextWeight.semibold}
            size={TextSize.md}
            m_size={TextSize.sm}
            lh="2.4"
            mb="1.2"
          >
            #3
          </Typography>
          <Typography
            color="white"
            size={TextSize.DisplayMd}
            m_size={TextSize.DisplayXs}
            lh="4.4"
            weight={TextWeight.semibold}
            mb="4"
            m_mb="3.2"
            m_lh="3.2"
          >
            Furniture and Furnishings
          </Typography>

          <GridContainer>
            <GridItem>
              <Typography
                color="rgba(207, 206, 206, 1)"
                size={TextSize.xl}
                m_size={TextSize.lg}
              >
                Fixed Furniture:
              </Typography>
              <List>
                <ListItem>Design and Hardware Selection</ListItem>
              </List>
            </GridItem>
            <GridItem>
              <Typography
                color="rgba(207, 206, 206, 1)"
                size={TextSize.xl}
                m_size={TextSize.lg}
              >
                Moveable Furniture:
              </Typography>
              <List>
                <ListItem>Space Planning and Design</ListItem>
              </List>
            </GridItem>
            <GridItem>
              <Typography
                color="rgba(207, 206, 206, 1)"
                size={TextSize.xl}
                m_size={TextSize.lg}
              >
                Interior Accessories:
              </Typography>
              <List>
                <ListItem>Selection and Placement</ListItem>
              </List>
            </GridItem>
          </GridContainer>
        </HeaderTextArea>
        <ImageItem src={Image} alt="Interior design" />
      </FlexHeader>
    </Container>
  );
};

export default Three;
const Container = styled.div`
  padding: 9.6rem 11.2rem;
  border-top: 1px solid rgba(46, 59, 65, 1);
  border-bottom: 1px solid rgba(46, 59, 65, 1);
  margin-bottom: 0.8rem;
  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 769px) {
    padding: 6rem 1.6rem;
  }
`;

const FlexHeader = styled(FlexBox)`
  @media only screen and (max-width: 769px) {
    flex-direction: column-reverse;
  }
`;

const HeaderTextArea = styled.div`
  width: 50%;
  @media only screen and (max-width: 769px) {
    width: 100%;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 35% 50%;
  grid-row-gap: 4rem;
  justify-content: space-between;
  align-items: start;
  @media only screen and (max-width: 769px) {
    grid-template-columns: 100%;
    grid-row-gap: 2.6rem;
  }
`;
const GridItem = styled.div``;
const List = styled.ul`
  color: rgba(207, 206, 206, 1);
  padding-left: 2rem;
  @media only screen and (max-width: 769px) {
    padding-left: 2.5rem;
  }
`;

const ListItem = styled.li`
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.8rem;
`;

const ImageItem = styled.img`
  width: 57.6rem;
  height: 31.8rem;
  object-fit: cover;
  @media only screen and (max-width: 769px) {
    width: 100%;
    height: 24rem;
    margin-bottom: 4.8rem;
  }
`;

const OrnamentContainer = styled.div`
  position: absolute;
  right: 5rem;
  top: 0;
  transform: translateY(50%);
  width: 6rem;
  height: 26rem;
  @media only screen and (max-width: 769px) {
    width: 3.5rem;
    height: 15.4rem;
    bottom: 8.7rem;
    top: auto;
    transform: none;
    right: 1.6rem;
  }
`;
