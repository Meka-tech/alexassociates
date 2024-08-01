import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PrimaryButton from "../../../../../components/buttons/primary";
import StyledTextArea from "../../../../../components/input/textArea";
import Typography from "../../../../../components/typography";
import {
  TextSize,
  TextWeight
} from "../../../../../components/typography/enums";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { CiFileOn } from "react-icons/ci";
import { IoMdCheckmark } from "react-icons/io";
import api from "../../../../../utils/axiosInstance";
import LoadingAnimation from "../../../../../components/loading-animation";
import { HiOutlineTrash } from "react-icons/hi";
import { UploadImage } from "../../../../../utils/upload-image";

interface IProps {
  goBack: () => void;
  ImageFile: File | undefined;
  ImageId: string;
  AdditionalInfo: string;
  SelectImageId: (id: string) => void;
  complete: (additionalInfo: string, file: File | undefined) => void;
  loading: boolean;
}
const StepFour = ({
  goBack,
  ImageFile,
  AdditionalInfo,
  complete,
  ImageId,
  SelectImageId,
  loading
}: IProps) => {
  const [additionalInfo, setAdditionalInfo] = useState(AdditionalInfo);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [uploadStatus, setUploadStatus] = useState(1);
  const [uploading, setUploading] = useState(false);
  const [imageId, setImageId] = useState(ImageId);
  const [uploadError, setUploadError] = useState(false);

  const [file, setFile] = useState<File | undefined>(
    ImageFile ? ImageFile : undefined
  );

  const [dragEnter, setDragEnter] = useState(false);

  const inputRef = useRef(null);
  const handleDragOver = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      setFile(file);
      handleUpload(file);
    }
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    const file = e.dataTransfer.files;

    if (file) {
      setFile(file[0]);
      handleUpload(file[0]);
    }
  };

  const handleUpload = async (file: File) => {
    if (!file) {
      return;
    }
    setUploading(true);
    try {
      setUploadStatus(30);
      //uploadImage
      const MediaId = await UploadImage(file);

      setImageId(MediaId);
      SelectImageId(MediaId);
      setUploadStatus(100);
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadError(true);
    } finally {
      setUploading(false);
    }
  };

  return (
    <Container>
      <GridItems>
        <StyledTextArea
          label="Is there any other information you would like to provide?"
          placeholder="Leave us a message..."
          value={additionalInfo}
          onChange={(e) => {
            setAdditionalInfo(e.target.value);
          }}
        />
        <div>
          <Typography
            mb="0.6"
            lh="2"
            size={TextSize.sm}
            weight={TextWeight.medium}
            color="#CFCECE"
          >
            Please upload any relevant files (e.g floor plans, inspiration
            images)
          </Typography>
          {!file && (
            <UploadArea
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onDragEnter={() => setDragEnter(true)}
              onDragLeave={() => setDragEnter(false)}
            >
              <FormInput
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                ref={inputRef}
                multiple={false}
              />
              <CloudButton>
                <AiOutlineCloudUpload size={25} color="#CFCECE" />
              </CloudButton>
              <span style={{ display: "inline-flex" }}>
                <Typography
                  lh="2"
                  size={TextSize.sm}
                  weight={TextWeight.semibold}
                  m_mb="0.4"
                >
                  Click to upload
                </Typography>
                <Typography lh="2" size={TextSize.sm} m_display="none" ml="0.4">
                  or drag and drop
                </Typography>
              </span>
              <div style={{ width: "60%" }}>
                <Typography lh="1.8" size={TextSize.xs}>
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </Typography>
              </div>
            </UploadArea>
          )}
          {file && uploadStatus > 0 && (
            <FileItem>
              <CiFileOn color="white" size={20} />
              <div style={{ marginLeft: "0.8rem" }}>
                <Typography lh="2" size={TextSize.sm}>
                  {file?.name}
                </Typography>
                {uploadError ? (
                  <Typography lh="2" size={TextSize.sm} color="#B42318">
                    Upload failed, please try again
                  </Typography>
                ) : (
                  <Typography lh="2" size={TextSize.sm}>
                    {(file?.size / (1024 * 1024)).toFixed(2)}MB – {uploadStatus}
                    % uploaded
                  </Typography>
                )}
              </div>
              {uploading ? (
                <LoadingArea>
                  <LoadingAnimation />
                </LoadingArea>
              ) : uploadError ? (
                <LoadingArea
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setUploadError(false);
                    setFile(undefined);
                  }}
                >
                  <HiOutlineTrash size={15} color="#B42318" />
                </LoadingArea>
              ) : (
                <FileTick>
                  <IoMdCheckmark />
                </FileTick>
              )}
            </FileItem>
          )}
        </div>
      </GridItems>

      <ButtonGrid>
        <PrimaryButton variant={true} text="Back" onClick={goBack} />
        <PrimaryButton
          text="Proceed"
          onClick={() => {
            complete(additionalInfo, file);
          }}
          disabled={uploading}
          loading={loading}
        />
      </ButtonGrid>
    </Container>
  );
};

export default StepFour;

const Container = styled.div`
  border-top: 1px solid rgba(46, 59, 65, 1);
  padding: 6.4rem 8rem;
  color: white;
  @media only screen and (max-width: 769px) {
    padding: 4.8rem 1.6rem;
  }
`;

const GridItems = styled.div`
  display: grid;
  grid-template-columns: 100%;
  justify-content: space-between;
  margin-bottom: 2.4rem;
  grid-row-gap: 2.4rem;
  @media only screen and (max-width: 769px) {
    grid-template-columns: 100%;
  }
`;

const UploadArea = styled.form`
  cursor: pointer;
  position: relative;
  border: 1px solid #0083e2;
  width: 45rem;
  padding: 1.6rem 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 1.6rem;
  background-color: #0133503b;
  text-align: center;
  @media only screen and (max-width: 769px) {
    width: 100%;
    padding: 0.7rem 6.4rem;
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

const CloudButton = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.2rem;
  background-color: white;
`;

const FileItem = styled.div`
  position: relative;
  border: 1px solid #0083e2;
  width: 45rem;
  padding: 1.6rem;
  display: flex;
  border-radius: 1.6rem;
  background-color: #0133503b;
  @media only screen and (max-width: 769px) {
    width: 100%;
  }
`;

const LoadingArea = styled.div`
  margin-left: auto;
`;

const FileTick = styled.div`
  margin-left: auto;
  width: 1.6rem;
  height: 1.6rem;
  background-color: #0083e2;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;
const ButtonGrid = styled.div`
  margin-top: 0.8rem;
  display: grid;
  grid-template-columns: 10.5rem 10.5rem;
  grid-column-gap: 3.2rem;
  @media only screen and (max-width: 769px) {
    grid-template-columns: 45% 45%;
    justify-content: space-between;
  }
`;
