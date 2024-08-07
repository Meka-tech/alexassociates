import React, { useState } from "react";
import styled from "styled-components";
import { FlexBox } from "../../../components/container-styles/styles";
import BackgroundGrid from "../../../components/BackgroundGrid";
import Typography from "../../../components/typography";
import { TextSize, TextWeight } from "../../../components/typography/enums";
import PrimaryButton from "../../../components/buttons/primary";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowRightUpLine } from "react-icons/ri";
import { ReactComponent as Glow } from "../../../images/svg/glow/about-glow.svg";

interface IProps {
  data: { headline: string; subheadline: string };
}
const PortfolioSection = ({ data }: IProps) => {
  const [sliderOffset, setSliderOffset] = useState(0);

  const PortfolioList = [
    {
      title: "Interior design",
      content:
        "Transforming interior spaces with innovative and aesthetic design solutions.",
      link: "/portfolio?key=interior-design",
      image:
        "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&"
    },
    {
      title: "Architecture",
      content:
        "Crafting bespoke architectural plans for individual houses and villas.",
      link: "/portfolio?key=architectural-design",
      image:
        "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&"
    },
    {
      title: "Furniture",
      content:
        "Creating and selecting custom furniture and decor to enhance your space.",
      link: "/portfolio?key=furniture-furnishing",
      image:
        "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&"
    },
    {
      title: "Project Execution",
      content:
        "Ensuring seamless implementation of designs with expert supervision and quality materials.",
      link: "/portfolio?key=project-execution",
      image:
        "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&"
    }
  ];

  const SlideLeft = () => {
    if (sliderOffset !== 0) {
      setSliderOffset(sliderOffset - 1);
    }
  };
  const SlideRight = () => {
    if (sliderOffset < PortfolioList.length - 1) {
      setSliderOffset(sliderOffset + 1);
    }
  };
  const navigate = useNavigate();
  return (
    <Container>
      <BackgroundGrid
        web={{ width: "1780px", height: "1380px" }}
        mobile={{ width: "1100px", height: "1100px" }}
      />
      <SectionHeader>
        <HeaderTextContainer>
          <Typography
            size={TextSize.DisplayMd}
            weight={TextWeight.semibold}
            m_size={TextSize.DisplaySm}
            mb="2"
            m_mb="1.6"
          >
            {data?.headline || "We’ve helped hundreds of global clients"}
          </Typography>
          <Typography size={TextSize.xl} lh="3" m_size={TextSize.lg}>
            {data?.subheadline ||
              ` Discover how Alex & Associates transforms spaces with expert
            interior and architectural design. From elegant interiors to
            comprehensive architectural solutions, our portfolio reflects our
            commitment to innovation and quality.`}
          </Typography>
        </HeaderTextContainer>
        <HeaderButtonContainer>
          {/* <PrimaryButton text="Our customers" variant={true} /> */}
          <PrimaryButton
            text="View portfolio"
            onClick={() => navigate("/portfolio")}
          />
        </HeaderButtonContainer>
      </SectionHeader>
      <Slider>
        <Items offset={sliderOffset}>
          {PortfolioList.map(({ title, content, link, image }, i) => {
            return (
              <PortfolioItem
                key={i}
                title={title}
                content={content}
                link={link}
                image={image}
              />
            );
          })}
        </Items>
        <Buttons>
          <Button onClick={SlideLeft} disabled={sliderOffset === 0}>
            <IoMdArrowBack size={25} />
          </Button>
          <Button
            onClick={SlideRight}
            disabled={sliderOffset === PortfolioList.length - 1}
          >
            <IoMdArrowForward size={25} />
          </Button>
        </Buttons>
      </Slider>
      <BackgroundGlowDiv>
        <Glow />
      </BackgroundGlowDiv>
    </Container>
  );
};

const PortfolioItem = ({
  title,
  content,
  link,
  image
}: {
  title: string;
  content: string;
  link: string;
  image: string;
}) => {
  return (
    <ItemContainer>
      <ItemImage src={image} alt={title} />
      <ItemInnerContainer>
        <Typography
          size={TextSize.DisplaySm}
          m_size={TextSize.DisplayXs}
          weight={TextWeight.semibold}
          mb="1.6"
        >
          {title}
        </Typography>
        <Typography
          size={TextSize.md}
          lh="2.8"
          weight={TextWeight.medium}
          mb="3.2"
        >
          {content}
        </Typography>
        <LinkText to={link}>
          <Typography weight={TextWeight.semibold} size={TextSize.md} mr="0.8">
            View Projects
          </Typography>
          <RiArrowRightUpLine size={20} />
        </LinkText>
      </ItemInnerContainer>
    </ItemContainer>
  );
};

export default PortfolioSection;

const Container = styled.div`
  padding-bottom: 9.6rem;
  border-top: 1px solid rgba(46, 59, 65, 1);
  border-bottom: 1px solid rgba(46, 59, 65, 1);
  margin-bottom: 0.8rem;
  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 769px) {
    padding-bottom: 6rem;
  }
`;

const SectionHeader = styled(FlexBox)`
  align-items: start;
  color: white;
  margin: 0rem 8rem;
  margin-bottom: 6.4rem;
  margin-top: 9.6rem;
  @media only screen and (max-width: 769px) {
    flex-direction: column;
    margin: 0rem 1.6rem;
    margin-top: 6.1rem;
    margin-bottom: 4.8rem;
  }
`;

const HeaderTextContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 769px) {
    width: 100%;
  }
`;

const HeaderButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 18.5rem;
  grid-column-gap: 1.2rem;
  @media only screen and (max-width: 769px) {
    width: 100%;
    margin-top: 3.2rem;
    grid-template-columns: 100%;
    grid-column-gap: 0rem;
    grid-row-gap: 1.2rem;
  }
`;

const Slider = styled.div`
  width: fit-content;
  overflow: hidden;
  margin-left: 8rem;
  @media only screen and (max-width: 769px) {
    margin-left: 1.6rem;
  }
`;

const Items = styled.div<{ offset: number }>`
  width: fit-content;
  display: flex;
  align-items: center;
  transform: ${(props) => `translateX(${-41.6 * props.offset}rem )`};
  transition: all ease-in-out 0.4s;
  @media only screen and (max-width: 769px) {
    transform: ${(props) => `translateX(${-32.8 * props.offset}rem )`};
  }
`;

const ItemContainer = styled.div`
  border-radius: 1.2rem;
  height: 50.4rem;
  width: 38.4rem;
  background-color: gray;
  margin-right: 3.2rem;
  padding: 2.4rem;
  display: flex;
  align-items: end;
  position: relative;
  z-index: 1;
  @media only screen and (max-width: 769px) {
    height: 47.2rem;
    width: 30.4rem;
    margin-right: 2.4rem;
  }
`;
const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;
const ItemInnerContainer = styled.div`
  width: 100%;
  padding: 3.2rem 2.4rem;
  background-color: rgba(0, 22, 33, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 0.8rem;
  backdrop-filter: blur(5px);
  color: white;
  z-index: 2;
  position: relative;
`;

const LinkText = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
const Buttons = styled.div`
  display: grid;
  margin-top: 3.2rem;
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

const BackgroundGlowDiv = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 769px) {
    /* bottom: -50%; */
    width: 250%;
  }
`;
