import React, { InputHTMLAttributes, useRef } from "react";
import styled from "styled-components";
import Typography from "../typography";
import { TextSize, TextWeight } from "../typography/enums";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  currency?: string;
  limit?: number;
}
const StyledInput = ({ label, currency, limit, ...rest }: IProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <Container>
      {label && (
        <Typography
          size={TextSize.sm}
          weight={TextWeight.medium}
          mb="0.6"
          lh="2"
        >
          {label}
        </Typography>
      )}

      <InputContainer>
        {currency && (
          <Typography lh="2.4" mr="0.4" color="#FAFAFA" size={TextSize.md}>
            {currency}
          </Typography>
        )}
        <Input
          {...rest}
          ref={inputRef}
          type={currency ? "number" : "text"}
          maxLength={limit}
        />
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

export default StyledInput;

const Container = styled.div`
  width: 100%;
  color: white;
  position: relative;
`;

const InputContainer = styled.div`
  border: 1px solid rgba(250, 250, 250, 1);
  width: 100%;
  padding: 1rem 1.4rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
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
