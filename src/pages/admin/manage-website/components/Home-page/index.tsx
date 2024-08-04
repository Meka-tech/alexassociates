import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Section from "../section";
import StyledInput from "../../../../../components/input/primaryInput";
import { IClientItem } from "../../../../../utils/types/clientItem";
import ClientItem from "./client-item";
import PrimaryButton from "../../../../../components/buttons/primary";
import LogoArea from "./logos";
import { IimageType } from "../../../../../utils/types/image";
import TopNav from "../top-nav";
import MobileConfirmButtons from "../mobile-confirm";
import api from "../../../../../utils/axiosInstance";
import { UploadImage } from "../../../../../utils/upload-image";
import LoadingData from "../../../../../components/loading-component";

const HomePageEdit = () => {
  const [data, setData] = useState<any>();
  const [loadingData, setLoadingData] = useState(false);
  const [editing, setEditing] = useState(false);
  const [changed, setChanged] = useState(false);

  const [heroSection, setHeroSection] = useState({
    headline: "",
    subheadline: "",
    keypoint1: "",
    keypoint2: "",
    keypoint3: ""
  });

  const [workedWImages, setWorkedWImages] = useState<IimageType[]>([]);

  const [portfolioSection, setPortfolioSection] = useState({
    headline: "",
    subheadline: ""
  });

  const [resultSection, setResultSection] = useState({
    headline: "",
    subheadline: "",
    metric1: "",
    metric2: "",
    metric3: "",
    figure1: "",
    figure2: "",
    figure3: ""
  });

  const [quoteSection, setQuoteSection] = useState({
    headline: "",
    subheadline: ""
  });

  const [reviewSection, setReviewSection] = useState<{
    headline: string;
    reviews: IClientItem[];
  }>({
    headline: "",
    reviews: []
  });

  const handleInputChange = (key: string, value: string, object: string) => {
    setChanged(true);
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
    setChanged(true);
    setReviewSection((prevSection) => ({
      ...prevSection,
      reviews: prevSection.reviews.map((review, i) =>
        i === index ? { ...review, ...newReview } : review
      )
    }));
  };

  const AddWeWorkedLogo = (Image: IimageType) => {
    setChanged(true);
    setWorkedWImages((prev) => {
      return [...prev, Image];
    });
  };

  const RemoveWeWorkedLogo = (index: number) => {
    setChanged(true);
    const Images = [...workedWImages];
    const filtered = Images.filter((_, i) => i !== index);
    setWorkedWImages([...filtered]);
  };

  const AddReview = () => {
    setChanged(true);
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
    setChanged(true);
    setReviewSection((prevSection) => ({
      ...prevSection,
      reviews: prevSection.reviews.filter((_, i) => i !== index)
    }));
  };

  const PostWeworkedWithImages = async () => {
    try {
      let ImageIds: string[] = [];
      for (let i = 0; i < workedWImages.length; i++) {
        const Image = workedWImages[i];
        if (Image.size) {
          const MediaId = await UploadImage(Image);
          ImageIds = [...ImageIds, MediaId];
        } else {
          ImageIds = [...ImageIds, Image._id];
        }
      }

      return [...ImageIds];
    } catch (err) {}
  };

  const PostReviewImages = async () => {
    try {
      let reviews: {
        name?: string;
        organization?: string;
        review?: string;
        rating?: number;
        image?: string;
      }[] = [];
      for (let i = 0; i < reviewSection.reviews.length; i++) {
        const review = reviewSection.reviews[i];

        if (review.image?.size) {
          const MediaId = await UploadImage(review.image);
          const newReviewItem = { ...review, image: MediaId };

          reviews = [...reviews, newReviewItem];
        } else if (review.image?._id) {
          const newReviewItem = { ...review, image: review.image._id };
          reviews = [...reviews, newReviewItem];
        }
      }
      return { headline: reviewSection.headline, reviews };
    } catch (err) {}
  };

  const PostEdit = async () => {
    try {
      setEditing(true);
      const workedWImages = await PostWeworkedWithImages();
      const reviewSection = await PostReviewImages();
      const bodyData = {
        heroSection,
        workedWImages,
        portfolioSection,
        resultSection,
        quoteSection,
        reviewSection
      };
      const { data } = await api.put(`/home`, bodyData);

      setData(data.home);
      SetOGData();
    } catch (error) {
    } finally {
      setEditing(false);
    }
  };

  const getHome = async () => {
    setLoadingData(true);
    try {
      const { data } = await api.get("/home");
      const HomeData = data.home;
      setData(HomeData);
    } catch (err) {
    } finally {
      setLoadingData(false);
    }
  };

  const SetOGData = () => {
    setLoadingData(true);
    setHeroSection(data?.heroSection);
    setPortfolioSection(data?.portfolioSection);
    setResultSection(data?.resultSection);
    setQuoteSection(data?.quoteSection);
    setReviewSection(data?.reviewSection);
    setWorkedWImages(data?.workedWImages);
    setLoadingData(false);
  };

  useEffect(() => {
    getHome();
  }, []);

  useEffect(() => {
    if (data) {
      SetOGData();
    }
  }, [data]);

  return (
    <Container>
      <TopNav
        save={PostEdit}
        saving={editing}
        changed={changed}
        discard={SetOGData}
      />
      {loadingData ? (
        <LoadingData />
      ) : (
        <>
          {" "}
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
              <PrimaryButton
                text="Add Review"
                variant={true}
                onClick={AddReview}
              />
            </ButtonContainer>
          </Section>
        </>
      )}

      <MobileConfirmButtons
        save={PostEdit}
        saving={editing}
        changed={changed}
        discard={SetOGData}
      />
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
