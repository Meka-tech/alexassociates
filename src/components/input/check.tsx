import React, { useState } from "react";
import { IoIosCheckmark } from "react-icons/io";
import styled from "styled-components";

const Check = ({
  state = false,
  setCheck,
  disabled = false
}: {
  state?: boolean;
  setCheck?: (state: boolean) => void;
  disabled?: boolean;
}) => {
  const [active, setActive] = useState(state);

  const OnCheck = () => {
    const state = active;
    if (!disabled) {
      setActive(!state);
      if (setCheck) {
        setCheck(!state);
      }
    }
  };
  return (
    <Container isactive={active ? "true" : "false"} onClick={OnCheck}>
      {active && <IoIosCheckmark size={30} />}
    </Container>
  );
};

export default Check;

const Container = styled.div<{ isactive: string }>`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  border-radius: 6px;
  border: 1px solid
    ${(props) => (props.isactive === "true" ? "#0083E2" : "white")};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0083e2;
  background-color: transparent;
  transition: ease-in-out 0.1s all;
`;
