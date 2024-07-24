import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { CiSearch } from "react-icons/ci";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  variant?: boolean;
}
const SearchInput = ({ placeholder, variant, ...rest }: IProps) => {
  return (
    <Container variant={variant ? "true" : "false"}>
      <CiSearch size={25} />
      <Input
        variant={variant ? "true" : "false"}
        {...rest}
        placeholder="Search"
      />
    </Container>
  );
};

export default SearchInput;

const Container = styled.div<{ variant: string }>`
  width: 100%;
  background-color: ${(props) =>
    props.variant === "true" ? "transparent" : "white"};
  padding: 1.2rem 1.4rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.variant === "true" ? "#BAB8B8" : "rgba(78, 73, 73, 1)"};
  border: ${(props) =>
    props.variant === "true" ? "1px solid white" : "unset"};
`;

const Input = styled.input<{ variant: string }>`
  font-family: "Inter", sans-serif;
  outline: none;
  border: none;
  margin-left: 0.8rem;
  width: 100%;
  font-size: 1.6rem;
  line-height: 2.4rem;
  height: 2.4rem;
  background-color: transparent;
  color: ${(props) => (props.variant === "true" ? "white" : "black")};
  &::placeholder {
    color: ${(props) =>
      props.variant === "true" ? "#BAB8B8" : "rgba(78, 73, 73, 1)"};
  }
`;
