import React from "react";
import styled from "styled-components";
import Typography from "../../../../components/typography";
import { TextSize, TextWeight } from "../../../../components/typography/enums";
import { ReactComponent as OrnamentTwo } from "../../../../images/svg/ornaments/OrnamentArchi.svg";
import { ReactComponent as OrnamentOne } from "../../../../images/svg/ornaments/OrnamentStory.svg";

const OurStory = () => {
  return (
    <Container>
      <OrnamentContainerOne>
        <OrnamentOne />
      </OrnamentContainerOne>
      <OrnamentContainerTwo>
        <OrnamentTwo />
      </OrnamentContainerTwo>
      <Typography
        color="rgba(0, 131, 226, 1)"
        weight={TextWeight.semibold}
        mb="1.2"
        size={TextSize.md}
        lh="2.4"
        m_lh="2"
        m_size={TextSize.sm}
      >
        Our story
      </Typography>
      <Typography
        weight={TextWeight.semibold}
        mb="2"
        size={TextSize.DisplayMd}
        lh="4.4"
        m_lh="3.2"
        m_size={TextSize.DisplayXs}
      >
        We do it better !
      </Typography>
      <Typography
        mb="6.4"
        size={TextSize.xl}
        lh="3"
        m_lh="2.8"
        m_size={TextSize.lg}
        color="rgba(228, 228, 228, 1)"
      >
        We’ve already helped over 4,000 companies achieve remarkable results.
      </Typography>
      <TextFlexBox>
        <div>
          <Typography
            mb="6.4"
            lh="3"
            size={TextSize.xl}
            m_size={TextSize.md}
            m_mb="2"
            m_lh="2.8"
          >
            Alex & Associates...one of the finest interior designers and design
            converters from Vizag, spreading their wings beyond Vizag,
            redefining and transforming spaces and lives.
          </Typography>
          <Typography
            lh="3"
            size={TextSize.xl}
            m_size={TextSize.md}
            m_mb="1"
            m_lh="2.8"
          >
            The firm was founded by Flight Lieutenant Alex Bennett (Retd).
          </Typography>
          <Typography
            mb="6.4"
            lh="3"
            size={TextSize.xl}
            m_size={TextSize.md}
            m_mb="2"
            m_lh="2.8"
          >
            He re-invented himself as a designer after leaving the services.
            Initially, he was freelancing from 1997 and later started formal
            operations from 1st April 2006 under the firm name "Alex &
            Associates". The firm has an accumulated experience of over 20
            years. The firm's field of expertise covers Interior designing,
            Landscaping and Project Management. They have also undertaken a few
            Architectural works. They are a major associate of Cipy
            Polyurethanes Pvt Ltd, into Industrial and Decorative flooring
            segment, Water proofing, Protective coatings.
          </Typography>
          <Typography
            size={TextSize.xl}
            weight={TextWeight.semibold}
            lh="3"
            m_mb="1"
            m_size={TextSize.md}
            m_lh="2.8"
          >
            Commitment to Excellence:
          </Typography>
          <Typography
            lh="2.8"
            size={TextSize.lg}
            m_size={TextSize.md}
            m_lh="2.8"
          >
            At Alex & Associates, we are committed to quality, creativity, and
            ethical business practices. Our goal is to deliver exceptional
            design solutions that enhance the physical and psychological
            well-being of the occupants, creating harmonious and productive
            environments.
          </Typography>
        </div>
        <div>
          <Typography lh="3" size={TextSize.xl} m_size={TextSize.md} m_mb="1">
            Design principle "Form follows function" which means we don't
            believe in design for the sake of design. Design or the form that is
            imparted must be guided by function.
          </Typography>
          <Typography lh="3" size={TextSize.xl} m_size={TextSize.md} m_mb="1">
            Interior designing in the context of any space must take into
            consideration the occupants comfort in terms of physical/ mental
            environment and operational requirement.
          </Typography>
          <Typography
            mb="6.4"
            lh="3"
            size={TextSize.xl}
            m_size={TextSize.md}
            m_mb="2"
            m_lh="2.8"
          >
            Basically, evaluating the Space - Functional economics - Physical
            comfort / Ergonomics - Aesthetics which creates the psychological
            environment for optimum productivity in work spaces
          </Typography>
          <Typography size={TextSize.xl} lh="3" m_size={TextSize.md}>
            We are committed to the following:
          </Typography>
          <List>
            <ListItem>Quality.</ListItem>
            <ListItem>Innovation of form aimed at functionality.</ListItem>
            <ListItem>Creativity.</ListItem>
            <ListItem>Ethical business.</ListItem>
          </List>
        </div>
      </TextFlexBox>
      <Typography
        size={TextSize.xl}
        lh="3"
        m_lh="2.8"
        m_size={TextSize.lg}
        color="rgba(228, 228, 228, 1)"
      >
        Join us in our mission to redefine and transform spaces, bringing your
        vision to life with our expertise and passion for design
      </Typography>
    </Container>
  );
};

export default OurStory;

const Container = styled.div`
  border-bottom: 1px solid rgba(46, 59, 65, 1);
  margin-bottom: 0.1rem;
  position: relative;
  overflow: hidden;
  padding: 0rem 11.2rem;
  color: white;
  padding-bottom: 9.6rem;
  @media only screen and (max-width: 769px) {
    padding: 0rem 1.6rem;
    padding-bottom: 6.5rem;
  }
`;

const TextFlexBox = styled.div`
  display: grid;
  grid-template-columns: 40% 40%;
  margin-bottom: 6.4rem;
  justify-content: space-between;
  color: rgba(228, 228, 228, 1);
  padding-bottom: 6rem;
  @media only screen and (max-width: 769px) {
    grid-template-columns: 100%;
    grid-row-gap: 6rem;
    margin-bottom: 2rem;
    padding-bottom: 0;
  }
`;

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

const OrnamentContainerOne = styled.div`
  position: absolute;
  top: 12.2rem;
  right: 16.9rem;
  height: 20rem;
  width: 17.3rem;
  @media only screen and (max-width: 769px) {
    display: none;
  }
`;

const OrnamentContainerTwo = styled(OrnamentContainerOne)`
  bottom: 15.6rem;
  top: auto;
  right: auto;
  left: -8rem;
  width: 27.8rem;
  height: 22.6rem;
`;
