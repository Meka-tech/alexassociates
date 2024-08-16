import React from "react";
import styled from "styled-components";
import Typography from "../../../components/typography";
import { TextSize, TextWeight } from "../../../components/typography/enums";
import { IimageType } from "../../../utils/types/image";

interface IProps {
  images: { image: IimageType; url: string }[];
}
const AssociateSection = ({ images }: IProps) => {
  return (
    <Container>
      <Typography size={TextSize.md} weight={TextWeight.medium} mb="3.2">
        We’ve worked with the best
      </Typography>
      <ImageArea>
        {images?.map(({ image, url }, i) => {
          return (
            <ImageContainer key={i}>
              <Img
                onClick={() => {
                  window.open(`https://${url}`, "_blank");
                }}
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
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 0.8rem;
  @media only screen and (max-width: 769px) {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    grid-column-gap: 3.2rem;
    grid-row-gap: 1.6rem;
    padding: 0 3.5rem;
  }
`;

const ImageContainer = styled.div`
  margin-right: 2.7rem;
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;
  @media only screen and (max-width: 769px) {
    margin-right: 0;
    margin-bottom: 0;
  }
`;

const Img = styled.img`
  width: 16.7rem;
  height: 4.8rem;
  object-fit: scale-down;
  cursor: pointer;
  @media only screen and (max-width: 769px) {
    width: 12.75rem;
    height: 3.6rem;
  }
`;
