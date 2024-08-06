import React from "react";
import styled from "styled-components";
import { FlexBox } from "../../../../components/container-styles/styles";
import Typography from "../../../../components/typography";
import { TextSize, TextWeight } from "../../../../components/typography/enums";
import Image from "../../../../images/png/execution.png";

interface IProps {
  data?: {
    headline: string;
    subheadline1: string;
    listItems1: string[];
  };
}
const Four = ({ data }: IProps) => {
  return (
    <Container>
      <FlexHeader>
        <ImageItem src={Image} alt="Interior design" />
        <HeaderTextArea>
          <Typography
            color="rgba(0, 131, 226, 1)"
            weight={TextWeight.semibold}
            size={TextSize.md}
            m_size={TextSize.sm}
            lh="2.4"
            mb="1.2"
          >
            #4
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
            {data?.headline || "Execution and Supervision"}
          </Typography>
          <Typography
            color="rgba(207, 206, 206, 1)"
            size={TextSize.xl}
            m_size={TextSize.lg}
          >
            {data?.subheadline1 || "Project Execution"}:
          </Typography>
          <List>
            {data?.listItems1.map((item, i) => {
              return <ListItem key={i}>{item}</ListItem>;
            })}
            {/* <ListItem> Conversion of Designs into Reality</ListItem>
            <ListItem> Employing Skilled Labor and Quality Materials</ListItem>
            <ListItem> Supervision to Ensure High Standards</ListItem> */}
          </List>
        </HeaderTextArea>
      </FlexHeader>
    </Container>
  );
};

export default Four;
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
  @media only screen and (max-width: 769px) {
    flex-direction: column;
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
  -webkit-box-shadow: 0px 0px 134px 0px rgba(0, 132, 226, 0.7);
  -moz-box-shadow: 0px 0px 134px 0px rgba(0, 132, 226, 0.7);
  box-shadow: 0px 0px 134px 0px rgba(0, 132, 226, 0.7);
  @media only screen and (max-width: 769px) {
    width: 100%;
    height: 24rem;
    margin-bottom: 4.8rem;
  }
`;
