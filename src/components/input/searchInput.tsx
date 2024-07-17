import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { CiSearch } from "react-icons/ci";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}
const SearchInput = ({ placeholder, ...rest }: IProps) => {
  return (
    <Container>
      <CiSearch color="rgba(78, 73, 73, 1)" size={25} />
      <Input {...rest} placeholder="Search" />
    </Container>
  );
};

export default SearchInput;

const Container = styled.div`
  width: 100%;
  background-color: white;
  padding: 1.2rem 1.4rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  font-family: "Inter", sans-serif;
  outline: none;
  border: none;
  margin-left: 0.8rem;
  width: 100%;
  font-size: 1.6rem;
  line-height: 2.4rem;
  height: 2.4rem;
  &::placeholder {
    color: rgba(102, 112, 133, 1);
  }
`;
