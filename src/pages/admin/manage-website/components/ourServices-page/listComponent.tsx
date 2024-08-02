import React, { useState } from "react";
import styled from "styled-components";
import Typography from "../../../../../components/typography";
import {
  TextSize,
  TextWeight
} from "../../../../../components/typography/enums";
import { RxCross2 } from "react-icons/rx";
import StyledInput from "../../../../../components/input/primaryInput";
import PrimaryButton from "../../../../../components/buttons/primary";

interface IProps {
  label: string;
  addItem: (item: string) => void;
  deleteItem: (index: number) => void;
  list: string[];
}
const ListComponent = ({ label, list, addItem, deleteItem }: IProps) => {
  const [value, setValue] = useState("");
  return (
    <Container>
      <Typography size={TextSize.sm} weight={TextWeight.medium} lh="2" mb="0.6">
        {label}
      </Typography>
      <ItemsContainer>
        {list.map((item, i) => {
          return (
            <ListItem>
              <Typography size={TextSize.sm}>{item}</Typography>
              <DeleteContainer onClick={() => deleteItem(i)}>
                <RxCross2 size={20} />
              </DeleteContainer>
            </ListItem>
          );
        })}
      </ItemsContainer>
      <StyledInput
        placeholder="Enter list item"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <ButtonContainer>
        <PrimaryButton
          disabled={value === ""}
          text="Add to list"
          onClick={() => {
            addItem(value);
            setValue("");
          }}
        />
      </ButtonContainer>
    </Container>
  );
};

export default ListComponent;

const Container = styled.div`
  width: 100%;
  color: #cfcece;

  *::-webkit-scrollbar {
    height: 10px;
    width: 10px;
  }
  *::-webkit-scrollbar-track {
    border-radius: 5px;
    background-color: #000a0f;
  }

  *::-webkit-scrollbar-track:hover {
    background-color: #000a0f;
  }

  *::-webkit-scrollbar-track:active {
    background-color: #000a0f;
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #ffffff;
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color: #ffffff;
  }

  *::-webkit-scrollbar-thumb:active {
    background-color: #ffffff;
  }
`;

const ItemsContainer = styled.div`
  width: 100%;
  padding: 1rem 1.4rem;
  border: 0.5px solid #655f5f;
  border-radius: 1.2rem;
  height: 31.4rem;
  overflow: auto;
  margin-bottom: 1.6rem;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 0;
  border-bottom: 1px solid #cfcece;
`;

const DeleteContainer = styled.div`
  cursor: pointer;
  padding-right: 1.3rem;
  color: #2ea7ff;
`;

const ButtonContainer = styled.div`
  margin-top: 1.6rem;
  width: 15.4rem;
  @media only screen and (max-width: 769px) {
    width: 100%;
  }
`;
