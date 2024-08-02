import React from "react";
import styled from "styled-components";
import PrimaryButton from "../../../../../components/buttons/primary";

const MobileConfirmButtons = () => {
  const DiscardChanges = () => {};

  const SaveChanges = () => {
    //if active === home , updateHome();
    //pass home data desstructured from backend into home components ,  if backend home data not equal to the new set home data , able button and upload data to backend
  };
  return (
    <Container>
      {" "}
      <PrimaryButton text="Discard" danger={true} onClick={DiscardChanges} />
      <PrimaryButton text="Save changes" onClick={SaveChanges} />
    </Container>
  );
};

export default MobileConfirmButtons;

const Container = styled.div`
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
