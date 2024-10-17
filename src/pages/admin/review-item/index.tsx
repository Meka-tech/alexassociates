import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { useNavigate, useParams } from "react-router-dom";
import Typography from "../../../components/typography";
import { TextSize, TextWeight } from "../../../components/typography/enums";
import { ReactComponent as Ornament } from "../../../images/svg/ornaments/quoteOrnament.svg";
import BackgroundGrid from "../../../components/BackgroundGrid";
import PrimaryButton from "../../../components/buttons/primary";
import api from "../../../services/axiosInstance";
import LoadingData from "../../../components/loading-component";
import { IReview } from "../../../types/review";
import StyledInput from "../../../components/input/primaryInput";
import StyledTextArea from "../../../components/input/textArea";
import { ReactComponent as GoldStar } from "../../../images/svg/gold-star.svg";
import { ReactComponent as BlueStar } from "../../../images/svg/BlueStar.svg";

const Review = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState<IReview | null>();
  const [loading, setLoading] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [published, setPublished] = useState(false);

  const GetReview = async () => {
    setLoading(true);
    try {
      const { data } = await api.get(`/review/${id}`);
      setReview(data.data.review);
      setPublished(data.data.review.published);
    } catch (err) {
      navigate("/admin/manage-website");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetReview();
  }, []);

  const PublishReview = async () => {
    try {
      setPublishing(true);
      await api.put(`/review/publish/${id}`, { publish: !published });
      setPublished(!published);
    } catch (err) {
    } finally {
      setPublishing(false);
    }
  };

  const image = review?.image;

  return (
    <Main>
      <Navbar />
      <TopNav>
        <Buttons>
          <Button isactive={"false"}>
            <Typography
              size={TextSize.md}
              weight={TextWeight.semibold}
              lh="2.4"
            >
              Message
            </Typography>
          </Button>
          <Button
            isactive={"false"}
            onClick={() => {
              navigate("/admin/user-requests?key=quote");
            }}
          >
            <Typography
              size={TextSize.md}
              weight={TextWeight.semibold}
              lh="2.4"
            >
              Quote
            </Typography>
          </Button>
          <Button isactive={"true"}>
            <Typography
              size={TextSize.md}
              weight={TextWeight.semibold}
              lh="2.4"
            >
              Reviews
            </Typography>
          </Button>
        </Buttons>
      </TopNav>

      {loading ? (
        <LoadingData />
      ) : (
        <>
          <TopSection>
            <BackgroundGrid
              web={{ height: "1440px", width: "1920px" }}
              mobile={{ height: "720px", width: "960px" }}
            />
            <Typography
              size={TextSize.DisplayLg}
              weight={TextWeight.semibold}
              lh="6"
              mb="2.4"
              m_mb="1.8"
              m_lh="4.4"
              m_size={TextSize.DisplayMd}
            >
              Review
            </Typography>
            <TextFlex>
              <Typography
                weight={TextWeight.semibold}
                size={TextSize.xl}
                lh="3"
              >
                Name:{" "}
              </Typography>
              <Typography ml="1" size={TextSize.xl} lh="3">
                {review?.name}
              </Typography>
            </TextFlex>
            <TextFlex>
              <Typography
                weight={TextWeight.semibold}
                size={TextSize.xl}
                lh="3"
              >
                organization
              </Typography>
              <Typography ml="1" size={TextSize.xl} lh="3">
                {review?.organization}
              </Typography>
            </TextFlex>

            <OrnamentContainer>
              <Ornament />
            </OrnamentContainer>
          </TopSection>
          <Body>
            <TwoInputGrid>
              <StyledInput
                label="Full name"
                value={review?.name || ""}
                disabled
              />
              <StyledInput
                label="Organization"
                value={review?.organization || ""}
                disabled
              />
            </TwoInputGrid>
            <StyledTextArea
              label="Review"
              value={review?.review || ""}
              disabled
            />
            {image && (
              <ImageContainer>
                <Img
                  src={`https://drive.google.com/thumbnail?id=${image.fileId}&sz=w1000`}
                  alt={image.name}
                />
              </ImageContainer>
            )}

            <StarRatingContainer>
              <Typography
                size={TextSize.sm}
                weight={TextWeight.medium}
                mb="0.6"
                color="white"
              >
                Star rating
              </Typography>
              <GoldStars>
                {new Array(review?.rating).fill(0).map((_, i) => {
                  return (
                    <Star key={i}>
                      <GoldStar width={"3.2rem"} height={"3.2rem"} />
                    </Star>
                  );
                })}
                {new Array(5 - (review?.rating || 0)).fill(0).map((_, i) => {
                  return (
                    <Star key={i}>
                      <BlueStar width={"3.2rem"} height={"3.2rem"} />
                    </Star>
                  );
                })}
              </GoldStars>
            </StarRatingContainer>
            <ButtonContainer>
              <PrimaryButton
                text="Back"
                variant
                onClick={() => {
                  navigate(-1);
                }}
              />
              <PrimaryButton
                text={published ? "Unpublish Review" : "Publish Review"}
                onClick={PublishReview}
                loading={publishing}
              />
            </ButtonContainer>
          </Body>
        </>
      )}

      <Footer />
    </Main>
  );
};

