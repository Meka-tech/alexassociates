import React from "react";
import styled from "styled-components";

import { LuArrowUpRight } from "react-icons/lu";

import { useNavigate } from "react-router-dom";
import Typography from "../../../../../../components/typography";
import {
  TextSize,
  TextWeight
} from "../../../../../../components/typography/enums";
import { FlexBox } from "../../../../../../components/container-styles/styles";
import PrimaryButton from "../../../../../../components/buttons/primary";
import { TbTrash } from "react-icons/tb";
import DateConvert from "../../../../../../utils/dateConvert";

interface IProps {
  service: string;
  title: string;
  description: string;
  author: string;
  date?: Date;
  image: string;
  id: string;
  published?: boolean;
}
const ProjectEditItem = ({
  service,
  title,
  description,
  author,
  date = new Date(),
  image,
  published = false,
  id
}: IProps) => {
  const navigate = useNavigate();

  const Edit = () => {
    navigate(`/admin/manage-website/edit-project/${id}`);
  };

  const Delete = async () => {
    if (published) {
      return;
    }
  };

  const PublishUnPub = async () => {
    if (published) {
      //unpublish
    } else {
      //publish
    }
  };
  return (
    <Container>
      <ImageContainer src={image} alt={title} />
      <Typography
        color="rgba(0, 131, 226, 1)"
        size={TextSize.sm}
        weight={TextWeight.semibold}
        mb="0.8"
        lh="2"
      >
        {service}
      </Typography>
      <FlexBox style={{ marginBottom: "0.8rem" }}>
        <Typography
          color="rgba(250, 250, 250, 1)"
          size={TextSize.DisplayXs}
          m_size={TextSize.xl}
          weight={TextWeight.semibold}
          lh="3.2"
          m_lh="3"
        >
          {title}
        </Typography>
        <LuArrowUpRight size={30} />
      </FlexBox>
      <Typography
        color="rgba(228, 228, 228, 1)"
        size={TextSize.md}
        mb="2.4"
        lh="2.4"
      >
        {description}
      </Typography>
      <DeleteDiv>
        <div>
          <Typography
            color="rgba(250, 250, 250, 1)"
            size={TextSize.sm}
            weight={TextWeight.semibold}
            lh="2"
          >
            {author}
          </Typography>
          <Typography color="rgba(228, 228, 228, 1)" size={TextSize.sm} lh="2">
            {DateConvert(date)}
          </Typography>
        </div>
        <DeleteContainer
          published={published ? "false" : "true"}
          onClick={Delete}
        >
          <TbTrash size={15} />
        </DeleteContainer>
      </DeleteDiv>
      <Buttons>
        <PrimaryButton
          text={published ? "Unpublish" : "Publish"}
          variant
          onClick={PublishUnPub}
        />
        <PrimaryButton text="Edit" onClick={Edit} />
      </Buttons>
    </Container>
  );
};

export default ProjectEditItem;

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: white;
`;

const ImageContainer = styled.img`
  width: 100%;
  height: 24rem;
  border-radius: 1.6rem;
  object-fit: cover;
  margin-bottom: 2.4rem;
  background-color: gray;
`;

const DeleteDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DeleteContainer = styled.div<{ published: string }>`
  cursor: pointer;
  background-color: ${(props) =>
    props.published === "true" ? "#EF0000" : "  #2e3b41"};
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 0.6rem;
  border: 1px solid
    ${(props) => (props.published === "true" ? "white" : "#787878")};
  color: ${(props) => (props.published === "true" ? "white" : "#787878")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Buttons = styled.div`
  margin-top: auto;
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 48% 48%;
  margin-top: 2.4rem;
  @media only screen and (max-width: 769px) {
    grid-template-columns: 100%;
    grid-row-gap: 1.6rem;
  }
`;
