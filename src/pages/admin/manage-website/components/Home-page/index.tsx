import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Section from "../section";
import StyledInput from "../../../../../components/input/primaryInput";
import { IClientItem } from "../../../../../utils/types/clientItem";
import LogoArea from "./logos";
import { IimageType } from "../../../../../utils/types/image";
import TopNav from "../top-nav";
import MobileConfirmButtons from "../mobile-confirm";
import api from "../../../../../utils/axiosInstance";
import { UploadImage } from "../../../../../utils/upload-image";
import LoadingData from "../../../../../components/loading-component";
import Typography from "../../../../../components/typography";
import {
  TextSize,
  TextWeight
} from "../../../../../components/typography/enums";
import { RxCross2 } from "react-icons/rx";
import { TbCamera } from "react-icons/tb";

const HomePageEdit = () => {
  const [data, setData] = useState<any>();
  const [loadingData, setLoadingData] = useState(false);
  const [editing, setEditing] = useState(false);
  const [changed, setChanged] = useState(false);

  const [heroSection, setHeroSection] = useState<{
    headline: string;
    subheadline: string;
    keypoint1: string;
    keypoint2: string;
    keypoint3: string;
    slideshow: IimageType[];
  }>({
    headline: "",
    subheadline: "",
    keypoint1: "",
    keypoint2: "",
    keypoint3: "",
    slideshow: []
  });

  const [workedWImages, setWorkedWImages] = useState<
    { image: IimageType; url: string }[]
  >([]);

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
  };

  const AddWeWorkedLogo = (Image: IimageType, url: string) => {
    setChanged(true);
    setWorkedWImages((prev) => {
      return [...prev, { image: Image, url }];
    });
  };

  const addSlideShowImage = (event: any) => {
    setChanged(true);
    const file = event.target.files[0];

    setHeroSection((prev) => ({
      ...prev,
      slideshow: [...prev.slideshow, file]
    }));

    event.target.value = "";
  };

  const removeSlideShowImage = (i: number) => {
    setChanged(true);
    setHeroSection((prev) => ({
      ...prev,
      slideshow: prev.slideshow.filter((image, index) => i !== index)
    }));
  };

  const PostSlideShowImages = async () => {
    try {
      let ImageIds: string[] = [];
      for (let i = 0; i < heroSection.slideshow.length; i++) {
        const image = heroSection.slideshow[i];
        if (image.size) {
          const MediaId = await UploadImage(image);
          ImageIds = [...ImageIds, MediaId];
        } else {
          ImageIds = [...ImageIds, image._id];
        }
      }
      return {
        headline: heroSection.headline,
        subheadline: heroSection.subheadline,
        keypoint1: heroSection.keypoint1,
        keypoint2: heroSection.keypoint2,
        keypoint3: heroSection.keypoint3,
        slideshow: ImageIds
      };
    } catch (err) {}
  };

  const RemoveWeWorkedLogo = (index: number) => {
    setChanged(true);
    const Images = [...workedWImages];
    const filtered = Images.filter((_, i) => i !== index);
    setWorkedWImages([...filtered]);
  };

  const PostWeworkedWithImages = async () => {
    try {
      let ImageIds: { url: string; image: string }[] = [];
      for (let i = 0; i < workedWImages.length; i++) {
        const Image = workedWImages[i].image;
        if (Image.size) {
          const MediaId = await UploadImage(Image);
          ImageIds = [
            ...ImageIds,
            { url: workedWImages[i].url, image: MediaId }
          ];
        } else {
          ImageIds = [
            ...ImageIds,
            { url: workedWImages[i].url, image: Image._id }
          ];
        }
      }

      return [...ImageIds];
    } catch (err) {}
  };

  const PostEdit = async () => {
    try {
      setEditing(true);
      const workedWImages = await PostWeworkedWithImages();
      const heroSection = await PostSlideShowImages();

      const bodyData = {
        heroSection,
        workedWImages,
        portfolioSection,
        resultSection,
        quoteSection
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
            <Typography
              color="#CFCECE"
              mt="6.4"
              mb="1.6"
              size={TextSize.sm}
              weight={TextWeight.medium}
              lh="2"
              m_mt="2.4"
            >
              Slideshow Images
            </Typography>
            <SlideshowImages>
              {heroSection.slideshow?.map((image: IimageType, i) => {
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
                    <DeleteImageContainer
                      onClick={() => {
                        removeSlideShowImage(i);
                      }}
                    >
                      <RxCross2 size={18} />
                    </DeleteImageContainer>
                  </ImageContainer>
                );
              })}
            </SlideshowImages>
            <UploadContainer>
              <FormInput
                type="file"
                accept="image/*"
                onChange={addSlideShowImage}
                multiple={false}
              />
              <TbCamera size={20} />
              <Typography
                size={TextSize.md}
                weight={TextWeight.semibold}
                ml="0.8"
              >
                Upload image
              </Typography>
            </UploadContainer>
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

const SlideshowImages = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 10rem;
  margin-bottom: 1.6rem;
  overflow: auto;
`;

const ImageContainer = styled.div`
  margin-right: 1.6rem;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: contain;
  @media only screen and (max-width: 769px) {
    width: 11rem;
    height: 3.1rem;
  }
`;

const DeleteImageContainer = styled.div`
  cursor: pointer;
  color: #00365c;
  margin-left: 1.6rem;
  @media only screen and (max-width: 769px) {
    margin-left: 0.6rem;
  }
`;

const UploadContainer = styled.div`
  padding: 1.2rem 2rem;
  border-radius: 8px;
  border: 1px solid #0083e2;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: fit-content;
  color: #0083e2;
  position: relative;
  @media only screen and (max-width: 769px) {
    width: 100%;
  }
`;
const FormInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
`;
