import React from "react";
import styled from "styled-components";
import Typography from "../../../../components/typography";
import { TextSize, TextWeight } from "../../../../components/typography/enums";
import { IProject } from "../../../../types/project";
import DateConvert from "../../../../utils/dateConvert";

const Information = ({
  category,
  title,
  description,
  clientName,
  date
}: IProject) => {
  return (
    <Container>
      <Typography
        color="rgba(0, 131, 226, 1)"
        weight={TextWeight.semibold}
        size={TextSize.lg}
        lh="2.8"
        m_lh="2.4"
        m_size={TextSize.md}
        mb="0.8"
      >
        {category}
      </Typography>
      <Typography
        weight={TextWeight.semibold}
        size={TextSize.DisplayMd}
        lh="4.4"
        m_lh="3.2"
        m_size={TextSize.DisplayXs}
        mb="0.8"
      >
        {title}
      </Typography>
      <Typography
        color="rgba(228, 228, 228, 1)"
        size={TextSize.xl}
        m_size={TextSize.md}
        lh="3"
        m_lh="2.4"
        mb="2.4"
      >
        {description}
      </Typography>
      <Typography
        weight={TextWeight.semibold}
        size={TextSize.lg}
        lh="2.8"
        m_lh="2"
        m_size={TextSize.sm}
      >
        {clientName}
      </Typography>
      <Typography
        color="rgba(228, 228, 228, 1)"
        size={TextSize.lg}
        lh="2.8"
        m_lh="2"
        m_size={TextSize.sm}
      >
        {DateConvert(date)}
      </Typography>
    </Container>
  );
};

export default Information;

const Container = styled.div`
  padding: 0 11.2rem;
  margin-bottom: 6.2rem;
  color: white;
  @media only screen and (max-width: 769px) {
    padding: 0 1.6rem;
    margin-bottom: 4.8rem;
  }
`;
