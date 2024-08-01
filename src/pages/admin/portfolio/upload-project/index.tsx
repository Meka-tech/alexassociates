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
import { companyservices } from "../../../../utils/company-services";
import api from "../../../../utils/axiosInstance";

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

  const PostImages = async () => {
    try {
      let ImageIds: string[] = [];
      for (let i = 0; i < images.length; i++) {
        const file = images[i];
        const formData = new FormData();
        formData.append("file", file);

        const { data } = await api.post("/media", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });

        ImageIds = [...ImageIds, data.media._id];
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

      navigate("/admin/manage-website?key=portfolio");
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

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
            {images.map((image, i) => {
              return <ImageItem image={image} key={i} />;
            })}
          </ImagesContainer>
        )}
        <UploadContainer>
          <FormInput
            type="file"
            accept="image/*"
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
            loading={loading}
            onClick={PostProject}
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
  grid-template-columns: 15.4rem 15.4rem;
  grid-column-gap: 3.2rem;

  @media only screen and (max-width: 769px) {
    grid-template-columns: 16.2rem 16.2rem;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-top: 4.8rem;
  }
`;