export default Review;

const Main = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  position: relative;
  padding-top: 8rem;

  @media only screen and (max-width: 769px) {
    padding-top: 8rem;
  }
`;
const TopNav = styled.div`
  width: 100%;
  border-bottom: 1px solid #2e3b41;
  padding: 1.2rem 11.2rem;
  margin-bottom: 0.8rem;
  @media only screen and (max-width: 769px) {
    padding: 1.2rem 1.6rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.div<{ isactive: string }>`
  cursor: pointer;
  color: white;
  background-color: ${(props) =>
    props.isactive === "true" ? "#00365C" : "transparent"};
  border: ${(props) =>
    props.isactive === "true" ? "1px solid #00365C" : "1px solid white"};
  padding: 0.8rem 1.2rem;
  border-radius: 0.6rem;
  margin-right: 0.8rem;
  transition: all 0.2s ease-in-out;
`;

const TopSection = styled.div`
  position: relative;
  border-bottom: 1px solid rgba(46, 59, 65, 1);
  border-top: 1px solid rgba(46, 59, 65, 1);
  padding: 6.4rem 8rem;
  margin-bottom: 0.8rem;
  color: white;
  overflow: hidden;
  @media only screen and (max-width: 769px) {
    padding: 1.9rem 1.6rem;
  }
`;
const TextFlex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.4rem;
  color: #cfcece;
`;
const OrnamentContainer = styled.div`
  position: absolute;
  top: 5.2rem;
  right: 3.6rem;
  width: 23.9rem;
  height: 14rem;
  transform: rotate(180deg);
  @media only screen and (max-width: 769px) {
    top: 1.6rem;
    right: -1rem;
    width: 10.9rem;
    height: 6.4rem;
  }
`;

const Body = styled.div`
  padding: 6.4rem 8rem;
  @media only screen and (max-width: 769px) {
    padding: 2.7rem 1.6rem;
    padding-bottom: 6.2rem;
  }
`;

const TwoInputGrid = styled.div`
  width: 100%;
  display: grid;
  align-items: start;
  justify-content: space-between;
  grid-template-columns: 48% 48%;
  grid-row-gap: 6.4rem;
  margin-bottom: 2.4rem;
  @media only screen and (max-width: 769px) {
    grid-template-columns: 100%;
  }
`;
const ImageContainer = styled.div`
  margin-top: 3.2rem;
  display: flex;
  align-items: start;
  @media only screen and (max-width: 769px) {
    width: 100%;
    justify-content: center;
  }
`;

const Img = styled.img`
  width: 14rem;
  height: 14rem;
  object-fit: cover;
  @media only screen and (max-width: 769px) {
    width: 18rem;
    height: 18rem;
  }
`;

const StarRatingContainer = styled.div`
  margin-top: 3.2rem;
`;
const GoldStars = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-column-gap: 0.8rem;
  margin-bottom: 3.2rem;
  width: fit-content;
`;
const Star = styled.div``;

const ButtonContainer = styled.div`
  margin-top: 4.4rem;
  width: 15.5rem;
  display: grid;
  grid-template-columns: 10.5rem 20rem;
  grid-column-gap: 3.2rem;
  @media only screen and (max-width: 769px) {
    width: 100%;
    grid-template-columns: 43% 43%;
    justify-content: space-between;
  }
`;
