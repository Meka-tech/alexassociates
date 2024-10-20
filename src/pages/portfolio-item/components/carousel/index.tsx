import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FlexBox } from "../../../../components/container-styles/styles";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { IimageType } from "../../../../types/image";

const Carousel = ({ images }: { images: IimageType[] }) => {
  const [index, setIndex] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const Previous = () => {
    const current = index;
    if (current !== 0) {
      setIndex(current - 1);
    }
  };

  const Next = () => {
    const current = index;
    if (current < images.length - 1) {
      setIndex(current + 1);
    }
  };

  useEffect(() => {
    setIndex(0);
  }, [images]);

  const reloadIframe = () => {
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src;
    }
  };

  useEffect(() => {
    for (let i = 0; i < images.length; i++) {
      if (images[i].type.includes("video") && i !== index) {
        console.log("now");
        reloadIframe();
      }
    }
  }, [index, images]);

  return (
    <Container>
      <ImageArea>
        <ImageArray index={index}>
          {images.map((media, i) => {
            if (media.type.includes("video")) {
              return (
                <VideoItem>
                  <iframe
                    ref={iframeRef}
                    src={`https://drive.google.com/file/d/${media.fileId}/preview`}
                    width="100%"
                    height="100%"
                    allow="autoplay"
                    allowFullScreen
                    title="Google Drive Video"
                    frameBorder="0"
                  ></iframe>
                </VideoItem>
              );
            } else {
              return (
                <ImageItem
                  src={`https://drive.google.com/thumbnail?id=${media.fileId}&sz=w1000`}
                  alt={media.name}
                  key={i}
                />
              );
            }
          })}
        </ImageArray>
      </ImageArea>
      <Flex>
        <Button onClick={Previous}>
          <FiArrowLeft size={20} />
        </Button>
        <ActiveCircles>
          {images.map((img, i) => {
            return (
              <ActiveCircle isactive={i === index ? "true" : "false"} key={i} />
            );
          })}
        </ActiveCircles>
        <Button onClick={Next}>
          <FiArrowRight size={20} />
        </Button>
      </Flex>
    </Container>
  );
};

export default Carousel;

const Container = styled.div`
  padding: 0rem 11.2rem;
  margin-bottom: 2.4rem;
  margin-top: 6.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 769px) {
    padding: 0rem 1.6rem;
  }
`;

const ImageArea = styled.div`
  height: 68.2rem;
  width: 100%;
  border-radius: 1.6rem;
  overflow: hidden;
  margin-bottom: 2.4rem;
  @media only screen and (max-width: 769px) {
    margin-bottom: 2rem;
    height: 33.2rem;
  }
`;

const ImageArray = styled.div<{ index: number }>`
  width: 100%;
  height: 68.2rem;
  display: flex;
  align-items: center;
  transform: ${(props) => `translateX(${-100 * props.index}% )`};
  transition: ease-in-out 0.3s all;
  @media only screen and (max-width: 769px) {
    height: 33.2rem;
  }
`;

const ImageItem = styled.img`
  min-width: 100%;
  object-fit: cover;
  background-color: gray;
  height: 100%;
  @media only screen and (max-width: 769px) {
  }
`;
const VideoItem = styled.div`
  min-width: 100%;
  object-fit: cover;
  background-color: gray;
  height: 100%;
`;

const Flex = styled(FlexBox)`
  width: 100%;
`;

const Button = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: rgba(102, 112, 133, 1);
  border-radius: 50%;
  width: 5.6rem;
  height: 5.6rem;
  @media only screen and (max-width: 769px) {
    width: 3.6rem;
    height: 3.6rem;
  }
`;

const ActiveCircles = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
`;

const ActiveCircle = styled.div<{ isactive: string }>`
  width: ${(props) => (props.isactive === "true" ? "2.4rem" : "1.6rem")};
  height: ${(props) => (props.isactive === "true" ? "2.4rem" : "1.6rem")};
  border-radius: 50%;
  transition: ease-in-out 0.3s all;
  margin-right: 0.8rem;
  background-color: ${(props) =>
    props.isactive === "true"
      ? "rgba(250, 250, 250, 1)"
      : "rgba(165, 161, 161, 1)"};

  @media only screen and (max-width: 769px) {
    width: ${(props) => (props.isactive === "true" ? "2rem" : "1.4rem")};
    height: ${(props) => (props.isactive === "true" ? "2rem" : "1.4rem")};
  }
`;
