import React, { useState } from "react";
import styled from "styled-components";
import Typography from "../../../components/typography";
import { TextSize, TextWeight } from "../../../components/typography/enums";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import PlaceholderImage from "../../../images/png/reviewPlaceholder.png";
import { FlexBox } from "../../../components/container-styles/styles";
import { ReactComponent as GoldStar } from "../../../images/svg/gold-star.svg";
import { ReactComponent as WhiteStar } from "../../../images/svg/white-star.svg";
import { ReactComponent as ReviewOrnament } from "../../../images/svg/ornaments/reviewOrnament.svg";

const ReviewSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const DummyData = [
    {
      name: "John Doe",
      rating: 4,
      comment:
        "Alex & Associates provided exceptional service, significantly improving our workflow efficiency.",
      role: "developer",
      company: "Tech Solutions",
      companyType: "Software Development Firm",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb"
    },
    {
      name: "Lulu Meyers",
      rating: 5,
      comment:
        "Alex & Associates has saved us thousands of hours of work. We’re able to spin up projects and features faster.",
      role: "pm",
      company: "Hourglass",
      companyType: "Web Design Agency",
      image:
        "https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg?auto=compress&cs=tinysrgb"
    },

    {
      name: "Jane Smith",
      rating: 5,
      comment:
        "Working with Alex & Associates has been a game-changer for us. Their expertise is unmatched.",
      role: "cto",
      company: "Innovative Creations",
      companyType: "Product Development",
      image:
        "https://images.pexels.com/photos/6962024/pexels-photo-6962024.jpeg?auto=compress&cs=tinysrgb"
    }
  ];

  const SlideLeft = () => {
    if (activeIndex !== 0) {
      setActiveIndex(activeIndex - 1);
    }
  };
  const SlideRight = () => {
    if (activeIndex < DummyData.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };
  const Review = DummyData[activeIndex];
  return (
    <Container>
      <Ornament>
        <ReviewOrnament />
      </Ornament>
      <Typography
        weight={TextWeight.semibold}
        size={TextSize.DisplayMd}
        m_size={TextSize.DisplaySm}
        align="center"
        mb="6.4"
        m_mb="4.8"
      >
        What our clients say about us
      </Typography>
      <Body>
        <TextArea>
          <GoldStars>
            {new Array(Review.rating).fill(0).map((_, i) => {
              return <GoldStar key={i} />;
            })}
          </GoldStars>
          <Typography
            size={TextSize.DisplayLg}
            m_size={TextSize.DisplayXs}
            weight={TextWeight.medium}
            mb="4.8"
            m_mb="3.2"
            lh="6"
            m_lh="3.2"
          >
            {Review.comment}
          </Typography>
          <TextAreaFooter>
            <div>
              <Typography
                size={TextSize.lg}
                weight={TextWeight.semibold}
                mb="0.4"
                lh="2.8"
              >
                {Review.name}
              </Typography>
              <Typography size={TextSize.md} lh="2.4" m_mb="2.4">
                {Review.company}
              </Typography>
            </div>
            <Buttons>
              <Button onClick={SlideLeft} disabled={activeIndex === 0}>
                <IoMdArrowBack size={25} />
              </Button>
              <Button
                onClick={SlideRight}
                disabled={activeIndex === DummyData.length - 1}
              >
                <IoMdArrowForward size={25} />
              </Button>
            </Buttons>
          </TextAreaFooter>
        </TextArea>
        <ImageArea>
          <ImagesArray offset={activeIndex}>
            {DummyData.map((review, i) => {
              return (
                <Image
                  key={i}
                  src={review.image}
                  alt={`${review.name}-images`}
                />
              );
            })}
          </ImagesArray>

          <ImageAreaFooter>
            <IAFHeader>
              <Typography
                weight={TextWeight.semibold}
                size={TextSize.DisplayLg}
                m_size={TextSize.DisplayMd}
                lh="6"
                m_lh="4.4"
              >
                {Review.name}
              </Typography>
              <WhiteStars>
                {new Array(Review.rating).fill(0).map((_, i) => {
                  return <WhiteStar key={i} />;
                })}
              </WhiteStars>
            </IAFHeader>
            <Typography size={TextSize.md} mb="0.2" lh="2.8">
              {Review.role}, {Review.company}
            </Typography>
            <Typography size={TextSize.md} lh="2.4">
              {Review.companyType}
            </Typography>
          </ImageAreaFooter>
        </ImageArea>
      </Body>
    </Container>
  );
};

