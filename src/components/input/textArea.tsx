import React, { InputHTMLAttributes, useRef } from "react";
import styled from "styled-components";
import Typography from "../typography";
import { TextSize, TextWeight } from "../typography/enums";

interface IProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  height?: string;
  limit?: number;
}
const StyledTextArea = ({ label, height = "12.4", limit, ...rest }: IProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <Container>
      <Typography size={TextSize.sm} weight={TextWeight.medium} mb="0.6" lh="2">
        {label}
      </Typography>
      <InputContainer>
        <Input height={height} {...rest} maxLength={limit} />
      </InputContainer>
      {limit && (
        <MaxCharacterContainer>
          <Typography size={TextSize.sm} color="#475467">
            Max {limit} characters *
          </Typography>
          <Typography size={TextSize.sm} color="#475467">
            {inputRef.current?.value.length || 0}/{limit}
          </Typography>
        </MaxCharacterContainer>
      )}
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
  line-height: 2.4rem;
  &::placeholder {
    color: grey;
  }
`;
const MaxCharacterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
`;
