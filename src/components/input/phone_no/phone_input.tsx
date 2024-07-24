import React, { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Typography from "../../typography";
import { TextSize, TextWeight } from "../../typography/enums";
import PhoneCodes from "./phone_codes.json";
import { IoIosArrowDown } from "react-icons/io";
import { useClickOutside } from "../../../hooks/UseClickOutside";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  defaultValue?: string;
  defaultIndex?: number;
  setPhoneValue: (value: string) => void;
  setIndex?: (value: number) => void;
}
const PhoneInput = ({
  label,
  defaultValue = "",
  defaultIndex = 0,
  setPhoneValue,
  setIndex,
  ...rest
}: IProps) => {
  const [countryIndex, setCountryIndex] = useState(
    defaultIndex > 0 ? defaultIndex : 97
  );
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const ref = useRef(null);

  useClickOutside(ref, () => {
    setIsOpen(false);
  });

  useEffect(() => {
    setValue(`${PhoneCodes[countryIndex].dial_code}`);
  }, [countryIndex]);

  return (
    <Container>
      <Typography size={TextSize.sm} weight={TextWeight.medium} mb="0.6" lh="2">
        {label}
      </Typography>
      <InputContainer>
        <CountryDropdown
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <Typography size={TextSize.md} lh="2.4" mr="0.2">
            {PhoneCodes[countryIndex].code}
          </Typography>
          <Caret isopen={isOpen ? "true" : "false"}>
            <IoIosArrowDown size={20} />
          </Caret>
        </CountryDropdown>
        <Input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setPhoneValue(e.target.value);
          }}
          {...rest}
          placeholder={`${PhoneCodes[countryIndex].dial_code} `}
        />
      </InputContainer>
      <Dropdown isopen={isOpen ? "true" : "false"} ref={ref}>
        {PhoneCodes.map(({ name }, i) => {
          return (
            <DropdownItem
              onClick={() => {
                setCountryIndex(i);
                setIsOpen(false);
                if (setIndex) {
                  setIndex(i);
                }
              }}
              key={i}
            >
              <Typography size={TextSize.md} weight={TextWeight.semibold}>
                {name}
              </Typography>
            </DropdownItem>
          );
        })}
      </Dropdown>
    </Container>
  );
};

export default PhoneInput;

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
  position: relative;
`;

const CountryDropdown = styled.div`
  cursor: pointer;
  display: flex;
  position: relative;
  align-items: center;
  margin-right: 1.2rem;
  width: 6rem;
`;
const Caret = styled.div<{ isopen: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ease-in-out all 0.2s;
  transform: ${(props) =>
    props.isopen === "true" ? "rotate(180deg)" : "rotate(0deg)"};
`;

const Input = styled.input`
  width: 90%;
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

const Dropdown = styled.div<{ isopen: string }>`
  position: absolute;
  width: 25rem;
  top: 110%;
  max-height: 20rem;
  overflow-y: scroll;
  background-color: white;
  border-radius: 0.8rem;
  opacity: ${(props) => (props.isopen === "true" ? 1 : 0)};
  z-index: ${(props) => (props.isopen === "true" ? 4 : -10)};
  padding: 0.8rem 0.5rem;
  box-shadow: -1px 37px 31px -3px rgba(0, 0, 0, 0.14);
  -webkit-box-shadow: -1px 37px 31px -3px rgba(0, 0, 0, 0.14);
  -moz-box-shadow: -1px 37px 31px -3px rgba(0, 0, 0, 0.14);
  transition: all ease-in-out 0.2s;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const DropdownItem = styled.div`
  cursor: pointer;
  padding: 0.8rem;
  color: rgba(0, 10, 15, 1);
  border-radius: 0.8rem;
  &:hover {
    background-color: #ecebeb;
  }
`;
