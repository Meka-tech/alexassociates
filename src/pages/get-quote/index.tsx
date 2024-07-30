import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ProgressBar from "./components/progressBar";
import StepOne from "./components/steps/step-one";
import BackgroundGrid from "../../components/BackgroundGrid";
import Typography from "../../components/typography";
import { TextSize, TextWeight } from "../../components/typography/enums";
import { ReactComponent as Ornament } from "../../images/svg/ornaments/quoteOrnament.svg";
import StepTwo from "./components/steps/step-two";
import StepThree from "./components/steps/step-three";
import StepFour from "./components/steps/step-four";
import Modal from "../../components/modal";
import SuccessModal from "./components/success-modal";
import api from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

const GetQuote = () => {
  const [step, setStep] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneCountryIndex, setCountryIndex] = useState(-1);

  const [location, setLocation] = useState("");
  const [projectType, setProjectType] = useState("");
  const [chosenServices, setChosenServices] = useState<string[]>([]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [budget, setBudget] = useState("");

  const [additionalInfo, setAdditionalInfo] = useState("No");
  const [file, setFile] = useState<File | undefined>();
  const [imageId, setImageId] = useState("");

  const [loading, setLoading] = useState(false);

  const GoBack = () => {
    setStep(step - 1);
  };

  const ChangeStep = (step: number) => {
    setStep(step);
  };

  const PostQuote = async () => {
    const body = {
      firstname: firstName,
      lastname: lastName,
      email,
      phone: phoneNumber,
      location,
      projectType,
      services: chosenServices,
      startDate: startDate,
      endDate: endDate,
      description,
      requirements,
      budget,
      additionalInfo,
      image: imageId
    };
    try {
      setLoading(true);
      await api.post("/quote", body);
      setModalOpen(true);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };
  const CompleteStepOne = (
    firstname: string,
    lastname: string,
    email: string,
    phoneNumber: string,
    countryindex: number
  ) => {
    setFirstName(firstname);
    setLastName(lastname);
    setEmail(email);
    setPhoneNumber(phoneNumber);
    setCountryIndex(countryindex);
    ChangeStep(step + 1);
  };

  const CompleteStepTwo = (
    location: string,
    projectType: string,
    chosenServices: string[],
    startDate: Date | null,
    endDate: Date | null
  ) => {
    setLocation(location);
    setProjectType(projectType);
    setChosenServices(chosenServices);
    setStartDate(startDate);
    setEndDate(endDate);
    ChangeStep(step + 1);
  };

  const CompleteStepThree = (
    description: string,
    requirements: string,
    budget: string
  ) => {
    setDescription(description);
    setRequirements(requirements);
    setBudget(budget);
    ChangeStep(step + 1);
  };

  const CompleteStepFour = (additionalInfo: string, file: File | undefined) => {
    setAdditionalInfo(additionalInfo);
    setFile(file);
    PostQuote();
  };

  return (
    <Container>
      <Modal
        closeModal={() => {
          setModalOpen(false);
          navigate("/");
        }}
        isActive={modalOpen}
      >
        <SuccessModal />
      </Modal>
      <Navbar />
      <ProgressBar currentStep={step} />
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
          Get a quote
        </Typography>
        <Typography
          color="#CFCECE"
          size={TextSize.xl}
          lh="3"
          m_lh="2.8"
          m_size={TextSize.lg}
        >
          Fill out our quick form to receive a personalized quote tailored to
          your needs. Lets bring your vision to life!
        </Typography>
        <OrnamentContainer>
          <Ornament />
        </OrnamentContainer>
      </TopSection>
      {step === 1 && (
        <StepOne
          CountryIndex={phoneCountryIndex}
          FirstName={firstName}
          LastName={lastName}
          Email={email}
          PhoneNumber={phoneNumber}
          complete={(firstname, lastname, email, phonenumber, countryindex) =>
            CompleteStepOne(
              firstname,
              lastname,
              email,
              phonenumber,
              countryindex
            )
          }
        />
      )}
      {step === 2 && (
        <StepTwo
          ChosenServices={chosenServices}
          ProjectType={projectType}
          goBack={GoBack}
          Location={location}
          StartDate={startDate}
          EndDate={endDate}
          complete={(
            location,
            projectType,
            chosenServices,
            startDate,
            endDate
          ) => {
            CompleteStepTwo(
              location,
              projectType,
              chosenServices,
              startDate,
              endDate
            );
          }}
        />
      )}
      {step === 3 && (
        <StepThree
          Description={description}
          Requirements={requirements}
          Budget={budget}
          goBack={GoBack}
          complete={(description, requirements, budget) => {
            CompleteStepThree(description, requirements, budget);
          }}
        />
      )}
      {step === 4 && (
        <StepFour
          loading={loading}
          SelectImageId={(id) => setImageId(id)}
          ImageId={imageId}
          AdditionalInfo={additionalInfo}
          ImageFile={file}
          goBack={GoBack}
          complete={(additionalInfo, file) => {
            CompleteStepFour(additionalInfo, file);
          }}
        />
      )}
      <Footer />
    </Container>
  );
};

export default GetQuote;

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