export default ReviewSection;

const Container = styled.div`
  border-top: 1px solid rgba(46, 59, 65, 1);
  border-bottom: 1px solid rgba(46, 59, 65, 1);
  padding: 9.6rem 11.2rem;
  color: white;
  position: relative;
  @media only screen and (max-width: 769px) {
    padding: 6.4rem 1.6rem;
  }
`;

const Ornament = styled.div`
  position: absolute;
  top: 4.9rem;
  left: 4.5rem;
  width: 33.5rem;
  height: 33.2rem;
  @media only screen and (max-width: 769px) {
    display: none;
  }
`;

const Body = styled.div`
  width: 100%;
  padding: 6.4rem;
  background: #0133503b;
  border: 1px solid #0496ff;
  border-radius: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(8px);
  @media only screen and (max-width: 769px) {
    flex-direction: column;
    padding: 0rem 1.6rem;
    background-color: transparent;
    border: none;
  }
`;

const TextArea = styled.div`
  width: 45%;
  @media only screen and (max-width: 769px) {
    width: 100%;
    margin-bottom: 4.8rem;
  }
`;
const GoldStars = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-column-gap: 0.4rem;
  margin-bottom: 3.2rem;
  width: fit-content;
  @media only screen and (max-width: 769px) {
    margin-bottom: 2.4rem;
  }
`;

const TextAreaFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 769px) {
    flex-direction: column;
    align-items: start;
  }
`;

const Buttons = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 3.2rem;
  width: fit-content;
  @media only screen and (max-width: 769px) {
    grid-column-gap: 1.6rem;
  }
`;

const Button = styled.button<{ disabled: boolean }>`
  all: unset;
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.disabled ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 1)"};
  border: 1px solid
    ${(props) =>
      props.disabled ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 1)"};
  color: rgba(102, 112, 133, 1);
  cursor: pointer;
  transition: all ease-in-out 0.1s;
  outline: none;
  &:hover {
  }
  @media only screen and (max-width: 769px) {
    width: 4.8rem;
    height: 4.8rem;
  }
`;

const ImageArea = styled.div`
  height: 72rem;
  width: 45%;
  background-color: transparent;
  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 769px) {
    height: 56rem;
    width: 100%;
  }
`;

const ImagesArray = styled.div<{ offset: number }>`
  height: 72rem;
  width: 100%;
  display: flex;
  align-items: center;
  transform: ${(props) => `translateX(${-100 * props.offset}% )`};
  transition: all ease-in-out 0.4s;
  @media only screen and (max-width: 769px) {
    height: 56rem;
    width: 100%;
  }
`;

const Image = styled.img`
  object-fit: fill;
  width: 100%;
`;

const ImageAreaFooter = styled.div`
  background-color: rgba(197, 195, 195, 0.7);
  backdrop-filter: blur(8px);
  width: 100%;
  padding: 3.2rem;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
`;

const IAFHeader = styled(FlexBox)`
  align-items: start;
  margin-bottom: 1.2rem;
  @media only screen and (max-width: 769px) {
    flex-direction: column-reverse;
    margin-bottom: 0.8rem;
  }
`;

const WhiteStars = styled(GoldStars)`
  margin-bottom: 0rem;
  width: fit-content;
  @media only screen and (max-width: 769px) {
    margin-bottom: 1.6rem;
  }
`;
