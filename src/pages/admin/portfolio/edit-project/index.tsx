import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../../../../components/navbar";
import Footer from "../../../../components/footer";
import BackgroundGrid from "../../../../components/BackgroundGrid";
import Typography from "../../../../components/typography";
import { TextSize, TextWeight } from "../../../../components/typography/enums";
import PrimaryButton from "../../../../components/buttons/primary";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import StyledInput from "../../../../components/input/primaryInput";
import Dropdown from "../../../../components/input/dropdown";
import Label from "../../../../components/typography/label";
import StyledTextArea from "../../../../components/input/textArea";
import DateInput from "../../../../components/input/date_input";
import { TbCamera } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import DateConvert from "../../../../utils/dateConvert";
import { companyservices } from "../../../../utils/company-services";
import api from "../../../../utils/axiosInstance";
import { IProject } from "../../../../utils/types/project";
import { IimageType } from "../../../../utils/types/image";
import LoadingData from "../../../../components/loading-component";
import { UploadImage } from "../../../../utils/upload-image";
import VideoThumbnail from "../../../../components/video-thumbnail";
import { IoVideocam } from "react-icons/io5";

const EditProject = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [active] = useState("portfolio");
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState<IProject>();
  const [disabled, setDisabled] = useState(true);

  const [buttonLoading, setButtonLoading] = useState(false);

  const [images, setImages] = useState<IimageType[]>([]);
  const [newImages, setNewImages] = useState<File[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [clientName, setClientName] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState<Date | null>(null);

  const Back = () => {
    navigate(-1);
  };

  const AddImage = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      setNewImages((prev) => [...prev, file]);
    }
  };

  const RemoveOldImage = (item: IimageType) => {
    const arr = images;
    const filtered = arr.filter((i: IimageType) => i.name !== item.name);
    setImages(filtered);
  };

  const RemoveNewImage = (item: File) => {
    const arr = newImages;
    const filtered = arr.filter((i: File) => i.name !== item.name);
    setNewImages(filtered);
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const { data } = await api.get(`/project/${id}`);

        setProject(data.data.project);
      } catch (err) {
        navigate("/portfolio");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [id]);

  useEffect(() => {
    if (project) {
      setTitle(project.title);
      setDescription(project.description);
      setClientName(project.clientName);
      setDate(project.date);
      setCategory(project.category);
      setImages(project.images);
    }
  }, [project]);

  const PostImages = async () => {
    try {
      //already uploaded images
      let OldImageIds: string[] = [];
      for (let i = 0; i < images.length; i++) {
        OldImageIds = [...OldImageIds, images[i]._id];
      }
      //images not yet uploaded
      let ImageIds: string[] = [];
      for (let i = 0; i < newImages.length; i++) {
        const file = newImages[i];
        const MediaId = await UploadImage(file);
        ImageIds = [...ImageIds, MediaId];
      }

      return [...OldImageIds, ...ImageIds];
    } catch (err) {}
  };

  const PostEdit = async () => {
    setButtonLoading(true);
    try {
      const imageIds = await PostImages();
      const data = {
        title,
        category,
        description,
        clientName,
        date,
        images: imageIds
      };
      await api.put(`/project/${project?._id}`, data);
      navigate("/admin/manage-website?key=portfolio");
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    ////can't have an empty input
    if (
      title.length > 0 &&
      category.length > 0 &&
      description.length > 0 &&
      clientName.length > 0 &&
      date &&
      (images.length > 0 || newImages.length > 0)
    ) {
      //make sure theres a change
      if (
        title === project?.title &&
        description === project?.description &&
        category === project?.category &&
        clientName === project?.clientName &&
        date === project?.date &&
        description === project?.description &&
        images === project.images &&
        newImages.length < 1
      ) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    } else {
      setDisabled(true);
    }
  }, [
    title,
    clientName,
    category,
    description,
    date,
    images,
    newImages,
    project
  ]);

  /////////////////////////////////////////
  //////////////////////////////////////////////
  /////////////////////////////////////////////

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

  const OldImageItem = ({ image }: { image: IimageType }) => {
    return (
      <ImageContainer>
        <Img
          src={`https://drive.google.com/thumbnail?id=${image.fileId}&sz=w1000`}
          alt={image.name}
        />
        <DeleteImageContainer onClick={() => RemoveOldImage(image)}>
          <RxCross2 size={18} />
        </DeleteImageContainer>
      </ImageContainer>
    );
  };

  const OldVideoItem = ({ image }: { image: IimageType }) => {
    return (
      <ImageContainer>
        <ThumbnailContainer>
          <VideoIcon>
            <IoVideocam size={16} />
          </VideoIcon>
          <Img
            src={`https://drive.google.com/thumbnail?id=${image.fileId}&sz=w1000`}
            alt={image.name}
          />
        </ThumbnailContainer>
        <DeleteImageContainer onClick={() => RemoveOldImage(image)}>
          <RxCross2 size={18} />
        </DeleteImageContainer>
      </ImageContainer>
    );
  };

  const NewImageItem = ({ image }: { image: File }) => {
    return (
      <ImageContainer>
        <Img src={URL.createObjectURL(image)} alt={image.name} />
        <DeleteImageContainer onClick={() => RemoveNewImage(image)}>
          <RxCross2 size={18} />
        </DeleteImageContainer>
      </ImageContainer>
    );
  };

  const NewVideoItem = ({ video }: { video: File }) => {
    return (
      <ImageContainer>
        <ThumbnailContainer>
          <VideoIcon>
            <IoVideocam size={16} />
          </VideoIcon>
          <VideoThumbnail videoFile={video} />
        </ThumbnailContainer>
        <DeleteImageContainer onClick={() => RemoveNewImage(video)}>
          <RxCross2 size={18} />
        </DeleteImageContainer>
      </ImageContainer>
    );
  };

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
          Edit project
        </Typography>
        <Typography color="#CFCECE" size={TextSize.xl} lh="3">
          Fill in the input fields with necessary information and upload
          pictures or videos.
        </Typography>
      </TopSection>

      {loading ? (
        <LoadingData />
      ) : project ? (
        <Body>
          <TextGrid>
            <StyledInput
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div>
              <Label>Category</Label>
              <Dropdown
                placeholder={category}
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
              onChange={(e) => setDescription(e.target.value)}
            />
          </TextArea>
          <TextGrid>
            <StyledInput
              label="Client name"
              limit={30}
              value={clientName}
              onChange={(e) => {
                setClientName(e.target.value);
              }}
            />
            <div>
              <Label>Date</Label>
              <DateInput
                placeholder={DateConvert(date)}
                selectDate={(date) => setDate(date)}
              />
            </div>
          </TextGrid>
          {(images.length > 0 || newImages.length > 0) && (
            <ImagesContainer>
              {images.map((media, i) => {
                if (media.type.includes("video")) {
                  return <OldVideoItem image={media} key={i} />;
                } else {
                  return <OldImageItem image={media} key={i} />;
                }
              })}
              {newImages.map((media, i) => {
                if (media.type.includes("video")) {
                  return <NewVideoItem video={media} key={i} />;
                } else {
                  return <NewImageItem image={media} key={i} />;
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
            <Typography
              size={TextSize.md}
              weight={TextWeight.semibold}
              ml="0.8"
            >
              Upload image/video
            </Typography>
          </UploadContainer>
          <ButtonGrid>
            <PrimaryButton danger={true} text="Discard" onClick={Back} />
            <PrimaryButton
              text="Edit project"
              loading={buttonLoading}
              onClick={PostEdit}
              disabled={disabled}
            />
          </ButtonGrid>
        </Body>
      ) : null}

      <Footer />
    </Main>
  );
};

export default EditProject;

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
