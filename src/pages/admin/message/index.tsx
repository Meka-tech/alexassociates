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
import api from "../../../utils/axiosInstance";
import { IMessage } from "../../../utils/types/message";
import LoadingData from "../../../components/loading-component";

const Message = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState<IMessage | null>();
  const [loading, setLoading] = useState(false);

  const GetMessage = async () => {
    setLoading(true);
    try {
      const { data } = await api.get(`/message/${id}`);
      setMessage(data.data.message);
    } catch (err) {
      navigate("/admin/manage-website");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetMessage();
  }, []);
  const subject = "Reply to Message : Alex associates";
  const body = `re:${message?.message}`;

  const mailtoLink = `mailto:${message?.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  return (
    <Main>
      <Navbar />
      <TopNav>
        <Buttons>
          <Button isactive={"true"}>
            <Typography
              size={TextSize.md}
              weight={TextWeight.semibold}
              lh="2.4"
            >
              Message
            </Typography>
          </Button>
          <Button
            isactive={"false"}
            onClick={() => {
              navigate("/admin/user-requests?key=quote");
            }}
          >
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
              Message
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
                {message?.firstname} {message?.lastname}
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
                {message?.email}
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
                {message?.phone}
              </Typography>
            </TextFlex>
            <OrnamentContainer>
              <Ornament />
            </OrnamentContainer>
          </TopSection>
          <Body>
            <Typography
              color="#CFCECE"
              size={TextSize.sm}
              weight={TextWeight.medium}
              lh="2"
              mb="0.6"
            >
              Message
            </Typography>
            <TextBox>
              <Typography size={TextSize.md} lh="2.4">
                {message?.message}
              </Typography>
            </TextBox>
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

export default Message;

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

const TextBox = styled.div`
  width: 100%;
  margin-bottom: 12.8rem;
  border: 1px solid #fafafa;
  color: #e4e4e4;
  border-radius: 0.8rem;
  padding: 1.2rem 1.4rem;
  @media only screen and (max-width: 769px) {
    margin-bottom: 2.8rem;
  }
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: 12rem 12rem;
  grid-column-gap: 3.2rem;
  @media only screen and (max-width: 769px) {
    grid-template-columns: 100%;
    grid-row-gap: 1.6rem;
  }
`;
