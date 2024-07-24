import React, { useRef, useState } from "react";
import styled from "styled-components";
import Typography from "../typography";
import { TextSize, TextWeight } from "../typography/enums";
import { IoIosArrowDown, IoMdCheckmark } from "react-icons/io";
import { useClickOutside } from "../../hooks/UseClickOutside";

interface IProps {
  placeholder?: string;
  items?: string[];
  selectItem: (value: string) => void;
}
const Dropdown = ({
  placeholder = "Select",
  items = [],
  selectItem
}: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const [value, setValue] = useState("");

  useClickOutside(ref, () => setIsOpen(false));
  return (
    <Container ref={ref}>
      <Body
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Typography size={TextSize.md} lh="2.4">
          {value ? value : placeholder}
        </Typography>
        <Caret isopen={isOpen ? "true" : "false"}>
          <IoIosArrowDown size={20} />
        </Caret>
      </Body>
      <DropdownBody isopen={isOpen ? "true" : "false"} ref={ref}>
        {items.map((item, i) => {
          return (
            <DropdownItem
              onClick={() => {
                setIsOpen(false);
                setValue(item);
                if (selectItem) {
                  selectItem(item);
                }
              }}
              key={i}
            >
              <Typography
                size={TextSize.md}
                weight={TextWeight.medium}
                lh="2.4"
              >
                {item}
              </Typography>
              {value === item && <IoMdCheckmark size={20} color="#0083E2" />}
            </DropdownItem>
          );
        })}
      </DropdownBody>
    </Container>
  );
};

export default Dropdown;

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const Body = styled.div`
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid rgba(208, 213, 221, 1);
  padding: 1rem 1.4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

const Caret = styled.div<{ isopen: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ease-in-out all 0.2s;
  transform: ${(props) =>
    props.isopen === "true" ? "rotate(180deg)" : "rotate(0deg)"};
`;

const DropdownBody = styled.div<{ isopen: string }>`
  position: absolute;
  width: 100%;
  top: 115%;
  max-height: 20rem;
  overflow-y: scroll;
  background-color: white;
  border-radius: 0.8rem;
  opacity: ${(props) => (props.isopen === "true" ? 1 : 0)};
  z-index: ${(props) => (props.isopen === "true" ? 4 : -10)};
  padding: 0.6rem;
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
  padding: 1rem 0.8rem;
  color: rgba(0, 10, 15, 1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
