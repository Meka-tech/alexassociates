import React, { ReactElement, useEffect, useRef } from "react";
import styled from "styled-components";
import { useClickOutside } from "../../hooks/UseClickOutside";

interface IProps {
  isActive: boolean;
  closeModal: () => void;
  children?: ReactElement;
}
const Modal = ({ isActive, closeModal, children }: IProps) => {
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isActive]);

  const ref = useRef(null);

  useClickOutside(ref, () => closeModal());
  return (
    <Container isopen={isActive ? "true" : "false"}>
      <Body ref={ref}>{children}</Body>
    </Container>
  );
};

export default Modal;

const Container = styled.div<{ isopen: string }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: ${(props) => (props.isopen === "true" ? 1 : 0)};
  z-index: ${(props) => (props.isopen === "true" ? 999 : -10)};
  transition: all ease-in-out 0.2s;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Body = styled.div``;
