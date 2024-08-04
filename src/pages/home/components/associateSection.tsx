import React from "react";
import styled from "styled-components";
import Typography from "../../../components/typography";
import { TextSize, TextWeight } from "../../../components/typography/enums";
import { IimageType } from "../../../utils/types/image";

const AssociateSection = ({ images }: { images: IimageType[] }) => {
  return (
    <Container>
      <Typography size={TextSize.md} weight={TextWeight.medium} mb="3.2">
        We’ve worked with the best
      </Typography>
      <ImageArea>
        {images?.map((image, i) => {
          return (
            <ImageContainer key={i}>
              <Img
                src={
                  image.fileId
                    ? `https://drive.google.com/thumbnail?id=${image.fileId}&sz=w1000`
                    : URL.createObjectURL(image)
                }
                alt={image.name}
              />
            </ImageContainer>
          );
        })}
      </ImageArea>
    </Container>
  );
};

export default AssociateSection;

const Container = styled.div`
  background-color: white;
  padding: 0rem 8rem;
  padding-top: 2.4rem;
  padding-bottom: 9.6rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 769px) {
    padding: 0rem 1.6rem;
    padding-top: 2.4rem;
    padding-bottom: 6.4rem;
  }
`;

const ImageArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 0.8rem;
  @media only screen and (max-width: 769px) {
    padding: 0 1.4rem;
  }
`;

const ImageContainer = styled.div`
  margin-right: 1.6rem;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: 16.7rem;
  height: 4.8rem;
  object-fit: cover;
  @media only screen and (max-width: 769px) {
    width: 11rem;
    height: 3.1rem;
  }
`;
