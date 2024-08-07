import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Typography from "../../../components/typography";
import { TextSize, TextWeight } from "../../../components/typography/enums";
import Messages from "./message-components/messages";
import { useNavigate, useSearchParams } from "react-router-dom";
import Quotes from "./quote-components/quotes";
import Reviews from "./review-components/reviews";

const Archived = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const activeparam = searchParams.get("key");
  const [active, setActive] = useState(activeparam ? activeparam : "message");

  useEffect(() => {
    setActive(activeparam ? activeparam : "message");
  }, [activeparam]);
  return (
    <Main>
      <Navbar />
      <TopNav>
        <Buttons>
          <Button
            isactive={active === "message" ? "true" : "false"}
            onClick={() => {
              navigate("/admin/archived?key=message");
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
          <Button
            isactive={active === "quote" ? "true" : "false"}
            onClick={() => {
              navigate("/admin/archived?key=quote");
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
          <Button
            isactive={active === "review" ? "true" : "false"}
            onClick={() => {
              navigate("/admin/archived?key=review");
            }}
          >
            <Typography
              size={TextSize.md}
              weight={TextWeight.semibold}
              lh="2.4"
            >
              Reviews
            </Typography>
          </Button>
        </Buttons>
      </TopNav>
      {active === "message" ? (
        <Messages />
      ) : active === "quote" ? (
        <Quotes />
      ) : active === "review" ? (
        <Reviews />
      ) : null}
      <Footer />
    </Main>
  );
};

export default Archived;

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
