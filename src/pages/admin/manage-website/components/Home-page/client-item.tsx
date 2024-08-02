import React, { useState } from "react";
import styled from "styled-components";
import StyledInput from "../../../../../components/input/primaryInput";
import { IClientItem } from "../../../../../utils/types/clientItem";
import Typography from "../../../../../components/typography";
import {
  TextSize,
  TextWeight
} from "../../../../../components/typography/enums";
import StyledTextArea from "../../../../../components/input/textArea";
import PrimaryButton from "../../../../../components/buttons/primary";
import { ReactComponent as GoldStar } from "../../../../../images/svg/gold-star.svg";
import { ReactComponent as BlueStar } from "../../../../../images/svg/BlueStar.svg";
import { TbCamera } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";

interface IProps extends IClientItem {
  index: number;
  handleChange: (index: number, newReview: Partial<IClientItem>) => void;
  remove: (index: number) => void;
}

const ClientItem = ({
  name,
  organization,
  review,
  rating = 1,
  index,
  image,
  handleChange,
  remove
}: IProps) => {
  const AddImage = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      handleChange(index, { image: file });
    }
  };

  const RemoveImage = () => {
    handleChange(index, { image: undefined });
  };

  return (
    <Container>
      <Typography mb="3.2" weight={TextWeight.medium} size={TextSize.DisplaySm}>
        Client {index + 1}
      </Typography>
      <TwoInputGrid>
        <StyledInput
          label="Client name"
          value={name}
          onChange={(e) => handleChange(index, { name: e.target.value })}
        />
        <StyledInput
          label="Organization"
          value={organization}
          onChange={(e) =>
            handleChange(index, { organization: e.target.value })
          }
        />
      </TwoInputGrid>
      <StyledTextArea
        label="Review"
        value={review}
        onChange={(e) => handleChange(index, { review: e.target.value })}
      />
      {image && (
        <ImageContainer>
          <Img
            src={
              image.fileId
                ? `https://drive.google.com/thumbnail?id=${image.fileId}&sz=w1000`
                : URL.createObjectURL(image)
            }
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
              <Star
                key={i}
                onClick={() => handleChange(index, { rating: i + 1 })}
              >
                <GoldStar width={"3.2rem"} height={"3.2rem"} />
              </Star>
            );
          })}
          {new Array(5 - rating).fill(0).map((_, i) => {
            return (
              <Star
                key={i}
                onClick={() => handleChange(index, { rating: i + 1 + rating })}
              >
                <BlueStar width={"3.2rem"} height={"3.2rem"} />
              </Star>
            );
          })}
        </GoldStars>
      </StarRatingContainer>
      <ButtonContainer>
        <PrimaryButton
          danger={true}
          text="Delete review"
          onClick={() => remove(index)}
        />
      </ButtonContainer>
    </Container>
  );
};

export default ClientItem;

const Container = styled.div`
  width: 100%;
  padding: 3.2rem 0;
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
  color: #cfcece;
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
  @media only screen and (max-width: 769px) {
    width: 100%;
  }
`;
