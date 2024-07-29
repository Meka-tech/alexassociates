import React, { ReactElement } from "react";
import styled from "styled-components";
import Typography from "../../typography";
import { TextSize, TextWeight } from "../../typography/enums";
import PrimaryButton from "../../buttons/primary";
import { RxCross2 } from "react-icons/rx";

interface IProps {
  header?: string;
  subheader?: string;
  onClose?: () => void;
  onConfirm?: () => void;
  type?: string;
  cancelOption?: boolean;
  icon?: ReactElement;
  confirmText?: string;
  loading?: boolean;
}
const ModalChildTemplate = ({
  header = "Header",
  subheader,
  onClose,
  onConfirm,
  confirmText = "Confirm",
  type = "blue", //"red" , "blue",
  icon,
  cancelOption = true,
  loading
}: IProps) => {
  return (
    <Container>
      <CancelContainer onClick={onClose}>
        <RxCross2 size={20} color="#667085" />
      </CancelContainer>

      <IconContainer>{icon && icon}</IconContainer>
      <Typography
        color="#101828"
        size={TextSize.lg}
        weight={TextWeight.semibold}
        mb="0.4"
        lh="2.8"
      >
        {header}
      </Typography>
      {subheader && (
        <Typography color="#475467" size={TextSize.sm}>
          {subheader}
        </Typography>
      )}
      <Buttons hastwo={cancelOption ? "true" : "false"}>
        {cancelOption && (
          <PrimaryButton text="Cancel" variant={true} onClick={onClose} />
        )}

        <PrimaryButton
          text={confirmText}
          danger={type === "red"}
          onClick={onConfirm}
          loading={loading}
        />
      </Buttons>
    </Container>
  );
};

export default ModalChildTemplate;

const Container = styled.div`
  background-color: #ffffff;
  min-width: 40rem;
  min-height: 26rem;
  border-radius: 1.2rem;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const IconContainer = styled.div`
  margin-bottom: 2.8rem;
  margin-top: 1.2rem;
`;
const Buttons = styled.div<{ hastwo: string }>`
  margin-top: 3.2rem;
  display: grid;
  grid-template-columns: ${(props) =>
    props.hastwo === "true" ? "auto auto" : "auto"};
  grid-column-gap: 0.8rem;
  @media only screen and (max-width: 769px) {
    grid-template-columns: auto;
    grid-row-gap: 1.6rem;
    button:first-child {
      order: 2;
    }
  }
`;

const CancelContainer = styled.div`
  position: absolute;
  top: 2.6rem;
  right: 2.6rem;
  cursor: pointer;
`;
