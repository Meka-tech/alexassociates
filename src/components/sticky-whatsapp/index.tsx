import React from "react";
import styled from "styled-components";
import WhatsappIcon from "../../images/png/whatsapp.png";

const StickyWhatsapp = () => {
  return (
    <Container
      onClick={() => {
        window.open("https://wa.link/w8lzhk");
      }}
    >
      <Img src={WhatsappIcon} alt="whatsapp-icon" />
    </Container>
  );
};

export default StickyWhatsapp;

const Container = styled.div`
  position: fixed;
  width: 7.8rem;
  height: 6.4rem;
  top: 50%;
  z-index: 100;
  right: 0;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  background: linear-gradient(180deg, #000f22 0%, #003c88 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media only screen and (max-width: 769px) {
    width: 4.8rem;
    height: 4rem;
  }
`;

const Img = styled.img`
  object-fit: contain;
  width: 4.8rem;
  height: 4.8rem;
  @media only screen and (max-width: 769px) {
    width: 2.8rem;
    height: 2.8rem;
  }
`;
