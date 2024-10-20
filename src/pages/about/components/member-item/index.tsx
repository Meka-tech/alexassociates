import React from "react";
import styled from "styled-components";
import Typography from "../../../../components/typography";
import { TextSize, TextWeight } from "../../../../components/typography/enums";
import { IimageType } from "../../../../types/image";

interface IProps {
  name: string;
  role: string;
  description: string;
  image: IimageType;
}
const MemberItem = ({ name, role, description, image }: IProps) => {
  return (
    <Container>
      <ImageContainer
        src={`https://drive.google.com/thumbnail?id=${image.fileId}&sz=w1000`}
        alt={image.name}
      />
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
  width: 28rem;
  margin-right: 3.2rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 6.4rem;
  @media only screen and (max-width: 769px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 4rem;
    margin-right: 0rem;
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
