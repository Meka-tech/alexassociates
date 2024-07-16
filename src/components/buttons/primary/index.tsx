import React from "react";
import styled from "styled-components";
import Typography from "../../typography";
import { TextSize, TextWeight } from "../../typography/enums";

interface IProps extends React.HTMLProps<HTMLButtonElement> {
  text: string;
  variant?: boolean;
}
const PrimaryButton = ({ text, variant = false, ...rest }: IProps) => {
  return (
    <Container variant={variant ? "true" : "false"} {...rest}>
      <Typography size={TextSize.md} weight={TextWeight.semibold}>
        {text}
      </Typography>
    </Container>
  );
};

export default PrimaryButton;

interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
  variant: string;
}

const Container = styled.button<IButtonProps>`
  cursor: pointer;
  border-radius: 0.8rem;
  padding: 1.6rem;
  background-color: ${(props) =>
    props.variant === "true"
      ? "rgba(255, 255, 255, 1)"
      : "rgba(0, 131, 226, 1)"};
  color: ${(props) =>
    props.variant === "true" ? "rgba(52, 64, 84, 1)" : "white"};
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  border: 1px solid
    ${(props) =>
      props.variant === "true"
        ? "rgba(208, 213, 221, 1)"
        : "rgba(4, 150, 255, 1)"};
  width: 100%;

  transition: all ease-in-out 0.2s;

  &:disabled {
    cursor: auto;
    background-color: ${(props) =>
      props.variant === "true" ? "#ffffff7b" : "#0084e26e"};
    color: ${(props) => (props.variant === "true" ? "#34405475" : "gray")};
    border: 1px solid
      ${(props) => (props.variant === "true" ? "#ffffff7b" : "#0084e26e")};
  }
`;
