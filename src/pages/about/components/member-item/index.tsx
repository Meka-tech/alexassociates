import React from "react";
import styled from "styled-components";
import Typography from "../../../../components/typography";
import { TextSize, TextWeight } from "../../../../components/typography/enums";

interface IProps {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}
const MemberItem = ({ name, role, description, imageUrl }: IProps) => {
  return (
    <Container>
      <ImageContainer src={imageUrl} alt={name} />
      <Typography
        weight={TextWeight.semibold}
        size={TextSize.xl}
        m_size={TextSize.lg}
        lh="3"
        m_lh="2.8"
        mb="0.4"
        m_mb="0"
      >
        {name}
      </Typography>
      <Typography
        color="rgba(0, 131, 226, 1)"
        size={TextSize.lg}
        lh="2.8"
        mb="1.6"
        m_mb="0"
      >
        {role}
      </Typography>
      <Description>
        <Typography size={TextSize.md} lh="2.4">
          {description}
        </Typography>
      </Description>
    </Container>
  );
};

export default MemberItem;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  @media only screen and (max-width: 769px) {
    justify-content: center;
    align-items: center;
  }
`;

const ImageContainer = styled.img`
  width: 100%;
  height: 29.6rem;
  object-fit: cover;
  background-color: gray;
  margin-bottom: 2.4rem;
  @media only screen and (max-width: 769px) {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    margin-bottom: 1.6rem;
  }
`;

const Description = styled.div`
  color: rgba(228, 228, 228, 1);
  @media only screen and (max-width: 769px) {
    display: none;
  }
`;
