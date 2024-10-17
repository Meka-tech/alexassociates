import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../../../../components/navbar";
import Footer from "../../../../components/footer";
import BackgroundGrid from "../../../../components/BackgroundGrid";
import Typography from "../../../../components/typography";
import { TextSize, TextWeight } from "../../../../components/typography/enums";
import PrimaryButton from "../../../../components/buttons/primary";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import StyledInput from "../../../../components/input/primaryInput";
import Dropdown from "../../../../components/input/dropdown";
import Label from "../../../../components/typography/label";
import StyledTextArea from "../../../../components/input/textArea";
import DateInput from "../../../../components/input/date_input";
import { TbCamera } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { companyservices } from "../../../../constants/company-services";
import api from "../../../../services/axiosInstance";
import { UploadImage } from "../../../../services/upload-image";
import Modal from "../../../../components/modal";
import ModalChildTemplate from "../../../../components/modal/modal-child-template";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import VideoThumbnail from "../../../../components/video-thumbnail";

const UploadProject = () => {
  const navigate = useNavigate();

  const [active, setActive] = useState("portfolio");

  const [images, setImages] = useState<File[]>([]);
  // const [imagesId, setImagesId] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [clientName, setClientName] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState<Date | null>(new Date());
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [modalActive, setModalActive] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const AddImage = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      setImages((prev) => [...prev, file]);
    }
  };

  const RemoveImage = (item: File) => {
    const arr = images;
    const filtered = arr.filter((i: File) => i.name !== item.name);
    setImages(filtered);
  };

  const Back = () => {
    navigate(-1);
  };

  const Button = ({
    text,
    active,
    setActive
  }: {
    text: string;
    active: boolean;
    setActive: () => void;
  }) => {
    return (
      <ButtonContainer
        isactive={active ? "true" : "false"}
        onClick={() => {
          setActive();
        }}
      >
        <Typography
          size={TextSize.md}
          m_size={TextSize.xs}
          weight={TextWeight.semibold}
          lh="2.4"
        >
          {text}
        </Typography>
      </ButtonContainer>
    );
  };

  const ImageItem = ({ image }: { image: File }) => {
    return (
      <ImageContainer>
        <Img src={URL.createObjectURL(image)} alt={image.name} />
        <DeleteImageContainer onClick={() => RemoveImage(image)}>
          <RxCross2 size={18} />
        </DeleteImageContainer>
      </ImageContainer>
    );
  };

  const VideoItem = ({ video }: { video: File }) => {
    return (
      <ImageContainer>
        <ThumbnailContainer>
          <VideoIcon>
            <IoVideocam size={16} />
          </VideoIcon>
          <VideoThumbnail videoFile={video} />
        </ThumbnailContainer>
        <DeleteImageContainer onClick={() => RemoveImage(video)}>
          <RxCross2 size={18} />
        </DeleteImageContainer>
      </ImageContainer>
    );
  };

  const PostImages = async () => {
    try {
      let ImageIds: string[] = [];
      for (let i = 0; i < images.length; i++) {
        const file = images[i];
        const MediaId = await UploadImage(file);

        ImageIds = [...ImageIds, MediaId];
      }
      return ImageIds;
    } catch (err) {}
  };

  const PostProject = async () => {
    setLoading(true);
    try {
      const imageIds = await PostImages();
      let Body = {
        title,
        category,
        description,
        clientName,
        date,
        images: imageIds
      };

      await api.post("/project", Body);
      setUpdateModal(false);
      setSuccessModal(true);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };
  const OnSuccessfullPost = () => {
    setModalActive(false);
    setSuccessModal(false);
    navigate("/admin/manage-website?key=portfolio");
  };

  useEffect(() => {
    if (!modalActive) {
      setSuccessModal(false);
      setUpdateModal(false);
    }
  }, [modalActive]);

  useEffect(() => {
    if (
      title.length > 0 &&
      category.length > 0 &&
      description.length > 0 &&
      clientName.length > 0 &&
      date &&
      images.length > 0
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [title, clientName, category, description, date, images]);

  return (
    <Main>
      <Navbar />
      <TopNav>
        <Buttons>
          <Button
            text="Home page"
            active={active === "home"}
            setActive={() => navigate("/admin/manage-website?key=home")}
          />
          <Button
            text="About page"
            active={active === "about"}
            setActive={() => navigate("/admin/manage-website?key=about")}
          />
          <Button
            text="Our services"
            active={active === "services"}
            setActive={() => navigate("/admin/manage-website?key=services")}
          />
          <Button
            text="Portfolio"
            active={active === "portfolio"}
            setActive={() => {}}
          />
        </Buttons>
      </TopNav>
      <TopSection>
        <BackgroundGrid
          web={{ height: "1440px", width: "1920px" }}
          mobile={{ height: "720px", width: "960px" }}
        />
        <BackButton onClick={Back}>
          <FaArrowLeft size={10} />
          <Typography size={TextSize.md} ml="1">
            Back
          </Typography>
        </BackButton>
        <Typography
          size={TextSize.DisplayLg}
          weight={TextWeight.semibold}
          lh="6"
          mb="2.4"
          m_mb="1.8"
          m_lh="4.4"
          m_size={TextSize.DisplayMd}
        >
          Upload project
        </Typography>
        <Typography color="#CFCECE" size={TextSize.xl} lh="3">
          Fill in the input fields with necessary information and upload
          pictures or videos.
        </Typography>
      </TopSection>
      <Modal
        isActive={modalActive}
        closeModal={() => {
          setModalActive(false);
        }}
      >
        {updateModal ? (
          <ModalChildTemplate
            header="Upload project"
            subheader="Are you sure you want to upload this project?"
            confirmText="Upload"
            onConfirm={PostProject}
            onClose={() => setModalActive(false)}
            loading={loading}
            icon={<MdOutlineFileUpload size={25} color="#00365C" />}
          />
        ) : successModal ? (
          <ModalChildTemplate
            header="Uploaded successfully!"
            confirmText="Confirm"
            onConfirm={OnSuccessfullPost}
            onClose={OnSuccessfullPost}
            icon={<IoMdCheckmarkCircleOutline size={20} color="#079455" />}
            cancelOption={false}
          />
        ) : (
          <></>
        )}
      </Modal>
      <Body>
        <TextGrid>
          <StyledInput
            label="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <div>
            <Label>Category</Label>
            <Dropdown
              placeholder="Select"
              items={companyservices}
              selectItem={(value) => {
                setCategory(value);
              }}
            />
          </div>
        </TextGrid>
        <TextArea>
          <StyledTextArea
            label="Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </TextArea>
        <TextGrid>
          <StyledInput
            label="Client name"
            limit={50}
            value={clientName}
            onChange={(e) => {
              setClientName(e.target.value);
            }}
          />
          <div>
            <Label>Date</Label>
            <DateInput selectDate={(date) => setDate(date)} />
          </div>
        </TextGrid>
        {images.length > 0 && (
          <ImagesContainer>
            {images.map((media, i) => {
              if (media.type.includes("video")) {
                return <VideoItem key={i} video={media} />;
              } else {
                return <ImageItem image={media} key={i} />;
              }
            })}
          </ImagesContainer>
        )}
        <UploadContainer>
          <FormInput
            type="file"
            accept="image/*,video/*"
            onChange={AddImage}
            multiple={false}
          />
          <TbCamera size={20} />
          <Typography size={TextSize.md} weight={TextWeight.semibold} ml="0.8">
            Upload image/video
          </Typography>
        </UploadContainer>
        <ButtonGrid>
          <PrimaryButton danger={true} text="Discard" onClick={Back} />
          <PrimaryButton
            text="Upload project"
            onClick={() => {
              setModalActive(true);
              setUpdateModal(true);
            }}
            disabled={disabled}
          />
        </ButtonGrid>
      </Body>
      <Footer />
    </Main>
  );
};

export default UploadProject;

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

const ButtonContainer = styled.div<{ isactive: string }>`
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
  padding: 2rem 8rem;
  margin-bottom: 0.8rem;
  color: white;
  overflow: hidden;
  @media only screen and (max-width: 769px) {
    padding: 1.9rem 3.2rem;
  }
`;

const BackButton = styled.div`
  cursor: pointer;
  margin-bottom: 8.5rem;
  color: #0083e2;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 769px) {
    margin-bottom: 3.2rem;
  }
`;

const Body = styled.div`
  padding: 3.2rem 9.2rem;
  @media only screen and (max-width: 769px) {
    padding: 3.2rem 1.6rem;
    padding-bottom: 6.2rem;
  }
`;

const TextGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 45% 45%;
  align-items: start;
  justify-content: space-between;
  margin-bottom: 3.2rem;
  @media only screen and (max-width: 769px) {
    grid-template-columns: 100%;
    grid-row-gap: 3.2rem;
  }
`;
const TextArea = styled.div`
  margin-bottom: 3.2rem;
`;

const UploadContainer = styled.div`
  padding: 1.2rem 2rem;
  border-radius: 8px;
  border: 1px solid #d0d5dd;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: fit-content;
  color: #cfcece;
  position: relative;
  z-index: 0;
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

const ImagesContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  display: flex;
  align-items: center;
  margin-bottom: 4.8rem;
  &::-webkit-scrollbar {
    background-color: transparent;
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #2ea8ff29;
    border-radius: 16px;
  }
`;
const ImageContainer = styled.div`
  margin-right: 3.2rem;
  display: flex;
  align-items: start;
`;

const Img = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
`;
const DeleteImageContainer = styled.div`
  cursor: pointer;
  color: #2ea7ff;
  margin: 1.6rem;
`;
const ButtonGrid = styled.div`
  display: grid;
  margin-top: 3.2rem;
  grid-template-columns: 15.4rem max-content;
  grid-column-gap: 3.2rem;

  @media only screen and (max-width: 769px) {
    grid-template-columns: 16.2rem 16.2rem;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-top: 4.8rem;
  }
`;

const ThumbnailContainer = styled.div`
  width: 10rem;
  height: 10rem;
  position: relative;
`;

const VideoIcon = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: rgba(4, 150, 255, 1);
  z-index: 2;
  background-color: white;
  padding: 0.5rem;
  border-radius: 50%;
`;
