import React, { useState } from "react";
import { IoIosCheckmark } from "react-icons/io";
import styled from "styled-components";

const Check = ({
  state = false,
  setCheck
}: {
  state?: boolean;
  setCheck: (state: boolean) => void;
}) => {
  const [active, setActive] = useState(state);

  const OnCheck = () => {
    const state = active;
    setActive(!state);
    setCheck(!state);
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
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 22, 33, 1);
  background-color: ${(props) =>
    props.isactive === "true" ? "white" : "transparent"};
  transition: ease-in-out 0.1s all;
`;
