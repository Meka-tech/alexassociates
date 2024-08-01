import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { useNavigate, useParams } from "react-router-dom";
import Typography from "../../../components/typography";
import { TextSize, TextWeight } from "../../../components/typography/enums";
import { ReactComponent as Ornament } from "../../../images/svg/ornaments/quoteOrnament.svg";
import BackgroundGrid from "../../../components/BackgroundGrid";
import PrimaryButton from "../../../components/buttons/primary";
import Check from "../../../components/input/check";
import { LuCalendar } from "react-icons/lu";
import { CiFileOn } from "react-icons/ci";
import { IoMdCheckmark } from "react-icons/io";
import api from "../../../utils/axiosInstance";

import { IQuote } from "../../../utils/types/quote";
import DateConvert from "../../../utils/dateConvert";
import { companyservices } from "../../../utils/company-services";
import LoadingData from "../../../components/loading-component";

const Quote = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState<IQuote>();

  const GetQuote = async () => {
    setLoading(true);
    try {
      const { data } = await api.get(`/quote/${id}`);
      setQuote(data.data.quote);
    } catch (err) {
      navigate("/admin/manage-websitekey=quote");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetQuote();
  }, []);
  const subject = "Reply to Quote : Alex associates";
  const body = ``;

  const mailtoLink = `mailto:${quote?.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <Main>
      <Navbar />
      <TopNav>
        <Buttons>
          <Button
            isactive={"false"}
            onClick={() => {
              navigate("/admin/user-requests?key=message");
            }}
          >
            <Typography
              size={TextSize.md}
              weight={TextWeight.semibold}
              lh="2.4"
            >
              Message
            </Typography>
          </Button>
          <Button isactive={"true"}>
            <Typography
              size={TextSize.md}
              weight={TextWeight.semibold}
              lh="2.4"
            >
              Quote
            </Typography>
          </Button>
        </Buttons>
      </TopNav>
      {loading ? (
        <LoadingData />
      ) : (
        <>
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
              Quote request
            </Typography>
            <TextFlex>
              <Typography
                weight={TextWeight.semibold}
                size={TextSize.xl}
                lh="3"
              >
                Name:{" "}
              </Typography>
              <Typography ml="1" size={TextSize.xl} lh="3">
                {quote?.firstname} {quote?.lastname}
              </Typography>
            </TextFlex>
            <TextFlex>
              <Typography
                weight={TextWeight.semibold}
                size={TextSize.xl}
                lh="3"
              >
                Email:
              </Typography>
              <Typography ml="1" size={TextSize.xl} lh="3">
                {quote?.email}
              </Typography>
            </TextFlex>
            <TextFlex>
              <Typography
                weight={TextWeight.semibold}
                size={TextSize.xl}
                lh="3"
              >
                Phone number:
              </Typography>
              <Typography ml="1" size={TextSize.xl} lh="3">
                {quote?.phone}
              </Typography>
            </TextFlex>
            <OrnamentContainer>
              <Ornament />
            </OrnamentContainer>
          </TopSection>
          <Body>
            <Section>
              <SectionOneGrid>
                <div>
                  <Typography
                    color="#CFCECE"
                    size={TextSize.sm}
                    weight={TextWeight.medium}
                    lh="2"
                    mb="0.6"
                  >
                    Location of project
                  </Typography>
                  <TextBox>
                    <Typography size={TextSize.md} lh="2.4">
                      {quote?.location}
                    </Typography>
                  </TextBox>
                </div>
                <div>
                  <Typography
                    color="#CFCECE"
                    size={TextSize.sm}
                    weight={TextWeight.medium}
                    lh="2"
                    mb="0.6"
                  >
                    Type of project
                  </Typography>
                  <TextBox>
                    <Typography size={TextSize.md} lh="2.4">
                      {quote?.projectType}
                    </Typography>
                  </TextBox>
                </div>
                <div>
                  <Typography
                    color="#CFCECE"
                    size={TextSize.sm}
                    weight={TextWeight.medium}
                    lh="2"
                    mb="0.6"
                  >
                    Which services do you need? (Select all that apply)
                  </Typography>
                  {companyservices.map((service, i) => {
                    const IsInArray = quote?.services.includes(service);
                    return (
                      <CheckItem key={i}>
                        <Check state={IsInArray} disabled={true} />
                        <Typography
                          ml="0.8"
                          size={TextSize.sm}
                          weight={TextWeight.medium}
                          lh="2"
                          color={IsInArray ? "#0083E2" : "white"}
                        >
                          {service}
                        </Typography>
                      </CheckItem>
                    );
                  })}
                </div>
                <div>
                  <Typography
                    color="#CFCECE"
                    size={TextSize.sm}
                    weight={TextWeight.medium}
                    lh="2"
                    mb="0.6"
                  >
                    Expected start date - Expected completion date
                  </Typography>
                  <DateBox>
                    <LuCalendar size={20} />
                    <Typography
                      ml="0.8"
                      size={TextSize.sm}
                      color="#E4E4E4"
                      lh="2"
                      weight={TextWeight.semibold}
                    >
                      {DateConvert(quote?.startDate || null)} -{" "}
                      {DateConvert(quote?.endDate || null)}
                    </Typography>
                  </DateBox>
                </div>
              </SectionOneGrid>
            </Section>
            <Section>
              <div>
                <Typography
                  color="#CFCECE"
                  size={TextSize.sm}
                  weight={TextWeight.medium}
                  lh="2"
                  mb="0.6"
                >
                  Please provide a brief description of your project
                </Typography>
                <TextBox>
                  <Typography size={TextSize.md} lh="2.4">
                    {quote?.description}
                  </Typography>
                </TextBox>
              </div>
              <div>
                <Typography
                  color="#CFCECE"
                  size={TextSize.sm}
                  weight={TextWeight.medium}
                  lh="2"
                  mb="0.6"
                >
                  Do you have any specific requirements or preferences?
                </Typography>
                <TextBox>
                  <Typography size={TextSize.md} lh="2.4">
                    {quote?.requirements}
                  </Typography>
                </TextBox>
              </div>
              <div>
                <Typography
                  color="#CFCECE"
                  size={TextSize.sm}
                  weight={TextWeight.medium}
                  lh="2"
                  mb="0.6"
                >
                  What is your estimated budget for this project?
                </Typography>
                <TextBox>
                  <Typography size={TextSize.md} lh="2.4">
                    ${quote?.budget}
                  </Typography>
                </TextBox>
              </div>
            </Section>
            <Section>
              <div>
                <Typography
                  color="#CFCECE"
                  size={TextSize.sm}
                  weight={TextWeight.medium}
                  lh="2"
                  mb="0.6"
                >
                  Is there any other information you would like to provide?
                </Typography>
                <TextBox>
                  <Typography size={TextSize.md} lh="2.4">
                    {quote?.addditionalInfo || "No"}
                  </Typography>
                </TextBox>
              </div>
              <div>
                <Typography
                  color="#CFCECE"
                  size={TextSize.sm}
                  weight={TextWeight.medium}
                  lh="2"
                  mb="0.6"
                >
                  Please upload any relevant files (e.g floor plans, inspiration
                  images)
                </Typography>
                {quote?.image && (
                  <FileGrid>
                    <FileItem
                      onClick={() => {
                        window.open(quote?.image.url, "_blank");
                      }}
                    >
                      <CiFileOn color="white" size={20} />
                      <div style={{ marginLeft: "0.8rem" }}>
                        <Typography lh="2" size={TextSize.sm}>
                          {quote.image.name.slice(0, 12)}
                        </Typography>
                        <Typography lh="2" size={TextSize.sm}>
                          100% uploaded
                        </Typography>
                      </div>
                      <FileTick>
                        <IoMdCheckmark />
                      </FileTick>
                    </FileItem>
                    <ViewButton>
                      <PrimaryButton text="View" variant={true} />
                    </ViewButton>
                  </FileGrid>
                )}
              </div>
            </Section>
            <ButtonGrid>
              <PrimaryButton
                variant={true}
                text="Back"
                onClick={() => navigate(-1)}
              />
              <a href={mailtoLink} style={{ all: "unset" }}>
                <PrimaryButton text="Send mail" />
              </a>
            </ButtonGrid>
          </Body>
        </>
      )}

      <Footer />
    </Main>
  );
};

export default Quote;

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

const Button = styled.div<{ isactive: string }>`
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
  padding: 6.4rem 8rem;
  margin-bottom: 0.8rem;
  color: white;
  overflow: hidden;
  @media only screen and (max-width: 769px) {
    padding: 1.9rem 1.6rem;
  }
