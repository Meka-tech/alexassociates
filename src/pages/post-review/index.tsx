import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Ornament } from "../../images/svg/ornaments/quoteOrnament.svg";
import Typography from "../../components/typography";
import { TextSize, TextWeight } from "../../components/typography/enums";
import BackgroundGrid from "../../components/BackgroundGrid";
import Navbar from "../../components/navbar";
import StyledInput from "../../components/input/primaryInput";
import StyledTextArea from "../../components/input/textArea";
import { TbCamera } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { IimageType } from "../../types/image";
import PrimaryButton from "../../components/buttons/primary";
import { ReactComponent as GoldStar } from "../../images/svg/gold-star.svg";
import { ReactComponent as BlueStar } from "../../images/svg/BlueStar.svg";
import { useNavigate } from "react-router-dom";
import { UploadImage } from "../../services/upload-image";
import api from "../../services/axiosInstance";
import Modal from "../../components/modal";
import ModalChildTemplate from "../../components/modal/modal-child-template";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const PostReview = () => {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [review, setReview] = useState("");
  const [image, setImage] = useState<File>();
  const [rating, setRating] = useState(1);

  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const navigate = useNavigate();
  const AddImage = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      setImage(file);
    }
  };

  const RemoveImage = () => {
    setImage(undefined);
  };

  const PostReview = async () => {
    try {
      setLoading(true);
      let ImageId;
      if (image) {
        ImageId = await UploadImage(image);
      }
      const body = { name, organization, review, rating, image: ImageId };

      await api.post(`/review`, body);
      setModal(true);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      name.length > 0 &&
      organization.length > 0 &&
      review.length > 0 &&
      image
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, organization, review, image]);

  return (
    <Container>
      <Modal isActive={modal} closeModal={() => setModal(false)}>
        <ModalChildTemplate
          header="Review submitted!"
          subheader="Thank you for submitting your review!"
          cancelOption={false}
          icon={<IoMdCheckmarkCircleOutline size={20} color="#079455" />}
          onConfirm={() => {
            setModal(false);
            navigate(-1);
          }}
          onClose={() => {
            setModal(false);
            navigate(-1);
          }}
        />
      </Modal>
      <Navbar />
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
          Leave a review
        </Typography>
        <Typography
          color="#CFCECE"
          size={TextSize.xl}
          lh="3"
          m_lh="2.8"
          m_size={TextSize.lg}
        >
          Tell us about your experience with Alex & Associates
        </Typography>
        <OrnamentContainer>
          <Ornament />
        </OrnamentContainer>
      </TopSection>
      <Body>
        <TwoInputGrid>
          <StyledInput
            label="Full name"
            limit={50}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <StyledInput
            label="Organization"
            limit={50}
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
          />
        </TwoInputGrid>
        <StyledTextArea
          label="Review"
          value={review}
          onChange={(e) => {
            setReview(e.target.value);
          }}
        />
        {image && (
          <ImageContainer>
            <Img
              src={image.size ? URL.createObjectURL(image) : ""}
              alt={image.name}
            />
            <DeleteImageContainer onClick={() => RemoveImage()}>
              <RxCross2 size={18} />
            </DeleteImageContainer>
          </ImageContainer>
        )}
        <UploadContainer>
          <FormInput
            type="file"
            accept="image/*"
            onChange={AddImage}
            multiple={false}
            disabled={image ? true : false}
          />
          <TbCamera size={20} />
          <Typography size={TextSize.md} weight={TextWeight.semibold} ml="0.8">
            Upload image
          </Typography>
        </UploadContainer>
        <StarRatingContainer>
          <Typography size={TextSize.sm} weight={TextWeight.medium} mb="0.6">
            Star rating
          </Typography>
          <GoldStars>
            {new Array(rating).fill(0).map((_, i) => {
              return (
                <Star key={i} onClick={() => setRating(i + 1)}>
                  <GoldStar width={"3.2rem"} height={"3.2rem"} />
                </Star>
              );
            })}
            {new Array(5 - rating).fill(0).map((_, i) => {
              return (
                <Star
                  key={i}
                  onClick={() => {
                    setRating(i + 1 + rating);
                  }}
                >
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
            text="Submit"
            onClick={PostReview}
            loading={loading}
            disabled={disabled}
          />
        </ButtonContainer>
      </Body>
    </Container>
  );
};

export default PostReview;

const Container = styled.main`
  max-width: 100vw;
  min-height: 100vh;
  position: relative;
  padding-top: 8rem;

  @media only screen and (max-width: 769px) {
    padding-top: 7.2rem;
  }
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
  border-top: 1px solid rgba(46, 59, 65, 1);
  padding: 6.4rem 8rem;
  color: white;
  @media only screen and (max-width: 769px) {
    padding: 4.8rem 1.6rem;
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
const UploadContainer = styled.div`
  padding: 1.2rem 2rem;
  border-radius: 8px;
  margin-top: 3.2rem;
  border: 1px solid #d0d5dd;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: fit-content;
  color: #0070c0;
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
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  @media only screen and (max-width: 769px) {
    width: 18rem;
    height: 18rem;
  }
`;
const DeleteImageContainer = styled.div`
  cursor: pointer;
  color: #2ea7ff;
  margin: 1.6rem;
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
const Star = styled.div`
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  margin-top: 4.4rem;
  width: 15.5rem;
  display: grid;
  grid-template-columns: 10.5rem 10.5rem;
  grid-column-gap: 3.2rem;
  @media only screen and (max-width: 769px) {
    width: 100%;
    grid-template-columns: 43% 43%;
    justify-content: space-between;
  }
`;
