import React from "react";
import styled from "styled-components";
import Typography from "../../../../components/typography";
import { TextSize, TextWeight } from "../../../../components/typography/enums";
import { LuArrowUpRight } from "react-icons/lu";

import { FlexBox } from "../../../../components/container-styles/styles";
import { useNavigate } from "react-router-dom";
import DateConvert from "../../../../utils/dateConvert";
import { IProject } from "../../../../utils/types/project";

const ProjectItem = ({
  category,
  title,
  description,
  clientName,
  date = new Date(),
  images,
  _id
}: IProject) => {
  const navigation = useNavigate();
  const image = images[0];

  function truncateString(str: string) {
    if (str.length > 30) {
      return str.slice(0, 150) + "...";
    }
    return str;
  }

  return (
    <Container onClick={() => navigation(`/portfolio/${_id}`)}>
      <ImageContainer
        src={`https://drive.google.com/thumbnail?id=${image.fileId}&sz=w1000`}
        alt={image.name}
      />
      <Typography
        color="rgba(0, 131, 226, 1)"
        size={TextSize.sm}
        weight={TextWeight.semibold}
        mb="0.8"
        lh="2"
      >
        {category}
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
        {truncateString(description)}
      </Typography>
      <ItemFooter>
        <Typography
          color="rgba(250, 250, 250, 1)"
          size={TextSize.sm}
          weight={TextWeight.semibold}
          lh="2"
        >
          {clientName}
        </Typography>
        <Typography color="rgba(228, 228, 228, 1)" size={TextSize.sm} lh="2">
          {DateConvert(date)}
        </Typography>
      </ItemFooter>
    </Container>
  );
};

export default ProjectItem;

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.img`
  width: 100%;
  height: 24rem;
  border-radius: 1.6rem;
  object-fit: cover;
  margin-bottom: 2.4rem;
  background-color: gray;
`;

const ItemFooter = styled.div`
  margin-top: auto;
`;
