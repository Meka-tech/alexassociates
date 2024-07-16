import React from "react";
import styled from "styled-components";
import One from "./one";
import Two from "./two";
import Four from "./four";
import Three from "./three";

const Services = () => {
  return (
    <Container>
      <One />
      <Two />
      <Three />
      <Four />
    </Container>
  );
};

export default Services;

const Container = styled.div``;
