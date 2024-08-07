import React, { useEffect, useState } from "react";
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
import { TbBookUpload, TbTrash } from "react-icons/tb";
import DateConvert from "../../../../../../utils/dateConvert";
import { IProject } from "../../../../../../utils/types/project";
import api from "../../../../../../utils/axiosInstance";
import LoadingAnimation from "../../../../../../components/loading-animation";
import Modal from "../../../../../../components/modal";
import ModalChildTemplate from "../../../../../../components/modal/modal-child-template";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { HiOutlineTrash } from "react-icons/hi";

interface IProps extends IProject {
  refresh: () => void;
}
const ProjectEditItem = ({
  category,
  title,
  description,
  clientName,
  date = new Date(),
  images,
  published = false,
  _id,
  refresh
}: IProps) => {
  const navigate = useNavigate();
  const image = images[0];

  const [isPublished, setIsPublished] = useState(published);
  const [publishLoading, setPublishLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [publishModal, setPublishModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

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
      setSuccessModal(true);
    } catch (err) {
    } finally {
      setDeleting(false);
    }
  };

  const PublishUnPub = async () => {
    try {
      setPublishLoading(true);
      await api.put(`/project/published/${_id}`, { published: !isPublished });
      setPublishModal(false);
      setSuccessModal(true);
      setIsPublished(!isPublished);
    } catch {
    } finally {
      setPublishLoading(false);
    }
  };

  const OnSuccessfullPost = () => {
    setModalActive(false);
    setPublishModal(false);
    setDeleteModal(false);
    setSuccessModal(false);
    refresh();
  };
  function truncateString(str: string) {
    if (str.length > 30) {
      return str.slice(0, 150) + "...";
    }
    return str;
  }

  useEffect(() => {
    if (!modalActive) {
      setSuccessModal(false);
      setPublishModal(false);
    }
  }, [modalActive]);

  return (
    <Container>
      <Modal
        isActive={modalActive}
        closeModal={() => {
          setModalActive(false);
        }}
      >
        {publishModal ? (
          <ModalChildTemplate
            header={`${isPublished ? "Unpublish" : "Publish"} project`}
            subheader={`Are you sure you want to ${
              isPublished ? "unpublish" : "publish"
            } this project?`}
            confirmText={`${isPublished ? "Unpublish" : "Publish"}`}
            onConfirm={PublishUnPub}
            onClose={() => setModalActive(false)}
            loading={publishLoading}
            icon={<TbBookUpload size={25} color="#00365C" />}
          />
        ) : successModal ? (
          <ModalChildTemplate
            header={`${
              !isPublished
                ? "Unpublished"
                : deleteModal
                ? "Deleted"
                : "Published"
            } successfully`}
            confirmText="Confirm"
            onConfirm={OnSuccessfullPost}
            onClose={OnSuccessfullPost}
            icon={<IoMdCheckmarkCircleOutline size={20} color="#079455" />}
            cancelOption={false}
          />
        ) : deleteModal ? (
          <ModalChildTemplate
            header="Delete message"
            subheader="Are you sure you want to delete this message?"
            type="red"
            confirmText="Delete"
            onConfirm={Delete}
            onClose={() => setModalActive(false)}
            loading={deleting}
            icon={<HiOutlineTrash color="#EF0000" size={20} />}
          />
        ) : (
          <></>
        )}
      </Modal>
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
          onClick={() => {
            if(!isPublished){
            setModalActive(true);
            setDeleteModal(true);}
          }}
        >
          {deleting ? <LoadingAnimation /> : <TbTrash size={15} />}
        </DeleteContainer>
      </DeleteDiv>
      <Buttons>
        <PrimaryButton
          text={isPublished ? "Unpublish" : "Publish"}
          variant
          onClick={() => {
            setModalActive(true);
            setPublishModal(true);
          }}
        />
        <PrimaryButton text="Edit" onClick={Edit} />
      </Buttons>
    </Container>
  );
};

export default ProjectEditItem;

const Container = styled.div`
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
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
  margin-bottom: 2.4rem;
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

  @media only screen and (max-width: 769px) {
    grid-template-columns: 100%;
    grid-row-gap: 1.6rem;
  }
`;
