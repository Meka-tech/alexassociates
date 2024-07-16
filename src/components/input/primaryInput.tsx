import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import Typography from "../typography";
import { TextSize, TextWeight } from "../typography/enums";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
const StyledInput = ({ label, ...rest }: IProps) => {
  return (
    <Container>
      <Typography size={TextSize.sm} weight={TextWeight.medium} mb="0.6" lh="2">
        {label}
      </Typography>
      <InputContainer>
        <Input {...rest} />
      </InputContainer>
    </Container>
  );
};

export default StyledInput;

const Container = styled.div`
  width: 100%;
  color: white;
`;

const InputContainer = styled.div`
  border: 1px solid rgba(250, 250, 250, 1);
  width: 100%;
  padding: 1rem 1.4rem;
  border-radius: 8px;
`;
const Input = styled.input`
  width: 100%;
  outline: none;
  background: none;
  border: none;
  color: white;
  font-family: "Inter", sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  &::placeholder {
    color: grey;
  }
`;
