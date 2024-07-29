import React from "react";
import styled, { keyframes } from "styled-components";

interface IProps {
  size?: number;
  color?: string;
}
const LoadingAnimation = ({ size = 1, color = "white" }: IProps) => {
  return <Loader size={size} color={color} />;
};

export default LoadingAnimation;

const rotateAnimation = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

const Loader = styled.div<{ size: number; color?: string }>`
  width: ${(props) => `${2 * props.size}rem`};
  aspect-ratio: 1;
  display: grid;
  -webkit-mask: conic-gradient(from 15deg, #0000, #000);
  animation: ${rotateAnimation} 1s infinite steps(12);

  &,
  &::before,
  &::after {
    background: ${(
      props
    ) => `radial-gradient(closest-side at 50% 12.5%, ${props.color} 96%, #0000) 50%
        0/20% 80% repeat-y,
      radial-gradient(closest-side at 12.5% 50%, ${props.color} 96%, #0000) 0 50%/80% 20%
        repeat-x;`};
  }

  &::before,
  &::after {
    content: "";
    grid-area: 1/1;
    transform: rotate(30deg);
  }

  &::after {
    transform: rotate(60deg);
  }
`;
