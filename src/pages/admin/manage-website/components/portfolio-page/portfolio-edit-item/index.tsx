import React, { useState } from "react";
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
import { IProject } from "../../../../../../utils/types/project";
import api from "../../../../../../utils/axiosInstance";
import LoadingAnimation from "../../../../../../components/loading-animation";

const ProjectEditItem = ({
  category,
  title,
  description,
  clientName,
  date = new Date(),
  images,
  published = false,
  _id
}: IProject) => {
  const navigate = useNavigate();
  const image = images[0];

  const [isPublished, setIsPublished] = useState(published);
  const [publishLoading, setPublishLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const Edit = () => {
    navigate(`/admin/manage-website/edit-project/${_id}`);
  };

  const Delete = async () => {
    if (isPublished) {
      return;
    }
    try {
      setDeleting(true);
      await api.delete(`/project/${_id}`);
      window.location.reload();
    } catch (err) {
    } finally {
      setDeleting(false);
    }
  };

  const PublishUnPub = async () => {
    try {
      setPublishLoading(true);
      await api.put(`/project/published/${_id}`, { published: !isPublished });
      setIsPublished(!isPublished);
    } catch {
    } finally {
      setPublishLoading(false);
    }
  };

  function truncateString(str: string) {
    if (str.length > 30) {
      return str.slice(0, 150) + "...";
    }
  }

  return (
    <Container>
      <ImageContainer
        src={`https://drive.google.com/thumbnail?id=${image.fileId}&sz=w1000`}
        alt={image.name}
      />
      <Typography
        color="rgba(0, 131, 226, 1)"
        size={TextSize.sm}
        weight={TextWeight.semibold}
        mb="0.8"
        lh="2"
      >
        {category}
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
        {truncateString(description)}
      </Typography>
      <DeleteDiv>
        <div>
          <Typography
            color="rgba(250, 250, 250, 1)"
            size={TextSize.sm}
            weight={TextWeight.semibold}
            lh="2"
          >
            {clientName}
          </Typography>
          <Typography color="rgba(228, 228, 228, 1)" size={TextSize.sm} lh="2">
            {DateConvert(date)}
          </Typography>
        </div>
        <DeleteContainer
          published={isPublished ? "false" : "true"}
          onClick={Delete}
        >
          {deleting ? <LoadingAnimation /> : <TbTrash size={15} />}
        </DeleteContainer>
      </DeleteDiv>
      <Buttons>
        <PrimaryButton
          text={isPublished ? "Unpublish" : "Publish"}
          variant
          onClick={PublishUnPub}
          loading={publishLoading}
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
  cursor: ${(props) => (props.published === "true" ? "pointer" : "unset")};
  background-color: ${(props) =>
    props.published === "true" ? "#EF0000" : "#2e3b41"};
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
