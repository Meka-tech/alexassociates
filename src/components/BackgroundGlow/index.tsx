import React from "react";
import styled from "styled-components";

interface IProps {
  width: string;
  height: string;
  borderRadius?: string;
}
const BackgroundGlow = ({
  width = "20",
  height = "10",
  borderRadius = "50%"
}: IProps) => {
  return (
    <Container
      width={width}
      height={height}
      borderRadius={borderRadius}
    ></Container>
  );
};

export default BackgroundGlow;

const Container = styled.div<IProps>`
  border-radius: ${(props) => props.borderRadius};
  opacity: 0.7;
  border: 1px solid #0084e273;
  background-color: #0083e2b2;
  width: ${(props) => `${props.width}rem`};
  height: ${(props) => `${props.height}rem`};
  -webkit-box-shadow: 0px 0px 105px 49px rgba(0, 132, 226, 0.9);
  -moz-box-shadow: 0px 0px 105px 49px rgba(0, 132, 226, 0.9);
  box-shadow: 0px 0px 105px 49px rgba(0, 132, 226, 0.9);
`;
