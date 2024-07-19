import React from "react";
import styled from "styled-components";
import Typography from "../../../../components/typography";
import { TextSize, TextWeight } from "../../../../components/typography/enums";
import { LuArrowUpRight } from "react-icons/lu";

import { FlexBox } from "../../../../components/container-styles/styles";
import { useNavigate } from "react-router-dom";

interface IProps {
  service: string;
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
  id: string;
}
const ProjectItem = ({
  service,
  title,
  description,
  author,
  date,
  image,
  id
}: IProps) => {
  const navigation = useNavigate();
  return (
    <Container onClick={() => navigation(`/portfolio/${id}`)}>
      <ImageContainer src={image} alt={title} />
      <Typography
        color="rgba(0, 131, 226, 1)"
        size={TextSize.sm}
        weight={TextWeight.semibold}
        mb="0.8"
        lh="2"
      >
        {service}
      </Typography>
      <FlexBox style={{ marginBottom: "0.8rem" }}>
        <Typography
          color="rgba(250, 250, 250, 1)"
          size={TextSize.DisplayXs}
          m_size={TextSize.xl}
          weight={TextWeight.semibold}
          lh="3.2"
          m_lh="3"
        >
          {title}
        </Typography>
        <LuArrowUpRight size={30} />
      </FlexBox>
      <Typography
        color="rgba(228, 228, 228, 1)"
        size={TextSize.md}
        mb="2.4"
        lh="2.4"
      >
        {description}
      </Typography>
      <Typography
        color="rgba(250, 250, 250, 1)"
        size={TextSize.sm}
        weight={TextWeight.semibold}
        lh="2"
      >
        {author}
      </Typography>
      <Typography color="rgba(228, 228, 228, 1)" size={TextSize.sm} lh="2">
        {date}
      </Typography>
    </Container>
  );
};

export default ProjectItem;

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  cursor: pointer;
`;

const ImageContainer = styled.img`
  width: 100%;
  height: 24rem;
  border-radius: 1.6rem;
  object-fit: cover;
  margin-bottom: 2.4rem;
  background-color: gray;
`;
