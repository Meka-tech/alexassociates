import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Slideshow = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(0);
  const [visible, setIsVisible] = useState(true);

  useEffect(() => {
    const Next = () => {
      setIsVisible(false);
      const current = index;
      setTimeout(() => {
        if (current < images.length - 1) {
          setIndex(current + 1);
        } else {
          setIndex(0);
        }
      }, 300);
      setTimeout(() => {
        setIsVisible(true);
      }, 500);
    };

    const interval = setInterval(() => {
      Next();
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length, index]);

  return (
    <Container>
      <ImageArea isvisible={visible ? "true" : "false"}>
        <ImageItem src={images[index]} alt={`${index}`} />
      </ImageArea>
    </Container>
  );
};

export default Slideshow;

const Container = styled.div`
  width: 100%;
  background-color: rgba(0, 10, 15, 1);
  height: 44.7rem;
  border-radius: 16px;
  @media only screen and (max-width: 769px) {
    height: 27.2rem;
    border-radius: 0px;
  }
`;

const ImageArea = styled.div<{ isvisible: string }>`
  height: 100%;
  width: 100%;
  overflow: hidden;
  margin-bottom: 2.4rem;
  opacity: ${(props) => (props.isvisible === "true" ? 1 : 0)};
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
