import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import Typography from "../typography";
import { TextSize, TextWeight } from "../typography/enums";

interface IProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  height?: string;
}
const StyledTextArea = ({ label, height = "12.4", ...rest }: IProps) => {
  return (
    <Container>
      <Typography size={TextSize.sm} weight={TextWeight.medium} mb="0.6" lh="2">
        {label}
      </Typography>
      <InputContainer>
        <Input height={height} {...rest} />
      </InputContainer>
    </Container>
  );
};

export default StyledTextArea;

const Container = styled.div`
  width: 100%;
  color: white;
`;

const InputContainer = styled.div`
  border: 1px solid rgba(250, 250, 250, 1);
  width: 100%;
  padding: 1rem 1.4rem;
  border-radius: 8px;
  height: fit-content;

  /* Firefox (uncomment to work in Firefox, although other properties will not work!)  */
  /** {
  scrollbar-width: thin;
  scrollbar-color: #FFFFFF #000A0F;
}*/

  /* Chrome, Edge and Safari */
  *::-webkit-scrollbar {
    height: 10px;
    width: 10px;
  }
  *::-webkit-scrollbar-track {
    border-radius: 5px;
    background-color: #000a0f;
  }

  *::-webkit-scrollbar-track:hover {
    background-color: #000a0f;
  }

  *::-webkit-scrollbar-track:active {
    background-color: #000a0f;
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #ffffff;
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color: #ffffff;
  }

  *::-webkit-scrollbar-thumb:active {
    background-color: #ffffff;
  }
`;
const Input = styled.textarea<{ height: string }>`
  height: ${(props) => props.height}rem;
  width: 100%;
  outline: none;
  background: none;
  border: none;
  color: white;
  font-family: "Inter", sans-serif;
  resize: none;
  font-size: 1.6rem;
  font-weight: 400;
  &::placeholder {
    color: grey;
  }
`;
