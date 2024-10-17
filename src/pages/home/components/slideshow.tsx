import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IimageType } from "../../../types/image";

const Slideshow = ({ images }: { images: IimageType[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const Next = () => {
      const current = index;
      setTimeout(() => {
        if (current < images.length - 1) {
          setIndex(current + 1);
        } else {
          setIndex(0);
        }
      }, 100);
    };

    const interval = setInterval(() => {
      Next();
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length, index]);

  return (
    <Container>
      <ImageArea>
        <ImageItem
          src={`https://drive.google.com/thumbnail?id=${images[index]?.fileId}&sz=w1000`}
          alt={images[index]?.name}
        />
      </ImageArea>
    </Container>
  );
};

export default Slideshow;

const Container = styled.div`
  width: 100%;

  background-color: transparent;
  height: 44.7rem;
  border-radius: 16px;
  @media only screen and (max-width: 769px) {
    height: 27.2rem;
    border-radius: 0px;
  }
`;

const ImageArea = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  margin-bottom: 2.4rem;
  transition: ease-in-out 0.3s all;
  border-radius: 1.6rem;
  @media only screen and (max-width: 769px) {
    margin-bottom: 2rem;
    height: 33.2rem;
    border-radius: 0;
  }
`;

const ImageItem = styled.img`
  min-width: 100%;
  object-fit: cover;
  background-color: gray;
  height: 100%;
  transition: ease-in-out 0.3s all;
  @media only screen and (max-width: 769px) {
  }
`;