`;
const TextFlex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.4rem;
  color: #cfcece;
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

const Body = styled.div`
  padding: 6.4rem 8rem;
  @media only screen and (max-width: 769px) {
    padding: 2.7rem 1.6rem;
    padding-bottom: 6.2rem;
  }
`;
const Section = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 3.2rem;
  padding-bottom: 2.4rem;
  margin: 6.4rem 0;
  @media only screen and (max-width: 769px) {
    grid-row-gap: 2.4rem;
    margin: 1.4rem 0;
  }
`;

const SectionOneGrid = styled.div`
  display: grid;
  grid-template-columns: 48% 48%;
  justify-content: space-between;
  margin-bottom: 2.4rem;
  grid-row-gap: 2.4rem;
  @media only screen and (max-width: 769px) {
    grid-template-columns: 100%;
    margin-bottom: 0;
  }
`;

const TextBox = styled.div`
  width: 100%;
  border: 1px solid #fafafa;
  color: #e4e4e4;
  border-radius: 0.8rem;
  padding: 1.2rem 1.4rem;

  @media only screen and (max-width: 769px) {
    margin-bottom: 2.8rem;
    max-height: 13.4rem;
    overflow-y: scroll;
  }
`;
const CheckItem = styled.div`
  padding: 0.8rem 1.6rem;
  display: flex;
  margin-bottom: 1.2rem;
`;

const DateBox = styled.div`
  border: 1px solid #fafafa;
  color: #e4e4e4;
  border-radius: 0.8rem;
  padding: 1.2rem 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32.1rem;
  @media only screen and (max-width: 769px) {
    width: 100%;
  }
`;

const FileGrid = styled.div`
  display: grid;
  grid-template-columns: auto 10.5rem;
  grid-column-gap: 1.6rem;
  width: fit-content;
  @media only screen and (max-width: 769px) {
    grid-template-columns: 100%;
    grid-row-gap: 2.4rem;
    width: 100%;
  }
`;
const ViewButton = styled.div`
  width: 100%;
  height: 4.8rem;
  display: none;
`;
const FileItem = styled.div`
  position: relative;
  border: 1px solid #0083e2;
  width: 45rem;
  padding: 1.6rem;
  display: flex;
  border-radius: 1.6rem;
  background-color: #0133503b;
  color: white;
  cursor: pointer;
  @media only screen and (max-width: 769px) {
    width: 100%;
  }
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
  display: grid;
  grid-template-columns: 12rem 12rem;
  grid-column-gap: 3.2rem;
  @media only screen and (max-width: 769px) {
    grid-template-columns: 100%;
    grid-row-gap: 1.6rem;
    button:first-child {
      order: 1;
    }
  }
`;
