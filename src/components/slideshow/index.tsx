import React from "react";
import styled from "styled-components";

const Slideshow = () => {
  return <Container>Slideshow</Container>;
};

export default Slideshow;

const Container = styled.div`
  width: 100%;
  background-color: white;
  height: 44.7rem;
  border-radius: 16px;
  @media only screen and (max-width: 769px) {
    height: 27.2rem;
    border-radius: 0px;
  }
`;
