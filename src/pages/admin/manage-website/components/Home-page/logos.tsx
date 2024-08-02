import React from "react";
import styled from "styled-components";
import Typography from "../../../../../components/typography";
import {
  TextSize,
  TextWeight
} from "../../../../../components/typography/enums";
import { RxCross2 } from "react-icons/rx";
import { IimageType } from "../../../../../utils/types/image";
import { TbCamera } from "react-icons/tb";

interface IProps {
  images: IimageType[];
  addImage: (image: IimageType) => void;
  removeImage: (index: number) => void;
}
const LogoArea = ({ images, addImage, removeImage }: IProps) => {
  const AddImage = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      addImage(file);
    }
  };

  return (
    <Container>
      <BannerArea>
        <Typography
          align="center"
          size={TextSize.md}
          lh="2.4"
          mb="3.2"
          weight={TextWeight.medium}
        >
          We’ve worked with the best
        </Typography>
        <ImageArea>
          {images.map((image, i) => {
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
                    removeImage(i);
                  }}
                >
                  <RxCross2 size={18} />
                </DeleteImageContainer>
              </ImageContainer>
            );
          })}
        </ImageArea>
      </BannerArea>
      <Body>
        <Typography
          weight={TextWeight.medium}
          size={TextSize.DisplayMd}
          m_size={TextSize.DisplayXs}
          lh="4.4"
          mb="1.6"
          m_lh="3.2"
        >
          Add Logo
        </Typography>
        <UploadContainer>
          <FormInput
            type="file"
            accept=".png"
            onChange={AddImage}
            multiple={false}
          />
          <TbCamera size={20} />
          <Typography size={TextSize.md} weight={TextWeight.semibold} ml="0.8">
            Upload image
          </Typography>
        </UploadContainer>
        <Typography color="#475467" size={TextSize.sm} lh="2" mt="0.6">
          PNG documents only*
        </Typography>
      </Body>
    </Container>
  );
};

export default LogoArea;

const Container = styled.div`
  width: 100%;
`;

const BannerArea = styled.div`
  background-color: white;
  padding-top: 2.4rem;
  padding-bottom: 9.6rem;
  @media only screen and (max-width: 769px) {
    padding-top: 2rem;
    padding-bottom: 5.5rem;
  }
`;

const ImageArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 0.8rem;
  @media only screen and (max-width: 769px) {
    padding: 0 1.4rem;
  }
`;

const ImageContainer = styled.div`
  margin-right: 1.6rem;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: 16.7rem;
  height: 4.8rem;
  object-fit: cover;
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

const Body = styled.div`
  width: 100%;
  padding: 6.8rem 9.6rem;
  color: #fafafa;
  @media only screen and (max-width: 769px) {
    padding: 3.2rem 1.6rem;
    text-align: center;
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
