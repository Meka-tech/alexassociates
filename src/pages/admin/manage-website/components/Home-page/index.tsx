import React, { useState } from "react";
import styled from "styled-components";
import Section from "../section";
import StyledInput from "../../../../../components/input/primaryInput";
import { IClientItem } from "../../../../../utils/types/clientItem";
import ClientItem from "./client-item";
import PrimaryButton from "../../../../../components/buttons/primary";
import LogoArea from "./logos";
import { IimageType } from "../../../../../utils/types/image";

const HomePageEdit = () => {
  const [heroSection, setHeroSection] = useState({
    headline: "Beautiful, Practical and Sustainable Spaces by Design",
    subheadline:
      "Discover the Art of Elegant Design and Innovative Architecture with Alex & Associates.",
    keypoint1: "Expert craftsmanship and innovative design",
    keypoint2: "Tailored solutions for every space",
    keypoint3: "Unmatched quality and client satisfaction"
  });

  const [workedWImages, setWorkedWImages] = useState<IimageType[]>([]);

  const [portfolioSection, setPortfolioSection] = useState({
    headline: "We’ve helped hundreds of global clients",
    subheadline:
      "Discover how Alex & Associates transforms spaces with expert interior and architectural design. From elegant interiors to comprehensive architectural solutions, our portfolio reflects our commitment to innovation and quality.ssociates."
  });

  const [resultSection, setResultSection] = useState({
    headline: "Great results, better than ever",
    subheadline: "Everything others do we do it better  :)",
    metric1: "Projects completed",
    metric2: "Return on investment",
    metric3: "Satisfied clients",
    figure1: "Great results, better than ever",
    figure2: "Everything others do we do it better  :)",
    figure3: "Everything others do we do it better  :)"
  });

  const [quoteSection, setQuoteSection] = useState({
    headline: "Apply for a Quote",
    subheadline:
      "Ready to transform your space? Fill out our quick form to receive a personalized quote tailored to your needs. Lets bring your vision to life!"
  });

  const [reviewSection, setReviewSection] = useState<{
    headline: string;
    reviews: IClientItem[];
  }>({
    headline: "What our clients say about us",
    reviews: [
      {
        name: "Lulu Meyers",
        organization: "PM, Hourglass",
        review:
          "Alex & Associates has saved us thousands of hours of work. We’re able to spin up projects and features faster.",
        rating: 5,
        image: undefined
      }
    ]
  });

  const handleInputChange = (key: string, value: string, object: string) => {
    if (object === "hero") {
      setHeroSection((prevSection) => ({
        ...prevSection,
        [key]: value
      }));
    }
    if (object === "portfolio") {
      setPortfolioSection((prevSection) => ({
        ...prevSection,
        [key]: value
      }));
    }
    if (object === "result") {
      setResultSection((prevSection) => ({
        ...prevSection,
        [key]: value
      }));
    }
    if (object === "quote") {
      setQuoteSection((prevSection) => ({
        ...prevSection,
        [key]: value
      }));
    }
    if (object === "review") {
      setReviewSection((prevSection) => ({
        ...prevSection,
        [key]: value
      }));
    }
  };

  const handleReviewChange = (
    index: number,
    newReview: Partial<IClientItem>
  ) => {
    setReviewSection((prevSection) => ({
      ...prevSection,
      reviews: prevSection.reviews.map((review, i) =>
        i === index ? { ...review, ...newReview } : review
      )
    }));
  };

  const AddWeWorkedLogo = (Image: IimageType) => {
    setWorkedWImages((prev) => {
      return [...prev, Image];
    });
  };

  const RemoveWeWorkedLogo = (index: number) => {
    const Images = [...workedWImages];
    const filtered = Images.filter((_, i) => i !== index);
    setWorkedWImages([...filtered]);
  };

  const AddReview = () => {
    setReviewSection((prev) => ({
      ...prev,
      reviews: [
        ...prev.reviews,
        {
          name: "",
          organization: "",
          review: "",
          rating: 0,
          image: undefined
        }
      ]
    }));
  };

  const RemoveReview = (index: number) => {
    setReviewSection((prevSection) => ({
      ...prevSection,
      reviews: prevSection.reviews.filter((_, i) => i !== index)
    }));
  };
  return (
    <Container>
      <Section
        header="Hero section"
        subheader="Brief introduction to the website."
      >
        <TwoInputGrid>
          <StyledInput
            label="Headline"
            limit={60}
            value={heroSection.headline}
            onChange={(e) =>
              handleInputChange("headline", e.target.value, "hero")
            }
          />
          <StyledInput
            label="Sub headline"
            limit={120}
            value={heroSection.subheadline}
            onChange={(e) =>
              handleInputChange("subheadline", e.target.value, "hero")
            }
          />
        </TwoInputGrid>
        <ThreeInputGrid>
          <StyledInput
            label="Key point 1"
            value={heroSection.keypoint1}
            onChange={(e) =>
              handleInputChange("keypoint1", e.target.value, "hero")
            }
          />
          <StyledInput
            label="Key point 2"
            value={heroSection.keypoint2}
            onChange={(e) =>
              handleInputChange("keypoint2", e.target.value, "hero")
            }
          />
          <StyledInput
            label="Key point 3"
            value={heroSection.keypoint3}
            onChange={(e) =>
              handleInputChange("keypoint3", e.target.value, "hero")
            }
          />
        </ThreeInputGrid>
      </Section>
      <LogoArea
        images={workedWImages}
        addImage={AddWeWorkedLogo}
        removeImage={RemoveWeWorkedLogo}
      />
      <Section
        header="Portfolio section"
        subheader="Section made to introduce users to the works of Alex & Associates."
      >
        <TwoInputGrid>
          <StyledInput
            label="Headline"
            limit={50}
            value={portfolioSection.headline}
            onChange={(e) =>
              handleInputChange("headline", e.target.value, "portfolio")
            }
          />
          <StyledInput
            label="Sub headline"
            limit={250}
            value={portfolioSection.subheadline}
            onChange={(e) =>
              handleInputChange("subheadline", e.target.value, "portfolio")
            }
          />
        </TwoInputGrid>
      </Section>
      <Section
        header="Results section"
        subheader="Our friendly team would love to hear from you."
      >
        <TwoInputGrid>
          <StyledInput
            label="Headline"
            limit={50}
            value={resultSection.headline}
            onChange={(e) =>
              handleInputChange("headline", e.target.value, "result")
            }
          />
          <StyledInput
            label="Sub headline"
            limit={50}
            value={resultSection.subheadline}
            onChange={(e) =>
              handleInputChange("subheadline", e.target.value, "result")
            }
          />
        </TwoInputGrid>
        <ThreeInputGrid>
          <StyledInput
            label="Metric 1"
            value={resultSection.metric1}
            onChange={(e) =>
              handleInputChange("metric1", e.target.value, "result")
            }
            limit={30}
          />
          <StyledInput
            label="Metric 2"
            value={resultSection.metric2}
            onChange={(e) =>
              handleInputChange("metric2", e.target.value, "result")
            }
            limit={30}
          />
          <StyledInput
            label="Metric 3"
            value={resultSection.metric3}
            onChange={(e) =>
              handleInputChange("metric3", e.target.value, "result")
            }
            limit={30}
          />
        </ThreeInputGrid>
        <ThreeInputGrid>
          <StyledInput
            label="Figure 1"
            value={resultSection.figure1}
            onChange={(e) =>
              handleInputChange("figure1", e.target.value, "result")
            }
          />
          <StyledInput
            label="Figure 2"
            value={resultSection.figure2}
            onChange={(e) =>
              handleInputChange("figure2", e.target.value, "result")
            }
          />
          <StyledInput
            label="Figure 3"
            value={resultSection.figure3}
            onChange={(e) =>
              handleInputChange("figure3", e.target.value, "result")
            }
          />
        </ThreeInputGrid>
      </Section>
      <Section
        header="Quote section"
        subheader="Section made to encourage visitors to apply for a quote."
      >
        <TwoInputGrid>
          <StyledInput
            label="Headline"
            limit={50}
            value={quoteSection.headline}
            onChange={(e) =>
              handleInputChange("headline", e.target.value, "quote")
            }
          />
          <StyledInput
            label="Sub headline"
            limit={250}
            value={quoteSection.subheadline}
            onChange={(e) =>
              handleInputChange("subheadline", e.target.value, "quote")
            }
          />
        </TwoInputGrid>
      </Section>
      <Section
        header="Client reviews"
        subheader="Section made to upload client reviews"
      >
        <div style={{ marginBottom: "3.2rem" }}>
          <StyledInput
            label="Headline"
            limit={50}
            value={reviewSection.headline}
            onChange={(e) =>
              handleInputChange("headline", e.target.value, "review")
            }
          />
        </div>
        {reviewSection.reviews.map((review, i) => {
          return (
            <ClientItem
              remove={RemoveReview}
              {...review}
              key={i}
              index={i}
              handleChange={handleReviewChange}
            />
          );
        })}
        <ButtonContainer>
          <PrimaryButton text="Add Review" variant={true} onClick={AddReview} />
        </ButtonContainer>
      </Section>
    </Container>
  );
};

export default HomePageEdit;

const Container = styled.div`
  width: 100%;
`;

const TwoInputGrid = styled.div`
  width: 100%;
  display: grid;
  align-items: start;
  justify-content: space-between;
  grid-template-columns: 48% 48%;
  grid-row-gap: 2.4rem;
  margin-bottom: 2.4rem;
  @media only screen and (max-width: 769px) {
    grid-template-columns: 100%;
  }
`;
const ThreeInputGrid = styled(TwoInputGrid)`
  grid-template-columns: 32% 31% 32%;
  @media only screen and (max-width: 769px) {
    grid-template-columns: 100%;
  }
`;

const ButtonContainer = styled.div`
  margin-left: auto;
  width: 15.5rem;
  @media only screen and (max-width: 769px) {
    width: 100%;
  }
`;
