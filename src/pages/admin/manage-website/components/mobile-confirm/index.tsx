import React from "react";
import styled from "styled-components";
import PrimaryButton from "../../../../../components/buttons/primary";

interface IProps {
  save?: () => void;
  saving?: boolean;
  changed?: boolean;
  discard?: () => void;
}

const MobileConfirmButtons = ({
  save,
  saving = false,
  changed = false,
  discard
}: IProps) => {
  const DiscardChanges = () => {
    if (discard) {
      discard();
    }
  };

  const SaveChanges = () => {
    if (save) {
      save();
    }
  };
  return (
    <Container>
      <PrimaryButton
        text="Discard"
        danger={true}
        onClick={DiscardChanges}
        disabled={saving}
      />
      <PrimaryButton
        text="Save changes"
        onClick={SaveChanges}
        loading={saving}
        disabled={!changed}
      />
    </Container>
  );
};

export default MobileConfirmButtons;

const Container = styled.div`
  margin-left: auto;
  grid-template-columns: 45% 45%;
  justify-content: space-between;
  align-items: center;
  display: none;
  padding: 3.2rem 1.6rem;
  @media only screen and (max-width: 769px) {
    display: grid;
  }
`;
