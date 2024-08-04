import React from "react";
import styled from "styled-components";
import { FlexBox } from "../../../../components/container-styles/styles";
import Typography from "../../../../components/typography";
import { TextSize, TextWeight } from "../../../../components/typography/enums";
import Image from "../../../../images/png/interior-design.png";
import { ReactComponent as Ornament } from "../../../../images/svg/ornaments/OrnamentInterior.svg";

interface IProps {
  data?: {
    headline: string;
    subheadline1: string;
    listItems1: string[];
    subheadline2: string;
    listItems2: string[];
  };
}
const One = ({ data }: IProps) => {
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
            #1
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
            {data?.headline || "Interior Design Services"}
          </Typography>
          <Typography
            color="rgba(207, 206, 206, 1)"
            size={TextSize.xl}
            m_size={TextSize.lg}
          >
            {data?.subheadline1 || "Space we design"}:
          </Typography>

          <List>
            {data?.listItems1.map((item, i) => {
              return <ListItem key={i}>{item}</ListItem>;
            })}
            {/* <ListItem>Homes & Residences</ListItem>

            <ListItem>Shops</ListItem>
            <ListItem>Hotels & Restaurants</ListItem>
            <ListItem>Clubs</ListItem>
            <ListItem> Schools</ListItem>
            <ListItem>Offices</ListItem> */}
          </List>
        </HeaderTextArea>
        <ImageItem src={Image} alt="Interior design" />
      </FlexHeader>
      <ScopeContainer>
        <ScopPage>
          <Typography
            color="rgba(207, 206, 206, 1)"
            size={TextSize.xl}
            m_size={TextSize.lg}
            mb="2"
          >
            {data?.subheadline1 || "Scope of Work"}:
          </Typography>
          <List>
            {data?.listItems2.map((item, i) => {
              if (i > 6) {
                return null;
              }
              return <ListItem key={i}>{item}</ListItem>;
            })}
            {/* <ListItem>Pre-design study.</ListItem>
            <ListItem>Overall space planning after taking detailed</ListItem>
            <ListItem>
              on-site measurements/construction drawings furnished by the
              client.
            </ListItem>
            <ListItem>
              Exterior elevation glazing, glazed sliding doors, rolling shutters
              and alco panel works
            </ListItem>
            <ListItem>
              Electrical layout: Raw power sockets and positions, positioning of
              ceiling fans, wall mounted fans, air conditioners, switch boards,
              wall mounted light points, sockets, MCB's, ELCB's, Inverter and
              other accessories as per the requirement.
            </ListItem>
            <ListItem>Electrical SLD.</ListItem>
            <ListItem>Generator power supply.</ListItem>
            <ListItem>Electronic, communication systems and design.</ListItem> */}
          </List>
        </ScopPage>
        <ScopPage>
          <List>
            {data?.listItems2.map((item, i) => {
              if (i <= 6) {
                return null;
              }
              return <ListItem key={i}>{item}</ListItem>;
            })}
            {/* <ListItem>
              Heating, ventilation and air conditioning design (HVAC) and other
              associated mechanical systems like Air curtains etc.
            </ListItem>
            <ListItem>
              Fire detection, Fire protection and Security systems etc.
            </ListItem>
            <ListItem>
              Layout of sanitary fixtures and design of plumbing and drainage
              lines.
            </ListItem>
            <ListItem>Lighting components and design.</ListItem>
            <ListItem>
              False ceiling material component, design, finish, texture.
            </ListItem>
            <ListItem>
              Flooring material component, design, finish, texture etc.
            </ListItem>
            <ListItem>
              Wall / Partition wall finishes, material components, textures,
              colour combinations etc.
            </ListItem>
            <ListItem>
              Designing fixed furniture elements and the appropriate hardware.
            </ListItem>
            <ListItem>
              Designing movable furniture as per the space planning.
            </ListItem>
            <ListItem>
              Audio/Video and Acoustics wherever and if required.
            </ListItem>
            <ListItem>
              Design and selection of movable furniture and furnishings.
            </ListItem>
            <ListItem>Selection of Interior accessories and graphics</ListItem> */}
          </List>
        </ScopPage>
      </ScopeContainer>
    </Container>
  );
};

export default One;
const Container = styled.div`
  padding: 9.6rem 11.2rem;
  border-top: 1px solid rgba(46, 59, 65, 1);
  border-bottom: 1px solid rgba(46, 59, 65, 1);
  margin-bottom: 0.8rem;
  position: relative;
  @media only screen and (max-width: 769px) {
    padding: 6rem 1.6rem;
  }
`;

const FlexHeader = styled(FlexBox)`
  margin-bottom: 19.2rem;
  @media only screen and (max-width: 769px) {
    margin-bottom: 2.4rem;
    flex-direction: column-reverse;
  }
`;

const HeaderTextArea = styled.div`
  width: 40%;
  @media only screen and (max-width: 769px) {
    width: 100%;
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

const ScopeContainer = styled.div`
  width: 100%;
  padding: 2.6rem 0rem;
  display: grid;
  grid-template-columns: 40% 38%;
  justify-content: space-between;
  align-items: start;
  @media only screen and (max-width: 769px) {
    grid-template-columns: 100%;
    padding: 0rem;
  }
`;

const ScopPage = styled.div``;

const OrnamentContainer = styled.div`
  position: absolute;
  bottom: 10.4rem;
  left: 0rem;
  width: 11.41rem;
  height: 7.6rem;
  @media only screen and (max-width: 769px) {
    width: 7.2rem;
    height: 4.8rem;
    right: 0.1rem;
    left: auto;
    bottom: 103.6rem;
  }
`;
