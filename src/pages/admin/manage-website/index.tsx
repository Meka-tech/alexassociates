import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { useNavigate, useSearchParams } from "react-router-dom";
import Typography from "../../../components/typography";
import { TextSize, TextWeight } from "../../../components/typography/enums";
import PrimaryButton from "../../../components/buttons/primary";

const ManageWebsite = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const activeparam = searchParams.get("key");
  const [active, setActive] = useState(activeparam ? activeparam : "home");

  const DiscardChanges = () => {};

  const SaveChanges = () => {
    //if active === home , updateHome();
    //pass home data desstructured from backend into home components ,  if backend home data not equal to the new set home data , able button and upload data to backend
  };

  useEffect(() => {
    setActive(activeparam ? activeparam : "home");
  }, [activeparam]);

  return (
    <Container>
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
            setActive={() => navigate("/admin/manage-website?key=portfolio")}
          />
        </Buttons>
        <ConfirmButtons>
          <PrimaryButton
            text="Discard changes"
            variant={true}
            onClick={DiscardChanges}
          />
          <PrimaryButton text="Save changes" onClick={SaveChanges} />
        </ConfirmButtons>
      </TopNav>
      <Body>{active === "home" && null}</Body>
      <MobileConfirmButtons>
        <PrimaryButton
          text="Discard changes"
          variant={true}
          onClick={DiscardChanges}
        />
        <PrimaryButton text="Save changes" onClick={SaveChanges} />
      </MobileConfirmButtons>
      <Footer />
    </Container>
  );
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
export default ManageWebsite;

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  position: relative;
  padding-top: 8rem;
  overflow-x: hidden;
  @media only screen and (max-width: 769px) {
    padding-top: 8rem;
  }
`;

const TopNav = styled.div`
  width: 100%;
  border-bottom: 1px solid #2e3b41;
  padding: 1.2rem 11.2rem;
  margin-bottom: 0.8rem;
  display: flex;
  @media only screen and (max-width: 769px) {
    padding: 1.2rem 1.6rem;
    min-width: fit-content;
    overflow-x: scroll;
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

const ConfirmButtons = styled.div`
  margin-left: auto;
  display: grid;
  grid-template-columns: 20rem 20rem;
  grid-column-gap: 3.2rem;
  @media only screen and (max-width: 769px) {
    display: none;
  }
`;

const MobileConfirmButtons = styled.div`
  margin-left: auto;
  grid-template-columns: 45% 45%;
  justify-content: space-between;
  align-items: center;
  display: none;
  padding: 3.2rem 1.6rem;
  @media only screen and (max-width: 769px) {
    display: grid;
  }
`;

const Body = styled.div`
  width: 100%;
  border-top: 1px solid #2e3b41;
`;
