import React, { useState } from "react";
import styled from "styled-components";
import Typography from "../typography";
import { TextSize, TextWeight } from "../typography/enums";
import { IoIosArrowDown } from "react-icons/io";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <Body
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Typography size={TextSize.md} weight={TextWeight.semibold}>
          Most recent
        </Typography>
        <Caret isopen={isOpen ? "true" : "false"}>
          <IoIosArrowDown size={20} />
        </Caret>
      </Body>
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
