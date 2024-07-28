import React, { ReactElement } from "react";
import styled from "styled-components";
import Typography from "../../typography";
import { TextSize, TextWeight } from "../../typography/enums";

interface IProps extends React.HTMLProps<HTMLButtonElement> {
  text: string;
  variant?: boolean;
  icon?: ReactElement;
  danger?: boolean;
}
const PrimaryButton = ({
  text = "Button",
  variant = false,
  danger = false,
  icon,
  ...rest
}: IProps) => {
  return (
    <Container
      variant={variant ? "true" : "false"}
      danger={danger ? "true" : "false"}
      {...rest}
    >
      <Typography size={TextSize.md} weight={TextWeight.semibold} lh="2.4">
        {text}
      </Typography>
      {icon && <IconContainer>{icon}</IconContainer>}
    </Container>
  );
};

export default PrimaryButton;

interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
  variant: string;
  danger: string;
}

const Container = styled.button<IButtonProps>`
  cursor: pointer;
  border-radius: 0.8rem;
  padding: 1.6rem;
  background-color: ${(props) =>
    props.danger === "true"
      ? "#D92D20"
      : props.variant === "true"
      ? "rgba(255, 255, 255, 1)"
      : "rgba(0, 131, 226, 1)"};
  color: ${(props) =>
    props.variant === "true" ? "rgba(52, 64, 84, 1)" : "white"};
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  border: 1px solid
    ${(props) =>
      props.danger === "true"
        ? "#D92D20"
        : props.variant === "true"
        ? "rgba(208, 213, 221, 1)"
        : "rgba(4, 150, 255, 1)"};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

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

const IconContainer = styled.div`
  margin-left: 1.2rem;
`;
